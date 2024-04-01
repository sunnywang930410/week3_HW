import React from 'react';
import { View, Text } from 'react-native'
import Header from '../src/component/Header'

const WishListScreen=({navigation})=>{
    return (
      <View>
        <Header navigation={navigation} />
        <Text style={{textAlign:"center",marginTop:250,fontSize:20}}>WishList</Text>
      </View>
    )
}

export default WishListScreen;