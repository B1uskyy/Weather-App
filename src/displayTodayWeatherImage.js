
function displayTodayWeatherImage(imageName) {
    let image = document.querySelector(".today-weather-image");
    image.style.display = "block";

    image.src = `../src/images/${imageName}.svg`;

}


export default displayTodayWeatherImage