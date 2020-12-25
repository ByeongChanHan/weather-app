import React from 'react';
import Loading from "./Loading"
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';
import Weather from './Weather'

const API_KEY = "d0e4590ae72476c9e3251582c8cb0f38";

export default class extends React.Component{
  state = {
    isLoading : true
  }
  getWeather = async(latitude,longitude) => {
    const { data:{
      main:{temp},
      weather
    }
   } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    this.setState({
      isLoading:false,
      temp,
      condition:weather[0].main
    })
  }
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {coords:{latitude,longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude,longitude)
      // api전송해서 날씨 가져오기
    } catch (error) {
      Alert.alert("Can't find you.,So sad")
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const { isLoading,temp,condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}
