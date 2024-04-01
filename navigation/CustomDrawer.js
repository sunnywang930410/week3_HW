import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props} >
        <View style={styles.container}>
            <Image 
                source = {{uri: 'https://raw.githubusercontent.com/sunnywang930410/starsimg/main/May.png'}}
                style={styles.image}
            />
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>May</Text>
        </View>
        
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
    image: {
        width: 55, 
        height: 55, 
        borderRadius: 100, 
        marginBottom: 15
    },
    container: {
        marginTop:40, 
        marginBottom:30,
        paddingHorizontal: 20, 
        borderBottomColor: '#eee', 
        borderBottomWidth: 1
    }
  });

export default CustomDrawer