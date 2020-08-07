import React,{Component} from 'react';
import { Alert,Text, TextInput, View,TouchableOpacity, ImageBackground,StyleSheet } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from '../database/firebase';
import Drawer from './drawer';
import { Thumbnail } from 'native-base';
import home1 from "./../assets/a4.jpg"

export default class editclass extends Component {
    state = {
        myclass: '', 
        time: '', 
        date:''
        
      }

    
  render() {

      return(
        <View style={styles.container}>
           <ImageBackground
                                                        style={styles.stretch}
                                                        source={home1}>
            <Text style={styles.greeting}>{"Edit new Class.."}</Text>

            <View style={styles.errorMassage}>
                {this.state.errorMassage &&  <Text style={styles.error}>{this.state.errorMassage}</Text>}
            </View>

            <View style={styles.form}>
            <View>
                        <Text style={styles.inputTitle}>Class</Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={myclass=>this.setState({myclass})}
                            value={this.state.myclass}
                         ></TextInput>

                  </View>

                  <View>
                        <Text style={styles.inputTitle}>Time</Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={time=>this.setState({time})}
                            value={this.state.time}
                         ></TextInput>

                  </View>

                  <View>
                        <Text style={styles.inputTitle}>Date</Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={date=>this.setState({date})}
                            value={this.state.date}
                         ></TextInput>

                  </View>


                  
            </View>

            <TouchableOpacity style={styles.button} >
                <Text style={{color:"#FFF",fontWeight:"500"}} >Submit</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={{alignSelf:"center",marginTop:32}}>
                <Text style={{color:"#414959",fontSize:13}}>New To EduApp?<Text style={{color:"#E9446A",fontWeight:"500"}} onPress={this.home}>Sign Up</Text>

                </Text>
            </TouchableOpacity> */}


</ImageBackground>
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
    color:"#580A77",
    fontSize:26,
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
    borderBottomColor:"#4A148C",
    borderBottomWidth:StyleSheet.hairlineWidth,
    fontSize:15,
    color:"#161F3D"
  },
  inputTitle: {
    color:"#9C27B0",
    fontSize:20,

  },
  button:{
    marginHorizontal:30,
    backgroundColor:"#580A77",
    borderRadius:4,
    height:52,
    alignItems: "center",
    justifyContent: "center",
  },
  stretch: {
    flex: 1,
    padding:1,
   
   },
});
    