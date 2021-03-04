import { StatusBar } from "expo-status-bar";
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./components/Home";
import Form from "./components/Form";
import List from "./components/List";


const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer >
      
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home';
            } else if (route.name === 'List') {
              iconName = focused ? 'ios-list' : 'ios-list';
            } else if (route.name === 'Test') {
              iconName = focused ? 'ios-menu-sharp' : 'ios-menu-sharp';
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
          <Tab.Screen name="Test" component={Form} />
          <Tab.Screen name="List" component={List} />
        </Tab.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  nav : {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    color: "red",
  },
});
