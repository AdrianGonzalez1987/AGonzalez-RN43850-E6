import { Platform, StyleSheet} from 'react-native'
import { StatusBar } from 'react-native'
import { colors } from '../Global/Colors'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Header from '../Components/Header'
import Cart from '../Screens/Cart'

const Stack = createNativeStackNavigator()

const CartStack = () => {
  return (
    <Stack.Navigator
            style = {styles.contNAvi}
                initialRouteName='Cart'
                screenOptions={
                    ({route, navigation}) => (
                        {
                            header: () => { return <Header route = {route} navigation = {navigation} />},
                        }
                    )
                }            
            >
                <Stack.Screen name='CartScreen' component={Cart}/>

    </Stack.Navigator>
  )
}

export default CartStack

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    contNAvi: {
        backgroundColor: colors.beige
    }
  })