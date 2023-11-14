function updateTime() {
  let parisElement = document.querySelector("#paris");

  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM	Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");

  let orlandoElement = document.querySelector("#orlando");

  let orlandoDateElement = orlandoElement.querySelector(".date");
  let orlandoTimeElement = orlandoElement.querySelector(".time");
  let orlandoTime = moment().tz("America/Fort_Wayne");

  orlandoDateElement.innerHTML = orlandoTime.format("MMMM	Do YYYY");
  orlandoTimeElement.innerHTML = orlandoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let tokyoElement = document.querySelector("#tokyo");

  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM	Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

  let hong_kongElement = document.querySelector("#hong_kong");

  let hong_kongDateElement = hong_kongElement.querySelector(".date");
  let hong_kongTimeElement = hong_kongElement.querySelector(".time");
  let hong_kongTime = moment().tz("Asia/Hong_Kong");

  hong_kongDateElement.innerHTML = hong_kongTime.format("MMMM	Do YYYY");
  hong_kongTimeElement.innerHTML = hong_kongTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
