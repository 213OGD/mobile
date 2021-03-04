import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./components/Home";
import Form from "./components/Form";
import List from "./components/List";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.nav}>
      
        <Tab.Navigator >
          <Tab.Screen  name="Home" component={Home} />
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
