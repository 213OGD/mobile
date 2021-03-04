import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

export default class List extends Component {
render() {
    return (

    <ScrollView style={ styles.container} >
        <Text style= {styles.title}>LISTE DES DONNEES DU G-DRIVE</Text>
        <Text numberOfLines={1}>               
        ______________________________________________________________
        </Text>
        <Text style={styles.paragraph}>
        Intiltulé de la donnée récupérée
        </Text>
        <View style={{flex: 1, flexDirection: 'row-reverse'}}>
            
            <Image style={styles.logo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} resizeMode= 'contain'/>
            <Text style={{paddingTop: 50, marginRight: 50}}> Descriptif du contenu </Text>
        </View>
        <Text numberOfLines={1}>               
        ______________________________________________________________
        </Text>
        <Text style={styles.paragraph}>
        Intiltulé de la donnée récupérée
        </Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <Image style={styles.logo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} resizeMode= 'contain'/>
            <Text style={{paddingTop: 50, marginLeft: 50}}> Descriptif du contenu </Text>
        </View>
        
        <Text numberOfLines={1}>               
        ______________________________________________________________
        </Text>
        <Text style={styles.paragraph}>
        Intiltulé de la donnée récupérée
        </Text>
        <View style={{flex: 1, flexDirection: 'row-reverse'}}>
            
            <Image style={styles.logo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} resizeMode= 'contain'/>
            <Text style={{paddingTop: 50, marginRight: 50}}> Descriptif du contenu </Text>
        </View>
        <Text numberOfLines={1}>               
        ______________________________________________________________
        </Text>
        <Text style={styles.paragraph}>
        Intiltulé de la donnée récupérée
        </Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <Image style={styles.logo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} resizeMode= 'contain'/>
            <Text style={{paddingTop: 50, marginLeft: 50}}> Descriptif du contenu </Text>
        </View>
        
        <Text numberOfLines={1}>               
        ______________________________________________________________
        </Text>
        <Text style={styles.paragraph}>
        Intiltulé de la donnée récupérée
        </Text>
        <View style={{flex: 1, flexDirection: 'row-reverse'}}>
            
            <Image style={styles.logo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} resizeMode= 'contain'/>
            <Text style={{paddingTop: 50, marginRight: 50}}> Descriptif du contenu </Text>
        </View>
        <Text numberOfLines={1}>               
        ______________________________________________________________
        </Text>
        <Text style={styles.paragraph}>
        Intiltulé de la donnée récupérée
        </Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <Image style={styles.logo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} resizeMode= 'contain'/>
            <Text style={{paddingTop: 50, marginLeft: 50}}> Descriptif du contenu </Text>
        </View>
        
        <Text numberOfLines={1}>               
        ______________________________________________________________
        </Text>
        <Text style={styles.paragraph}>
        Intiltulé de la donnée récupérée
        </Text>
        <View style={{flex: 1, flexDirection: 'row-reverse'}}>
            
            <Image style={styles.logo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} resizeMode= 'contain'/>
            <Text style={{paddingTop: 50, marginRight: 50}}> Descriptif du contenu </Text>
        </View>
        <Text numberOfLines={1}>               
        ______________________________________________________________
        </Text>
        <Text style={styles.paragraph}>
        Intiltulé de la donnée récupérée
        </Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <Image style={styles.logo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} resizeMode= 'contain'/>
            <Text style={{paddingTop: 50, marginLeft: 50}}> Descriptif du contenu </Text>
        </View>
        
        <Text numberOfLines={1}>               
        ______________________________________________________________
        </Text>
        <Text style={styles.paragraph}>
        Intiltulé de la donnée récupérée
        </Text>
        <View style={{flex: 1, flexDirection: 'row-reverse'}}>
            
            <Image style={styles.logo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} resizeMode= 'contain'/>
            <Text style={{paddingTop: 50, marginRight: 50}}> Descriptif du contenu </Text>
        </View>
        <Text numberOfLines={1}>               
        ______________________________________________________________
        </Text>
        <Text style={styles.paragraph}>
        Intiltulé de la donnée récupérée
        </Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <Image style={styles.logo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} resizeMode= 'contain'/>
            <Text style={{paddingTop: 50, marginLeft: 50}}> Descriptif du contenu </Text>
        </View>
        
        <Text numberOfLines={1}>               
        ______________________________________________________________
        </Text>
                
    </ScrollView>   
    
    );
}
}

const styles = StyleSheet.create({
container: {
    flex:1,
    paddingTop: 50,
    marginBottom: 50
},
paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#34495e',
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
    textDecorationLine: 'underline',
},
logo: {
    backgroundColor: "#056ecf",
    height: 150,
    width: 150,
    justifyContent: "center",
    
    
},
title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: "center",
    marginBottom:20,
}
});