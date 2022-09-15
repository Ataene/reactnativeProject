import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";

const MapInfo = () => {
  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {/* {origin?.location && ( */}
        <Marker
          coordinate={{
            latitude: 37.788,
            longitude: -122.432,
            // latitude: origin.location.lat,
            // longitude: origin.location.lng,
          }}
          identifier="origin"
          title="origin"
        //   description={origin.description}
        />
      {/* )} */}
    </MapView>
  );
};

export default MapInfo;

const styles = StyleSheet.create({});
