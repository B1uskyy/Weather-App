
let locationHeading = document.querySelector(".city");

function displayCityName(city) {

    let cityArray = city.split(",");
    locationHeading.innerText = cityArray[0] + "," +  cityArray[1];
}

export default displayCityName;