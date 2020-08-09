import React,{Component} from 'react';
import { Alert, Image,Text,ScrollView, TextInput, ImageBackground,View,TouchableOpacity, StyleSheet } from 'react-native';
import firebase from '../database/firebase';
import logo from "./../assets/Capture3.png"
import log1 from "./../assets/Capture6.png"

export default class login extends Component {
    state = {
        email: '', 
        password: '', 
        errorMessage:null
        
      }

      handleLogin=()=>{
          console.log("login function")
          const {email,password}=this.state;
          console.log(email);

          firebase
            .auth()
            .signInWithEmailAndPassword(email,password)
            .then((res)=>{
              console.log("hi");
              console.log(res.user.email);
              this.setState({
               email:"",
               
              })
              Alert.alert(
                "Login success"
              )
              this.setState({
                email:""
          
              })
              this.props.navigation.navigate("home");
            })
            .catch(error => {
              console.log('error',error);
              this.setState({ errorMessage: error.message })
              
            })    
      };
      

      home = () =>{
        console.log('I am  example');
        this.props.navigation.navigate('home');
    }
    signup = () =>{
      console.log('I am  example');
      this.props.navigation.navigate('signup');
  }
  render() {

      return(
        <View style={styles.container}>
          <ImageBackground
                                                        style={styles.stretch1}
                                                        source={log1}>
          <ScrollView>
         <View style={styles.container2}>        
        <View style={styles.greeting}>
            <Image
            style={styles.stretch}
              source={logo}
              width="1"/>
               <Text></Text>
        </View>
        {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}

          
            <View style={styles.form}>
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

            <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                <Text style={{color:"#FFF",fontSize:22,fontWeight: 'bold'}} >Sign in</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignSelf:"center",marginTop:32}}>
                <Text style={{color:"#0277BD",fontSize:15}}>New To Classmate? <Text style={{color:"#000099",fontSize:18,fontWeight: 'bold'}} onPress={this.signup}>Sign Up</Text>

                </Text>
            </TouchableOpacity>


           </View>
           </ScrollView>
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
    width: 300,
    height: 90,
    alignItems:"center" ,
    borderRadius:2,
 

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
    color:"#D32F2F",
    fontSize:15,
    fontWeight:"600",
    textAlign:"center"
  },
  form:{
    marginBottom:48,
    marginHorizontal:30
  },
  input:{
    borderBottomColor:"black",
    borderBottomWidth:StyleSheet.hairlineWidth,
    fontSize:16,
    color:"#212121",
    fontWeight: 'bold',
  },
  inputTitle: {
    color:"#0277BD",
    fontSize:18,
    fontWeight: 'bold',

  },
  button:{
    marginHorizontal:30,
    backgroundColor:"#0277BD",
    borderRadius:4,
    height:52,
    alignItems: "center",
    justifyContent: "center",
  }
});
    