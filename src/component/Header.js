import { StyleSheet, View, Pressable, Image } from 'react-native';

export default function Header({navigation}) {
  return (
    <View style={styles.header}>
      <Pressable onPress={() => navigation.toggleDrawer()}>
        <Image 
          source={{uri: 'https://raw.githubusercontent.com/sunnywang930410/starsimg/main/drawer.png'}}
          style={{width: 40, height: 40, margin: 8}}
        />
      </Pressable>
      <Pressable>
        <Image 
          source={{uri: 'https://raw.githubusercontent.com/sunnywang930410/starsimg/main/Search.png'}}
          style={{width: 24, height: 24, margin: 18}}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});