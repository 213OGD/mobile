import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import {Text, View, StyleSheet, Image, FlatList, SafeAreaView, TouchableOpacity, Linking, ActivityIndicator} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableHighlight } from 'react-native-gesture-handler';
import { tw } from "react-native-tailwindcss";
import MenuDrawer from 'react-native-side-drawer'

import GET_TAGS from '../queries/tags.queries';
import GET_FILES from '../queries/files.queries';

import TagList from './TagList';
import RenderSeparator from './RenderSeparator';
import useTagSelection from '../hooks/useTagSelection';

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
                    {/* <TouchableOpacity onPress={toggleOpen} style={[tw.bgWhite]}>
                    <Text style={[tw.textRight]}>Close</Text>
                    </TouchableOpacity> */}
                </View>
                <TagList selectedTags={selectedTags} displayTags={displayTags} onCheck={(item:any, isChecked: boolean) => tagSelection(item, isChecked)}/>
            </View>
        );
    };

    const renderItem = ({item}: any) => {
        return (
        isFileSelected(item.tags, selectedTags) && (
            <>
                <View style={[tw.flexRow, tw.m2, tw.pT2]}>
                    <View>
                        <Image style={[{height: 75, width:75}]} source={{ uri: item.iconLink.replace('16', '256') }} resizeMode='contain' />
                    </View>
                    <View style={[tw.flex1, tw.flexCol, tw.justifyAround]}>
                        <TouchableOpacity onPress={() => Linking.openURL(item.webViewLink)}>
                            <Text style={[tw.textXl, tw.textCenter, tw.textBlack, tw.underline,tw.fontBold, tw.p2, tw.contentBetween]}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                        <View style={[tw.flexRow, tw.justifyAround]}>
                            {item.tags.length > 0 && (
                                item.tags.map((tag: string, index: React.Key | null | undefined) => (
                                        <Text key={index} style={[tw.border2,tw.flexWrap, tw.textCenter, tw.borderRed600, tw.fontBold, tw.textBlack, tw.pX2, tw.pT1,tw.justifyCenter, tw.roundedFull]}>{tag}</Text>
                                ))
                            )}
                        </View>
                    </View>
              </View>
              <RenderSeparator />
            </>
            )
        )}

    return (

    <>
        <SafeAreaView style={[tw.relative]}>

    <View style={[tw.pT10, tw.pB2, tw.bgRed500]}>
            <Text style={[tw.textWhite, tw.text3xl, tw.textCenter, tw.fontBold ]}>Odyssey 213</Text>
            <Text style={[tw.pT3, tw.textWhite, tw.textCenter, tw.text2xl]}>Liste des fichiers</Text>
                <View>
                        <TouchableHighlight onPress={toggleOpen}  style={[tw.mR1, tw.w20, tw.selfEnd, tw.border2, tw.borderWhite, tw.rounded]} >
                            <Text style={[tw.textWhite, tw.textCenter, tw.fontBold]}>Filtre</Text>
                        </TouchableHighlight>
                </View>
        </View>
            <View style={[tw.absolute, tw.bottom0]}>
                <MenuDrawer 
                open={open} 
                drawerContent={drawerContent ()}
                drawerPercentage={45}
                animationTime={250}
                overlay={true}
                opacity={1}
                />
            </View>
            </SafeAreaView>
            {loading && (
            <>
                <View style={{flex: 1, flexDirection: "row", justifyContent: "space-around", padding: 10 }}>
                    <ActivityIndicator  size="large" color="#fb7185"/>
                </View>
            </>
            )}
            {error && (<Text>err {console.log(error)}</Text>)}
            {data && (
                <FlatList
                    data={data.files}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    />
            )}
            
        
            </>
)};