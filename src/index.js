import "./style.css"
import displayCityName from "./displayCityName";

const API_KEY = "DEP8ML4Y2WDD8V75JFZ8VSRHX"
const URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"

let locationInput = document.querySelector(".locationInput");
let submit = document.querySelector(".submitbtn");

async function getWeatherFromLocation(location) {
        const response = await fetch(URL + location + "/?unitGroup=metric&key=" + API_KEY, {mode: 'cors'});
        const responseData = await response.json();

        displayCityName(responseData.resolvedAddress);

        console.log(responseData);
}

submit.addEventListener("click", () => {
        getWeatherFromLocation(locationInput.value)
})



