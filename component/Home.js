import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import Navigation from "./Navigation";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

import tw from "tailwind-react-native-classnames"

const Home = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
            }}
            source={{
              uri: "https://is4-ssl.mzstatic.com/image/thumb/Purple116/v4/77/37/e2/7737e20a-d05a-6b52-6be6-b4170e9d8141/AppIcon-0-1x_U007emarketing-0-6-0-85-220.png/1200x600wa.png",
            }}
          />
          <GooglePlacesAutocomplete
            placeholder="Where from?"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}

            styles={{
              container: {
                flex: 0,
              },
              textInput: {
                fontSize: 18,
              },
            }}
            onPress={(data, details = null) => {
              console.log(data, details);
            }}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
          />
        <Navigation />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#16213E",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "400px",
  },
});
