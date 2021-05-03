import Filter from '../../components/Filter/Filter';
import MapWrapper from '../../components/MapWrapper/MapWrapper';
import TimeLine from '../../components/TimeLine/TimeLine';
import './Layout.css'
import useIndications from '../../hooks/useIndications';
const Layout = () => { // TODO - how to change architechture ?

    let { daysRange, setDaysRange , markers} = useIndications()

 

    return (
        <div className="container">
            <div className="col-1-of-9">
                <Filter daysRange={daysRange} setDaysRange={setDaysRange}></Filter>
            </div>
            <div className="col-8-of-9">

                <div className="row">
                    <div className="row-3-of-4">
                        <MapWrapper markers={markers}></MapWrapper>
                    </div>
                    <div className="row-1-of-4">
                        <TimeLine markers={markers}></TimeLine>
                    </div>
                </div>
            </div>
        </div>);
}

export default Layout;