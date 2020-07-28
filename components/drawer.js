import React,{Component} from 'react';
import {View,Text,StyleSheet} from "react-native";
import {createAppContainer}from "react-navigation";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import Homescreen from "./home.js";

export default class drawer extends React.Component{


    render() {
        return (
            <View style={styles.container}>
                <Text>drawer</Text>
            </View>
        );
    }
}


const styles=StyleSheet.create({

    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
});

// const TabNavigator=createMaterialBottomTabNavigator(
//     {
//     Home:{
//         screen:Homescreen,
//     }

//     },

//     {
//         initialRouteName:"home",
//         activeColor:"#f0edf6",
//         inactiveColor:"#3e2465",
//         barStyle:{ backgroundColor: '#694fad' },
        
//     }


// );

// export default createAppContainer(TabNavigator);