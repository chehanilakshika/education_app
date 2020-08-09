import { StatusBar } from 'expo-status-bar';
//import React from 'react';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

//screens
import SignUpScreen from './components/signup';
import HomeScreen from "./components/home";
import LoginScreen from "./components/login";
import classesPage from "./components/classes";
import lessonsPage from "./components/lessons";
import addClassPage from "./components/addclass";
import addlesson from "./components/addlesson";
import editlesson from "./components/editlesson";
import editclass from "./components/editclass";
import splash from "./components/splash";


import { render } from 'react-dom';

const Stack = createStackNavigator(); 
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

  
   
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer
     >
      <Stack.Navigator  initialRouteName="splash">
        <Stack.Screen 
         
         options={{
           title: 'Sign Up',
           alignItems: "center",
           headerStyle: {
             alignItems: "center",

           },
           headerTintColor: '#03A9F4',
           headerTitleStyle: {
             fontWeight: 'bold',
           },
         }}
        name= "signup" component={SignUpScreen} />
        <Stack.Screen
        options={{
          title: 'Home',
          alignItems: "center",
          headerStyle: {
            alignItems: "center",

          },
          headerTintColor: '#03A9F4',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
         name= "home" component={HomeScreen} />
        <Stack.Screen 
         options={{
          title: 'Sign in',
          alignItems: "center",
          headerStyle: {
            alignItems: "center",

          },
          headerTintColor: '#03A9F4',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name= "login" component={LoginScreen} />
        <Stack.Screen 
        options={{
          title: 'Classes page',
          alignItems: "center",
          headerStyle: {
            alignItems: "center",

          },
          headerTintColor: '#03A9F4',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name= "classes" component={classesPage} />
        <Stack.Screen 
         options={{
          title: 'Lessons page',
          alignItems: "center",
          headerStyle: {
            alignItems: "center",

          },
          headerTintColor: '#03A9F4',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}name= "lessons" component={lessonsPage} />
        <Stack.Screen 
         options={{
          title: 'Classes page',
          alignItems: "center",
          headerStyle: {
            alignItems: "center",

          },
          headerTintColor: '#03A9F4',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}name= "addclass" component={addClassPage} />
        <Stack.Screen 
         options={{
          title: 'Add Lesson',
          alignItems: "center",
          headerStyle: {
            alignItems: "center",

          },
          headerTintColor: '#03A9F4',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}name= "addlesson" component={addlesson} />
        <Stack.Screen 
         options={{
          title: 'Edit Your Class',
          alignItems: "center",
          headerStyle: {
            alignItems: "center",

          },
          headerTintColor: '#03A9F4',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}name= "editclass" component={editclass} />
        <Stack.Screen 
         options={{
          title: 'Edit lesson ',
          alignItems: "center",
          headerStyle: {
            alignItems: "center",

          },
          headerTintColor: '#03A9F4',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}name= "editlesson" component={editlesson} />
        <Stack.Screen 
        options={{
          title: 'classmate',
          
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name= "splash" component={splash} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
}

const styles = StyleSheet.create({
  navigator: {
    backgroundColor:"#580A77",

  },
 

 
 
});
    
