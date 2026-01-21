// getdates.js
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
  `Last modified: ${document.lastModified}`;

// ================================
// WEATHER DATA (Example or from API)
// ================================
const weather = {
  temperature: 5, // °C
  conditions: "Mostly Sunny",
  wind: 10, // km/h
};

// ================================
// CALCULATE WIND CHILL FUNCTION
// ================================
function calculateWindChill(tempC, windKmh) {
  // Only calculate if viable
  if (tempC > 10 || windKmh <= 4.8) return "N/A";

  // Wind chill formula (°C, km/h)
  return Math.round(
    13.12 +
      0.6215 * tempC -
      11.37 * Math.pow(windKmh, 0.16) +
      0.3965 * tempC * Math.pow(windKmh, 0.16),
  );
}

// ================================
// POPULATE WEATHER UL
// ================================
function displayWeather(weatherData) {
  const weatherList = document.getElementById("weatherData");

  // Clear existing list items
  weatherList.innerHTML = "";

  // Temperature
  const tempLi = document.createElement("li");
  tempLi.innerHTML = `<strong>Temperature:</strong> ${weatherData.temperature}°C`;
  weatherList.appendChild(tempLi);

  // Conditions
  const condLi = document.createElement("li");
  condLi.innerHTML = `<strong>Conditions:</strong> ${weatherData.conditions}`;
  weatherList.appendChild(condLi);

  // Wind
  const windLi = document.createElement("li");
  windLi.innerHTML = `<strong>Wind:</strong> ${weatherData.wind} km/h`;
  weatherList.appendChild(windLi);

  // Wind Chill
  const windChillLi = document.createElement("li");
  const windChillValue = calculateWindChill(
    weatherData.temperature,
    weatherData.wind,
  );
  windChillLi.innerHTML = `<strong>Wind Chill:</strong> ${windChillValue}°C`;
  weatherList.appendChild(windChillLi);
}

// ================================
// INITIAL DISPLAY
// ================================
displayWeather(weather);
