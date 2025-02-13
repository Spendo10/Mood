import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const SearchResultDetail = ({ route }) => {
  const { item } = route.params; // Get the search result item

  return (
    <View style={styles.container}>
      <WebView source={{ uri: item.link }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default SearchResultDetail;
