// opgave11.2.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
const postUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';

/*
Tag udgangspunkt i opgave11.2.js og lav en webside, der viser en tabel over users. 

Når der klikkes på en user, skal dennes posts vises nederst på
websiden i en anden tabel. 

Løs opgaven med async. Bemærk: userId delen af url'en er case sensitiv.   
*/

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function getPosts(userId) {
    const url = `${postUrl}${userId}`;
    const posts = await get(url);
    console.log(posts);
    return posts;
}

async function fetchUsers() {
    try {
        // Show loading state
        const container = document.getElementById('userContainer');
        container.innerHTML = '<div class="loading">Loading users...</div>';
        
        const users = await get(userUrl);
        console.log(users);
        displayUsersTable(users);
    } catch (error) {
        console.error(error);
        const container = document.getElementById('userContainer');
        container.innerHTML = `<div class="error">Error: ${error.message}</div>`;
    }
}

function displayUsersTable(users) {
    const container = document.getElementById('userContainer');
    container.innerHTML = '';
    
    const table = document.createElement('table');
    table.id = 'usersTable';

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    const headerData = Array.isArray(users) ? users[0] : users;

    for (const key in headerData) {
        if (typeof headerData[key] !== 'object') {
            const th = document.createElement('th');
            th.textContent = key;
            headerRow.appendChild(th);
        }
    }

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    for (const user of users) {
        const row = document.createElement('tr');
        row.dataset.userId = user.id;
        
        row.addEventListener('click', async () => {
            try {
                // Remove selected class from all rows
                const allRows = tbody.querySelectorAll('tr');
                allRows.forEach(r => r.classList.remove('selected'));
                
                // Add selected class to clicked row
                row.classList.add('selected');
                
                // Show loading state
                const postsContainer = document.getElementById('postsContainer') || createPostsContainer();
                postsContainer.innerHTML = '<div class="loading">Loading posts...</div>';
                
                const posts = await getPosts(user.id);
                displayPostsTable(posts);
            } catch (error) {
                console.error(error);
                const postsContainer = document.getElementById('postsContainer') || createPostsContainer();
                postsContainer.innerHTML = `<div class="error">Error fetching posts: ${error.message}</div>`;
            }
        });

        for (const key in user) {
            if (typeof user[key] !== 'object') {
                const td = document.createElement('td');
                td.textContent = user[key];
                row.appendChild(td);
            }
        }
        tbody.appendChild(row);
    }

    table.appendChild(tbody);
    container.appendChild(table);
}

function createPostsContainer() {
    const userContainer = document.getElementById('userContainer');
    const postsContainer = document.createElement('div');
    postsContainer.id = 'postsContainer';
    userContainer.appendChild(postsContainer);
    return postsContainer;
}

function displayPostsTable(posts) {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = '';

    if (posts.length === 0) {
        postsContainer.innerHTML = '<div class="no-data">No posts found for this user.</div>';
        return;
    }

    const postsTitle = document.createElement('h2');
    postsTitle.textContent = `User Posts (${posts.length})`;
    postsContainer.appendChild(postsTitle);

    const table = document.createElement('table');

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    // Create headers for the posts table
    const headers = ['ID', 'Title', 'Body'];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    for (const post of posts) {
        const row = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.textContent = post.id;
        row.appendChild(idCell);

        const titleCell = document.createElement('td');
        titleCell.textContent = post.title;
        row.appendChild(titleCell);

        const bodyCell = document.createElement('td');
        bodyCell.textContent = post.body;
        row.appendChild(bodyCell);

        tbody.appendChild(row);
    }

    table.appendChild(tbody);
    postsContainer.appendChild(table);
}

window.fetchUsers = fetchUsers;