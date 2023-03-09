import Map from "./map/Map";

export default function Locations(){

    return(
        <div id="locations">

            {/* TODO: Add words above the map about the locations */}

            <div id='google-map'>
                <Map/>
            </div>
        </div>
    );

}