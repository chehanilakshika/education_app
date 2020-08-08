import React,{Component} from 'react';
import { ImageBackground,Text, View,ScrollView, StyleSheet, Alert } from 'react-native';
import { IconButton } from 'react-native-paper';
import _ from 'lodash';
import firebase from '../database/firebase';
import home1 from "./../assets/Capture6.png"
import a1 from "./../assets/a6.jpg"
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class home extends Component{

    state ={
        array : [],
    }

    componentDidMount() {
        const myArray =[];
                firebase.database().ref("/lessons").on("value", (data)=>{
                        const dataList = _.map(data.val(), (val, key) => {
                                const postData = val;
                                return {
                                  val,
                                  key: key
                                }
                              });
                        console.log(dataList);  
                        
                        for(let i =0; i < dataList.length ; i++){
                                myArray.push([dataList[i].key,dataList[i].val.myclass, dataList[i].val.mylink]);
                        }
        
                        console.log("myArray", myArray);
                        this.setState({
                                array:myArray,
                        })
                })
    }

    delete = (key) =>{
        firebase.database().ref(`/lessons/${key}`).remove();
        Alert.alert("delete success")
        this.props.navigation.navigate('home');
    }

    deleteLesson = (key) =>{
        Alert.alert(
            'Alert',
              'are you sure to delete this post',
              [
                {text: 'OK', onPress: () => {this.delete(key)},  style: 'cancel'}, 
                {text: 'cancel', onPress: () => {this.props.navigation.navigate('lessons')},  style: 'cancel'},            
              ]
          )
    }

    addlesson = () =>{
        console.log('I am  example');
        this.props.navigation.navigate('addlesson');
    }
    editlesson = (key,name,link) =>{
      //const key = this.state.key;
      console.log('I am  editing a lesson');
    

      this.props.navigation.navigate('editlesson',{key,name,link});
  }
    render (){
        return(
            <View style={styles.container}>
                <ImageBackground
                                                        style={styles.stretch}
                                                        source={home1}>
                  <IconButton
                                
                                type="solid"
                            
                                iconRight
                                icon="plus-circle"
                                color="#29B6F6"
                                size={50}
                                onPress={this.addlesson} >
                    </IconButton>

                   
                        <ScrollView>
                        <View>
                    
                                                           {this.state.array.map((data, i)=>(
                                                                <View style={styles.container3}>
                                                                    <ImageBackground
                                                                        style={styles.stretch2}
                                                                        source={a1}>
                                                                            <View>
                                                                                        
                                                                                    <View >
                                                                                            <Text  style={styles.greeting}>Lesson Name : </Text><Text  style={styles.greeting2}>{data[1]}</Text>
                                                                                            <Text  style={styles.greeting}>Lesson Link : </Text><Text  style={styles.greeting2}>{data[2]}</Text>
                                                                                            <Text></Text>
                                                                                    </View>

                                                                                    <View style={{flexDirection: 'row'}}>
                                                                                    <TouchableOpacity onPress={()=>{this.deleteLesson(data[0])}}>
                                                                                    <IconButton
                                                                                                    
                                                                                                    type="solid"
                                                                                            
                                                                                                    iconRight
                                                                                                    icon="delete-circle"
                                                                                                    color="#FF0000"
                                                                                                    size={40}>
                                                                                                    
                                                                                    </IconButton>
                                                                                    </TouchableOpacity >
                                                                                    <TouchableOpacity onPress={()=>this.editlesson(data[0],data[1],data[2],data[3])}>
                                                                                    <IconButton
                                                                                                    
                                                                                                    type="solid"
                                                                                            
                                                                                                    iconRight
                                                                                                    icon="pencil-circle"
                                                                                                    color="#33CC33"
                                                                                                    size={40}
                                                                                                    >
                                                                                                   
                                                                                                    
                                                                                    </IconButton>
                                                                                    </TouchableOpacity>
                                                                                    </View>
                                                                                    
                                                                            </View>
                                                                   </ImageBackground>
                                                                   </View>
                                                           ))}
                                                             </View>
                         </ScrollView>                          
                  
                    </ImageBackground>
            </View>

        );
    }
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        padding:1,
        backgroundColor:"#17202A",

        
      },
      container2: {
        flex: 1,
        marginTop:1,
        marginBottom:10,
        marginRight:10,
        marginLeft:10,
        borderRadius:20,
        padding:1,

      },
      container3: {
        flex: 1,
        
        marginTop:2,
        marginBottom:1,
        marginRight:10,
        marginLeft:10,
        backgroundColor:"#455A64",
        justifyContent: "space-between",
        borderRadius:0,
        padding:1,

      },
      


      button:{
        flex: 1,
      
        backgroundColor:"#B7B2BC",
        borderRadius:4,
        alignItems: "center",
        justifyContent: "space-between",
      },
      stretch: {
        flex: 1,
        padding:1,
       
       },
       stretch2: {
        borderRadius:20,
        padding:10,

        flex:1,
        alignItems:"center" ,
        borderRadius:10,
        overlayColor:"#fff",
        marginTop:10,
        marginBottom:10,
        marginRight:10,
        marginLeft:10,
     
       },
       greeting: {
        marginTop:5,
        fontSize:18,
        fontWeight:"400",
        alignItems:"center",
        color:"#212121",

      },
      greeting2: {
            marginTop:5,
            fontSize:18,
            fontWeight:"400",
            alignItems:"center",
            color:"#1A237E",
    
          },

      GooglePlusStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dc4e41',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        width: 220,
        borderRadius: 5,
        margin: 5,
      },
      FacebookStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',        
        borderWidth: 0.5,
        borderColor: '#fff',
        borderRadius: 5,
        margin: 5,
      },
      ImageIconStyle: {
        padding: 10,
        margin: 5,
        resizeMode: 'stretch',
        borderRadius:50
      },
      TextStyle: {
        color: 'black',
        marginBottom: 4,
        alignItems: 'center',
        fontSize:32
      },
      SeparatorLine: {
        backgroundColor: '#fff',
        width: 1,
        height: 40,
      },
      MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,


      },
    
})

