// Weather using OpenWeatherMap API
const weatherElement = document.getElementById("weatherData");
const apiKey = "f863f327f7b278d22fc557a7b5068841";  
const city = "Vidisha";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then(response => response.json())
  .then(data => {
    const desc = data.weather[0].description;
    const temp = data.main.temp;
    weatherElement.textContent = `Weather: ${desc}, ${temp}°C in ${city}`;
  })
  .catch(error => {
    weatherElement.textContent = "Failed to load weather data.";
    console.error(error);
  });

// Crop Prices from Google Sheet 
fetch("https://docs.google.com/spreadsheets/d/1XqOssjOwMLA4EjagpDaWarIiObkgcMVGZEPuMANcCUI/edit?usp=sharing")
  .then(response => response.text())
  .then(csv => {
    const rows = csv.split("\n");
    const table = document.getElementById("priceTable");
    rows.slice(1).forEach(row => {
      const cols = row.split(",");
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${cols[0]}</td><td>${cols[1]}</td>`;
      table.appendChild(tr);
    });
  })
  .catch(err => console.error("Error loading crop prices", err));

// Feedback Form 
document.getElementById("feedbackForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for your feedback!");

});
