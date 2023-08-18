import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Global/Colors";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../Features/User/userSlice";

const Header = ({ route, navigation }) => {

    let title;
    if (route.name === "Home") title = "Home";
    else if (route.name === "ItemListCategory") title = route.params.category;
    else if (route.name === "Detail") title = route.params.title;
    else title = route.name;

    const dispatch = useDispatch();
    const { email } = useSelector((state) => state.userReducer.value);

    return (
        <View style={styles.containerHeader}>
       
        {navigation.canGoBack() ? (
            
            <Pressable
                style={styles.pressable}
                onPress={() => navigation.goBack()}
            >
                <AntDesign name="back" size={18} color="black" />
            </Pressable>
        ) : null}
         <Text style={styles.text}>{title}</Text>
        {email ? (
            <Pressable
                style={styles.signOut}
                onPress={() => dispatch(signOut())}
            >
                <SimpleLineIcons name="logout" size={18} color="black" />
            </Pressable>
        ) : null}
    </View>
);
};

export default Header;

const styles = StyleSheet.create({
    containerHeader: {
        backgroundColor: colors.orange,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 15,
        position: "relative",
    },
    text: {
        fontSize: 25,
        fontFamily: "Josefin",
    },
    pressable: {
        position: "absolute",
        right: 30,
        top: "50%",
        backgroundColor: colors.beige,
        borderRadius:15,
        padding: 6,
       
    },
    signOut: {
        position: "absolute",
        left: 30,
        top: "50%",
        backgroundColor: colors.beige,
        borderRadius:15,
        padding: 6,
    },
});