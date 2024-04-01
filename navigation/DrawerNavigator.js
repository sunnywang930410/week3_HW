import { Image } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigator from './TabNavigator'
import AccountScreen from '../screen/AccountScreen'
import SettingScreen from '../screen/SettingScreen'
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
      drawerContent={props => <CustomDrawer {...props} /> } 
      screenOptions={{headerShown: false}} 
    >
      <Drawer.Screen name="Home" component={TabNavigator} 
        options={{
          headerTitle: '',
          headerRight: () => 
          <Image 
            source={{uri: 'https://github.com/sunnywang930410/starsimg/blob/main/Search.png?raw=true'}}
            style={{width: 24, height: 24, margin: 20}}
          />,
          drawerIcon: ({ focused }) => {
            return (
              <Image
                source = {{uri: focused ? `https://raw.githubusercontent.com/sunnywang930410/starsimg/main/home_active.png`:`https://raw.githubusercontent.com/sunnywang930410/starsimg/main/home.png`}}
                style={{width: 25, height: 25}}
              />
            )
          },
          drawerActiveBackgroundColor: '#ece1fc',
          drawerActiveTintColor: '#6200EE',
          drawerInactiveTintColor: '#666'
        }}/>
      <Drawer.Screen name="Account" component={AccountScreen} 
        options={{
          drawerIcon: ({ focused }) => {
            return (
              <Image
                source = {{uri: focused ? `https://raw.githubusercontent.com/sunnywang930410/starsimg/main/account_active.png`:`https://raw.githubusercontent.com/sunnywang930410/starsimg/main/account.png`}}
                style={{width: 25, height: 25}}
              />
            )
          },
          drawerActiveBackgroundColor: '#ece1fc',
          drawerActiveTintColor: '#6200EE',
          drawerInactiveTintColor: '#666',
        }}
      />
      <Drawer.Screen name="Setting" component={SettingScreen} 
        options={{
          drawerIcon: ({ focused }) => {
            return (
              <Image
                source = {{uri: focused ? `https://raw.githubusercontent.com/sunnywang930410/starsimg/main/setting_active.png`:`https://raw.githubusercontent.com/sunnywang930410/starsimg/main/setting.png`}}
                style={{width: 25, height: 25}}
              />
            )
          },
          drawerActiveBackgroundColor: '#ece1fc',
          drawerActiveTintColor: '#6200EE',
          drawerInactiveTintColor: '#666',
        }}
      />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator