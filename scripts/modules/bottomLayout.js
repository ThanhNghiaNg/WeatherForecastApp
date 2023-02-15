const bottomLayout = () => {
  const containerEl = document.createElement("div");
  console.log(fetchedData);
  const getTimein24h = (strTime) => {
    let [time, pos] = strTime.split(" ");
    if (pos === "PM") {
      console.log();
      time = `${String(time.split(":")[0] * 1 + 12).padStart(2, "0")}:${
        time.split(":")[1]
      }`;
    }
    const timeInt = time.split(":")[0] * 60 + time.split(":")[1] * 1;
    return [time, timeInt];
  };
  const [sunrise, sunriseInt] = getTimein24h(
    fetchedData.forecast.forecastday[0].astro.sunrise
  );
  const [sunset, sunsetInt] = getTimein24h(
    fetchedData.forecast.forecastday[0].astro.sunset
  );
  const currentTimeInt = new Date().getHours() * 60 + new Date().getMinutes();
  const percentTime =
    ((currentTimeInt - sunriseInt) / (sunsetInt - sunriseInt)) * 100;
  console.log(sunriseInt);
  console.log(percentTime);
  containerEl.innerHTML = `
    <p class="highlight_p" >Today's Highlight</p>
        <div id="highlight">
          <div class="card">
            <div class="highlight-header__top">Wind status</div>

            <div class="highlight-body__top">
              <div class="loading-bar">
                <div class="fill bg-cyan" style="width: ${(
                  (fetchedData.current.wind_kph / 30) *
                  100
                ).toFixed()}%"></div>
              </div>
              <div>
                <div class="value"><span>${
                  fetchedData.current.wind_kph
                }</span><span>km/h</span></div>
                <div class="time">${
                  fetchedData.location.localtime.split(" ")[1]
                }</div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="highlight-header__top">UV index</div>
            <div class="highlight-body__top">
              <div class="loading-bar">
                <div class="fill bg-red" style="width: ${(
                  (fetchedData.current.uv / 12) *
                  100
                ).toFixed()}%"></div>
              </div>
              <div>
                <div class="value"><span>${
                  fetchedData.current.uv
                }</span><span>UV</span></div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="highlight-header__top">Sunrise & Sunset</div>
            <div class="highlight-body__top">
              <div class="loading-bar">
                <div class="fill bg-yellow" style="width: ${percentTime}%"></div>
              </div>
              <div>
                <div class="time">Sunrise: ${sunrise}</div>
                <div class="time">Sunset: ${sunset}</div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="highlight-header__bottom">Humidity</div>
            <div class="highlight-body__bottom">
              <div class="value"><span>${
                fetchedData.current.humidity
              }</span><span>%</span></div>
              <div class="explain">
                <i class="fa-solid fa-droplet"></i>
                <p>The dew point is 27°C right now</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="highlight-header__bottom">Visibility</div>
            <div class="highlight-body__bottom">
              <div class="value"><span>${
                fetchedData.current.vis_km
              }</span><span>km</span></div>
              <div class="explain">
                <i class="fa-solid fa-eye"></i>
                <p>Haze is affecting visibility</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="highlight-header__bottom">Feels Like</div>
            <div class="highlight-body__bottom">
              <div class="value"><span>${
                fetchedData.current.feelslike_c
              }</span><span>°C</span></div>
              <div class="explain">
                <i><i class="fa-solid fa-temperature-high"></i></i>
                <p>Humidity is making it feel hotter.</p>
              </div>
            </div>
          </div>
        </div>
    `;

  return containerEl;
};
