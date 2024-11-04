import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Linking } from 'react-native';

const HomeScreen = ({ navigation }) => {
  // Main video gallery items
  const videoItems = Array.from({ length: 20 }, (_, index) => ({
    id: index.toString(),
    title: `Video ${index + 1}`,
    thumbnail: 'https://via.placeholder.com/150',
  }));

  // Special category for "Nigeria Movies" with the provided YouTube link and actual YouTube thumbnail
  const categories = [
    {
      id: 'nigeriaMovies',
      title: 'Nigeria Movies',
      thumbnail: 'https://img.youtube.com/vi/ftRSxOqZ148/hqdefault.jpg', // YouTube thumbnail for Nigeria Movies video
      link: 'https://youtu.be/ftRSxOqZ148?si=O143mO2azDPN2J8c', // YouTube link for Nigeria Movies
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
    <TouchableOpacity style={styles.videoBox}>
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
    paddingBottom: 10,
  },
  categoryBox: {
    width: 100,
    height: 120,
    marginHorizontal: 5,
    backgroundColor: '#f5deb3', // Light beige color
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  categoryTitle: {
    marginTop: 5,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  galleryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    alignSelf: 'flex-start',
  },
  gallery: {
    paddingBottom: 20,
  },
  videoBox: {
    flex: 1,
    height: 100,
    margin: 5,
    backgroundColor: '#add8e6', // Light blue for video boxes
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  thumbnail: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  videoTitle: {
    marginTop: 5,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
