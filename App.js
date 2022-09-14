import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./component/Home";
import Profile from "./component/Profile";
import Map from "./component/Map";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Map" component={Map} options={{
              headerShown: false,
            }} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
