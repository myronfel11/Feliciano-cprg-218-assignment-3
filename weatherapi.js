async function fetchWeather() {
    const apiKey = '9c3f6e68547d45748ff13353252304';
    const city = 'Cancun';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      const temp = data.current.temp_c;
      const condition = data.current.condition.text;
      const icon = data.current.condition.icon;
  
      document.getElementById('weather-info').innerHTML = `
        <img src="${icon}" alt="${condition}" style="vertical-align: middle;" />
        ${temp}°C, ${condition}
      `;
    } catch (error) {
      document.getElementById('weather-info').textContent = 'Weather unavailable';
    }
  }
  
  document.addEventListener("DOMContentLoaded", fetchWeather);
  