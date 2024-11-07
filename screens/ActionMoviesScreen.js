// ActionMoviesScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const actionVideos = [
  { id: '1', title: 'Outsource', url: 'https://m.youtube.com/watch?v=example1', thumbnail: 'https://example.com/thumbnail1.jpg' },
  { id: '2', title: 'My Home Town', url: 'https://m.youtube.com/watch?v=example2', thumbnail: 'https://example.com/thumbnail2.jpg' },
  { id: '3', title: 'The Gang Killer', url: 'https://m.youtube.com/watch?v=example3', thumbnail: 'https://example.com/thumbnail3.jpg' },
  { id: '4', title: 'BAD Boys', url: 'https://m.youtube.com/watch?v=example4', thumbnail: 'https://example.com/thumbnail4.jpg' },
  { id: '5', title: 'Legend 2', url: 'https://m.youtube.com/watch?v=example5', thumbnail: 'https://example.com/thumbnail5.jpg' },
  { id: '6', title: 'The Wild Robot', url: 'https://m.youtube.com/watch?v=example6', thumbnail: 'https://example.com/thumbnail6.jpg' },
  { id: '7', title: 'Halo', url: 'https://m.youtube.com/watch?v=example7', thumbnail: 'https://example.com/thumbnail7.jpg' },
  { id: '8', title: 'Bunker', url: 'https://m.youtube.com/watch?v=example8', thumbnail: 'https://example.com/thumbnail8.jpg' },
  { id: '9', title: 'Blockbuster', url: 'https://m.youtube.com/watch?v=example9', thumbnail: 'https://example.com/thumbnail9.jpg' },
  { id: '10', title: 'Die Now', url: 'https://m.youtube.com/watch?v=example10', thumbnail: 'https://example.com/thumbnail10.jpg' },
  { id: '11', title: '2024 Special Force', url: 'https://m.youtube.com/watch?v=example11', thumbnail: 'https://example.com/thumbnail11.jpg' },
];

const ActionMoviesScreen = ({ navigation }) => {
  const renderVideoItem = ({ item }) => (
    <TouchableOpacity style={styles.videoItem} onPress={() => navigation.navigate('VideoPlayer', { url: item.url })}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={actionVideos}
        renderItem={renderVideoItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  videoItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  thumbnail: {
    width: 100,
    height: 100,
    marginRight: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ActionMoviesScreen;
