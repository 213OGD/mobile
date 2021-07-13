import React, { useState } from "react";
import { FlatList, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { tw } from "react-native-tailwindcss";

export default function TagList({displayTags, onCheck}: any){

    return (
        <View style={[tw.bgWhite, tw.pB8]}>
            {displayTags && (          
                <FlatList
                    data={displayTags}
                    keyExtractor={item => item}
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
                <Text style={[tw.p5 ,tw.textCenter, isChecked ? [tw.bgRed400 ,tw.textWhite] : [tw.bgWhite, tw.textRed400]] }>
                    {item}
                </Text>
            </TouchableOpacity>
        </>
    )
}
