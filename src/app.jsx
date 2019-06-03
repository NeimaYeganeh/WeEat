import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import NavBar from "./components/navbar";
import * as pinLocations from "./assets/data/pin-data.json";
import pinIcon from "./assets/imgs/wheat.png";

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 35.2840717,
    longitude: -120.6592698,
    width: "100vw",
    height: "100vh",
    zoom: 15
  });

  const [selectedPin, setSelectedPin] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPin(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <React.Fragment>
      <NavBar />
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {pinLocations.features.map(pin => (
          <Marker
            key={pin.properties.pinID}
            latitude={pin.geometry.coordinates[0]}
            longitude={pin.geometry.coordinates[1]}
          >
            <button
              className="pin-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedPin(pin);
              }}
            >
              <img src={pinIcon} alt="pin-icon" />
            </button>
          </Marker>
        ))}
        {selectedPin ? (
          <Popup
            latitude={selectedPin.geometry.coordinates[0]}
            longitude={selectedPin.geometry.coordinates[1]}
            onClose={() => {
              setSelectedPin(null);
            }}
          >
            <React.Fragment>
              <h2>{selectedPin.properties.pinID}</h2>
            </React.Fragment>
          </Popup>
        ) : null}
      </ReactMapGL>
    </React.Fragment>
  );
}
