function displayFutureWeather(day, icon, temp, date) {
  let image = document.querySelector(".day" + day + "-img");
  let temperature = document.querySelector(".day" + day + "-temp");
  let dato = document.querySelector("#day" + day + "-date");

  image.style.display = "block";
  image.src = `../src/images/${icon}.svg`;
  temperature.innerText = `${temp}°C`;

  // Some date formating
  let tmp = date;
  tmp = tmp.split("-");
  dato.innerText = date;
}

export default displayFutureWeather;
