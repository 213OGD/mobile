import { StatusBar } from 'expo-status-bar';
import { TextInput, ImageBackground, StyleSheet, Text, View, Alert, Button } from 'react-native';
import { Component } from 'react';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const image = { uri: "https://reactjs.org/logo-og.png" };

export default function Home() {

const navigation = useNavigation();

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

function onLogin() {

    Alert.alert('Credentials', `${username} + ${password}`);
}

    
        return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
            <Text style={styles.text}>Welcome on The Super Appli</Text>
            <StatusBar style="auto" />
            <View style= {{ marginTop: 300, marginBottom: 100 }}>
                <View style= {{  alignItems: 'center' }}>
                <TextInput
                    value={username}
                    onChangeText={(username) => setUsername( username )}
                    placeholder={"Nom d'utilisateur"}
                    placeholderTextColor='white'
                    style={styles.input}
                />
                <TextInput
                    value={password}
                    onChangeText={(password) => setPassword( password )}
                    placeholder={'Mot de passe'}
                    placeholderTextColor='white'
                    secureTextEntry={true}
                    style={styles.input}
                />
                </View>
                <Button
                title={'Connexion'}
                
                onPress={() => navigation.navigate('List')}
                />
            </View>
            </ImageBackground>
        </View>
        );
    }

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
    image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
    },
    text: {
    marginTop: 50,
    paddingTop: 20,
    paddingBottom: 20,
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    },
    input: {
    
    textAlign: "center",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 10,
    color: "white",
    },
});
