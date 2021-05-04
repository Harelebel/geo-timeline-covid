
const Filter = ( { daysRange, setDaysRange }) => {

    return (<div>  {daysRange} ימים אחרונים 
        <br />
    <input type="range" min="1" max="14" value={daysRange} onChange={event => setDaysRange(Number(event.target.value))} />

    </div>);
}

export default Filter;