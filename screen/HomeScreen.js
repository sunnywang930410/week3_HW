import React from 'react';
import { Pressable, View, Image, StyleSheet,Text } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import AlbumList from "../src/component/AlbumList/AlbumList"

const HomeScreen = ({ navigation }) => {
    return(
    <View style={styles.containerStyle}>
        <View style={styles.header}>
            <Pressable onPress={() => navigation.toggleDrawer()}>
                <Image source={{ uri: "https://raw.githubusercontent.com/sunnywang930410/starsimg/main/drawer.png" }} style={{width: 40, height: 40, margin: 8}}/>
            </Pressable>
            <Pressable>
                <Image source={{ uri: "https://raw.githubusercontent.com/sunnywang930410/starsimg/main/Search.png" }} style={{width: 24, height: 24, margin: 18}}/>
            </Pressable>
        </View>
        <ScrollView>
            <AlbumList navigation={navigation} />
        </ScrollView>
    </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#fff',
        marginBottom: 50
    },
    header: {
        paddingHorizontal: 20,
        paddingTop:10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }
})

export default HomeScreen;