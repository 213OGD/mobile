import React from "react";
import { StatusBar } from "expo-status-bar";
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
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          files: {
            keyArgs: false,
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            }
          },
          tags: {
            keyArgs: false,
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            }
          }
        }
      }
    }
  }),
});
// console.log('test',REACT_APP_URI);

const Stack = createStackNavigator();

export default function App() {
  return (
  <ApolloProvider client={client}>

    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="List" component={List} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar backgroundColor={'black'} style="light" translucent={true}/>
  </ApolloProvider>
  );
} 
