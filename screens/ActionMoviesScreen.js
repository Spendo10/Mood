import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Linking } from 'react-native';

const actionVideos = [
  { id: '1', title: 'Outsource', url: 'https://m.youtube.com/watch?v=TjRIXx5gH1I', thumbnail: 'https://img.youtube.com/vi/TjRIXx5gH1I/0.jpg' },
  { id: '2', title: 'My Home Town', url: 'https://m.youtube.com/watch?v=PxXFtF9ldTs', thumbnail: 'https://img.youtube.com/vi/PxXFtF9ldTs/0.jpg' },
  { id: '3', title: 'The Gang Killer', url: 'https://m.youtube.com/watch?v=bqym0hsJQbM', thumbnail: 'https://img.youtube.com/vi/bqym0hsJQbM/0.jpg' },
  { id: '4', title: 'BAD Boys', url: 'https://m.youtube.com/watch?v=UI93klxBNZo', thumbnail: 'https://img.youtube.com/vi/UI93klxBNZo/0.jpg' },
  { id: '5', title: 'Legend 2', url: 'https://m.youtube.com/watch?v=45k01lWIv0k', thumbnail: 'https://img.youtube.com/vi/45k01lWIv0k/0.jpg' },
  { id: '6', title: 'The Wild Robot', url: 'https://m.youtube.com/watch?v=Unk2KIB3coI', thumbnail: 'https://img.youtube.com/vi/Unk2KIB3coI/0.jpg' },
  { id: '7', title: 'Halo', url: 'https://m.youtube.com/watch?v=8dhNkw2x5Ac', thumbnail: 'https://img.youtube.com/vi/8dhNkw2x5Ac/0.jpg' },
  { id: '8', title: 'Bunker', url: 'https://m.youtube.com/watch?v=DezUK1dPJG8', thumbnail: 'https://img.youtube.com/vi/DezUK1dPJG8/0.jpg' },
  { id: '9', title: 'Blockbuster', url: 'https://m.youtube.com/watch?v=mubhFnDNdHY', thumbnail: 'https://img.youtube.com/vi/mubhFnDNdHY/0.jpg' },
  { id: '10', title: 'Die Now', url: 'https://m.youtube.com/watch?v=FlqJrqPNiW4', thumbnail: 'https://img.youtube.com/vi/FlqJrqPNiW4/0.jpg' },
  { id: '11', title: '2024 Special Force', url: 'https://m.youtube.com/watch?v=ENw-DR8ACTU', thumbnail: 'https://img.youtube.com/vi/ENw-DR8ACTU/0.jpg' },
];

const ActionMoviesScreen = () => {
  const renderVideoItem = ({ item }) => (
    <TouchableOpacity style={styles.videoItem} onPress={() => Linking.openURL(item.url)}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Action Movies</Text>
      <FlatList
        data={actionVideos}
        renderItem={renderVideoItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 16,
    color: '#333',
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  videoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  title: {
    fontSize: 16,
    color: '#444',
  },
});

export default ActionMoviesScreen;
