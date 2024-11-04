import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const categories = ['Nigeria Movie', 'War Film', 'Love', 'Season', 'India Movie', 'Action', 'Adventure', 'Game', 'Short', 'Comedy'];

const CategoriesScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {categories.map((category, index) => (
        <TouchableOpacity key={index} style={styles.categoryButton} onPress={() => navigation.navigate('CategoryPage', { categoryName: category })}>
          <Text style={styles.categoryText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: { padding: 20 },
  categoryButton: { backgroundColor: '#ADD8E6', padding: 15, marginVertical: 10, borderRadius: 8, alignItems: 'center' },
  categoryText: { fontSize: 18, color: '#000' },
});
