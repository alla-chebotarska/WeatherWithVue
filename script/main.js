var app = new Vue({
    el: '#weatherContainer',
    data: {
        city: '',
        weather: {},
        wrongCity: false,
        currentWeather: {},
        weekForecast: [{
            day: "Mon1",
            maxTemp: 12,
            minTemp: 3,
            icon: "images/01.svg"
        }, {
            day: "Tue1",
            maxTemp: 12,
            minTemp: 3,
            icon: "images/01.svg"
        },{
            day: "Wed1",
            maxTemp: 12,
            minTemp: 3,
            icon: "images/01.svg"
        },{
            day: "Thu1",
            maxTemp: 12,
            minTemp: 3,
            icon: "images/01.svg"
        },{
            day: "Fri1",
            maxTemp: 12,
            minTemp: 3,
            icon: "images/04.svg"
        }]
    },
    methods: {
        loadWeather: function(){
            this.weather = getWeatherForCity(this.city);
            if (this.weather == null){
                return;
            }  
            this.currentWeather = getCurrentWeather(this.weather);
            this.weekForecast = getWeekForecast(this.weather);
        },
        onInputFocus: function(){
            this.city = '';
            this.weather = {};
        }
    }   
  })