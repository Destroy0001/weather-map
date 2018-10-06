const initState = {
    selectedLocation: null,
    weatherReport: {
        loading: false,
        data: null,
    },
}
const assign = Object.assign;
export default (state = initState, action) => {

    switch (action.type) {
        case 'SELECT_LOCATION':
            return assign({}, state, {
                    selectedLocation: action.state.selectedLocation
            });
        case 'LOADING_WEATHER_REPORT':
            return assign({}, state, {
                weatherRepor:{
                    loading: true
                }
            });
        case 'UPDATE_WEATHER_REPORT':
            return  assign({}, state, {
                weatherRepor: {
                    loading: false,
                    data: action.state.weatherReport.data
                }
            });
        default:
            return state;
    }

}