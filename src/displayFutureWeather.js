function displayFutureWeather(day, icon, temp) {
  let image = document.querySelector(".day" + day + "-img");
  let temperature = document.querySelector(".day" + day + "-temp");

  image.style.display = "block";
  image.src = `../src/images/${icon}.svg`;
  temperature.innerText = `${temp}°C`;
}

export default displayFutureWeather;
