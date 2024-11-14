import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const SearchResultsScreen = ({ route }) => {
  const { results } = route.params;

  const renderResult = ({ item }) => (
    <TouchableOpacity onPress={() => Linking.openURL(item.link)} style={styles.resultContainer}>
      <Text style={styles.resultTitle}>{item.title}</Text>
      <Text style={styles.resultDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search Results</Text>
      <FlatList
        data={results}
        renderItem={renderResult}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  resultContainer: { marginBottom: 15, padding: 10, backgroundColor: '#f9f9f9', borderRadius: 8 },
  resultTitle: { fontSize: 18, fontWeight: '600', color: '#4682B4' },
  resultDescription: { fontSize: 14, color: '#666', marginTop: 5 },
});

export default SearchResultsScreen;
