import React, {useEffect, useState} from 'react';
import axios from 'axios';

const SearchIP = ({ipAddress, setIpAddress, resultAddress, setResultAddress, setCity, city, country, setCountry, timezone, setTimezone, setLat, setLng}) => {

    const searchIPAdress = async (ipAddress) =>{
        

        const url = ` https://geo.ipify.org/api/v2/country,city?apiKey=at_XPQejlrOwVbPOcQzTUV3201hGfTlh&ipAddress=${ipAddress}`;

        const result = await axios.get(url);

        console.log(result.data);
        setResultAddress(result.data);
        setCity(result.data.location.region);
        setCountry(result.data.location.country);
        setTimezone(result.data.location.timezone);
        setLat(result.data.location.lat);
        setLng(result.data.location.lng);


        
    }

    


    return ( 
        <>
            <div className="search__container">
                <div className="search__title__container">
                    <h1 className="title">IP Address Tracker</h1>
                </div>

                <div className="search__input__container">
                    <input type="text" className="input__search" value={ipAddress} onChange={(e) => setIpAddress(e.target.value)} />
                    <div className="button__search" onClick={()=> searchIPAdress(ipAddress)}></div>
                </div>

                <div className="searc__result__container">

                    <div className="information__container">
                        <p className="information__title">IP ADDRESS</p>
                        <p className="information__description">{resultAddress.ip}</p>
                    </div>
                    <div className="information__container">
                         <p className="information__title">LOCATION</p>
                        <p className="information__description">{city} {country}</p>
                    </div>
                    <div className="information__container">
                      <p className="information__title">TIMEZONE</p>
                        <p className="information__description">{timezone}</p>
                    </div>
                    <div className="information__container">
                         <p className="information__title">ISP</p>
                        <p className="information__description">{resultAddress.isp}</p>
                    </div>

                </div>
            </div>
        </>
     );
}
 
export default SearchIP;