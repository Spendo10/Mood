import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

// Movie data with embedded YouTube URLs
const movieData = [
  {
    title: "Baby Teni",
    url: "https://www.youtube.com/embed/EN2-pyAA1GY",
    thumbnail: "https://img.youtube.com/vi/EN2-pyAA1GY/0.jpg",
  },
  {
    title: "Best Comedy Show",
    url: "https://www.youtube.com/embed/Im08P56ANAE",
    thumbnail: "https://img.youtube.com/vi/Im08P56ANAE/0.jpg",
  },
  {
    title: "Bad Boys",
    url: "https://www.youtube.com/embed/2h17hKecSzw",
    thumbnail: "https://img.youtube.com/vi/2h17hKecSzw/0.jpg",
  },
  {
    title: "Chunkers",
    url: "https://www.youtube.com/embed/nhtO8P-cvLw",
    thumbnail: "https://img.youtube.com/vi/nhtO8P-cvLw/0.jpg",
  },
  {
    title: "Zulu Stop",
    url: "https://www.youtube.com/embed/oSsFNTquifE",
    thumbnail: "https://img.youtube.com/vi/oSsFNTquifE/0.jpg",
  },
  {
    title: "Rate Race",
    url: "https://www.youtube.com/embed/127rJwowaAc",
    thumbnail: "https://img.youtube.com/vi/127rJwowaAc/0.jpg",
  },
  {
    title: "Crazy Friend",
    url: "https://www.youtube.com/embed/dXiLaNVaRyw",
    thumbnail: "https://img.youtube.com/vi/dXiLaNVaRyw/0.jpg",
  },
  {
    title: "Jim Carry Funny",
    url: "https://www.youtube.com/embed/8oAE4-qOYGI",
    thumbnail: "https://img.youtube.com/vi/8oAE4-qOYGI/0.jpg",
  },
  {
    title: "Two Millionaires",
    url: "https://www.youtube.com/embed/Jrp1yhcOQaQ",
    thumbnail: "https://img.youtube.com/vi/Jrp1yhcOQaQ/0.jpg",
  },
  {
    title: "The Best Bad Boys",
    url: "https://www.youtube.com/embed/S_y04oedXIc",
    thumbnail: "https://img.youtube.com/vi/S_y04oedXIc/0.jpg",
  },
];

const screenWidth = Dimensions.get('window').width;

const ComedyMoviesScreen = () => {
  const [selectedVideo, setSelectedVideo] = React.useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => setSelectedVideo(item.url)}
    >
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <Text style={styles.movieTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {selectedVideo ? (
        <WebView
          source={{ uri: selectedVideo }}
          style={styles.webview}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowsFullscreenVideo={true}
        />
      ) : (
        <FlatList
          data={movieData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.grid}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 5,
  },
  item: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  thumbnail: {
    width: 150,
    height: 100,
    borderRadius: 8,
  },
  grid: {
    justifyContent: 'center',
  },
  webview: {
    width: '100%',
    height: '100%',
  },
});

export default ComedyMoviesScreen;
