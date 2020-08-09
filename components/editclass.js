import React,{Component} from 'react';
import { Alert,Text, TextInput,ScrollView, View,TouchableOpacity, ImageBackground,StyleSheet } from 'react-native';
import firebase from '../database/firebase';
import home1 from "./../assets/Capture6.png"

export default class editclass extends Component {
    state = {
        key: "",
        myclass: '', 
        time: '', 
        date:''
        
      }


      componentDidMount (){
        const {key,date,classa,time} = this.props.route.params;
        this.setState({
          key:key,
          date: date,
          myclass: classa,
          time: time,
        })
      }

      onUpdate = () =>{
        const {date,myclass,time} = this.state;
        const key1 = this.state.key
        console.log(date,"date")
        firebase.database().ref('/classes').child(key1).update({date,myclass,time})
        .then(() => {

          console.log('update');
          Alert.alert("Success");
          
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
             
            <Text style={styles.greeting}>{"Edit new Class.."}</Text>
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

            <TouchableOpacity style={styles.button} onPress={this.onUpdate}>
                <Text style={{color:"#FFF",fontWeight:"500"}} onPress={this.onUpdate} >Submit</Text>
            </TouchableOpacity>

         

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
    color:"#9C27B0",
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
    