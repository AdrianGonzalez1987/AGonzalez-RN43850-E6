
import {SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { StatusBar } from 'react-native'
import { colors } from '../Global/Colors'
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import OrderStack from './OrderStack'
import MyProfileStack from './MyProfileStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Fontisto, FontAwesome5, MaterialIcons, Ionicons   } from '@expo/vector-icons'
import {Platform } from 'react-native-web'
import AuthStack from './AuthStack'
import { useSelector } from 'react-redux'

const Tab = createBottomTabNavigator()

const Navigator = () => {

    const {email} = useSelector(state => state.userReducer.value)

  return (
    <SafeAreaView style = {styles.container}>
        <NavigationContainer >
            {
            email ? 
             <Tab.Navigator 
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle:  styles.tabBar
                }}
            >
                <Tab.Screen name='Shop' component={ShopStack}
                options={{
                    TabBarIcon: ({focused}) => {
                        return( 
                        <Fontisto name="shopping-bag-1" size={24} color={focused ? "black" : "grey"} />
                        )
                    }    
                }}
                />
                <Tab.Screen name='Cart' component={CartStack}
                 options={{
                    TabBarIcon: ({focused}) => {
                        return( 
                        <FontAwesome5 name="shopping-cart" size={15} color={focused ? "black" : "grey" }/>
                        ) 
                    }    
                }}
                />
                <Tab.Screen name='Orders' component={OrderStack}
                 options={{
                    TabBarIcon: ({focused}) => {
                        return( 
                        <MaterialIcons name="add-task" size={15} color={focused ? "black" : "grey" }/>
                        ) 
                    }    
                }}
                />
                 <Tab.Screen
                        name="MyProfile"
                        component={MyProfileStack}
                        options={{
                            TabBarIcon: ({ focused }) => {
                                return (
                                    <View style={styles.item}>
                                        <Ionicons name="person-circle-outline" size={15} color={focused ? 'black': 'gray' } />      
                                    </View>
                                );
                            },
                        }}
                    />
            </Tab.Navigator>
               :
            <AuthStack/>
            }
           
            
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