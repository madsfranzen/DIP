// Chat Client - JavaScript

// API endpoints
const API = {
    ALL_MESSAGES: 'https://beskedserver.azurewebsites.net/api/Beskeder/',
    ROOM_MESSAGES: 'https://beskedserver.azurewebsites.net/api/SoegBeskeder/',
    ROOMS: 'https://beskedserver.azurewebsites.net/api/chatRum/'
};

// Global state
let currentRoom = 'all';
let refreshInterval = null;
const REFRESH_RATE = 5000; // 5 seconds

// DOM Elements
const roomSelect = document.getElementById('room-select');
const messagesContainer = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const refreshButton = document.getElementById('refresh-button');
const autoRefreshToggle = document.getElementById('auto-refresh-toggle');

// Event Listeners
document.addEventListener('DOMContentLoaded', initialize);
roomSelect.addEventListener('change', handleRoomChange);
sendButton.addEventListener('click', sendMessage);
refreshButton.addEventListener('click', refreshMessages);
autoRefreshToggle.addEventListener('change', toggleAutoRefresh);
messageInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

// Initialize the application
async function initialize() {
    try {
        // Load chat rooms
        await loadChatRooms();
        
        // Load initial messages
        await refreshMessages();
        
        // Start auto-refresh if enabled
        if (autoRefreshToggle.checked) {
            startAutoRefresh();
        }
    } catch (error) {
        showError('Kunne ikke initialisere chatten: ' + error.message);
    }
}

// Load chat rooms into the select dropdown
async function loadChatRooms() {
    try {
        const response = await fetch(API.ROOMS);
        if (!response.ok) {
            throw new Error(`Status: ${response.status}`);
        }
        
        const rooms = await response.json();
        
        // Clear existing room options (except "all")
        while (roomSelect.options.length > 1) {
            roomSelect.remove(1);
        }
        
        // Add rooms to select
        rooms.forEach(room => {
            const option = document.createElement('option');
            option.value = room.navn;
            option.textContent = room.navn;
            roomSelect.appendChild(option);
        });
    } catch (error) {
        showError('Kunne ikke hente chatrum: ' + error.message);
    }
}

// Handle room selection change
function handleRoomChange() {
    currentRoom = roomSelect.value;
    refreshMessages();
}

// Toggle auto-refresh
function toggleAutoRefresh() {
    if (autoRefreshToggle.checked) {
        startAutoRefresh();
    } else {
        stopAutoRefresh();
    }
}

// Start auto-refresh
function startAutoRefresh() {
    stopAutoRefresh(); // Clear any existing interval
    refreshInterval = setInterval(refreshMessages, REFRESH_RATE);
}

// Stop auto-refresh
function stopAutoRefresh() {
    if (refreshInterval) {
        clearInterval(refreshInterval);
        refreshInterval = null;
    }
}

// Refresh messages
async function refreshMessages() {
    setLoading(true);
    
    try {
        let url = API.ALL_MESSAGES;
        if (currentRoom !== 'all') {
            url = `${API.ROOM_MESSAGES}${currentRoom}`;
        }
        
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Status: ${response.status}`);
        }
        
        const messages = await response.json();
        displayMessages(messages);
    } catch (error) {
        showError('Kunne ikke hente beskeder: ' + error.message);
    } finally {
        setLoading(false);
    }
}

// Display messages in the UI
function displayMessages(messages) {
    messagesContainer.innerHTML = '';
    
    if (messages.length === 0) {
        const noMessages = document.createElement('div');
        noMessages.className = 'no-messages';
        noMessages.textContent = 'Ingen beskeder at vise.';
        messagesContainer.appendChild(noMessages);
        return;
    }
    
    messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.className = 'message received';
        
        // Format timestamp if available
        let timestamp = '';
        if (message.oprettet) {
            const date = new Date(message.oprettet);
            timestamp = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
        }
        
        // Create message HTML structure
        messageElement.innerHTML = `
            <div class="message-content">${message.tekst}</div>
            <div class="message-info">
                ${currentRoom === 'all' && message.chatRum ? 
                    `<span class="message-room">${message.chatRum}</span>` : ''}
                <span class="message-time">${timestamp}</span>
            </div>
            <button class="delete-btn" data-id="${message.id}">×</button>
        `;
        
        // Add delete button event listener
        const deleteBtn = messageElement.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => deleteMessage(message.id));
        
        messagesContainer.appendChild(messageElement);
    });
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Send a new message
async function sendMessage() {
    const text = messageInput.value.trim();
    if (!text) return;
    
    let targetRoom = currentRoom;
    if (targetRoom === 'all') {
        // If "all" is selected, use the first available room or show error
        if (roomSelect.options.length > 1) {
            targetRoom = roomSelect.options[1].value;
        } else {
            showError('Vælg venligst et chatrum eller opret et nyt chatrum først.');
            return;
        }
    }
    
    try {
        const response = await fetch(API.ALL_MESSAGES, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ChatRum: targetRoom,
                Tekst: text
            })
        });
        
        if (!response.ok) {
            throw new Error(`Status: ${response.status}`);
        }
        
        // Clear input field
        messageInput.value = '';
        
        // Refresh messages to show the new message
        refreshMessages();
    } catch (error) {
        showError('Kunne ikke sende besked: ' + error.message);
    }
}

// Delete a message
async function deleteMessage(id) {
    if (!confirm('Er du sikker på, at du vil slette denne besked?')) {
        return;
    }
    
    try {
        const response = await fetch(`${API.ALL_MESSAGES}${id}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) {
            throw new Error(`Status: ${response.status}`);
        }
        
        // Refresh messages to update the list
        refreshMessages();
    } catch (error) {
        showError('Kunne ikke slette beskeden: ' + error.message);
    }
}

// Show loading state
function setLoading(isLoading) {
    if (isLoading) {
        const loadingElement = document.createElement('div');
        loadingElement.className = 'loading';
        loadingElement.textContent = 'Indlæser beskeder...';
        messagesContainer.innerHTML = '';
        messagesContainer.appendChild(loadingElement);
    }
}

// Show error message
function showError(message) {
    console.error(message);
    const errorElement = document.createElement('div');
    errorElement.className = 'error';
    errorElement.textContent = message;
    
    // Show error at the top of the messages container
    messagesContainer.prepend(errorElement);
    
    // Remove error after 5 seconds
    setTimeout(() => {
        errorElement.remove();
    }, 5000);
} 