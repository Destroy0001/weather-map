import React from 'react';
import MapComponent from '../../components/map/map'
import { locations } from '../../constants/constants'
import { connect } from 'react-redux';
import { getWeather } from '../../actions/actions';
import './map.scss';


export class MapView extends React.Component {

    constructor(props) {
        super(props);
        this.sliderRef = React.createRef();
        this.scrollLeft = this.scrollLeft.bind(this);
        this.scrollRight = this.scrollRight.bind(this);
        this.onlocationClick = this.onLocationClick.bind(this);
    }

    scrollLeft() {
        this.sliderRef.current.scrollLeft -= 300;
    }

    scrollRight() {
        this.sliderRef.current.scrollLeft += 300;
    }

    onLocationClick(location) {
       this.props.getWeather(location);
    }

    render() {
        return (
            <div className="map-container">
                <MapComponent markers={locations} onMarkerClick={this.onLocationClick}>
                </MapComponent>
                <div className="location-container">
                    <i onClick={this.scrollLeft} className="slide-arrow left fa fa-angle-left"></i>
                    <div className="location-slider" ref={this.sliderRef}>
                        {
                            locations.map((location, index) => {
                                return (
                                    <div key={index} className="location" onClick={() => { this.onLocationClick(location) }}>
                                        <div className="location-name"> <i className="fas fa-map-marker-alt"></i><span>{location.name}</span></div>
                                        <div className="location-position">
                                            <span>Lat {location.position.lat}</span>
                                            <span>Long {location.position.lng}</span>
                                        </div>
                                        {(index < locations.length - 1) && <div className="location-separator"></div>}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <i onClick={this.scrollRight} className="slide-arrow right fa fa-angle-right"></i>
                </div>
            </div>

        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getWeather: (location) => { dispatch(getWeather(location)); }
    }
}


export default connect(null, mapDispatchToProps)(MapView);