// screens/VideoPlayer.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const VideoPlayer = ({ route }) => {
  const { url } = route.params; // Get the URL passed from ActionMoviesScreen

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: url }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default VideoPlayer;
