import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


function Map() {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDU_3d_hKsF9zX-4hdr3yEu2zM-ruddZm4"
    })

    {/* For some horrible reason this api requires the styles for the map
    to be contained here and passed into the map object, also requires absolute height sizing
    or it will render nothing. */}
    const containerStyle = {
        width: "100%",
        height: "400px",
    };

    {/* Locations of markers */}
    const catalystBuilding = {lat: 47.6582806, lng: -117.4042496}
    const spokaneValleyMall = {lat: 47.6735502, lng: -117.2099367}
    const northTownMall = {lat: 47.7021855, lng: -117.4110694}
    const ewuCheney = {lat: 47.4906616, lng: -117.5869764}
    const northWestBlvd = {lat: 47.6885503, lng: -117.4691484}
    function createMarkers(){
        let markers = [catalystBuilding, spokaneValleyMall, northTownMall, ewuCheney, northWestBlvd]
        return markers.map((x,i) => <Marker key={i} position={x}/>) 
    }


    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={catalystBuilding}
            zoom={10}
        >
            { /* Child components, such as markers, info windows, etc. */ }
            {createMarkers()}
            
        </GoogleMap>
    ) : <h1>Map failed to load.</h1>
}

export default React.memo(Map)