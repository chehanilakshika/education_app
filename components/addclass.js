import React,{Component} from 'react';
import { Alert,Text, TextInput,ScrollView, View,TouchableOpacity, ImageBackground,StyleSheet } from 'react-native';
import firebase from '../database/firebase';
import home1 from "./../assets/Capture6.png"

export default class addclass extends Component {
    state = {
        myclass: '', 
        time: '', 
        date:''
        
      }

     addNewClass = () => {
       console.log('addclass')
        const  {myclass,time,date} = this.state;
        console.log(myclass);
        setTimeout({},400000);
        firebase.database().ref('/classes').push({myclass,time,date})
        .then(()=>{
          this.setState({
            myclass:"",
            time:"",
            date:"",
          })
          console.log('inserted');
          Alert.alert("insert success");
          this.props.navigation.navigate('classes');
        })
        .catch(error =>{console.log("error ",error)})
     }
      

      classes = () =>{
        console.log('I have  classes');
        this.props.navigation.navigate('classes');
    }
  render() {

      return(
        <View style={styles.container}>
           <ImageBackground
                                                        style={styles.stretch}
                                                        source={home1}>
            <Text style={styles.greeting}>{"Add new Class.."}</Text>
            <ScrollView>
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
                <Text style={{color:"#FFF",fontWeight:"bold",fontSize:22}} onPress={this.addNewClass}>Submit</Text>
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
    color:"#0277BD",
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
    