import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import styles from './map.styles'
import { MAPS_API_KEY } from '../../constants/constants';
export class MapComponent extends React.Component {
    render() {

        //creating markers for each location passed in props
        const markerIcon = {
            url: "/assets/images/marker.svg",
            scaledSize: new this.props.google.maps.Size(27, 30)
        }
        const markers = (this.props.markers || []).map(
            (marker, index) => {
                return (<Marker key={index} position={marker.position} name={marker.name} icon={markerIcon} />);
            }
        )
        return (
            <Map
                google={this.props.google}
                zoom={12}
                styles={styles}
                initialCenter={{
                    lat: 28.6139,
                    lng: 77.2090
                }}
                disableDefaultUI={true}
            >
                {markers}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: MAPS_API_KEY,
})(MapComponent)