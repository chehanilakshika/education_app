import React,{Component} from 'react';
import { Text, TextInput, View,ScrollView, TouchableOpacity, ImageBackground,StyleSheet, Alert } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from '../database/firebase';
import Drawer from './drawer';
import { IconButton, Colors,RadioButtonItem } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import home1 from "./../assets/Capture6.png"

export default class addclass extends Component {
    state = {
        myclass: '', 
        mylink: '', 
        array:[],
        
      }

     
      

      classes = () =>{
        console.log('I have  classes');
        console.log('addclass')
        const  {myclass,mylink} = this.state;
        console.log(myclass);
        setTimeout({},400000);
        firebase.database().ref('/lessons').push({myclass,mylink})
        .then(()=>{
          this.setState({
            myclass:"",
            time:"",
            date:"",
          })
          console.log('inserted');
          Alert.alert("insert success");
          this.props.navigation.navigate('lessons');
        })
        .catch(error =>{console.log("error ",error)})
        //this.props.navigation.navigate('classes');
    }
  render() {

      return(
        <View style={styles.container}>
          <ImageBackground
          
                                                        style={styles.stretch}
                                                        source={home1}>
             
            <Text style={styles.greeting}>{"Add new lesson.."}</Text>
            <ScrollView>
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
                        <Text style={styles.inputTitle}>Add Pdf Link</Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={mylink=>this.setState({mylink})}
                            value={this.state.mylink}
                         ></TextInput>
                  </View>

                 


                  
            </View>

            <TouchableOpacity style={styles.button} >
                <Text style={{color:"#FFF",fontWeight:"500"}} onPress={this.classes}>Submit</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={{alignSelf:"center",marginTop:32}}>
                <Text style={{color:"#414959",fontSize:13}}>New To EduApp?<Text style={{color:"#E9446A",fontWeight:"500"}} onPress={this.home}>Sign Up</Text>

                </Text>
            </TouchableOpacity> */}

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

  greeting: {
    marginTop:32,
    color:"#000066",
    fontSize:26,
    fontWeight:"bold",
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
    color:"#4C3B57",
    fontSize:20,

  },
  button:{
    marginHorizontal:30,
    backgroundColor:"#29B6F6",
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
    