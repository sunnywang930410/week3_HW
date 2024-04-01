import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, SectionList, ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';
import Newest from '../../../json/Newest.json';
import Popular from '../../../json/Popular.json';

const AlbumList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Books</Text>
      <FlatList
        horizontal={true}
        data={Popular[0].data}
        renderItem={({ item }) => <AlbumDetail book={item} navigation={navigation} />}
        keyExtractor={item => item.title}
        contentContainerStyle={{ padding: 20 }}
      />
      <Text style={styles.title}>Newest</Text>
      <FlatList
        horizontal={true}
        data={Newest[0].data}
        renderItem={({ item }) => <AlbumDetail book={item} navigation={navigation} />}
        keyExtractor={item => item.title}
        contentContainerStyle={{ padding: 20 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 50
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 25,
    marginTop: 20
  },
  image: {
    width: 140,
    height: 200,
    marginLeft:16
  }
});


export default AlbumList;


