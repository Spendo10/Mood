import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const SearchResultsScreen = ({ navigation, route }) => {
  const { results } = route.params;

  const handlePress = (item) => {
    navigation.navigate('SearchResultDetail', { item });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.resultItem} onPress={() => handlePress(item)}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  resultItem: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  title: { fontSize: 18, fontWeight: 'bold' },
  description: { fontSize: 14, color: '#555' },
});

export default SearchResultsScreen;
