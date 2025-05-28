const API_URL = 'https://api.paperquotes.com/apiv1/quotes/';

document.addEventListener('DOMContentLoaded', () => {
	fetchQuotes();
});

async function fetchQuotes(params = {}) {
	const query = new URLSearchParams(params).toString();
	const url = query ? `${API_URL}?${query}` : API_URL;

	try {
		const response = await fetch(url, {
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error('Kunne ikke hente data');
		}

		const data = await response.json();
		displayQuotes(data.results);
	} catch (error) {
		console.error('Fejl:', error);
		document.getElementById('quotes').innerHTML =
			'<p>Fejl ved hentning af citater.</p>';
	}
}

function displayQuotes(quotes) {
	const container = document.getElementById('quotes');
	container.innerHTML = '';

	quotes.forEach((q) => {
		const div = document.createElement('div');
		div.className = 'quote';

		div.innerHTML = `
      <blockquote>"${q.quote}"</blockquote>
      <small>
        <span class="clickable" onclick="fetchQuotes({ author: '${q.author}' })">${q.author}</span>
        | <span class="clickable" onclick="fetchQuotes({ language: '${q.language}' })">${q.language}</span>
        ${q.tags.length > 0 ? '| Tags: ' + q.tags.map((tag) => `<span class="clickable" onclick="fetchQuotes({ tags: '${tag}' })">${tag}</span>`).join(', ') : ''}
      </small>
    `;

		container.appendChild(div);
	});
}
