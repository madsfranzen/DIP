const IP = 'http://localhost:8000';
const roomButtons = document.querySelectorAll('.room-btn');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send');
const messagesContainer = document.getElementById('messages');

let currentRoom = 'all';
roomButtons[0].classList.add('active');

messageInput.disabled = true;
sendButton.disabled = true;

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleTimeString() + ' ' + date.toLocaleDateString();
}

function displayMessages(messages, roomId = null) {
    messagesContainer.innerHTML = '';

    // if roomId is null, display all messages, otherwise display messages for the selected room
    const filteredMessages = roomId === null ? messages : messages.filter(msg => msg.rumId === parseInt(roomId));

    filteredMessages.sort((a, b) => new Date(a.tidspunkt) - new Date(b.tidspunkt));

    filteredMessages.forEach(msg => {
        const li = document.createElement('li');
        li.innerHTML = `
                    <div class="delete-btn" data-id="${msg.id}">×</div>
                    <strong>Room ${msg.rumId}</strong>
                    <p>${msg.tekst}</p>
                    <small>${formatDate(msg.tidspunkt)}</small>
                `;
        messagesContainer.appendChild(li);

        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => deleteMessage(msg.id));
    });

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

async function deleteMessage(id) {
    if (confirm('Er du sikker på, at du vil slette denne besked?')) {
        try {
            const response = await fetch(`${IP}/besked/${id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Failed to delete message');
            }

            fetchMessages();
        } catch (error) {
            console.error('Error deleting message:', error);
        }
    }
}

async function fetchMessages() {
    try {
        const response = await fetch(`${IP}/beskeder`);
        if (!response.ok) {
            throw new Error('Failed to fetch messages');
        }

        const messages = await response.json();

        if (currentRoom === 'all') {
            displayMessages(messages);
        } else {
            displayMessages(messages, currentRoom);
        }
    } catch (error) {
        console.error('Error fetching messages:', error);
    }
}

async function sendMessage(text, roomId) {
    try {
        const response = await fetch(`${IP}/besked`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tekst: text,
                rumId: parseInt(roomId)
            })
        });

        if (!response.ok) {
            throw new Error('Failed to send message');
        }

        messageInput.value = '';

        fetchMessages();
    } catch (error) {
        console.error('Error sending message:', error);
    }
}

roomButtons.forEach(button => {
    button.addEventListener('click', () => {
        roomButtons.forEach(btn => btn.classList.remove('active'));

        button.classList.add('active');

        currentRoom = button.dataset.room;

        if (currentRoom === 'all') {
            messageInput.disabled = true;
            sendButton.disabled = true;
        } else {
            messageInput.disabled = false;
            sendButton.disabled = false;
        }

        fetchMessages();
    });
});

sendButton.addEventListener('click', () => {
    const text = messageInput.value.trim();
    if (text && currentRoom !== 'all') {
        sendMessage(text, currentRoom);
    }
});

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const text = messageInput.value.trim();
        if (text && currentRoom !== 'all') {
            sendMessage(text, currentRoom);
        }
    }
});

function setupPolling() {
    fetchMessages();
    setInterval(fetchMessages, 3000);
}

// Initialize
setupPolling();