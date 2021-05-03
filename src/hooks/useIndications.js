import { useState, useEffect, useCallback } from 'react';
import { arcgisUrl } from '../constants'

const useIndications = () => {
    const [daysRange, setDaysRange] = useState(10);
    let [markers, setMarkers] = useState();

    //setMarkers : relevant for map and for timeline. 

    const addDataToMap = useCallback((data, daysRange = 7) => {
        //set Markers Data
        let markers = data.features.map(loc => {
            const prop = loc.properties;
            const coord = loc.geometry.coordinates;
            const position = [coord[1], coord[0]];
            return { position, prop, startDate: prop.fromTime, endDate: prop.toTime }
        });
        //Filter By Date
        markers = markers.filter(marker => new Date(marker.startDate) > 
        new Date(Date.now() - 1000 * 60 * 60 * 24 * Number(daysRange)))
        setMarkers(markers);
    }, [])

    useEffect(() => {
        console.log('useEffect 2: getData');
        fetch(arcgisUrl).then(res => res.json()).then(response => {
            console.log('loaded', response)
            addDataToMap(response, daysRange)
        });
    }, [addDataToMap, daysRange])

    //next - will be set by boundries to timeline


    return { daysRange, setDaysRange, markers };
}

export default useIndications;