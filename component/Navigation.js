import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"
import { Icon } from "@rneui/themed";
import { useNavigation } from '@react-navigation/native';

const data = [
    {
    id: "1",
    title: 'rideLuxeEv',
    image: "data:image/jpeg;base64,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",
    screen: "Home"
},
{
    id: "2",
    title: 'Get Exclusive',
    image: "https://is4-ssl.mzstatic.com/image/thumb/Purple116/v4/77/37/e2/7737e20a-d05a-6b52-6be6-b4170e9d8141/AppIcon-0-1x_U007emarketing-0-6-0-85-220.png/1200x600wa.png",
    screen: "Map"
}
]

const Navigation = () => {

    const navigation = useNavigation()

  return (
    <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate(item.screen)} style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                <View>
                    <Image 
                    style={{width: 120, height: 120, resizeMode: "contain"}}
                    source={{uri: item.image}}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon
                        name='rowing' 
                    />
                </View>
            </TouchableOpacity>
        )}
      />
  )
}

export default Navigation

const styles = StyleSheet.create({})