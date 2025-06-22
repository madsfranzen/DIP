const fetchButton = document.getElementById('fetchButton');
const quotesContainer = document.getElementById('quotesContainer');
fetchButton.addEventListener('click', fetchAllQuotes);

let quoteNumber = 0;

async function fetchAllQuotes() {
	quotesContainer.innerHTML = '<div class="loading">Fetching Quotes...</div>';

	setTimeout(async () => {
		try {
			const quotes = ([englishQuote, frenchQuote, germanQuote] =
				await Promise.all([
					fetchByLanguage('en'),
					fetchByLanguage('fr'),
					fetchByLanguage('de'),
				]));

			displayQuotes(quotes);

			quoteNumber++;
		} catch (error) {
			quotesContainer.innerHTML =
				'<div class="error">An error occurred while fetching quotes.</div>';
		}
	}, 800);
}

function displayQuotes(quotes) {
	let html = '';
	quotes.forEach((quoteData) => {
		html += `
            <div class="quote">
                <div class="quote-text">"${quoteData.quote}"</div>
                <div class="quote-language">Language: ${quoteData.language}</div>
            </div>
        `;
	});

	quotesContainer.innerHTML = html;
}

async function fetchByLanguage(language) {
	const response = await fetch(
		'https://api.paperquotes.com/apiv1/quotes/?lang=' + language
	);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const data = await response.json();
	return {
		quote: data.results[quoteNumber % data.results.length].quote,
		language: convertLangToString(language),
	};
}

function convertLangToString(abreviation) {
	switch (abreviation) {
		case 'en':
			return 'English';
		case 'fr':
			return 'French';
		case 'de':
			return 'German';
		default:
			return 'Unknown';
	}
}
