// const searchDaysForecastHandler = (event) => {
//   event.preventDefault();
//   render();
// };
// const onChangeDaysForecastHandler = (event) => {
//   console.log("ok");
//   //   event.preventDefault();
//   forecastday = event.target.value;
// };

// const weatherListComponent = () => {
//   const weatherList = document.createElement("div");
//   const header = document.createElement("div");
//   header.classList.add("weather-list__header");
//   const title = document.createElement("p");
//   const form = document.createElement("form");
//   const inputEl = document.createElement("input");
//   inputEl.type = "number";
//   inputEl.min = 1;
//   inputEl.placeholder = "Number days forecast";
//   inputEl.addEventListener("change", this.onChangeDaysForecastHandler);

//   form.addEventListener("submit", searchDaysForecastHandler);
//   form.appendChild(inputEl);
//   title.innerHTML = `<p>${forecastday} days Forecast</p>`;
//   header.appendChild(title);
//   header.appendChild(form);

//   // header.insertAdjacentHTML('beforeend', `
//   // <form onsubmit="${searchDaysForecastHandler}">
//   //   <input type="number" min=1 placeholder="Number days forecast" onchange="onChangeDaysForecastHandler()">
//   // </form>`);
//   const card = document.createElement("div");
//   weatherList.classList.add("weather-list");

//   card.classList.add("card");
//   card.classList.add("weather-list");
//   card.appendChild(header);
//   console.log(fetchedData);
//   fetchedData.forecast.forecastday.map((day) => {
//     card.innerHTML += `
//     <div class="list-item">
//           <img src="${day.day.condition.icon}" alt="">
//           <p>${day.day.avgtemp_c}°C</p>
//           <span>${day.date}</span>
//         </div>
//     `;
//   });

//   weatherList.appendChild(card);
//   return weatherList;
// };

const searchDaysForecastHandler = (event) => {
  event.preventDefault();
  render();
};

const onChangeDaysForecastHandler = (event) => {
  console.log("ok");
  forecastday = event.target.value;
};

const weatherListComponent = () => {
  const weatherList = document.createElement("div");
  const header = document.createElement("div");
  header.classList.add("weather-list__header");
  const title = document.createElement("p");
  const form = document.createElement("form");
  const inputEl = document.createElement("input");
  const submitBtn = document.createElement("button");
  inputEl.type = "number";
  inputEl.min = 1;
  inputEl.placeholder = "Number days forecast";
  // console.log(inputEl)
  inputEl.onchange = function (event) {
    console.log("Input value changed to: " + event.target.value);
  };


  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(inputEl.value);
  });
  form.appendChild(inputEl);
  inputEl.addEventListener('change',()=>{
    console.log("ok")
  })
  form.appendChild(submitBtn);
  form.appendChild(inputEl)
  title.innerHTML = `<p>${forecastday} days Forecast</p>`;
  header.appendChild(title);
  // header.appendChild(form)

  const card = document.createElement("div");
  weatherList.classList.add("weather-list");

  card.classList.add("card");
  card.classList.add("weather-list");
  card.appendChild(header);
  console.log(fetchedData);
  fetchedData.forecast.forecastday.map((day) => {
    card.innerHTML += `
        <div class="list-item">
          <img src="${day.day.condition.icon}" alt="">
          <p>${day.day.avgtemp_c}°C</p>
          <span>${day.date}</span>
        </div>
      `;
  });

  weatherList.appendChild(card);
  return weatherList;
};
