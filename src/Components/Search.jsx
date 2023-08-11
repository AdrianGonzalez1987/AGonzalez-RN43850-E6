import { Pressable, StyleSheet, Text, TextInput, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../Global/Colors';
import { Octicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 


const Search = ({
    onSearch,
    error = "",
    goBack
}) => {
    const [keyword, setKeyword] = useState("")
    const {width, height}  = useWindowDimensions()

    const onErase = () => {
        setKeyword("")
        onSearch("")
    }

  return (
    <View style ={width > 350 ? styles.container : styles.containerSm}>


        <TextInput style ={styles.input} 
            placeholder='Search...'
            value={keyword}
            onChangeText={setKeyword}
        />
         <Pressable onPress={goBack}>
            <Ionicons name="caret-back-circle-sharp" size={26} color="black" />
        </Pressable>
        <Pressable onPress={()=>onSearch(keyword)}>
            <Octicons name="search" size={24} color="black" />
        </Pressable>
        <Pressable onPress={()=> setKeyword("")}>
            <Fontisto name="eraser" size={24} color="black" />
        </Pressable>
        
       { error ?
         <Text>
            {error}
        </Text>
        : null}
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
        padding:2,
        gap: 18,
    },
    containerSm: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
        // gap: 18,
    },
    input: {
        width: 250,
        padding: 2,
        fontSize: 18,
        backgroundColor: colors.cream,
        borderRadius: 10,
    }
})