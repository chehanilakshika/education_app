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
import ExampleScreen from "./components/example";
import HomeScreen from "./components/home";
import LoginScreen from "./components/login";
import classesPage from "./components/classes";
import lessonsPage from "./components/lessons";
import addClassPage from "./components/addclass";
import person from "./components/person";
import addlesson from "./components/addlesson";
import editlesson from "./components/editlesson";
import editclass from "./components/editclass";
import profile from "./components/profile";

import drawer from "./components/drawer";
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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signup">
        <Stack.Screen name= "signup" component={SignUpScreen} />
        <Stack.Screen name= "example" component={ExampleScreen} />
        <Stack.Screen name= "home" component={HomeScreen} />
        <Stack.Screen name= "login" component={LoginScreen} />
        <Stack.Screen name= "classes" component={classesPage} />
        <Stack.Screen name= "lessons" component={lessonsPage} />
        <Stack.Screen name= "addclass" component={addClassPage} />
        <Stack.Screen name= "person" component={person} />
        <Stack.Screen name= "addlesson" component={addlesson} />
        <Stack.Screen name= "editclass" component={editclass} />
        <Stack.Screen name= "editlesson" component={editlesson} />
        <Stack.Screen name= "profile" component={profile} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
}


