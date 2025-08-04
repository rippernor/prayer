const fetch = require('node-fetch');
const fs = require('fs');

const url = "https://api.bonnetid.no/prayertimes/122/2025/08"; // Use current month/year

const headers = {
  "User-Agent": "Mozilla/5.0",
  "Accept": "application/json",
  "Api-Token": "92affaa6-0e9b-4402-8d8a-0fcd8d9e91ec" // your token here
};

async function fetchPrayerTimes() {
  try {
    console.log(`Fetching prayer times from ${url}`);
    const response = await fetch(url, { headers });
    if (!response.ok) {
      console.error(`HTTP error: ${response.status}`);
      return;
    }
    const data = await response.json();
    console.log("Prayer times fetched successfully.");
    
    fs.writeFileSync('prayer-times-test.json', JSON.stringify(data, null, 2));
    console.log("Saved prayer-times-test.json");
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

fetchPrayerTimes();
