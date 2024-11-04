import React from 'react';
import { View, Text, StyleSheet, WebView } from 'react-native';

const NigeriaMoviesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nigeria Movies</Text>
      <WebView 
        source={{ uri: 'https://www.youtube.com/watch?v=ftRSxOqZ148' }} 
        style={{ flex: 1 }} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default NigeriaMoviesScreen;
