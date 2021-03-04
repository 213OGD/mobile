import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Form extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Ceci est une page Test
        </Text>
        <Image style={styles.logo} source={{ uri: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/9f/23/91/coming-soon-in-doha-barber.jpg' }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  logo: {
    backgroundColor: "#056ecf",
    height: 500,
    width: 600,
  }
});
