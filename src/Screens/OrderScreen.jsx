import { FlatList, StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/Colors'
import React from 'react'
import OrderData from '../Data/orders.json'
import OrderItem from '../Components/OrderItem'

const OrderScreen = () => {
  return (
    <View style = {styles.contNAvi}>
        <FlatList
            data={OrderData}
            keyExtractor={orderItem => orderItem.id}
            renderItem={({item}) => {
                return (
                    <OrderItem 
                      order={item}
                    />
                )
            }}
        />
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
    contNAvi: {
        backgroundColor: colors.beige,
        height:'100%'
    }
})