import { StatusBar } from "expo-status-bar";
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// @ts-ignore
import { REACT_APP_URI } from 'react-native-dotenv';
import Home from "./components/Home";
import Form from "./components/Form";
import List from "./components/List";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";


const Tab = createBottomTabNavigator();
const client = new ApolloClient({
  uri: REACT_APP_URI,
  cache: new InMemoryCache(),
});
console.log('test',REACT_APP_URI);

export default function App() {
  return (
  <ApolloProvider client={client}>
    <NavigationContainer >
      
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home';
          } else if (route.name === 'List') {
            iconName = focused ? 'ios-list' : 'ios-list';
          } else if (route.name === 'Logout') {
            iconName = focused ? 'ios-log-out-outline' : 'ios-log-out-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'white',
        tabStyle:{
          backgroundColor:'#61DAF9',
          height: 50,
          paddingBottom: 5,
        },
      }}
      
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="List" component={List} />
        <Tab.Screen name="Logout" component={Form} />
      </Tab.Navigator>
    
    </NavigationContainer>
  </ApolloProvider>
    
  );
}
AppRegistry.registerComponent('MyApplication', () => App);
const styles = StyleSheet.create({
  nav : {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    color: "red",
  },
});
