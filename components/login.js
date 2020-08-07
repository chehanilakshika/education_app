import React,{Component} from 'react';
import { Alert, Image,Text, TextInput, ImageBackground,View,TouchableOpacity, StyleSheet } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from '../database/firebase';
import { ScrollView } from 'react-native-gesture-handler';
import logo from "./../assets/logo1.jpg"
import log1 from "./../assets/log1.jpg"

export default class login extends Component {
    state = {
        email: '', 
        password: '', 
        errorMassage:null
        
      }

      handleLogin=()=>{
          console.log("login function")
          const {email,password}=this.state;
          console.log(email);

          firebase
            .auth()
            .signInWithEmailAndPassword(email,password)
            .then((res)=>{
              console.log(res.user);
              Alert.alert(
                "Login success"
              )
              this.props.navigation.navigate("home");
            })
            .catch(error=>this.setState({errorMassage:error.message}));
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
         <View style={styles.container2}>        
        <View style={styles.greeting}>
            <Image
            style={styles.stretch}
              source={logo}
              width="1"/>
               <Text></Text>
        </View>

            {/* <View style={styles.errorMassage}>
                {this.state.errorMassage &&  <Text style={styles.error}>{this.state.errorMassage}</Text>}
            </View> */}
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
                <Text style={{color:"#FFF",fontSize:22}} >Sign in</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignSelf:"center",marginTop:32}}>
                <Text style={{color:"#FDFEFE",fontSize:15}}>New To EduApp? <Text style={{color:"#81D4FA",fontSize:18,fontWeight:"500"}} onPress={this.signup}>Sign Up</Text>

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
    