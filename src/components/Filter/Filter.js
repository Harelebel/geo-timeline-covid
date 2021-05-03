
const Filter = (props) => {
    const { daysRange, setDaysRange } = props;

    return (<div>Header Component :  {daysRange}
        <br />
    סטטיסטיקה על האיזור הנבחר : בכרטסיות
    <input type="range" min="1" max="14" value={daysRange} onChange={event => setDaysRange(Number(event.target.value))} />

    </div>);
}

export default Filter;