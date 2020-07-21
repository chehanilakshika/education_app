import React,{Component} from 'react';
import { Alert, Button,Text, TextInput, View,TouchableOpacity, StyleSheet } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from '../database/firebase';

export default class App extends Component {
    state = {
        email: '', 
        password: '', 
        errorMassage:null
        
      }

      handleLogin=()=>{
          const {email,password}=this.state;

          firebase
            .auth()
            .signInWithEmailAndPassword(email,password)
            .catch(error=>this.setState({errorMassage:error.message}));
      };
      

      home = () =>{
        console.log('I am  example');
        this.props.navigation.navigate('home');
    }
  render() {

      return(
        <View style={styles.container}>
            <Text style={styles.greeting}>{"Helloo.."}</Text>

            <View style={styles.errorMassage}>
                {this.state.errorMassage &&  <Text style={styles.error}>{this.state.errorMassage}</Text>}
            </View>

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
                <Text style={{color:"#FFF",fontWeight:"500"}} >Sign in</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignSelf:"center",marginTop:32}}>
                <Text style={{color:"#414959",fontSize:13}}>New To EduApp?<Text style={{color:"#E9446A",fontWeight:"500"}} onPress={this.home}>Sign Up</Text>

                </Text>
            </TouchableOpacity>



        </View>
      );
    
  }
 }


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

  greeting: {
    marginTop:32,
    fontSize:18,
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
  form:{
    marginBottom:48,
    marginHorizontal:30
  },
  input:{
    borderBottomColor:"#8A8F9E",
    borderBottomWidth:StyleSheet.hairlineWidth,
    fontSize:15,
    color:"#161F3D"
  },
  inputTitle: {
    color:"#8A8F9E",
    fontSize:10,
    textTransform:"uppercase"

  },
  button:{
    marginHorizontal:30,
    backgroundColor:"#E9446A",
    borderRadius:4,
    height:52,
    alignItems: "center",
    justifyContent: "center",
  }
});
    