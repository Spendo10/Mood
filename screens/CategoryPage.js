import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryPage = ({ route }) => {
  const { categoryName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoryName}</Text>
      <Text style={styles.subtitle}>Explore all videos in {categoryName} category.</Text>
    </View>
  );
};

export default CategoryPage;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { fontSize: 16, color: '#666', marginTop: 5 },
});
