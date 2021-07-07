import { useQuery } from '@apollo/client';
import React, {  Component, useState } from 'react';
import {Text, View, StyleSheet, Image, FlatList, SafeAreaView, } from 'react-native';
import GET_FILES from '../queries/files.queries';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Form from './Form';
import Home from './Home';
import { Ionicons } from '@expo/vector-icons';



export default function List() {

    const { loading, error, data } = useQuery(GET_FILES);
    const Tab = createBottomTabNavigator();
    

    return (

    <><SafeAreaView style={styles.container}>

            <Text style={styles.title}>LISTE DES DONNEES DU G-DRIVE</Text>

            <Text style={styles.tags}>Tags: </Text>


            {loading && (<Text>Loading</Text>)}
            {error && (<Text>ssssssss {console.log(error)}</Text>)}
            {data && (
                <FlatList
                    data={data.files}
                    keyExtractor={item => item._id}
                    renderItem={({ item, index }) => (

                        <><Text style={styles.paragraph}>
                            {item.name}
                        </Text>

                            <View style={{ flex: 1, flexDirection: 'row-reverse' }}>
                                <Text style={{ paddingTop: 25, paddingLeft: 25, marginRight: 80 }}> tags : {item.tags} </Text>
                                <Image style={styles.logo} source={{ uri: item.iconLink }} resizeMode='contain' />
                            </View>

                            <Text numberOfLines={1}>
                                ______________________________________________________________
                            </Text></>
                    )} />
            )}
            
        </SafeAreaView>
            </>
    )}


const styles = StyleSheet.create({
container: {
    flex:1,
    paddingTop: 50,
    marginBottom: 50
},
paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#34495e',
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
    textDecorationLine: 'underline',
},
logo: {
    
    height: 100,
    width: 100,
    justifyContent: "center",
    
},
title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "center",
    marginBottom:20,
},
item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
},
tags:{
    borderTopWidth: 2,
    borderBottomWidth: 2,
    padding:5,
},
checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
},
checkbox: {
    alignSelf: "center",
},
label: {
    margin: 8,
},
nav : {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    color: "red",
},
});



