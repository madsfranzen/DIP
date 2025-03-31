// opgave11.1.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
// const userUrl = 'https://jsonplaceholder.typicode.com/users/11';
// const userUrl = 'httpz://jsonplaceholder.typicode.com/users';

/* 
Tag udgangspunkt i opgave11.1.js og hent samt udskriv data om users.  

Hvis fejl eller exception, skal den udskrives.  

Anvend funktionen get(url) til at hente data på nettet.  
Funktionen bruger fetch(), der er en standard funktion i browseren, 
og derfor skal koden udføres vha. opgave11.1.html.  

Løs opgaven både med og uden async.  

Afprøv programmet med de 3 forskellige userUrl's., 
måske også en url med posts. Du kan vise data i en 
tabel eller en ul-liste eller lign, eller udskrive til console
*/

// Function to display users in a table
function displayUsersTable(users) {
    // Get the container
    const container = document.getElementById('userContainer');
    
    // Clear any existing content
    container.innerHTML = '';
    
    // Create table element
    const table = document.createElement('table');
    table.id = 'usersTable';
    table.style.border = '1px solid black'; // Changed border color to black
    table.style.width = '100%';
    
    // Create table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    
    // Determine headers based on first user (if array) or the user object itself
    const headerData = Array.isArray(users) ? users[0] : users;
    
    // Create header cells
    for (const key in headerData) {
        if (typeof headerData[key] !== 'object') { // Skip nested objects
            const th = document.createElement('th');
            th.textContent = key;
            th.style.padding = '8px';
            th.style.backgroundColor = '#f2f2f2';
            headerRow.appendChild(th);
        }
    }
    
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // Create table body
    const tbody = document.createElement('tbody');
    
    // If users is an array, iterate through it
    if (Array.isArray(users)) {
        users.forEach(user => {
            const row = document.createElement('tr');
            
            for (const key in headerData) {
                if (typeof headerData[key] !== 'object') { // Skip nested objects
                    const td = document.createElement('td');
                    td.textContent = user[key];
                    td.style.padding = '8px';
                    row.appendChild(td);
                }
            }
            
            tbody.appendChild(row);
        });
    } else {
        // If users is a single object
        const row = document.createElement('tr');
        
        for (const key in headerData) {
            if (typeof headerData[key] !== 'object') { // Skip nested objects
                const td = document.createElement('td');
                td.textContent = users[key];
                td.style.padding = '8px';
                row.appendChild(td);
            }
        }
        
        tbody.appendChild(row);
    }
    
    table.appendChild(tbody);
    
    // Add table to the container
    container.appendChild(table);
    
    // Add a message showing how many users were fetched
    const countMessage = document.createElement('p');
    countMessage.textContent = Array.isArray(users) 
        ? `Fetched ${users.length} users` 
        : 'Fetched 1 user';
    container.insertBefore(countMessage, table);
}

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function myAsync() {
    try {
        const usersFetch = await fetch(userUrl);
        const users = await usersFetch.json();
        console.log(users);
        displayUsersTable(users);
    } catch (error) {
        console.error(error);
        alert('Error: ' + error.message);
    }
}

function fetchAndDisplayUsers(url) {
    fetch(url)
        .then(response => response.json())
        .then(users => {
            console.log(users);
            displayUsersTable(users);
        })
        .catch(error => {
            console.error(error);
            alert('Error: ' + error.message);
        });
}

// Expose the function to be called from HTML
window.fetchUsers = fetchAndDisplayUsers;
window.myAsync = myAsync;


