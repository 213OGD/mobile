import { StatusBar } from 'expo-status-bar';
import { TextInput, ImageBackground, StyleSheet, Text, View, Alert, Button, TouchableOpacity } from 'react-native';
import { Component, FormEvent } from 'react';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FetchResult, useMutation } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { tw } from "react-native-tailwindcss";

import POST_LOG from '../queries/users.queries';

export default function Home() {

const navigation = useNavigation();

const [mail, setMail] = useState('');
const [password, setPassword] = useState('');

const [flashMessage, setFlashMessage] = useState('');

const [logs] = useMutation(POST_LOG);

async function handleSuccess(
res: FetchResult<any, Record<string, any>, Record<string, any>>
) {
if (res.data.login === null) {
    setFlashMessage("L'utilisateur n'existe pas.");
} else {
    setFlashMessage('');

    AsyncStorage.setItem('token', res.data.login.token);
    AsyncStorage.setItem('username', res.data.login.user.username);
    AsyncStorage.setItem('id', res.data.login.user.id);

    setFlashMessage(
    `Connexion réussie ! Bienvenue ${res.data.login.user.username}`
    );
    navigation.navigate('List');
}
}

async function loginSubmission(e: FormEvent) {

if (mail === '' || password === '') {
    if (mail === '') setFlashMessage('Veuillez saisir un email');
    else if (password === '')
    setFlashMessage('Veuillez saisir un mot de passe');
} else {
    setFlashMessage('');
    try {
    const res = await logs({ variables: { mail, password } });
    handleSuccess(res);
    } catch (error) {
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
    <View style={[tw.pT5, tw.wFull]}>
        <View style={[tw.p5, tw.bgRed500]}>
            <Text style={[tw.textWhite, tw.text3xl, tw.textCenter, tw.fontBold ]}>Odyssey 213</Text>
        </View>
        <View>
            <View style={[tw.wFull, tw.p2, tw.itemsCenter, tw.justifyCenter]}>
                <TextInput
                    value={mail}
                    onChangeText={(mail) => {setMail( mail ); setFlashMessage('') }}
                    placeholder={"Email"}
                    placeholderTextColor='grey'
                    style={[tw.textBlack, tw.bgWhite ,tw.border, tw.p3, tw.wFull, tw.rounded, tw.m1, tw.textBase, flashMessage && {borderColor:'red'}]}
                />
                <TextInput
                    value={password}
                    onChangeText={(password) => { setPassword( password ); setFlashMessage('') }}
                    placeholder={'Mot de passe'}
                    placeholderTextColor='grey'
                    secureTextEntry={true}
                    style={[tw.textBlack, tw.bgWhite ,tw.border, tw.p3, tw.wFull, tw.rounded, tw.m1, tw.textBase, flashMessage && {borderColor:'red'}]}
                />
                <View style={[tw.p2]}>
                    {flashMessage !== '' && <Text style={[tw.textRed600]}>{flashMessage}</Text>}
                </View>
                {/* <TouchableOpacity>
                    <Text style={[tw.p2]}>Mot de passe oublié ?</Text>
                </TouchableOpacity> */}
                
                <TouchableOpacity  activeOpacity={0.8} style={[tw.bgRed500, tw.itemsCenter, tw.wFull, tw.flexCol, tw.rounded]} onPress={loginSubmission}><Text style={[tw.text2xl , tw.textWhite, tw.p5]}>Connexion</Text></TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={[tw.mT2, tw.bgGray500, tw.itemsCenter, tw.wFull, tw.flexCol, tw.rounded]}  onPress={() => navigation.navigate('Signup')}><Text  style={[tw.text2xl , tw.textWhite, tw.p5]}>Créer un compte</Text></TouchableOpacity>
            </View>
        </View>
    </View>
);
}

const styles = StyleSheet.create({
    // container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: "darkgrey"
    // },
    // text: {
    // marginTop: 50,
    // paddingTop: 20,
    // paddingBottom: 20,
    // color: "white",
    // fontSize: 42,
    // fontWeight: "bold",
    // textAlign: "center",
    // },
    // input: {
    
    // textAlign: "center",
    // backgroundColor: "rgba(52, 52, 52, 0.8)",
    // width: 200,
    // height: 44,
    // padding: 10,
    // borderWidth: 1,
    // borderColor: 'white',
    // marginBottom: 10,
    // color: "white",
    // },
    
});
