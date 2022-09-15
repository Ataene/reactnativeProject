import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from "tailwind-react-native-classnames"
import MapInfo from './MapInfo'

const Map = () => {
  return (
    <View>
      <View style={tw`h-1/2`}>
        <MapInfo />
      </View>
      <View style={tw`h-1/2`}><Text>Yes</Text></View>
    </View>
  )
}

export default Map

const styles = StyleSheet.create({})