import React, { useState, useCallback, useEffect } from 'react';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import {  arcgisUrl } from '../../constants' 
import './Map.css';
import useIndications from '../../hooks/useIndications';
require('react-leaflet-markercluster/dist/styles.min.css');

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const mapLocation = [32.0873550000001, 34.8289590000001];


const Map = (props) => {
    
    let [markers, setMarkers] = useState();
    const { daysRange } = props;

    const addDataToMap = useCallback((data, daysRange = 7) => {
        //set Markers Data
        let markers = data.features.map(loc => {
            const prop = loc.properties;
            const coord = loc.geometry.coordinates;
            const position = [coord[1], coord[0]];
            // const popUp = propToText(prop, "\n");
            return { position, prop, startDate: prop.fromTime, endDate: prop.toTime }
        });
        //Filter By Date
        markers = markers.filter(marker => new Date(marker.startDate) > new Date(Date.now() - 1000 * 60 * 60 * 24 * Number(daysRange)))
            .map(marker => <Marker position={marker.position} title={propToText(marker.prop, "\n")}>
                <Popup>
                    {propToText(marker.prop,  "\n")}
                </Popup>
            </Marker>)

        setMarkers(markers);

    }, [])

    useEffect(() => {
        console.log('useEffect 2: getData');

        fetch(arcgisUrl).then(res => res.json()).then(response => {
            console.log('loaded', response)
            addDataToMap(response, daysRange)
        });
    }, [addDataToMap, daysRange])

    const propToText = (prop, sep) => {
        sep = sep || "<br>";
        let text = prop.Place;
        if (prop.Comments) text += sep + prop.Comments;
        text += sep + "הגיע ב " + new Date(prop.fromTime).toLocaleString('he-IL');
        text += sep + "עזב ב " + new Date(prop.toTime).toLocaleString('he-IL');
        return text;
    }

    return (<div id="map-container">
        <MapContainer center={mapLocation} zoom={13}  >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup>
                {markers}
            </MarkerClusterGroup>

        </MapContainer>
    </div>);
}

export default Map;