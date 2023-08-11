import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'

const Card = ({children, additionalStyle = []}) => {
  return (
    <View style = {[styles.cardContainer, additionalStyle]}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    cardContainer: {
        height: 50,
        width: 250,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue,
        marginTop:10,
        borderRadius: 8,
    }
})