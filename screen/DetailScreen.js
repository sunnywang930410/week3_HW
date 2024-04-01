import React from "react";
import { View, Text, Image, StyleSheet, Pressable, ScrollView} from "react-native";

const DetailScreen = ({ route, navigation }) => { 
  let [flag, setFlag] = React.useState(true);

  let changeImage = () => setFlag(previousState => !previousState);

  let imagePath= flag ? 'https://raw.githubusercontent.com/sunnywang930410/starsimg/main/WishList_active.png' : 'https://raw.githubusercontent.com/sunnywang930410/starsimg/main/bookmarker.png'
  return (
    <View>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source = {{uri: `https://raw.githubusercontent.com/sunnywang930410/starsimg/main/goback.png`}}
            style={{width: 30, height: 30}}
          />
        </Pressable>
        <Pressable onPress={() => changeImage()}>
          <Image
            source = {{uri: imagePath}}
            style={{width: 30, height: 30}}
          />
        </Pressable>
      </View>
      <ScrollView style={{backgroundColor: '#fff'}}>
        <View  style={styles.containerStyle}>
          <Image 
            source={{uri: route.params.image}}
            style={styles.image}
            key={route.params.title}
          />
          <Text style={styles.title}>{route.params.title}</Text>
          <Text style={styles.author}>{route.params.author}</Text>
          <View style={{flex: 1, flexDirection: 'row'}}>
            {route.params.havestar ?<Image source={{uri: route.params.starimg}} style={styles.star}></Image> :null}
            {route.params.havestar ?<Text style={styles.starnumber}>{route.params.starnumber}</Text> :null}
          </View>
          <Text style={styles.text}>{route.params.descriptions}</Text>
          <Pressable style={styles.button}>
            <Text style={{color: '#fff', fontSize: 14}}>
              BUY NOW FOR $49.99
            </Text>
          </Pressable>
        </View>
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create ({
  containerStyle: {
    marginHorizontal: 3,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title : {
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 45,
    marginTop:20
  },
  image: {
    width: 210,
    height: 300,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    marginBottom: 6,
  },
  author: {
    fontSize: 15,
    fontWeight: '300',
    color: "#131313",
    marginTop: 8,
    marginHorizontal: 5
  },
  button: {
    width: 190,
    height: 36,
    backgroundColor: '#6200EE',
    borderRadius: 4,
    marginTop: 20,
    marginBottom: 150, 
    alignItems:'center',
    justifyContent:'center'
  },
  text: {
    width: 320,
    height: 72,
    fontSize: 14,
    fontWeight:"400",
    textAlign:"center",
    lineHeight:24,
    marginTop:16
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  star: {
    width: 86,
    height: 14,
    marginTop:8,
  },
  starnumber:{
    width: 53,
    height: 16,
    marginLeft:8,
    marginTop:4
  }
});

export default DetailScreen;