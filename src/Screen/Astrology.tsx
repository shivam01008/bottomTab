import React from 'react';
import { View, Image, Text, FlatList, Dimensions, StyleSheet } from 'react-native';
import { Img } from '../../src/Utils/Imagepath';

const books = [
  {
    id: '1',
    name: 'The Stars Within You',
    shortName: 'Stars',
    image: Img.Home,
  },
  {
    id: '2',
    name: 'Astrology for the Soul',
    shortName: 'Soul',
    image: Img.Home,
  },
  {
    id: '3',
    name: 'The Only Astrology Book You’ll Ever Need',
    shortName: 'Astro Book',
    image: Img.Home, 
  },
];

const screenWidth = Dimensions.get('window').width;

const Astrology = () => {
  return (
    <View style={styles.container}>
      {/* Image Slider */}
      <FlatList
        data={books}
        horizontal
        pagingEnabled
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.bookName}>{item.name}</Text>
            <Text style={styles.shortName}>{item.shortName}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Astrology;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  slide: {
    width: screenWidth,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  bookName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  shortName: {
    fontSize: 14,
    color: '#666',
  },
});
