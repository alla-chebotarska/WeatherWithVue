function getWeekForecast(weatherObject) {
    let weatherList = weatherObject.list;
    let weekForecastArray = groupByDays(weatherList);
    console.log(weekForecastArray)
    let a = []
    for (var i = 0; i < weekForecastArray.length; ++i) {
        let preparedDayForecast = getDayForecast(weekForecastArray[i])
        a.push(preparedDayForecast)
    }
    return a;
}

function groupByDays(weatherList) {
    let forecastArray = [];
    let tmpArray = [];
    weatherList.forEach(value => {
        if (tmpArray.length === 0) {
            tmpArray.push(value);
        } else {
            let date = extractDate(value);
            if (extractDate(tmpArray[0]) === date) {
                tmpArray.push(value);
            } else {
                forecastArray.push(tmpArray);
                tmpArray = [value];
            }
        }
    });
    return forecastArray;
}

function extractDate(value) {
    return value.dt_txt.substr(0, 10);
}

function getDayForecast(dayForecastArray) {
    let dayForecast = {};
    dayForecast.day = getDayOfWeek(dayForecastArray[0].dt_txt);
    dayForecast.icon = getDayIcon(dayForecastArray);
    dayForecast.maxTemp = getMaxTemp(dayForecastArray);
    dayForecast.minTemp = getMinTemp(dayForecastArray);
    return dayForecast;
}

function getDayOfWeek(dateText) {
    let tmp = new Date(dateText);
    let weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";
    dayOfWeek = weekday[tmp.getDay()];
    return dayOfWeek;
}

function getDayIcon(dayForecastArray) {
    let today = new Date().getDay();
    let givenDay = new Date(dayForecastArray[0].dt_txt).getDay();
    let dayIcon;
    if (givenDay === today) {
        dayIcon = dayForecastArray[0].weather[0].icon;
    } else {
        dayIcon = dayForecastArray[4].weather[0].icon;
    }
    return getImageSrc(dayIcon);
}

function  getMaxTemp(dayForecastArray){
    let maxTemp = dayForecastArray[0].main.temp;
    for (var i = 1; i < dayForecastArray.length; i++) {
        if (dayForecastArray[i].main.temp > maxTemp) {
            maxTemp = dayForecastArray[i].main.temp;
        }
    }
    return Math.round(maxTemp);
}

function getMinTemp(dayForecastArray){
    let minTemp = dayForecastArray[0].main.temp;
    for (var i = 1; i < dayForecastArray.length; i++) {
        if (dayForecastArray[i].main.temp < minTemp) {
            minTemp = dayForecastArray[i].main.temp;
        }
    }
    return Math.round(minTemp);
}
