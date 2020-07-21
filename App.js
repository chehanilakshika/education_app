import { StatusBar } from 'expo-status-bar';
//import React from 'react';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//screens
import SignUpScreen from './components/signup';
import ExampleScreen from "./components/example";
import HomeScreen from "./components/home";
import LoginScreen from "./components/login";
import classesPage from "./components/classes";
import lessonsPage from "./components/lessons";
import addClassPage from "./components/addclass";
import drawer from "./components/drawer";

const Stack = createStackNavigator(); 
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name= "SignUp" component={SignUpScreen} />
        <Stack.Screen name= "example" component={ExampleScreen} />
        <Stack.Screen name= "home" component={HomeScreen} />
        <Stack.Screen name= "login" component={LoginScreen} />
        <Stack.Screen name= "classes" component={classesPage} />
        <Stack.Screen name= "lessons" component={lessonsPage} />
        <Stack.Screen name= "addclass" component={addClassPage} />
        <Stack.Screen name= "drawer" component={drawer} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


