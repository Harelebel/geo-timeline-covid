import Header from '../Header/Header';
import Map from '../Map/Map';
import TimeLine from '../TimeLine/TimeLine';
import './Layout.css'
import React ,{useState} from 'react';
const Layout = (props) => {

    const [daysRange,setDaysRange]= useState(5);
 

    return (
        <div className="container">
            <div className="col-1-of-9">
                <Header daysRange={daysRange}></Header>
            </div>
            <div className="col-8-of-9">

                <div className="row">
                    <div className="row-3-of-4">
                        <Map daysRange={daysRange} ></Map>
                    </div>
                    <div className="row-1-of-4">
                        <TimeLine daysRange={daysRange} onChangeRange={setDaysRange}></TimeLine>
                    </div>
                </div>
            </div>
        </div>);
}

export default Layout;