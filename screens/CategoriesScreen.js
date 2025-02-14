import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

// Categories data with screen names for navigation
const categories = [
  { id: '1', title: 'Nigeria Movies', screen: 'NigeriaMovies' },
  { id: '2', title: 'Action Movies', screen: 'ActionMovies' },
  { id: '3', title: 'Comedy Movies', screen: 'ComedyMovies' }, // Ensure this is correct
  { id: '4', title: 'Horror Movies', screen: 'HorrorMovies' },
  { id: '5', title: 'Documentaries', screen: 'DocumentaryScreen' },
  { id: '6', title: 'Kids Movies', screen: 'KidsMoviesScreen' },
  { id: '7', title: 'Romantic Movies', screen: 'RomanticMoviesScreen' },
  // Add more categories as needed
];

const CategoriesScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryBox}
      onPress={() => navigation.navigate(item.screen)} // Correct navigation
      activeOpacity={0.7}
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
    backgroundColor: '#f5f5f5', // Light gray background color
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#4a90e2', // Blue color for the header
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  categoryBox: {
    padding: 18,
    backgroundColor: '#4a90e2', // Blue background for category boxes
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
    color: '#fff', // White text color for contrast
  },
});

export default CategoriesScreen;
