import { StatusBar } from 'expo-status-bar';
import React, { constructor } from 'react';
import { TextInput, ImageBackground, StyleSheet, Text, View, Alert, Button } from 'react-native';
import { Component } from 'react';

const image = { uri: "https://reactjs.org/logo-og.png" };

export default class Home extends Component {

constructor(props) {
    super(props);
    
    this.state = {
    username: '',
    password: '',
    };
}

onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
}


render () {
    
        return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
            <Text style={styles.text}>Welcome on The Super Appli</Text>
            <StatusBar style="auto" />
            <View style= {{ marginTop: 300, marginBottom: 100 }}>
                <View style= {{  alignItems: 'center' }}>
                <TextInput
                    value={this.state.username}
                    onChangeText={(username) => this.setState({ username })}
                    placeholder={"Nom d'utilisateur"}
                    placeholderTextColor='white'
                    style={styles.input}
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder={'Mot de passe'}
                    placeholderTextColor='white'
                    secureTextEntry={true}
                    style={styles.input}
                />
                </View>
                <Button
                title={'Connexion'}
                style={styles.input}
                onPress={this.onLogin.bind(this)}
                />
            </View>
            </ImageBackground>
        </View>
        );
    }
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
