import React, { FormEvent, useState} from 'react';
import { useMutation } from '@apollo/client';
import { SIGNUP } from '../queries/users.queries';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, ImageBackground, StyleSheet, Text, View, Alert, Button, TouchableOpacity } from 'react-native';

export default function SignUp() {

    const navigation = useNavigation();

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

const [flashMessage, setFlashMessage] = useState('');

const [signup] = useMutation(SIGNUP);

async function signupSubmission(e: FormEvent) {
    e.preventDefault();

    if (username === '' || mail === '' || password === '') {
    if (username === '') setFlashMessage('Veuillez saisir un identifiant');
    else if (mail === '') setFlashMessage('veuillez saisir un email');
    else if (password === '')
        setFlashMessage('veuillez saisir un mot de passe');
    } else {
    setFlashMessage('');

    try {
        const res = await signup({ variables: { username, mail, password } });
        console.log(res);
        AsyncStorage.setItem('token', res.data.addUser.token);
        AsyncStorage.setItem('username', res.data.addUser.user.username);
        // eslint-disable-next-line no-underscore-dangle
        AsyncStorage.setItem('id', res.data.addUser.user._id);
        console.log(res);
        navigation.navigate('List');
    } catch (error) {
        setFlashMessage(error.message);
        // console.log('error', error);
    
    }
    }
}

return(
    <View style={styles.container}> 
        <TextInput
            value={username}
            onChangeText={(username) => setUsername( username )}
            placeholder={"Nom utilisateur"}
            placeholderTextColor='white'
            style={styles.input}
        />
        <TextInput
            value={mail}
            onChangeText={(mail) => setMail( mail )}
            placeholder={"Email"}
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
        <TouchableOpacity >
            <Button 
            title={'Register'}
            onPress={signupSubmission}
            />
        </TouchableOpacity>
        <Button 
        title={'back to login'}
        onPress={() => navigation.navigate('Home')}
        />
    </View>


    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey'
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