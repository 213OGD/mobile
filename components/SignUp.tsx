import React, { useState} from 'react';
import { useMutation } from '@apollo/client';
import { SIGNUP } from '../queries/users.queries';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, StyleSheet, Text, View, Alert, Button, TouchableOpacity } from 'react-native';
import { tw } from "react-native-tailwindcss";

export default function SignUp() {

    const navigation = useNavigation();

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

const [flashMessage, setFlashMessage] = useState('');

const [signup] = useMutation(SIGNUP);

async function signupSubmission() {
    if (username === '' || mail === '' || password === '') {
    if (username === '') setFlashMessage('Veuillez saisir un identifiant');
    else if (mail === '') setFlashMessage('veuillez saisir un email');
    else if (password === '')
        setFlashMessage('veuillez saisir un mot de passe');
    } else {
    setFlashMessage('');

    try {
        const res = await signup({ variables: { username, mail, password } });
        AsyncStorage.setItem('token', res.data.addUser.token);
        AsyncStorage.setItem('username', res.data.addUser.user.username);
        AsyncStorage.setItem('id', res.data.addUser.user.id);
        navigation.navigate('List');
    } catch (error) {
        setFlashMessage(error.message);
    
    }
    }
}

return(
    <View style={[tw.pT5, tw.wFull]}>
        <View style={[tw.p5, tw.bgRed500]}>
            <Text style={[tw.textWhite, tw.text3xl, tw.textCenter, tw.fontBold ]}>Odyssey 213</Text>
        </View>
        <View  style={[tw.wFull, tw.p2, tw.itemsCenter, tw.justifyCenter]}> 
            <TextInput
                value={username}
                onChangeText={(username) => setUsername( username )}
                placeholder={"Nom utilisateur"}
                placeholderTextColor='gray'
                style={[tw.textBlack, tw.bgWhite ,tw.border, tw.p3, tw.wFull, tw.rounded, tw.m1, tw.textBase]}
            />
            <TextInput
                value={mail}
                onChangeText={(mail) => setMail( mail )}
                placeholder={"Email"}
                placeholderTextColor='gray'
                style={[tw.textBlack, tw.bgWhite ,tw.border, tw.p3, tw.wFull, tw.rounded, tw.m1, tw.textBase]}
            />
            <TextInput
                value={password}
                onChangeText={(password) => setPassword( password )}
                placeholder={'Mot de passe'}
                placeholderTextColor='gray'
                secureTextEntry={true}
                style={[tw.textBlack, tw.bgWhite ,tw.border, tw.p3, tw.wFull, tw.rounded, tw.m1, tw.textBase]}
            />
            <View style={[tw.p2]}>
                    {flashMessage !== '' && <Text style={[tw.textRed600]}>{flashMessage}</Text>}
            </View>
            <TouchableOpacity activeOpacity={0.8} style={[tw.mT2, tw.bgRed500, tw.itemsCenter, tw.wFull, tw.flexCol, tw.rounded]} onPress={signupSubmission}>
                <Text style={[tw.text2xl , tw.textWhite, tw.p5]}>S'enregistrer</Text>
            </TouchableOpacity>
            <TouchableOpacity   activeOpacity={0.8} style={[tw.mT2, tw.bgGray500, tw.itemsCenter, tw.wFull, tw.flexCol, tw.rounded]} onPress={() => navigation.navigate('Home')}>
                <Text  style={[tw.text2xl , tw.textWhite, tw.p5]}>Retour</Text>
            </TouchableOpacity>
            
        </View>
    </View>
    );
}