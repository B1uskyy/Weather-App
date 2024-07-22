
const API_KEY = "DEP8ML4Y2WDD8V75JFZ8VSRHX"
const URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"


async function getWeatherFromLocation(location) {
        const response = await fetch(URL + location + "?key=" + API_KEY, {mode: 'cors'});
        const responseData = await response.json();

        console.log(responseData.description);
}


getWeatherFromLocation("Oslo");
