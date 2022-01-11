import React, {useEffect, useState} from 'react';
import axios from 'axios';

import SearchIP from './components/SearchIP';
import Map from './components/Map';

function App() {

  const [ipAddress, setIpAddress] = useState('');

  const [resultAddress, setResultAddress] = useState({});
  
  const[city, setCity] = useState('');
  const[country, setCountry] = useState('');
  const[timezone, setTimezone] = useState('');

  const[lat, setLat] = useState('');
  const[lng, setLng] = useState('');


  
  return (
   <>
    <section className="main__section">
      <SearchIP
      
        ipAddress={ipAddress}
        setIpAddress={setIpAddress}
        resultAddress={resultAddress}
        setResultAddress={setResultAddress}
        setCity={setCity}
        city={city}
        country={country}
        setCountry={setCountry}
        timezone={timezone}
        setTimezone={setTimezone}
        setLat={setLat}
        setLng={setLng}

      >
        
      </SearchIP>
      <div className="main__section__top"></div>
     <Map 
      lat={lat}
      lng={lng}
     >
       
     </Map>


    </section>
   </>
  );
}

export default App;
