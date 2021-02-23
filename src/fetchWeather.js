import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather';

const API_KEY = '35fe821649281c6261a4665c8b18219b'

export const fetchWeather = async (query) => {

    const { data } = await axios.get(URL, {
        params: {

        q: query,
        units: 'metric',
        APPID: API_KEY,

         }
    });

    return data;
}

