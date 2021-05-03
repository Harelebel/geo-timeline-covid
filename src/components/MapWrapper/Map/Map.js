import React, { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet'

const Map = (props) => {
    let { markers } = props;
    const map = useMap()

    // markers = markers ? markers.filter(marker => map.getBounds().contains(marker.props.position)) : null;

    useEffect(() => {

    }, [markers])
    return (<React.Fragment>
        {markers}
    </React.Fragment>
    );
}

export default Map;