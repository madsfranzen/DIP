// opgave13.1.js
const earthquakeUrl = // https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php 
    'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';

document.addEventListener('DOMContentLoaded', () => {
    fetchEarthquakeData();
});

async function fetchEarthquakeData() {
    const loadingElement = document.getElementById('loading');
    const tableElement = document.getElementById('earthquakeTable');
    
    try {
        // Initially hide the table and show loading indicator
        tableElement.style.display = 'none';
        loadingElement.style.display = 'block';
        
        // Fetch earthquake data
        const data = await get(earthquakeUrl);
        
        // Filter earthquakes with magnitude >= 5
        const filteredData = data.features.filter(quake => 
            quake.properties.mag >= 5
        );

        // Filter earthquakes from the last 7 days 📅
        const oneWeekAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);

        const lastWeekData = filteredData.filter(quake => 
            quake.properties.time >= oneWeekAgo
        );
        
        console.log(`Found ${filteredData.length} earthquakes with magnitude >= 5 🌋`);
        console.log(`${lastWeekData.length} of them occurred in the last week ⏱️`);
        
        // Replace filtered data with the time-filtered data
        filteredData.length = 0;
        lastWeekData.forEach(quake => filteredData.push(quake));

        
        // Sort by magnitude (descending)
        filteredData.sort((a, b) => 
            b.properties.mag - a.properties.mag
        );
        
        // Display the filtered and sorted earthquakes
        displayEarthquakes(filteredData);
        
        // Hide loading indicator and show table
        loadingElement.style.display = 'none';
        tableElement.style.display = 'table';
        
    } catch (error) {
        loadingElement.textContent = `Fejl ved indlæsning af data: ${error.message} 😕`;
        console.error('Error fetching earthquake data:', error);
    }
}

function displayEarthquakes(earthquakes) {
    const tbody = document.getElementById('earthquakeData');
    tbody.innerHTML = ''; // Clear any existing data
    
    earthquakes.forEach(quake => {
        const { mag, place, time } = quake.properties;
        
        // Create a new row
        const row = document.createElement('tr');
        
        // Format date
        const dateTime = new Date(time);
        const formattedDate = dateTime.toLocaleString('da-DK');
        
        // Add magnitude, location, and time cells
        row.innerHTML = `
            <td>${mag.toFixed(1)}</td>
            <td>${place}</td>
            <td>${formattedDate}</td>
        `;
        
        // Add the row to the table
        tbody.appendChild(row);
    });
    
    // Show message if no earthquakes match criteria
    if (earthquakes.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="3" class="no-data">
                    Ingen jordskælv med styrke på mindst 5 i den sidste uge 🌈
                </td>
            </tr>
        `;
    }
}
