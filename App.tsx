import { StatusBar } from "expo-status-bar";
import React from "react";

import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// @ts-ignore
import { REACT_APP_URI } from 'react-native-dotenv';
import Home from "./components/Home";
import Form from "./components/Form";
import List from "./components/List";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createStackNavigator } from '@react-navigation/stack';


const Tab = createBottomTabNavigator();
const client = new ApolloClient({
  uri: REACT_APP_URI,
  cache: new InMemoryCache(),
});
console.log('test',REACT_APP_URI);




const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="List" component={List} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
  <ApolloProvider client={client}>
    <NavigationContainer >
      <MyStack />
    </NavigationContainer>
  </ApolloProvider>
    
  );
} 



