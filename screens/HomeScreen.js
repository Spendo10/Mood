import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image, Linking } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Categories and video data
  const categories = [
    { id: '1', title: 'Nigeria Movies', thumbnail: 'https://img.youtube.com/vi/ftRSxOqZ148/hqdefault.jpg', link: 'https://youtu.be/ftRSxOqZ148?si=O143mO2azDPN2J8c' },
    { id: '2', title: 'Action Movies', thumbnail: 'https://img.youtube.com/vi/ftRSxOqZ148/hqdefault.jpg', link: 'https://youtu.be/ftRSxOqZ148?si=O143mO2azDPN2J8c' },
  ];
  
  const videoItems = [
    { id: '1', title: 'Video 1', thumbnail: 'https://img.youtube.com/vi/x2R1HCz1xzQ/hqdefault.jpg', link: 'https://youtu.be/x2R1HCz1xzQ?si=OvAxAWhheLI8xuLk' },
    { id: '2', title: 'Video 2', thumbnail: 'https://img.youtube.com/vi/I3-lMkyTsc8/hqdefault.jpg', link: 'https://youtu.be/I3-lMkyTsc8?si=UQQciCAB8sUMsDym' },
  ];

  // Fetch Google search results
  const fetchGoogleResults = async (query) => {
    try {
      const apiURL = `https://www.googleapis.com/customsearch/v1?key=AIzaSyB8JoYTbg6vSTaNDNE-wROluQP0BFfY6Gs&cx=a1c30b32dcb4f4e2b&q=${query}`;
      const response = await fetch(apiURL);
      const data = await response.json();

      if (data.items) {
        return data.items.map(item => ({
          id: item.cacheId || item.link,
          title: item.title,
          description: item.snippet,
          link: item.link
        }));
      } else {
        console.warn("No search results found.");
        return [];
      }
    } catch (error) {
      console.error('Error fetching Google results:', error);
      return [];
    }
  };

  // Handle search and navigate to SearchResultsScreen
  const handleSearch = async () => {
    const results = await fetchGoogleResults(searchQuery);
    navigation.navigate('SearchResults', { results }); // Ensure name matches in App.js
  };

  // Render functions for categories and videos
  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryBox} onPress={() => Linking.openURL(item.link)}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <Text style={styles.categoryTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderVideoItem = ({ item }) => (
    <TouchableOpacity style={styles.videoBox} onPress={() => Linking.openURL(item.link)}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <Text style={styles.videoTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.heroSection}>
        <Text style={styles.heroText}>Welcome to FilmTube</Text>
        <Text style={styles.subText}>Enjoy your favorite movies 24/7</Text>
      </View>

      <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate('Categories')}>
        <Text style={styles.categoryButtonText}>Browse Categories</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
      />

      <Text style={styles.galleryTitle}>Video Gallery</Text>
      <FlatList
        data={videoItems}
        renderItem={renderVideoItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.gallery}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  searchSection: { flexDirection: 'row', marginBottom: 20 },
  searchInput: { flex: 1, borderColor: '#ccc', borderWidth: 1, borderRadius: 8, padding: 10 },
  searchButton: { padding: 10, backgroundColor: '#4682B4', borderRadius: 8, marginLeft: 10 },
  searchButtonText: { color: '#fff', fontWeight: 'bold' },
  heroSection: { alignItems: 'center', marginBottom: 20 },
  heroText: { fontSize: 24, fontWeight: 'bold' },
  subText: { fontSize: 16, color: '#666', marginTop: 5 },
  categoryButton: { backgroundColor: '#4682B4', padding: 15, borderRadius: 8, marginVertical: 20, alignItems: 'center' },
  categoryButtonText: { color: '#fff', fontSize: 18, fontWeight: '600' },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', alignSelf: 'flex-start', marginBottom: 10 },
  categoryList: { marginBottom: 20 },
  categoryBox: { marginRight: 15, alignItems: 'center' },
  thumbnail: { width: 100, height: 100, borderRadius: 8 },
  categoryTitle: { marginTop: 5, fontSize: 14, fontWeight: '600' },
  galleryTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  gallery: { paddingBottom: 20 },
  videoBox: { flex: 1, alignItems: 'center', margin: 5 },
  videoTitle: { marginTop: 5, fontSize: 14, textAlign: 'center' },
});

export default HomeScreen;
