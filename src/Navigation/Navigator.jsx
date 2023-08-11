
import {SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { StatusBar } from 'react-native'
import { colors } from '../Global/Colors'
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import OrderStack from './OrderStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Fontisto } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { Platform } from 'react-native-web'
import AuthStack from './AuthStack'
import { useSelector } from 'react-redux'

const Tab = createBottomTabNavigator()

const Navigator = () => {

    const {email} = useSelector(state => state.userReducer.value)

  return (
    <SafeAreaView style = {styles.container}>
        <NavigationContainer >
             <Tab.Navigator 
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle:  styles.tabBar
                }}
            >
                <Tab.Screen name='Shop' component={ShopStack}
                options={{
                    tabBarIcon: ({focused}) => {
                        return( 
                        <Fontisto name="shopping-bag-1" size={24} color={focused ? "black" : "grey"} />
                        )
                    }    
                }}
                />
                <Tab.Screen name='Cart' component={CartStack}
                 options={{
                    tabBarIcon: ({focused}) => {
                        return( 
                        <FontAwesome5 name="shopping-cart" size={24} color={focused ? "black" : "grey" }/>
                        ) 
                    }    
                }}
                />
                <Tab.Screen name='Orders' component={OrderStack}
                 options={{
                    tabBarIcon: ({focused}) => {
                        return( 
                        <MaterialIcons name="add-task" size={24} color={focused ? "black" : "grey" }/>
                        ) 
                    }    
                }}
                />
            </Tab.Navigator>
            {/*
               email ?  
               :
            <AuthStack/>
            */}
           
            
        </NavigationContainer>
    </SafeAreaView>
  )
}

export default Navigator

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    contNAvi: {
        backgroundColor: colors.beige
    },
    tabBar:{
        
        backgroundColor: colors.orange,
        shadowColor: 'black',
        elevation: 3,
        position: 'absolute',
        buttom: 30,
        left: 20,
        right:20,
        borderRadius:15,
        height:90,
        marginBottom:7
    }
  })