import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Linking } from 'react-native';

const HomeScreen = ({ navigation }) => {
  // Video gallery items with specific links and YouTube thumbnails
  const videoItems = [
    { id: '1', title: 'Video 1', thumbnail: 'https://img.youtube.com/vi/x2R1HCz1xzQ/hqdefault.jpg', link: 'https://youtu.be/x2R1HCz1xzQ?si=OvAxAWhheLI8xuLk' },
    { id: '2', title: 'Video 2', thumbnail: 'https://img.youtube.com/vi/I3-lMkyTsc8/hqdefault.jpg', link: 'https://youtu.be/I3-lMkyTsc8?si=UQQciCAB8sUMsDym' },
    { id: '3', title: 'Video 3', thumbnail: 'https://img.youtube.com/vi/Es18TNPzQIY/hqdefault.jpg', link: 'https://youtu.be/Es18TNPzQIY?si=3zYzDaIV_Fpbk448' },
    { id: '4', title: 'Video 4', thumbnail: 'https://img.youtube.com/vi/Unk2KIB3coI/hqdefault.jpg', link: 'https://youtu.be/Unk2KIB3coI?si=2QQULPS3LK4coNB9' },
    // (continue with other videos)
  ];

  // Special category for "Nigeria Movies" with specific YouTube link and thumbnail
  const categories = [
    {
      id: 'nigeriaMovies',
      title: 'Nigeria Movies',
      thumbnail: 'https://img.youtube.com/vi/ftRSxOqZ148/hqdefault.jpg',
      link: 'https://youtu.be/ftRSxOqZ148?si=O143mO2azDPN2J8c',
    },
  ];

  // Render "Nigeria Movies" category as a clickable box
  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryBox} onPress={() => Linking.openURL(item.link)}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <Text style={styles.categoryTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  // Render regular video items for the gallery
  const renderVideoItem = ({ item }) => (
    <TouchableOpacity style={styles.videoBox} onPress={() => Linking.openURL(item.link)}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <Text style={styles.videoTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Text style={styles.heroText}>Welcome to FilmTube</Text>
        <Text style={styles.subText}>Enjoy your favorite movies 24/7</Text>
      </View>
      
      {/* Browse Categories Button */}
      <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate('Categories')}>
        <Text style={styles.categoryButtonText}>Browse Categories</Text>
      </TouchableOpacity>
      
      {/* Nigeria Movies Category */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
      />

      {/* Video Gallery */}
      <Text style={styles.galleryTitle}>Video Gallery</Text>
      <FlatList
        data={videoItems}
        renderItem={renderVideoItem}
        keyExtractor={(item) => item.id}
        numColumns={3} // Layout with 3 items per row
        contentContainerStyle={styles.gallery}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heroSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  heroText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  categoryButton: {
    backgroundColor: '#4682B4',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    marginVertical: 20,
    alignItems: 'center',
  },
  categoryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  categoryList: {
    marginBottom: 20,
  },
  categoryBox: {
    marginRight: 15,
    alignItems: 'center',
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  categoryTitle: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '600',
  },
  galleryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  gallery: {
    paddingBottom: 20,
  },
  videoBox: {
    flex: 1,
    alignItems: 'center',
    margin: 5,
  },
  videoTitle: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
});
