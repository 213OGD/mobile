import { StatusBar } from 'expo-status-bar';
import { TextInput, ImageBackground, StyleSheet, Text, View, Alert, Button, TouchableOpacity } from 'react-native';
import { Component, FormEvent } from 'react';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FetchResult, useMutation } from '@apollo/client';
import POST_LOG from '../queries/users.queries';
import AsyncStorage from '@react-native-async-storage/async-storage';


const image = { uri: "https://reactjs.org/logo-og.png" };

export default function Home() {

const navigation = useNavigation();

const [mail, setMail] = useState('');
const [password, setPassword] = useState('');

const [flashMessage, setFlashMessage] = useState('');

const [logs] = useMutation(POST_LOG);

async function handleSuccess(
res: FetchResult<any, Record<string, any>, Record<string, any>>
) {
console.log('res', res);
if (res.data.login === null) {
    setFlashMessage("L'utilisateur n'existe pas.");
} else {
    setFlashMessage('');

    AsyncStorage.setItem('token', res.data.login.token);
    AsyncStorage.setItem('username', res.data.login.user.username);
    // eslint-disable-next-line no-underscore-dangle
    AsyncStorage.setItem('id', res.data.login.user._id);

    setFlashMessage(
    `Connexion réussie ! Bienvenue ${res.data.login.user.username}`
    );
    navigation.navigate('List');
}
}

async function loginSubmission(e: FormEvent) {

console.log("submit");

if (mail === '' || password === '') {
    if (mail === '') setFlashMessage('Veuillez saisir un email');
    else if (password === '')
    setFlashMessage('Veuillez saisir un mot de passe');
} else {
    setFlashMessage('');
    // console.log(mail, password);
    try {
    const res = await logs({ variables: { mail, password } });
    handleSuccess(res);
    } catch (error) {
    // console.log('error', error.message);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    error.message === 'Wrong Password!'
        ? setFlashMessage('Mauvais mot de passe')
        : setFlashMessage(error.message);
    }
}

setMail('');
setPassword('');
}

    
        return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
            <Text style={styles.text}>Welcome on The Super Appli</Text>
            <StatusBar style="auto" />
            <View style= {{ marginTop: 300, marginBottom: 100 }}>
                <View style= {{  alignItems: 'center' }}>
                <TextInput
                    value={mail}
                    onChangeText={(mail) => setMail( mail )}
                    placeholder={"Email utilisteur"}
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
                <TouchableOpacity>
                    <Text style={{color : "white", paddingBottom: 50 }}>Mot de passe oublié?</Text>
                </TouchableOpacity>
                {flashMessage !== '' && <Text>{flashMessage}</Text>}
                <TouchableOpacity >
                    <Button 
                    title={'Connexion'}
                    onPress={loginSubmission}
                    />
                </TouchableOpacity>
                </View>
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
