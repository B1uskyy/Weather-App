

function displayTodayWeatherTemp(temp) {
    let text = document.querySelector(".today-temp")
    text.innerText = `${temp}°C`;

}

export default displayTodayWeatherTemp;