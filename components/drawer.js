// import React,{Component} from 'react';
// import { Alert, Button,Text, TextInput, View,TouchableOpacity, StyleSheet } from 'react-native';
// import {DrawerNavigator} from 'react-navigation';
// import home from './home'

// class Drawer extends Component {
//     render() {
//         return(
//             <View style={styles.container}>

//             </View>
//         );
//     }
// }

// const MyApp =  DrawerNavigator({
//     home: {
//         screen:home
//     }
// })
// export default Drawer;

// styles = StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:'center',
//         alighItems:'center'
//     }
// })


import React,{Component} from 'react';
import {View,Text,FlatList} from "react-native";
import {Card} from "react-native-paper";
import {Icon,Button,Container,Header,Content,Left} from 'native-base';


export default class lessonsPage extends React.Component{


    render() {
        return (
            <Container >
                <Text> Loading drawer</Text>
                
            </Container>
        );
    }
}

