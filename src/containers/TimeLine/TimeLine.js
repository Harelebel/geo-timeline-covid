import React from 'react';
import './TimeLine.css';

const TimeLine = (props) => {
    let { daysRange } = props
    const calcDateRange = (event) => {
        props.onChangeRange(Number(event.target.value))
    }

    return (<div>
        <input type="range" min="1" max="14" value={daysRange} onChange={event => calcDateRange(event)} />
        <span>
        ימים לאחור {daysRange} 
        </span>
    </div>);
}

export default TimeLine;