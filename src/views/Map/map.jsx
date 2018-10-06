import React from 'react';
import MapComponent from '../../components/map/map'
import { locations } from '../../constants/constants'
import './map.scss';
export class MapView extends React.Component {

    constructor(props){
        super(props);
        this.sliderRef = React.createRef();
        this.scrollLeft = this.scrollLeft.bind(this);
        this.scrollRight = this.scrollRight.bind(this);
    }

    scrollLeft(){
        this.sliderRef.current.scrollLeft -=275;
    }

    scrollRight(){
        this.sliderRef.current.scrollLeft +=275;
    }

    render() {
        return (
            <div className="map-container">
                <MapComponent markers={locations}>
                </MapComponent>
                <div className="location-container">
                    <i onClick={this.scrollLeft} className="slide-arrow left fa fa-angle-left"></i>
                    <div className="location-slider" ref={this.sliderRef}>
                        {
                            locations.map((location, index) => {
                                return (
                                    <div key={index} className="location">
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

export default MapView;