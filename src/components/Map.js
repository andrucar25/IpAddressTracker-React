import React, {useEffect} from 'react'

import L from 'leaflet';
import { MapContainer, TileLayer, Marker, useMap} from 'react-leaflet';

import locationicon from '../images/icon-location.svg';

const Map = ({lat, lng}) => {

    const pointerIcon = new L.Icon({
        iconUrl: locationicon,
        iconRetinaUrl: locationicon,
      });

      const MoveMap = ({ center }) => {
        const map = useMap();
        map.setView(center, 13);
        return null;
      };

    
    return (  
        <>
         <div className="main__section__bot">
             
             {lat && lng ? 
             (
                <MapContainer className="map-position" center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
                    <MoveMap center={[lat, lng]} />
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[lat, lng]}
                         icon={pointerIcon}
                    >

                    </Marker>
             </MapContainer>
             )
             : null}
           
         </div>
           
        </>
    );
}
 
export default Map;