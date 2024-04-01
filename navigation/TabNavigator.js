import { Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WishListStack from './WishListStack';
import HomeStack from './HomeStack';
import MyBooksStack from './MyBooksStack';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
            size = focused ? 25 : 20;
          } else if (route.name === 'Wishlist') {
            iconName = 'nav_bookmark';
            size = focused ? 25 : 20;
          } else if (route.name === 'My Books') {
            iconName = 'mybook';
            size = focused ? 25 : 20;
          }
          return (
            <Image
              source = {{uri: focused ? `https://github.com/Joanne0119/book_app/blob/master/assets/image/icon/icon_${iconName}_actived.png?raw=true`:`https://github.com/Joanne0119/book_app/blob/master/assets/image/icon/icon_${iconName}.png?raw=true`}}
              style={{width: size, height: size, marginTop: 12}}
            />
          )
        }
      })}
      tabBarOptions={{
        activeTintColor: '#6200EE',
        inactiveTintColor: '#666',
        showLabel: true,
        labelStyle: { fontSize: 14, fontWeight: 500, marginTop: 5},
        showIcon: true,
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} options={{headerShown: false}}/>
      <Tab.Screen name="Wishlist" component={WishListStack} options={{headerShown: false}}/>
      <Tab.Screen name="My Books" component={MyBooksStack} options={{headerShown: false}}/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigator