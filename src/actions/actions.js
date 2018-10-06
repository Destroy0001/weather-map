//import axios from 'axios';
//import {WEATHER_API_KEY} from '../constants/constants';

export const getWeather = (location) => {
    return (dispatch) => {
        dispatch({
            type: "SELECT_LOCATION",
            state: {
                selectedLocation: location
            }
        });

        dispatch({
            type: "GETTING_WEATHER_REPORT",
        });

        /* API call to get weather data to be done here  */
    }
}

/*const getWeatherData = (location) => {
    return axios.get()
}*/