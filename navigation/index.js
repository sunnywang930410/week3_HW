import { StatusBar, StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './DrawerNavigator'

const Navigation = () => {
  return (
    <NavigationContainer initialRouteName="Home">
      <StatusBar />
      <DrawerNavigator />
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})