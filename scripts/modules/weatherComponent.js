const weatherComponent = (
  temp_c,
  condition,
  name,
  region,
  country,
  date,
  time
) => {
  const weather = document.createElement("div");
  weather.classList.add("weather");
  weather.innerHTML = `
  <div class="card">
    <div class="weather__illustration">
      <img src="" alt="" />
    </div>
    <div class="weather__info">
      <span>${temp_c} </span><sup>°C</sup>
      <div class="weather__info_textdesc">
        <img src="//cdn.weatherapi.com/weather/64x64/night/116.png" alt="" />
        <p>${condition.text}</p>
      </div>
    </div>
    <div class="weather_location">
      <div class="weather_location-item">
        <i class="fa-solid fa-location-dot"></i
        ><span id="location">${[name, country].join(", ")}</span>
      </div>
      <div class="weather_location-item">
        <div id="datetime">
        <i class="fa-solid fa-calendar-days"></i>
          <span>${date}</span>
          <span><strong>${time}</strong></span>
        </div>
      </div>
    </div>
  </div>
    `;
  weather.appendChild(weatherListComponent());
  return weather;
};
