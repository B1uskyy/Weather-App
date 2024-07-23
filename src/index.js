import "./style.css";
import displayCityName from "./displayCityName";
import displayTodayWeatherImage from "./displayTodayWeatherImage";
import displayTodayWeatherTemp from "./displayTodayWeatherTemp";
import displayFutureWeather from "./displayFutureWeather";

const API_KEY = "DEP8ML4Y2WDD8V75JFZ8VSRHX";
const URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

let locationInput = document.querySelector(".locationInput");
let submit = document.querySelector(".submitbtn");

async function getWeatherFromLocation(location) {
  const response = await fetch(
    URL + location + "/?unitGroup=metric&key=" + API_KEY,
    { mode: "cors" },
  );
  const responseData = await response.json();
  let currentCond = responseData.currentConditions;

  displayCityName(responseData.resolvedAddress);
  displayTodayWeatherImage(currentCond.icon);
  displayTodayWeatherTemp(currentCond.temp);

  // populate future weather posts

  let days = ["0", "1", "2"];

  days.forEach((day) => {
    let temp = responseData.days[day].temp;
    let icon = responseData.days[day].icon;
    displayFutureWeather(day, icon, temp);
  });

  console.log(responseData);
}

submit.addEventListener("click", () => {
  getWeatherFromLocation(locationInput.value);
  locationInput.value = "";
});
