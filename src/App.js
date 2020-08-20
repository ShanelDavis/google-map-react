import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
//bootstrap import here

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 33.7333, lng: 84.3831 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: 33.7557, lng: 84.3884 }} />
      )}
    </GoogleMap>
  ))
);

class App extends Component {
  render() {
    return (
      <div>
        <div className="text-center">
          <h1>GOOGLE MAPS API with REACT JS</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div>Brought to you by ShanelHD</div>
              <div>
                <MyMapComponent
                  isMarkerShown
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAN7mwyR_B3NDDLnuwkLds1RU9IUSBklc8&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `400px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

