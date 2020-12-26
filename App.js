import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import * as Location from "expo-location";
import axios from "axios";
import Loading from "./Loader";
import Weather from './Weather';

const API_KEY = "31421bc662cc4cb89586ab94210d3de3";

export default class extends React.Component {
  state = {
    isLoading : true
  };
  getWeather = async(latitude, longitude) => {
    const { data : {main, weather} } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading : false,
      temp : Math.round(main.temp),
      condition : weather[0].main
    })
  }
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords : {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't get your location", "please allow location access in order to use this app")
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  // return (
  //   <View style={styles.container}>
  //     <Text>Who cares</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
  render(){
    const { isLoading, temp, condition } = this.state;
    if (isLoading){
      return <Loading></Loading>
    } else{
      return <Weather temp={temp} condition={condition}></Weather>
    }
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
