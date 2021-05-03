import Header from '../../components/Header/Header';
import Map from '../../components/Map/Map';
import TimeLine from '../../components/TimeLine/TimeLine';
import './Layout.css'
import useIndications from '../../hooks/useIndications';
const Layout = () => { // TODO - how to change architechture ?

    let { daysRange, setDaysRange } = useIndications()

 

    return (
        <div className="container">
            <div className="col-1-of-9">
                <Header daysRange={daysRange}></Header>
            </div>
            <div className="col-8-of-9">

                <div className="row">
                    <div className="row-3-of-4">
                        <Map  daysRange={daysRange}></Map>
                    </div>
                    <div className="row-1-of-4">
                        <TimeLine daysRange={daysRange} setDaysRange={setDaysRange}   ></TimeLine>
                    </div>
                </div>
            </div>
        </div>);
}

export default Layout;