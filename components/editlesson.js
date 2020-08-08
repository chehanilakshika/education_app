import React,{Component} from 'react';
import { Text, TextInput, View,TouchableOpacity,ScrollView, ImageBackground,StyleSheet, Alert } from 'react-native';
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
      componentDidMount (){
        const {key,name,link} = this.props.route.params;
        this.setState({
          key:key,
          myclass: name,
          mylink: link,
          
        })
      }

      onUpdate = () =>{
        const {myclass,mylink} = this.state;
        const key1 = this.state.key
        console.log(myclass,"myclass")
        firebase.database().ref('/lessons').child(key1).update({myclass,mylink})
        .then(() => {

          console.log('update');
          Alert.alert(" Update Success");
          
          this.props.navigation.navigate("home");

        })
        .catch((error)=>{
          console.log('error');
        })
      }
     
      

    
  render() {

      return(
        <View style={styles.container}>
          <ImageBackground
                                                        style={styles.stretch}
                                                        source={home1}>

            <Text style={styles.greeting}>{"Edit lesson.."}</Text>
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
                <Text style={{color:"#FFF",fontWeight:"500"}} onPress={this.onUpdate}>Submit</Text>
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
    color:"#000066",
    fontSize:20,

  },
  button:{
    marginHorizontal:30,
    backgroundColor:"#0277BD",
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
    