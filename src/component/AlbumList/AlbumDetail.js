import { View, Text, StyleSheet, Image, Pressable} from 'react-native'

const AlbumDetail = ({ book,  navigation}) => {
  return (
    <View style={styles.containerStyle}>
      <Pressable
        onPress={() => navigation.navigate('AlbumDetail', book)}
      >
        <Image 
          source={{uri: book.image}}
          style={styles.image}
          key={book.title}
        />
        {book.havestar?<Image source={{uri: book.starimg}} style={styles.star}></Image>:null}
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create ({
  containerStyle: {
    marginHorizontal: 3,
    marginTop: 15,
  },
  title : {
    fontWeight: 'bold',
    fontSize: 17,
    lineHeight: 20,
  },
  image: {
    width: 154,
    height: 220,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    marginBottom: 6,
    // resizeMode: 'stretch',
  },
  author: {
    fontSize: 12,
    fontWeight: '300',
    color: "#131313",
    width: '100%',
    marginTop: 0
  },
  star: {
    width: 86,
    height: 14,
    marginTop:16,
    marginBottom:8,
    flex: 1
  }
});

export default AlbumDetail
