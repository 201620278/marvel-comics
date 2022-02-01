import { GoogleMap, useJsApiLoader , Marker} from "@react-google-maps/api";
import React from "react";
import './MapPage.css';

export interface MapPageProp {}

const MapPage = () => {
  const { isLoaded } = useJsApiLoader({
    id:"goole-Maps-script",
    googleMapsApiKey: "AIzaSyCL9pzJTOTsoHXS7ID9-mMsiJ5spGenrVY",
  });

  const position = {
    lat: -7.226661,
    lng: -39.278831,
  };

  return (
  <div className="map">
    {isLoaded ? (
      <GoogleMap
        mapContainerStyle={{width: '100%', height:'100%'}}
        center={position}
        zoom = {15}
      >
        <Marker position = {position} options={{
          label: {
            text: "Aqui estão seus Comis",
            className: "map-marker"
          }
        }}/>
      </GoogleMap>
    ) : (
      <></>
    )}
    </div>
  );
};

export default MapPage;
