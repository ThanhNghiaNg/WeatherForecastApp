const API_KEY = "2ec2e0300ebc4d1a9e5110751231402";
let query = "QMMW+3X District 3, Ho Chi Minh City, Vietnam";
let fetchedData;
let forecastday = 7;
const bodyWeatherEl = document.getElementById("weather");
const inputQuery = document.getElementById("inp-query");
const searchBtn = document.getElementById("btn-search");
const searchDayForecastBtn = document.getElementById("btn-change-day-forecast");
const inputDayForecast = document.getElementById("inp-day-forecast");
const bottomLayoutEl = document.getElementById("bottom-layout");

const fetchData = async () => {
  try {
    const respone = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}&days=${forecastday}&aqi=yes&alerts=no`
    );
    const data = await respone.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const showPosition = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  query = `${lat}, ${lon}`;
};

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, (err) => {
      console.log(err);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
};

function render(componentsCallback) {
  fetchData().then((data) => {
    // console.log(data)
    fetchedData = data;
    const { temp_c, condition } = data.current;
    const { name, region, country } = data.location;

    const [date, time] = data.current.last_updated.split(" ");
    const weather = weatherComponent(
      temp_c,
      condition,
      name,
      region,
      country,
      date,
      time
    );

    bodyWeatherEl.innerHTML = "";
    bodyWeatherEl.appendChild(weather);

    if (componentsCallback && componentsCallback.length > 0) {
      componentsCallback.map((callback) => {
        try {
          bodyWeatherEl.appendChild(callback());
        } catch (err) {
          console.log(err);
        }
      });
    }
  });
}
