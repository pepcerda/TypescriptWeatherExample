import { DayOfWeek, WeatherIcon, WeatherIcontype, WeatherResponse } from "../model/weatherResponse";

// TODO: Create references for all the html elements
export const buttonClick = document.getElementById("button-location") as HTMLButtonElement;
const weatherIconPng = document.getElementById("weather-icon");
const dateDayname = document.getElementById("date-dayname");
const dateDay = document.getElementById("date-day");
const locationText = document.getElementById("location-text");
const weatherTemp = document.getElementById("weather-temp");
const weatherDesc = document.getElementById("weather-desc");
const maxTemp = document.getElementById("text-temp-max");
const minTemp = document.getElementById("text-temp-min");
const wind = document.getElementById("text-humidity");
const humidity = document.getElementById("text-wind");
const weatherLocation = document.getElementById("weather-location-input") as HTMLInputElement;


// TODO: Create the logic of the function
export const updateInterface = (weather: WeatherResponse) :void => {
    dateDayname!.innerText = getDayOfWeek(); 
    dateDay!.innerText = getDate(); 
    locationText!.innerText = weather.name; 
    weatherTemp!.innerText = weather.main.temp.toString() + ' ºC';
    weatherDesc!.innerText = weather.weather[0].description; 
    maxTemp!.innerText = weather.main.temp_max.toString() + ' ºC';
    minTemp!.innerText = weather.main.temp_min.toString() + ' ºC';
    wind!.innerText = weather.wind.speed.toString() + ' m/s';
    humidity!.innerText = weather.main.humidity.toString() + ' %';
    changeWeatherIcon(weather.weather[0].icon); 
}

// TODO: Get the city from the input element
export function getCity(): string {
    buttonClick.disabled = true; 
    if(weatherLocation) {
        return weatherLocation.value;    
    }
    return "";
}

function getDayOfWeek(): string {
    let day = new Date();
    return DayOfWeek[day.getDay()];
}

function getDate(): string {
    let date = new Date();
    return date.toLocaleDateString("es-ES");
}

function changeWeatherIcon(weatherImageRef: string) {
    const weatherMap = [weatherImageRef];
    validateImage(weatherMap);
    const mappedWeather = weatherMap.map(weather => WeatherIcon[weather])[0] ?? WeatherIcon["01d"];
    if(typeof mappedWeather[0] === "string") {
        if (weatherIconPng) (weatherIconPng as HTMLImageElement).src = mappedWeather;
    }
}

function validateImage(values: string[]): asserts values is WeatherIcontype[] {
    if (!values.every(isValidImage)) {
        throw Error('invalid image');    
    }
}

function isValidImage(value: string): value is WeatherIcontype {
    return value in WeatherIcon;
}