import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Global/Colors";
import { Ionicons } from '@expo/vector-icons';

const CartItem = ({ cartItem }) => {
    console.log(cartItem);
    return (
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{cartItem.title} ({cartItem.quantity})</Text>
                <Text style={styles.text2}>{cartItem.brand}</Text>
                <Text style={styles.text2}>${cartItem.price}</Text>
            </View>
            <Ionicons name="md-trash-sharp" size={24} color="red" />
        </View>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: colors.blue,
        padding: 10,
        margin: 10,
        shadowColor: 'black',
        elevation: 6,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        width: "70%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        fontFamily: "Josefin",
        fontSize: 19,
        color: 'black',
    },
    text2: {
        fontFamily: "Josefin",
        fontSize: 14,
        color: colors.blue,
    },
});