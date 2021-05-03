import {useState} from 'react';

const useIndications = () => {
    const [daysRange,setDaysRange]= useState(10);
   
    // may filter indications by Date or by Geo 
    return  {daysRange, setDaysRange} ;
}
 
export default useIndications;