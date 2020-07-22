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


// import { createDrawerNavigator } from '@react-navigation/drawer';
// import HomeScreen from "./home";

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="home" component={HomeScreen} />
//     </Drawer.Navigator>
//   );
// }

import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class FooterTabsIconTextExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}