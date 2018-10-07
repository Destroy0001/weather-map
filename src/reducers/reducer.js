const initState = {
    selectedLocation: null,
    weatherReport: {
        loading: false,
        data: null,
    },
}
const assign = Object.assign;
export default (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case 'SELECT_LOCATION':
            return assign({}, state, {
                    selectedLocation: action.state.selectedLocation
            });
        case 'LOADING_WEATHER_REPORT':
            return assign({}, state, {
                weatherReport: action.state.weatherReport
            });
        case 'SAVE_WEATHER_REPORT':
            return  assign({}, state, {
                weatherReport: action.state.weatherReport
            });
        default:
            return state;
    }

}