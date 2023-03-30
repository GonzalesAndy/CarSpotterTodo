import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomePage = () => {
  // Exemple de données pour le carousel
  const carImages = [
    { uri: 'https://exemple1.com' },
    { uri: 'https://exemple2.com' },
    { uri: 'https://exemple3.com' },
  ];

  // Fonction pour afficher les images dans le carousel
  const _renderItem = ({ item, index }) => {
    return (
      <ImageBackground
        source={{ uri: item.uri }}
        style={styles.carouselImage}
      />
    );
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.3)']}
        style={styles.glassEffect}
      >
        <Text style={styles.title}>Car'Spotter</Text>

        <Carousel
          data={carImages}
          renderItem={_renderItem}
          sliderWidth={300}
          itemWidth={250}
          loop
          autoplay
        />

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>
            Ajouter une voiture à ma collection
          </Text>
        </TouchableOpacity>

        {/* Votre contenu personnalisé ici */}

        <View style={styles.footer}>
          <Icon name="cog" size={30} color="#4c4c4c" />
          <Icon name="car" size={30} color="#4c4c4c" />
          <Icon name="home" size={30} color="#4c4c4c" />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ececec',
  },
  glassEffect: {
    width: '90%',
    height: '80%',
    borderRadius: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4c4c4c',
  },
  carouselImage: {
    width: 250,
    height: 150,
    borderRadius: 15,
  },
  addButton: {
    backgroundColor: '#4c4c4c',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default HomePage;
