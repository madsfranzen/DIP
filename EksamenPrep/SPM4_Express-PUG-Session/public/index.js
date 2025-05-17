document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('personForm');
  const button = document.getElementById('submitBtn');

  button.addEventListener('click', async (event) => {
    event.preventDefault(); // Prevent default form submit behavior

    const navn = document.getElementById('navn').value;
    const adresse = document.getElementById('adresse').value;

    if (!navn || !adresse) {
      alert('Udfyld venligst både navn og adresse.');
      return;
    }

    console.log('Tilføj person-knappen blev trykket.');

    // Send data to server using fetch POST
    try {
      const response = await fetch('/tilfoej', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ navn, adresse }),
      });

      if (response.ok) {
        window.location.reload(); // Reload to update the list
      } else {
        alert('Noget gik galt ved tilføjelsen.');
      }
    } catch (err) {
      console.error('Fejl ved fetch:', err);
      alert('Der opstod en fejl.');
    }
  });
});

