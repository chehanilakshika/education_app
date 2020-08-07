import React,{Component} from 'react';
import { Alert, Image,Text,ImageBackground, TextInput, View,TouchableOpacity, StyleSheet } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from '../database/firebase';
import { ScrollView } from 'react-native-gesture-handler';
import logo from "./../assets/logo1.jpg"
import log1 from "./../assets/log1.jpg"


export default class login extends Component {
    state = {
        email: '', 
        name: "",
        password: '', 
        errorMassage:null
        
      }

      signUp = () => {
        console.log('signup function')
        const { name, password, email } = this.state
        console.log(name);
        try {
          console.log('come');
          // here place your signup logic
          if(this.state.email === '' && this.state.password === '' ) {
            Alert.alert('Enter details to signup!')
          } else {
            console.log('cmslcmslcms')
            this.setState({
              isLoading: true,
            })
            firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
              console.log('comeaaaa')
              res.user.updateProfile({
                displayName: name,
              })
              console.log('User registered successfully!')
              this.setState({
                isLoading: false,
                displayName: '',
                email: '', 
                password: ''
              })
              Alert.alert("Login success");
              this.props.navigation.navigate('login')
            })
            .catch(error => {
              console.log('error',error);
              this.setState({ errorMessage: error.message })})      
          }
          //console.log('user successfully signed up!: ', success)
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
      

      home = () =>{
        console.log('I am  example');
        this.props.navigation.navigate('home');
    }
    signin = () =>{
      console.log('I am  example');
      this.props.navigation.navigate('login');
  }
  render() {

      return(
        <View style={styles.container}>
           <ImageBackground
                                                        style={styles.stretch1}
                                                        source={log1}>
         <View style={styles.container2}>        
        <View style={styles.greeting}>
            <Image
            style={styles.stretch}
              source={logo}
              width="1"/>
        </View>
        <Text></Text>

            {/* <View style={styles.errorMassage}>
                {this.state.errorMassage &&  <Text style={styles.error}>{this.state.errorMassage}</Text>}
            </View> */}
            <View style={styles.form}>

            <View>
                        <Text style={styles.inputTitle}>Name</Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={name=>this.setState({name})}
                            value={this.state.name}
                         ></TextInput>

                  </View>
                  <View>
                        <Text style={styles.inputTitle}>Email Address</Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={email=>this.setState({email})}
                            value={this.state.email}
                         ></TextInput>

                  </View>


                  <View>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput 
                            style={styles.input}  
                            securityTextEntry 
                            autoCapitalize ="none"
                            onChangeText={password=>this.setState({password})}
                            value={this.state.password}
                             ></TextInput>

                  </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={this.signUp}>
                <Text style={{color:"#FFF",fontSize:22}} >Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignSelf:"center",marginTop:32}}>
                <Text style={{color:"#FDFEFE",fontSize:15}}>Already have an account ? <Text style={{color:"#81D4FA",fontSize:18,fontWeight:"500"}} onPress={this.signin}>Sign In</Text>

                </Text>
            </TouchableOpacity>


           </View>
           </ImageBackground>
        </View>
      );
    
  }
 }


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  container2: {
    flex: 1,

    
    borderRadius:20,
  
  },

  greeting: {
    marginTop:32,
    fontSize:30,
    fontWeight:"400",
    alignItems:"center",
    color:"#580A77",
  },
  stretch: {
    width: 100,
    height: 100,
    alignItems:"center" ,
    borderRadius:75,
 

  },
  stretch1: {
    flex: 1,
    padding:1,
   
 

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
  form:{
    marginBottom:48,
    marginHorizontal:30
  },
  input:{
    borderBottomColor:"#FDFEFE",
    borderBottomWidth:StyleSheet.hairlineWidth,
    fontSize:16,
    color:"#B0BEC5"
  },
  inputTitle: {
    color:"#FDFEFE",
    fontSize:18,

  },
  button:{
    marginHorizontal:30,
    backgroundColor:"#580A77",
    borderRadius:4,
    height:52,
    alignItems: "center",
    justifyContent: "center",
  }
});
    