import React, { useState } from "react";
import { FlatList, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function TagList({displayTags, onCheck}: any){

    return (
        <View>
            {displayTags && (          
                <FlatList
                    data={displayTags}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <TagItem item={item} onCheckTag={(item: any, isChecked: boolean) => onCheck(item, isChecked)}/>
                        
                    )} 
                />
            )}
        </View>
    )
}

function TagItem({item, onCheckTag}: any){

    const [ isChecked, setIsChecked ] = useState<boolean>(item === 'All' ? true : false);

    return (
        <>
            <TouchableOpacity activeOpacity={0.8} onPress={
                () => {
                    setIsChecked(!isChecked);
                    onCheckTag(item, !isChecked);
                }}
            >
                <Text style={isChecked ? {color: 'pink'} : {color: 'black'} }>
                    {item}
                </Text>
            </TouchableOpacity>
        </>
    )
}
