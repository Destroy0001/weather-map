import axios from 'axios';
import {
    WEATHER_API_KEY
} from '../constants/constants';

export const getWeather = (location) => {
    return (dispatch) => {
        dispatch({
            type: "SELECT_LOCATION",
            state: {
                selectedLocation: location
            }
        });

        dispatch({
            type: "GETTING_WEATHER_REPORT"
        });

        /* API call to get weather data to be done here  */
        getWeatherData(location).then(data => {

            dispatch({
                    type: "SAVE_WEATHER_REPORT",
                    state: {
                        weatherReport: {
                            loading: false,
                            data: data.data.forecast.forecastday
                        }
                    }
                })
        }).catch(error => {
            console.error(error);
        })

    }
}

const getWeatherData = (location) => {
    return axios.get('http://api.apixu.com/v1/forecast.json', {
        params: {
            q: `${location.position.lat},${location.position.lng}`,
            key: WEATHER_API_KEY,
            days: 7,
        }
    });
}