import React,{Component} from 'react';
import { Text, TextInput, View,TouchableOpacity, StyleSheet } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from '../database/firebase';
import Drawer from './drawer';
import { IconButton, Colors,RadioButtonItem } from 'react-native-paper';
import { Icon } from 'react-native-elements';

export default class addclass extends Component {
    state = {
        myclass: '', 
        time: '', 
        date:''
        
      }

     
      

      classes = () =>{
        console.log('I have  classes');
        this.props.navigation.navigate('classes');
    }
  render() {

      return(
        <View style={styles.container}>
            <Text style={styles.greeting}>{"Add new lesson.."}</Text>

            <View style={styles.errorMassage}>
                {this.state.errorMassage &&  <Text style={styles.error}>{this.state.errorMassage}</Text>}
            </View>

            <View style={styles.form}>
            <View>
                        <Text style={styles.inputTitle}>Lesson Name</Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={myclass=>this.setState({myclass})}
                            value={this.state.myclass}
                         ></TextInput>

                  </View>
                  

                  <View>
                        <Text style={styles.inputTitle}>Add Pdf</Text>
                        <TouchableOpacity style={styles.button1} >
                          <View style={styles.container1}>
                <Text style={{color:"#090909",fontSize:20,fontWeight:"500"}} onPress={this.classes}>Upload from Device</Text>
                <Icon
  name='arrow-up'
  type='evilicon'
  color='black  '
  size={50}
/></View>
            </TouchableOpacity>

                  </View>

                 


                  
            </View>

            <TouchableOpacity style={styles.button} >
                <Text style={{color:"#FFF",fontWeight:"500"}} onPress={this.classes}>Submit</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={{alignSelf:"center",marginTop:32}}>
                <Text style={{color:"#414959",fontSize:13}}>New To EduApp?<Text style={{color:"#E9446A",fontWeight:"500"}} onPress={this.home}>Sign Up</Text>

                </Text>
            </TouchableOpacity> */}



        </View>
      );
    
  }
 }


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  container1: {
    
    flexDirection:"row" ,
  },

  greeting: {
    marginTop:32,
    color:"#580A77",
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
    color:"#4C3B57",
    fontSize:14,
    textTransform:"uppercase"

  },
  button:{
    marginHorizontal:30,
    backgroundColor:"#580A77",
    borderRadius:4,
    height:52,
    alignItems: "center",
    justifyContent: "center",
  },
  button1:{
    marginHorizontal:30,
    backgroundColor:"transparent",
    borderRadius:4,
    height:52,
    alignItems: "center",
    justifyContent: "center",
  }
});
    