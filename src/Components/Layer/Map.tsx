// eslint-disable-next-line
import React, {useState} from 'react';
import { Marker } from 'react-google-maps';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  InfoWindow
} from 'react-google-maps';

const Map = () => {
  const driveDetails: any = {
    name: 'Adewale Johnson',
    car: 'Toyota',
    lat: 7.294129094453907,
    lng: 5.149964734890322
  }
  const [selected, setSelected] = useState<any>(null);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{
        lat: 7.251070,
        lng: 5.203540
      }} 
    >
      <Marker
        position={{
          lat:driveDetails.lat, lng: driveDetails.lng
        }}
        onClick={() => setSelected(driveDetails)}
        icon={{
          url: "/delivery-truck.svg",
          scaledSize: new window.google.maps.Size(25, 25)
        }} 
      />
      {selected && (
        <InfoWindow
          position={{
            lat:driveDetails.lat, lng: driveDetails.lng
          }}
          
          onCloseClick={() => setSelected(null)}
        >
          <div>
            <h2>{driveDetails.name}</h2>
            <p>{driveDetails.car}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  )
}
const WrappedMap = withScriptjs(withGoogleMap(Map));
const GOOGLE_KEY = 'AIzaSyCA5537wJQkOqNmtozatmJwTorQS0uX4u4';
console.log({KEY: GOOGLE_KEY})
const googleurl: string = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GOOGLE_KEY}`
export default function MainMap() {
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <WrappedMap
        googleMapURL={googleurl}
        loadingElement={<div style={{height: '100%'}} />}
        containerElement={<div style={{height: '100%'}} />}
        mapElement={<div style={{height: '100%'}} />}
      />
    </div>
  )
}
