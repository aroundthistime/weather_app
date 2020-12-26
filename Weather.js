import Proptypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { LinearGradient } from 'expo-linear-gradient';

const weatherConditions = {
    Thunderstorm : {
        iconName : "weather-lightning",
        gradient : ["#373B44", "#4286f4"],
        title : "Thunderstorm",
        subtitle : "Seriously, stay home"
    },
    Drizzle : {
        iconName : "weather-hail",
        gradient : ["#89F7FE", "#66A6FF"],
        title : "Drizzle",
        subtitle : "Get a cup of tea"
    },
    Rain : {
        iconName : "weather-rainy",
        gradient : ["#00C6FB", "#005BEA"],
        title : "Rain",
        subtitle : "Take your umbrella"
    },
    Snow : {
        iconName : "weather-snowy",
        gradient : ["#7DE2FC", "#B9B6E5"],
        title : "Snow",
        subtitle : "Do you want to build a snowman?"
    },
    Clear : {
        iconName : "white-balance-sunny",
        gradient : ["#FF7300", "#FEF253"],
        title : "Clear",
        subtitle : "Get out of your room right now!"
    },
    Clouds : {
        iconName : "weather-cloudy",
        gradient : ["#D7D2CC", "#304352"],
        title : "Clouds",
        subtitle : "Daybreak for the sun"
    },
    Haze : {
        iconName : "weather-fog",
        gradient : ["#bdc3c7", "#2c3e50"],
        title : "Haze",
        subtitle : "You, Clouds, Rain"
    },
    Mist : {
        iconName : "weather-fog",
        gradient : ["#bdc3c7", "#2c3e50"],
        title : "Mist",
        subtitle : "Be careful on driving"
    },
    Dust : {
        iconName : "weather-hail",
        gradient : ["#D1913C", "#FFD194"],
        title : "Dust",
        subtitle : "Put on your mask!"
    },
}

export default function Weather({temp, condition}) {
    return (
        <LinearGradient colors={weatherConditions[condition].gradient} style={style.container}>
            <StatusBar barStyle="light-content"></StatusBar>
            <View style={style.halfContainer}>
                <MaterialCommunityIcons name={weatherConditions[condition].iconName} color="#fcfcfc" size={90}></MaterialCommunityIcons>
                <Text style={style.temp}>{temp}°</Text>
            </View>
            <View style={[style.halfContainer, style.textContainer]}>
                <Text style={style.title}>{weatherConditions[condition].title}</Text>
                <Text style={style.subtitle}>{weatherConditions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.Proptypes = {
    temp : Proptypes.number.isRequired,
    condition : Proptypes.oneOf(Object.keys(weatherConditions)).isRequired

}

const style = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
    },
    halfContainer : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
    },
    textContainer : {
        paddingHorizontal : 40,
        alignItems : "flex-start"
    },
    temp : {
        marginTop : 10,
        fontSize : 40,
        color : "#fcfcfc"
    },
    title : {
        color : "#fcfcfc",
        fontSize : 40,
        fontWeight : "300",
        marginBottom : 10
    },
    subtitle : {
        color : "#fcfcfc",
        fontSize : 22,
        fontWeight : "600"
    }
})