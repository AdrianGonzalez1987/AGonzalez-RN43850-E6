import { Platform, StyleSheet} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'react-native'
import { colors } from '../Global/Colors'
import React from 'react'
import Header from '../Components/Header'
import ItemListCategory from '../Screens/ItemListCategory'
import ItemDetail from '../Screens/ItemDetail'
import Home from '../Screens/Home'


const Stack = createNativeStackNavigator()

const ShopStack = () => {
  return (
    <Stack.Navigator
            style = {styles.contNAvi}
                initialRouteName='Home'
                screenOptions={
                    ({route, navigation}) => (
                        {
                            header: () => {
                                return <Header
                                    route = {route}
                                    navigation = {navigation}
                                />
                            },
    
                        }
                    )
                }            
            >
                <Stack.Screen 
                    
                    name='Home'
                    component={Home}
                />
                <Stack.Screen
                    name='ItemListCategory'
                    component={ItemListCategory}
                />
                <Stack.Screen
                    name='Detail'
                    component={ItemDetail}
                />
    </Stack.Navigator>
  )
}

export default ShopStack

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    contNAvi: {
        backgroundColor: colors.beige
    }
  })