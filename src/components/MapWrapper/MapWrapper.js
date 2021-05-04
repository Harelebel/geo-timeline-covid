import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import './MapWrapper.css';
import Map from "./Map/Map";
require('react-leaflet-markercluster/dist/styles.min.css');

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const mapLocation = [32.0873550000001, 34.8289590000001];

const MapWrapper = ({ markers: indications,  setBounds }) => {

    const propToText = (prop, sep) => {
        sep = sep || "<br>";
        let text = prop.Place;
        if (prop.Comments) text += sep + prop.Comments;
        text += sep + "הגיע ב " + new Date(prop.fromTime).toLocaleString('he-IL');
        text += sep + "עזב ב " + new Date(prop.toTime).toLocaleString('he-IL');
        return text;
    }
    indications = indications ? indications.map(indication => <Marker position={indication.position} title={propToText(indication.prop, "\n")}>
        <Popup>
            {propToText(indication.prop, "\n")}
        </Popup>
    </Marker>) : null;

    return (<div id="map-container">
        <MapContainer center={mapLocation} zoom={13}  >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup>
                <Map markers={indications} setBounds={setBounds}></Map>
            </MarkerClusterGroup>

        </MapContainer>
    </div>);
}

export default MapWrapper;