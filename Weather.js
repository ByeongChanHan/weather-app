import React from 'react';
import { StyleSheet,View,Text,StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const wetherOptions = {
    Drizzle:{
        iconName: "weather-rainy",
        gradient: ["#4CA1AF","#C4E0E5"],
        title:"비",
        subtitle:"이슬비가 내리는 날씨입니다."
    },
    Rain:{
        iconName:"weather-pouring",
        gradient: ["#0F2027","#203A43"],
        title:"강한 비",
        subtitle:"비가 많이 내리고 있습니다."
    },
    Snow:{
        iconName:"weather-snowy",
        gradient: ["#C9D6FF","#E2E2E2"],
        title:"눈",
        subtitle:"도로가 미끄러우니 안전운전 하십시오."
    },
    Atmosphere:{
        iconName:"weather-windy",
        gradient: ["#1c92d2","#f2fcfe"],
        title:"강풍",
        subtitle:"바람이 많이 부는 날씨입니다."
    },
    Clear:{
        iconName:"weather-sunny",
        gradient: ["#FF7300","#FEF253"],
        title:"맑음",
        subtitle:"날씨가 화창하니 놀기 좋은 날씨네요."
    },
    Clouds:{
        iconName:"weather-cloudy",
        gradient: ["#bdc3c7","#2c3e50"],
        title:"흐림",
        subtitle:"구름이 많이 낀 날씨입니다"
    }

}

export default function weather({temp,condition}) {
    return (
        <LinearGradient
        colors={wetherOptions[condition].gradient}
        style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfcontainer}>
                <MaterialCommunityIcons name={wetherOptions[condition].iconName} size={96} color="white" />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={{...styles.halfcontainer,...styles.textContainer}}>
                <Text style={styles.title}>{wetherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{wetherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    halfcontainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    temp:{
        fontSize:42,
        color:"white"
    },
    title:{
        color:"white",
        fontSize: 44,
        fontWeight :"300",
        marginBottom: 10
    },
    subtitle:{
        fontWeight:"600",
        color:"white",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 70,
        alignItems:"flex-start"
    }
})