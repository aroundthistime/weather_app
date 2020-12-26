import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";


const Loader = () => {
    return <View style={styles.container}>
        <StatusBar barStyle="dark-content"></StatusBar>
        <Image source={src} style={styles.image}></Image>
        <Text style={styles.text}>Getting the weather...</Text>
    </View>
}

const src = {
    uri : 'https://i0.wp.com/mdhsociety.com/wp-content/uploads/2017/11/throbber.gif?fit=480%2C480&ssl=1'
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "#FDF6AA"
    },
    image : {
        width : 50,
        height : 50,
        marginBottom : 30
    },
    text : {
        fontSize : 25,
        color : "#897D5D"
    }
});

export default Loader;