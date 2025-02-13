import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const SearchResultsScreen = ({ route, navigation }) => {
  const { results } = route.params;

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.resultItem} 
      onPress={() => navigation.navigate('SearchResultDetail', { item })} // Corrected navigation
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={results}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  resultItem: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  title: { fontSize: 18, fontWeight: 'bold' },
  description: { fontSize: 14, color: '#555' },
});

export default SearchResultsScreen;
