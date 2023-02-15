getLocation();

try {
  render([bottomLayout]);
} catch (err) {
  console.log(err);
}

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  query = inputQuery.value;
  render([bottomLayout]);
});

searchDayForecastBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (inputDayForecast.value > 14) {
    return alert("Number of forecast day must be less than 15");
  }
  forecastday = inputDayForecast.value;
  render([bottomLayout]);
});
