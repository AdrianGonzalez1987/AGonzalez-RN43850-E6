import { FlatList, Pressable, StyleSheet, Text, View, StatusBar, Platform } from 'react-native'
import React from 'react'

import CartItem from '../Components/CartItem';
import { colors } from '../Global/Colors';

import { useSelector } from 'react-redux';
import { usePostCartMutation } from '../Services/shopServices';

const Cart = () => {
    //console.log(CartData);
    //const total = CartData.reduce((acumulador, currentItem) => acumulador += currentItem.price * currentItem.quantity, 0)
    
    const {items: CartData, total, updateAt, user} = useSelector(state => state.cartReducer.value.items)

    //const [triggerPostCart, result] = usePostCartMutation()

    //const onConfirm = () => {
        //triggerPostCart({items: CartData, total, user, updateAt})
    //}
    
    console.log(result)


    return (
    <View style={styles.container}>
        <FlatList
            data={CartData}
            keyExtractor={cartItem => cartItem.id}
            renderItem={({item})=> {
                return (
                    <CartItem
                        cartItem={item}
                    />
                )
            }}
        />
        <View style={styles.totalContainer}>
            <Pressable
            
            >
                <Text>
                    Confirm
                </Text>
                
            </Pressable>
           
        </View>
         <Text style={styles.posPrice} size={30}>Total: ${total}</Text>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flex: 1,
        
        backgroundColor:colors.beige,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
       
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize:20
    },
    posPrice:{
        marginBottom: 120,
        //flexDirection: 'row',
        //justifyContent: 'center',
        //alignItems: 'center',
        textAlign:'center'
    }
})