// SignUp.js

import React from 'react'
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity
} from 'react-native'
import firebase from '../database/firebase';
import { ScrollView } from 'react-native-gesture-handler';

export default class SignUp extends React.Component {
  state = {
    username: '', 
    password: '', 
    email: '', 
    phone_number: '',
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { username, password, email, phone_number } = this.state
    try {
      // here place your signup logic
      if(this.state.email === '' && this.state.password === '' ) {
        Alert.alert('Enter details to signup!')
      } else {
        this.setState({
          isLoading: true,
        })
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          res.user.updateProfile({
            username: this.state.username,
            phone_number: this.state.phone_number,
          })
          console.log('User registered successfully!')
          this.setState({
            isLoading: false,
            displayName: '',
            email: '', 
            password: ''
          })
          //this.props.navigation.navigate('Login')
        })
        .catch(error => this.setState({ errorMessage: error.message }))      
      }
      console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }

    /////////////////////////////////////////////////
    // if(this.state.email === '' && this.state.password === '') {
    //     Alert.alert('Enter details to signin!')
    //   } else {
    //     this.setState({
    //       isLoading: true,
    //     })
    //     firebase
    //     .auth()
    //     .signInWithEmailAndPassword(this.state.email, this.state.password)
    //     .then((res) => {
    //       console.log(res.user)
    //       console.log('User logged-in successfully!')
    //       //localStorage.setItem("uid",res.user)
    //       this.setState({
    //         isLoading: false,
    //         email: '', 
    //         password: ''
    //       })
  
    //       //localStorage.setItem("uid",)
    //       this.props.navigation.navigate('Dashboard')
    //     })
    //     .catch(error => this.setState({ errorMessage: error.message }))
    //   }

  }

  example = () =>{
      console.log('I am  example');
      this.props.navigation.navigate('login');
  }
  
 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.greeting}>{"Hello New Commer.. Welcome..!"}</Text>

        <View style={styles.errorMassage}>
                {this.state.errorMassage &&  <Text style={styles.error}>{this.state.errorMassage}</Text>}
            </View>
        <ScrollView>
        <View style={styles.form}>
              <View>
              <Text style={styles.inputTitle}>Username</Text>

                  <TextInput
                    style={styles.input}
                    placeholder='Username'
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChangeText={val => this.onChangeText('username', val)}
                  />
              </View>

              <View>
              <Text style={styles.inputTitle}>Password</Text>

                  <TextInput
                    style={styles.input}
                    placeholder='Password'
                    secureTextEntry={true}
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChangeText={val => this.onChangeText('password', val)}
                  />

              </View>

              <View>
              <Text style={styles.inputTitle}>Email</Text>

                <Text style={styles.inputTitle}></Text>
                  <TextInput
                    style={styles.input}
                    type="email"
                    placeholder='Email'
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChangeText={val => this.onChangeText('email', val)}
                  />

              </View>

              <View>
              <Text style={styles.inputTitle}>Phone No.</Text>

                  <TextInput
                    style={styles.input}
                    placeholder='Phone Number'
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChangeText={val => this.onChangeText('phone_number', val)}
                  />

              </View>
              <TouchableOpacity style={styles.button} >
                <Text style={{color:"#F48FB1",fontSize:"18",fontWeight:"1000"}} >Sign in</Text>
            </TouchableOpacity>
                  
           
        </View>
        </ScrollView>
      </View>

      
    )
  }
}

const styles = StyleSheet.create({
  form:{
    marginBottom:48,
    marginHorizontal:30
  },
  input:{
    borderBottomColor:"#8A8F9E",
    borderBottomWidth:StyleSheet.hairlineWidth,
    fontSize:14,
    color:"#3E2723"
  },
  inputTitle: {
    color:"#37474F",
    fontSize:14,
    textTransform:"uppercase"

  },
  button:{
    marginHorizontal:30,
    backgroundColor:"#E9446A",
    borderRadius:4,
    height:52,
    top:30,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,

  },
  greeting: {
    marginTop:32,
    fontSize:20,
    color:"#E9446A",
    fontWeight:"400",
    textAlign:"center"
  },
  errorMassage:{
    height:72,
    justifyContent:"center",
    marginHorizontal:30,
    alignItems:"center"  

  },
  error: {
    color:"#E9446A",
    fontSize:13,
    fontWeight:"600",
    textAlign:"center"
  },
})