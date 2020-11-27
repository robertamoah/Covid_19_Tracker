import React, { Fragment, useEffect, useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Button, Icon, Label } from "semantic-ui-react";
const MapMain = (mapProps) => {
  const [selectedPark, setselectedPark] = useState(null);
  const [viewPoint, setViewPoint] = useState({
    latitude: 40.9129,
    longitude: -74.1627,
    width: "25vw",
    height: "40vh",
    zoom: 2,
  });

  useEffect(() => {
    if (mapProps.mapProps !== "null") {
      setViewPoint({
        latitude: mapProps.mapProps.countryInfo.lat,
        longitude: mapProps.mapProps.countryInfo.long,
        width: "25vw",
        height: "40vh",
        zoom: 9,
      });
    }

    // console.log("wee okay", mapProps.mapProps);
  }, [mapProps.mapProps]);

  return (
    <Fragment>
      <ReactMapGL
        {...viewPoint}
        mapboxApiAccessToken="pk.eyJ1Ijoicm9iZXJ0YW1vYWgiLCJhIjoiY2p6NDVmcTZ4MGFxZjNkcDYybWYxeTY3cCJ9.7GpGK5SyB-Z8xdfy00gLig"
        mapStyle="mapbox://styles/robertamoah/ckgglwikx1wnf19p71r89a9wj"
        onViewportChange={(viewport) => {
          setViewPoint(viewport);
        }}
      >
        {mapProps.mapMaker !== ""
          ? mapProps.mapMaker.map((element) => {
              return (
                <>
                  <Marker
                    key={
                      element.countryInfo.iso3 + Math.floor(Math.random() * 10)
                    }
                    latitude={element.countryInfo.lat}
                    longitude={element.countryInfo.long}
                  >
                    <img
                      style={{ width: "40px" }}
                      onClick={() => setselectedPark(element)}
                      src={element.countryInfo.flag}
                    />
                  </Marker>

                  {selectedPark ? (
                    <Popup
                      style={{ width: "10px", font: "5px" }}
                      latitude={element.countryInfo.lat}
                      longitude={element.countryInfo.long}
                    >
                      <Button as="div" labelPosition="right">
                        <Button color="red">
                          <Icon name="heart" />
                          Test
                        </Button>
                        <Label as="a" basic color="red" pointing="left">
                          {element.tests}
                        </Label>
                      </Button>
                    </Popup>
                  ) : (
                    ""
                  )}
                </>
              );
            })
          : null}
      </ReactMapGL>
    </Fragment>
  );
};

export default MapMain;
