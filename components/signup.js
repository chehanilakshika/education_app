import React,{Component} from 'react';
import { Alert, Image,Text, TextInput, View,TouchableOpacity, StyleSheet } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from '../database/firebase';
import { ScrollView } from 'react-native-gesture-handler';
import logo from "./../assets/logo1.jpg"
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
                displayName: this.state.name,
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
         <View style={styles.container2}>        
        <View style={styles.greeting}>
            <Image
            style={styles.stretch}
              source={logo}
              width="1"/>
        </View>

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
                <Text style={{color:"#FFF",fontSize:15,fontWeight:"500"}} >Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignSelf:"center",marginTop:32}}>
                <Text style={{color:"#414959",fontSize:15}}>New To EduApp? <Text style={{color:"#580A77",fontSize:15,fontWeight:"500"}} onPress={this.signin}>Sign In</Text>

                </Text>
            </TouchableOpacity>


           </View>

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

    backgroundColor:"#DFC7EF",
    
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
    width: 150,
    height: 150,
    alignItems:"center" ,
    borderRadius:75,
 

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
    color:"#4C3B57",
    fontSize:15,
    textTransform:"uppercase"

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
    