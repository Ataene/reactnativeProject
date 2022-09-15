import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState } from "react";

export const LocationProvider = createContext();

const LocationProvider = (props) => {
  const children = props.children;

  const [origin, setOrigin] = useState([]);
  const [description, setDestination] = useState([]);
  const theValues = {
    origin,
    setOrigin,
    destination,
    setDestination,
  };

  return (
    <LocationProvider.Provider value={theValues}>
      {children}
    </LocationProvider.Provider>
  );
};
export default LocationProvider;

const styles = StyleSheet.create({});
