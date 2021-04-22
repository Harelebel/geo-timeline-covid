import Header from '../Header/Header';
import Map from '../Map/Map';
import TimeLine from '../TimeLine/TimeLine';
import './Layout.css'
const Layout = (props) => {
    return (
        <div className="container">
            <div className="col-1-of-9">
                <Header></Header>
            </div>
            <div className="col-8-of-9">

                <div className="row">
                    <div className="row-3-of-4">
                        <Map></Map>
                    </div>
                    <div className="row-1-of-4">
                        <TimeLine></TimeLine>
                    </div>
                </div>
            </div>
        </div>);
}

export default Layout;