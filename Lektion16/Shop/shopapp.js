import express from 'express';
import pug from 'pug';
import path from 'path';
import { fileURLToPath } from 'url';
import { join } from 'path';
import session from 'express-session';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

const users = [
    { username: 'admin', password: 'admin', cart: [] }
];

app.use(session({
    secret: 'your-secret-key-here',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.set('view engine', 'pug');
app.set('views', join(__dirname, '/'));
app.use(express.static(path.join(__dirname)));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const user = users.find(u => u.username === req.session.user?.username);
    res.render('index', { 
        products, 
        user: req.session.user || null,
        cart: user ? user.cart : (req.session.cart || [])
    });
});

app.post('/buy', (req, res) => {
    const user = users.find(u => u.username === req.session.user?.username);
    let cart = user ? user.cart : (req.session.cart || []);
    
    if (req.body.productId && !cart.includes(req.body.productId)) {
        cart.push(req.body.productId);
    }
    
    if (user) {
        user.cart = cart;
    } else {
        req.session.cart = cart;
    }
    
    res.status(201).send('Product ' + req.body.productId + ' added to cart');
});

app.post('/remove', (req, res) => {
    const user = users.find(u => u.username === req.session.user?.username);
    let cart = user ? user.cart : (req.session.cart || []);
    
    cart = cart.filter(id => id !== req.body.productId);
    
    if (user) {
        user.cart = cart;
    } else {
        req.session.cart = cart;
    }
    
    res.status(201).send('Product ' + req.body.productId + ' removed from cart');
});

app.get('/login', (req, res) => {
    if (req.session.user) {
        res.redirect('/');
    } else {
        res.render('login', { error: null });
    }
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.render('login', { error: 'Please enter both username and password' });
    }

    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        // Initialize user cart if it doesn't exist
        if (!user.cart) {
            user.cart = [];
        }
        
        // Merge session cart items into user's cart if session cart has items
        if (req.session.cart && req.session.cart.length > 0) {
            // Add any new items from session cart to user's cart
            req.session.cart.forEach(itemId => {
                if (!user.cart.includes(itemId)) {
                    user.cart.push(itemId);
                }
            });
        }
        
        // Set user in session
        req.session.user = { username: user.username };
        
        // Clear session cart since we've merged it into user's cart
        req.session.cart = [];
        
        res.redirect('/');
    } else {
        res.render('login', { error: 'Invalid username or password' });
    }
});

app.get('/logout', (req, res) => {
    const user = users.find(u => u.username === req.session.user?.username);
    
    // Always save the current cart state to user's cart before destroying session
    if (user) {
        user.cart = req.session.cart || [];
    }
    
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
        }
        res.redirect('/login');
    });
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});

const products = [
    {
        id: 1,
        name: 'Ultra HD 4K Gaming Monitor',
        price: 299.99,
        description: '32-inch curved gaming monitor with 144Hz refresh rate and HDR support',
        image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500',
        category: 'Electronics'
    },
    {
        id: 2,
        name: 'Wireless Noise-Cancelling Headphones',
        price: 199.99,
        description: 'Premium wireless headphones with active noise cancellation and 30-hour battery life',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
        category: 'Audio'
    },
    {
        id: 3,
        name: 'Smart Fitness Watch',
        price: 249.99,
        description: 'Water-resistant smartwatch with heart rate monitoring and GPS tracking',
        image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500',
        category: 'Wearables'
    },
    {
        id: 4,
        name: 'Mechanical Gaming Keyboard',
        price: 129.99,
        description: 'RGB mechanical keyboard with Cherry MX switches and customizable backlighting',
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500',
        category: 'Gaming'
    },
    {
        id: 5,
        name: 'Portable Power Bank',
        price: 49.99,
        description: '20000mAh fast-charging power bank with USB-C and wireless charging',
        image: 'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=500',
        category: 'Accessories'
    },
    {
        id: 6,
        name: 'Smart Home Security Camera',
        price: 79.99,
        description: '1080p wireless security camera with night vision and motion detection',
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=500',
        category: 'Smart Home'
    },
    {
        id: 7,
        name: 'Gaming Mouse',
        price: 59.99,
        description: 'Ergonomic gaming mouse with customizable RGB lighting and high precision',
        image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500',
        category: 'Gaming'
    },
    {
        id: 8,
        name: 'Bluetooth Speaker',
        price: 89.99,
        description: 'Portable Bluetooth speaker with deep bass and 12-hour battery life',
        image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500',
        category: 'Audio'
    },
    {
        id: 9,
        name: 'Smart LED Bulb',
        price: 19.99,
        description: 'Wi-Fi enabled smart LED bulb with adjustable brightness and color',
        image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=500',
        category: 'Smart Home'
    },
    {
        id: 10,
        name: 'External SSD',
        price: 129.99,
        description: '1TB external SSD with fast read/write speeds and compact design',
        image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=500',
        category: 'Storage'
    },
    {
        id: 11,
        name: 'VR Headset',
        price: 399.99,
        description: 'Immersive VR headset with high-resolution display and motion tracking',
        image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=500',
        category: 'Gaming'
    },
    {
        id: 12,
        name: 'Smart Thermostat',
        price: 149.99,
        description: 'Wi-Fi enabled smart thermostat for energy-efficient home heating and cooling',
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500',
        category: 'Smart Home'
    }
];