import { StatusBar } from "expo-status-bar";
import React from "react";

import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createStackNavigator } from '@react-navigation/stack';
// @ts-ignore
import { REACT_APP_URI } from 'react-native-dotenv';
import Home from "./components/Home";
import List from "./components/List";
import SignUp from "./components/SignUp";


const Tab = createBottomTabNavigator();
const client = new ApolloClient({
  uri: REACT_APP_URI,
  cache: new InMemoryCache(),
});
// console.log('test',REACT_APP_URI);

const Stack = createStackNavigator();

export default function App() {
  return (
  <ApolloProvider client={client}>

    <NavigationContainer>

    {/* LOGOUT function */}
        {/* <Stack.Navigator screenOptions={({navigation}) => ({
          headerRight: () => (<View  style={{ paddingRight:10}}><Text
            onPress={() => {
                        
                        navigation.navigate('List');
                    }}
                    title="Accueil" /></Text>)
        })} initialRouteName="Home"> */}
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="List" component={List} />
        </Stack.Navigator>
      </NavigationContainer>
  </ApolloProvider>
  );
} 
