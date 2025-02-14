import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Tooltip } from 'react-native';

const SearchResultsScreen = ({ route, navigation }) => {
  const { results } = route.params;

  // Check if results are empty
  if (!results || results.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.noResults}>No results found</Text>
      </View>
    );
  }

  // Tooltip state
  const [tooltipVisible, setTooltipVisible] = useState(false);

  // Render each item
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.resultItem}
      onPress={() => navigation.navigate('SearchResultDetail', { item })}
      onLongPress={() => setTooltipVisible(true)} // Show tooltip on long press
      onPressOut={() => setTooltipVisible(false)} // Hide tooltip on press release
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>

      {/* Tooltip when item is long-pressed */}
      {tooltipVisible && (
        <View style={styles.tooltip}>
          <Text style={styles.tooltipText}>More Info</Text>
        </View>
      )}
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
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Light background for better readability
  },
  resultItem: {
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Adding shadow effect to give it a card-like look
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333', // Darker color for better readability
  },
  description: {
    fontSize: 16,
    color: '#555', // Slightly lighter color for description
    marginTop: 5,
    lineHeight: 22, // Better line height for readability
  },
  tooltip: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 5,
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  tooltipText: {
    color: '#fff',
    fontSize: 14,
  },
  noResults: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default SearchResultsScreen;
