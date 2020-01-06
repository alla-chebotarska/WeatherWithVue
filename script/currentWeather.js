function getCurrentWeather(weather){
    let todayWeather = weather.list[0];
    let current = {};
    current.description = todayWeather.weather[0].description;
    current.icon = getImageSrc(todayWeather.weather[0].icon);
    current.temp = Math.round(todayWeather.main.temp);
    current.humidity = todayWeather.main.humidity;
    current.windSpeed = todayWeather.wind.speed;
    return current;
}

function getImageSrc(weatherImageId) {
    let ImageForShow;
    if (weatherImageId.startsWith('01') || weatherImageId.startsWith('02')) {
        ImageForShow = weatherImageId;
    } else {
        ImageForShow = weatherImageId.substr(0, 2);
    }
    return 'images/' + ImageForShow + '.svg';
}