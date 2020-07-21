// SignUp.js
import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Alert
} from 'react-native'
import firebase from '../database/firebase';

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
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('phone_number', val)}
        />
        <Button
          title='Sign Up'
          onPress={this.signUp}
        />
        
        <Button
          title='Log in'
          onPress={this.example}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})