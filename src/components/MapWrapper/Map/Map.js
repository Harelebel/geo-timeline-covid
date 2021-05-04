import React, { useEffect } from 'react';
import { useMap, useMapEvents } from 'react-leaflet'
// THIS COMPONENT EXISTS ONLY BEACUSE IT WAS NOT POSSIBLE TO USE useMapEvents IN MapWrapper 
const Map = ({ markers, bounds, setBounds }) => {
    const map = useMap();
    useMapEvents({
        dragend: (leafletEvent) => {
            console.log(leafletEvent + 'dragend')
            setBounds(map.getBounds())
        },
        zoomend: (leafletEvent) => {
            console.log(leafletEvent + 'zoom')
            setBounds(map.getBounds())

        }
    })

    useEffect(() => {
        setBounds(map.getBounds())
        // eslint-disable-next-line
    }, [])

    return (<React.Fragment>
        {markers}
    </React.Fragment>
    );
}

export default Map;


