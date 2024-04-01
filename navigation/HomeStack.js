import { Image } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screen/HomeScreen'
import DetailScreen from '../screen/DetailScreen'

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home Page" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="AlbumDetail" component={DetailScreen} 
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
  )
}

export default HomeStack