import { WeatherResponse } from "../model/weatherResponse";


// TODO: Create an async function with an argument called city to return the that of the endpoint
export async  function getResponse(city: string): Promise<WeatherResponse> {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`, {
        method:'GET', 
        redirect: 'follow'
    })
    return response.json(); 
}