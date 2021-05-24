import React from "react";

const Filter = ( { daysRange, setDaysRange }) => {
    console.log('filter')

    return (<div>  {daysRange} ימים אחרונים 
        <br />
    <input type="range" min="1" max="14" value={daysRange} onChange={event => setDaysRange(Number(event.target.value))} />

    </div>);
}

export default React.memo(Filter);