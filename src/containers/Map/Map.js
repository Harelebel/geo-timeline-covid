import React, { useCallback, useEffect } from 'react';
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet";
import 'leaflet.markercluster/dist/leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

import './Map.css'
import { mapBoxAccesToken, arcgisUrl } from '../../constants'

const L = window.L;
var mymap;
const Map = () => {

    useEffect(() => {
        console.log('useEffect 1: init Map');
        mymap = L.map('mapid').setView([32.0873550000001, 34.8289590000001], 13);
        L.tileLayer('https://api.mapbox.com/styles/v1/harelebel/cknrdgnsw0pdx17plyrzwoo6a/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: mapBoxAccesToken
        }).addTo(mymap);
    
    }, [])

    const addDataToMap = useCallback((data) => {
        let firstTime, lastTime;
        let markers = data.features.map(loc => {
            const prop = loc.properties;
            firstTime = firstTime === undefined ? prop.fromTime : Math.min(firstTime, prop.fromTime);
            lastTime = lastTime === undefined ? prop.toTime : Math.max(lastTime, prop.toTime);
            const coord = loc.geometry.coordinates;
            const pos = L.latLng(coord[1], coord[0]);
            const marker = L.circleMarker(pos, { title: propToText(prop, "\n") });
            marker.fromTime = prop.fromTime;
            marker.toTime = prop.toTime;
            marker.bindPopup(propToText(prop));
            return marker;
        });
        let markerCluster = L.markerClusterGroup({ chunkedLoading: true });
        markers.forEach(marker => {
            markerCluster.addLayer(marker);
        });

        mymap.addLayer(markerCluster);

    }, [])

    useEffect(() => {
        console.log('useEffect 2: getData');

        fetch(arcgisUrl).then(res => res.json()).then(response => {
            console.log('loaded', response)
            addDataToMap(response)
        });
    }, [addDataToMap])

    const propToText = (prop, sep) => {
        sep = sep || "<br>";
        let text = prop.Place;
        if (prop.Comments) text += sep + prop.Comments;
        text += sep + "הגיע ב " + new Date(prop.fromTime).toLocaleString('he-IL');
        text += sep + "עזב ב " + new Date(prop.toTime).toLocaleString('he-IL');
        return text;
    }

    return (<React.Fragment>
        <div id="mapid"></div>
    </React.Fragment>);
}

export default Map;