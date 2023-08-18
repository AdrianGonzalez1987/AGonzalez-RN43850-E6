import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'
//import categories from '../Data/categories.json'

import CategoryItem from '../Components/CategoryItem'
import Counter from '../Components/Counter'
import { useGetCategoriesQuery } from '../Services/shopServices'
import { StatusBar } from 'react-native'
const Home = ({
  navigation
}) => {
  const {data: categories, isLoading, isError} = useGetCategoriesQuery()
  return (
    
    <View style={styles.container}>
        <View style={styles.container3}>
           <Counter  />
        </View>
      
        <View  style={styles.container2}>
        <FlatList
            data = {categories}
            keyExtractor={category => category}
            renderItem={({item}) => <CategoryItem item={item} navigation = {navigation}/>}
            showsVerticalScrollIndicator={false}
        />
        </View>
        
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: colors.beige,
        alignItems: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    container2:{
     
      height: '59%',
      backgroundColor: colors.beige,
    }, 
    container3:{
      width: '100%',
      height: '25%',
      backgroundColor: colors.beige,
    }
})