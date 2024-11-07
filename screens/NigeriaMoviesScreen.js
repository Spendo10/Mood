import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Linking } from 'react-native';

const videoLinks = [
  { id: '1', title: 'Video 1', url: 'https://youtu.be/rhb-FTiajNg?si=pMt_AMIIEUuVhYIl', thumbnail: 'https://img.youtube.com/vi/rhb-FTiajNg/hqdefault.jpg' },
  { id: '2', title: 'Video 2', url: 'https://youtu.be/w_z7OxLfUoY?si=cX6MhMBXzVxVm81j', thumbnail: 'https://img.youtube.com/vi/w_z7OxLfUoY/hqdefault.jpg' },
  { id: '3', title: 'Video 3', url: 'https://youtu.be/aZdKuKBJyTQ?si=1cQlUG9w5zpfGbsZ', thumbnail: 'https://img.youtube.com/vi/aZdKuKBJyTQ/hqdefault.jpg' },
  { id: '4', title: 'Video 4', url: 'https://youtu.be/mHo_8JoR8QM?si=3zSq4X7dsTYp4-fp', thumbnail: 'https://img.youtube.com/vi/mHo_8JoR8QM/hqdefault.jpg' },
  { id: '5', title: 'Video 5', url: 'https://youtu.be/zUP5bbk91jk?si=IJDzfY98cgIUlY4m', thumbnail: 'https://img.youtube.com/vi/zUP5bbk91jk/hqdefault.jpg' },
  { id: '6', title: 'Video 6', url: 'https://youtu.be/MgFhh9QAu1U?si=GZmrR4Z76-9Lbmqq', thumbnail: 'https://img.youtube.com/vi/MgFhh9QAu1U/hqdefault.jpg' },
  { id: '7', title: 'Video 7', url: 'https://youtu.be/20LI3E3ezRE?si=GEyw_U8_aMLBWaG7', thumbnail: 'https://img.youtube.com/vi/20LI3E3ezRE/hqdefault.jpg' },
  { id: '8', title: 'Video 8', url: 'https://youtu.be/U27nsMcif4I?si=upLc4LQfybXT8iin', thumbnail: 'https://img.youtube.com/vi/U27nsMcif4I/hqdefault.jpg' },
  { id: '9', title: 'Video 9', url: 'https://youtu.be/dDropzjXXMY?si=52QP3_zUe_JoPfwu', thumbnail: 'https://img.youtube.com/vi/dDropzjXXMY/hqdefault.jpg' },
  { id: '10', title: 'Video 10', url: 'https://youtu.be/rk4tFlojfMg?si=9pSmWOmkugWjsGTj', thumbnail: 'https://img.youtube.com/vi/rk4tFlojfMg/hqdefault.jpg' },
  { id: '11', title: 'Video 11', url: 'https://youtu.be/Wb8jzuMEU2U?si=joFdtyHdP7TYidoE', thumbnail: 'https://img.youtube.com/vi/Wb8jzuMEU2U/hqdefault.jpg' },
  { id: '12', title: 'Video 12', url: 'https://youtu.be/J7zG4m4YJ0E?si=qnlOhDMG8fAR7C5t', thumbnail: 'https://img.youtube.com/vi/J7zG4m4YJ0E/hqdefault.jpg' },
  { id: '13', title: 'Video 13', url: 'https://youtu.be/r6VIbU5uB4w?si=hpdjgi7Dtos32Jgm', thumbnail: 'https://img.youtube.com/vi/r6VIbU5uB4w/hqdefault.jpg' },
  { id: '14', title: 'Video 14', url: 'https://youtu.be/EHWp5bXtS2U?si=O0mkVTIEfJPnW_1a', thumbnail: 'https://img.youtube.com/vi/EHWp5bXtS2U/hqdefault.jpg' },
  { id: '15', title: 'Video 15', url: 'https://youtu.be/FYChRJ0ZPiE?si=6Ny11ov6Is6l3nhC', thumbnail: 'https://img.youtube.com/vi/FYChRJ0ZPiE/hqdefault.jpg' },
  { id: '16', title: 'Video 16', url: 'https://youtu.be/pWuUPfSqVvk?si=D1OUgrQEE-Zefx4T', thumbnail: 'https://img.youtube.com/vi/pWuUPfSqVvk/hqdefault.jpg' },
  { id: '17', title: 'Video 17', url: 'https://youtu.be/T1-buA-yAmo?si=22ebtr0xEoGYq5wb', thumbnail: 'https://img.youtube.com/vi/T1-buA-yAmo/hqdefault.jpg' },
  { id: '18', title: 'Video 18', url: 'https://youtu.be/asiQ9fChLz8?si=GVcfXdWqU2Huxghx', thumbnail: 'https://img.youtube.com/vi/asiQ9fChLz8/hqdefault.jpg' },
  { id: '19', title: 'Video 19', url: 'https://youtu.be/ZnA7h22zCnc?si=MnKayaVKE0_U_Jvp', thumbnail: 'https://img.youtube.com/vi/ZnA7h22zCnc/hqdefault.jpg' },
  { id: '20', title: 'Video 20', url: 'https://youtu.be/ZN2IcxcTwto?si=d2J3ESPcMBqDbUqV', thumbnail: 'https://img.youtube.com/vi/ZN2IcxcTwto/hqdefault.jpg' },
];

const NigeriaMoviesScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.videoBox} onPress={() => Linking.openURL(item.url)}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <Text style={styles.videoTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nigeria Movies</Text>
      <FlatList
        data={videoLinks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.videoList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  videoList: {
    paddingBottom: 20,
  },
  videoBox: {
    flex: 1,
    margin: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  thumbnail: {
    width: 150,
    height: 100,
    borderRadius: 8,
  },
  videoTitle: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
});

export default NigeriaMoviesScreen;
