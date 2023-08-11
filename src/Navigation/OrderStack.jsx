import React from "react";
import Header from '../Components/Header'
import { StyleSheet} from 'react-native'
import { StatusBar } from 'react-native'
import { colors } from '../Global/Colors'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OrderScreen from "../Screens/OrderScreen";
import { Platform } from "react-native";

const Stack = createNativeStackNavigator()

const OrderStack = () => {
    return (
        <Stack.Navigator style = {styles.contNAvi}
            initialRouteName="OrderScreen"
            screenOptions={({ route, navigation }) => ({
                header: () => {
                    return <Header route={route} navigation={navigation} />;
                },
            })}
        >
            <Stack.Screen name="OrderScreen" component={OrderScreen} />

        </Stack.Navigator>
    );
};

export default OrderStack;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    contNAvi: {
        backgroundColor: colors.beige
    }
  })