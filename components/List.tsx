import { useQuery } from '@apollo/client';
import React, {  Component, useState } from 'react';
import {Text, View, StyleSheet, Image, FlatList, SafeAreaView, Button, TouchableOpacity} from 'react-native';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GET_TAGS from '../queries/tags.queries';
import GET_FILES from '../queries/files.queries';

import MenuDrawer from 'react-native-side-drawer'
import TagList from './TagList';
import useTagSelection from '../hooks/useTagSelection';
import { Linking } from 'react-native';


export default function List() {

    const { loading, error, data } = useQuery(GET_FILES);
    const { loading: loadingTags, error: errorTags, data: dataTags } = useQuery(
        GET_TAGS
    );
    
    const [
        displayTags,
        selectedTags,
        tagSelection,
        isFileSelected,
    ] = useTagSelection(dataTags, loadingTags);

    const Tab = createBottomTabNavigator();

    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    };
    
    const drawerContent = () => {
        
        return (
            <View>
                <View>
                    <TouchableOpacity onPress={toggleOpen} style={styles.animatedBox}>
                    <Text>Close</Text>
                    </TouchableOpacity>
                </View>
                <TagList selectedTags={selectedTags} displayTags={displayTags} onCheck={(item:any, isChecked: boolean) => tagSelection(item, isChecked)}/>
            </View>
        );
    };
    
    const renderItem = ({item}: any) => {
        return (
        isFileSelected(item.tags, selectedTags) && (
                <>
                <TouchableOpacity onPress={() => Linking.openURL(item.webViewLink)}>
                    <Text style={styles.paragraph}>
                        {item.name}
                    </Text>
                </TouchableOpacity>

                    <View style={{ flex: 1, flexDirection: 'row-reverse' }}>
                        <Text style={{ paddingTop: 25, paddingLeft: 25, marginRight: 80 }}> tags : {item.tags} </Text>
                        <Image style={styles.logo} source={{ uri: item.iconLink }} resizeMode='contain' />
                    </View>

                    <Text numberOfLines={1}>
                        ______________________________________________________________
                    </Text>
                </>
            )
        )}

    return (

    <>
    <SafeAreaView style={styles.container}>

            <Text style={styles.title}>LISTE DES FICHIERS</Text>
            
            <View style={styles.container}>
                <MenuDrawer 
                open={open} 
                drawerContent={drawerContent ()}
                drawerPercentage={45}
                animationTime={250}
                overlay={true}
                opacity={0.4}
                >
                    <TouchableOpacity onPress={toggleOpen} >
                        <Text>Filtre</Text>
                    </TouchableOpacity>
                </MenuDrawer>
            </View>
            
            {loading && (<Text>Loading</Text>)}
            {error && (<Text>err {console.log(error)}</Text>)}
            {data && (
                <FlatList
                    data={data.files}
                    keyExtractor={item => item._id}
                    renderItem={renderItem}
                    />
            )}
            
        </SafeAreaView>
            </>
)};


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
animatedBox: {
    flex: 1,
    backgroundColor: "#38C8EC",
    padding: 10
},
body: {
    flex: 1,
    zIndex:10,

    backgroundColor: '#F04812'
}
});

