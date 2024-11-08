import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const categories = [
  { id: '1', title: 'Nigeria Movies', screen: 'NigeriaMoviesScreen' },
  { id: '2', title: 'Action Movies', screen: 'ActionMoviesScreen' },
  { id: '3', title: 'Comedy Movies', screen: 'ComedyMoviesScreen' },
  { id: '4', title: 'Drama Movies', screen: 'DramaMoviesScreen' },
  { id: '5', title: 'Horror Movies', screen: 'HorrorMoviesScreen' },
  { id: '6', title: 'Documentaries', screen: 'DocumentaryScreen' },
  { id: '7', title: 'Kids Movies', screen: 'KidsMoviesScreen' },
  { id: '8', title: 'Romantic Movies', screen: 'RomanticMoviesScreen' },
  // Add more categories as needed
];

const CategoriesScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryBox}
      onPress={() => navigation.navigate(item.screen)}
      activeOpacity={0.7} // Active opacity for better touch feedback
    >
      <Text style={styles.categoryText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Browse Categories</Text>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  categoryBox: {
    padding: 18,
    backgroundColor: '#4a90e2', // Blue color for buttons
    marginBottom: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000', // Shadow for depth effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // For Android shadow
  },
  categoryText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});

export default CategoriesScreen;
