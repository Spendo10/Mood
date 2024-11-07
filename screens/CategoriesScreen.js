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
    <TouchableOpacity style={styles.categoryBox} onPress={() => navigation.navigate(item.screen)}>
      <Text style={styles.categoryText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
  categoryBox: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CategoriesScreen;
