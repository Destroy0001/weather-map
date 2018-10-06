import React from 'react';
import { locations } from '../../constants/constants'
import { connect } from 'react-redux';
import { getWeather } from '../../actions/actions';
import './weather.scss';


export class WeatherView extends React.Component {
    constructor(props) {
        super(props);
        this.onlocationClick = this.onLocationClick.bind(this);
    }

    onLocationClick(location) {
        this.props.getWeather(location);
    }
    render() {
        const selectedLocation = this.props.selectedLocation;
        return (
            <div className="weather-container">
                <div className="location-container">
                    <div className="location-picker">
                        {
                            locations.map((location, index) => {
                                return (
                                    <div key={index} className={`location ${ selectedLocation && selectedLocation.id === location.id && 'selected'}`} onClick={() => { this.onLocationClick(location) }}>
                                        <i className="fas fa-map-marker-alt"></i>
                                        <div className="location-name">{location.name}</div>
                                        <div className="location-position">
                                            <span>Lat {location.position.lat}</span>
                                            <span>Long {location.position.lng}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>)
    }
}

function mapStateToProps(state) {
    console.log(state);
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        getWeather: (location) => { dispatch(getWeather(location)); }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WeatherView);