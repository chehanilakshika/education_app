import React,{Component} from 'react';
import { ImageBackground,Image,Text, View,TouchableOpacity, StyleSheet } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { IconButton, Colors,RadioButtonItem } from 'react-native-paper';
import home1 from "./../assets/a4.jpg"
import classrm from "./../assets/a7.png"
import a1 from "./../assets/a6.jpg"
import a8 from "./../assets/a8.png"

import { ScrollView } from 'react-native-gesture-handler';

export default class home extends Component{

    classes = () =>{
        console.log('I am  example');
        this.props.navigation.navigate('classes');
    }
    lessons = () =>{
        console.log('I am  example');
        this.props.navigation.navigate('lessons');
    }
    login = () =>{
      console.log('return to log in');
      this.props.navigation.navigate('login');
  }
  profile = () =>{
    console.log('I am profile');
    this.props.navigation.navigate('profile');
}
    render (){
        return(
            <View style={styles.container}>
                 <ImageBackground
                                                        style={styles.stretch}
                                                        source={home1}>
                    <ScrollView>
                        
                        
                            <View style={styles.greeting}>

                                <Text style={styles.greeting}>Classmate is now on your fingerTips..!</Text>
                                <Text style={styles.greeting}></Text>

                            </View>


                            
                            <View style={styles.container2}>
                                        <View style={styles.container3}>
                                                <ImageBackground
                                                        style={styles.stretch2}
                                                        source={a1}>

                                                        <View style={styles.MainContainer}>
                                                                        <TouchableOpacity 
                                                                        style={styles.FacebookStyle} 
                                                                        activeOpacity={0.5}
                                                                        onPress= {this.classes}>
                                    
                                                                        <Image
                                                
                                                                                    source={a8}
                                                                                    name="facebook"
                                                                                    style={styles.ImageIconStyle}
                                                                        />
                                                                        {/* <View style={styles.SeparatorLine} /> */}
                                                                        <Text style={styles.TextStyle}> Classes </Text>
                                                                        </TouchableOpacity>
                                                        </View>
                            
                                                </ImageBackground>  
                                              
                     

                                        </View>
                                        <Text style={styles.greeting}></Text>

                                        <View style={styles.container3}>
                                                
                                                    <ImageBackground
                                                            style={styles.stretch2}
                                                             source={a1}>
                                                        <View style={styles.MainContainer}>
                                                                        <TouchableOpacity 
                                                                        style={styles.FacebookStyle} 
                                                                        activeOpacity={0.5}
                                                                        onPress= {this.lessons}>
                                    
                                                                        <Image
                                                
                                                                                    source={classrm}
                                                                                    name="facebook"
                                                                                    style={styles.ImageIconStyle}
                                                                        />
                                                                        {/* <View style={styles.SeparatorLine} /> */}
                                                                        <Text style={styles.TextStyle}> Lessons </Text>
                                                                        </TouchableOpacity>
                                                                        
                                                        </View>
                                                        
                                                                
                                            
                                                    </ImageBackground> 

                                        </View> 

                                        <View style={styles.container4}>
                                                                   <TouchableOpacity onPress={()=>this.deleteLesson(data[0])}> 
                                                                   <IconButton
                                
                                                                                        type="solid"
                                                                                
                                                                                        iconRight
                                                                                        icon="account-circle"
                                                                                        color="#000099"
                                                                                        size={45}
                                                                                        onPress={this.profile}>
                                                                                         
                                                                        </IconButton>
                                                                        </TouchableOpacity>
                                                                        <IconButton
                                
                                                                                        type="solid"
                                                                                
                                                                                        iconRight
                                                                                        icon="logout"
                                                                                        color="#000099"
                                                                                        size={40}
                                                                                        onPress={this.login} >
                                                                        </IconButton>

                                                                     </View>   
  
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
        marginTop:10,
        marginBottom:10,
        marginRight:10,
        marginLeft:10,
        backgroundColor:"#455A64",
        justifyContent: "space-between",
        borderRadius:0,
        padding:1,

      },
      container4: {
        flex: 1,
        flexDirection:"row",
        marginTop:10,
        marginBottom:10,
        marginRight:10,
        marginLeft:10,
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
        marginTop:10,
        fontSize:18,
        fontWeight:"400",
        alignItems:"center",
        color:"#580A77",

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
      button1:{
        marginHorizontal:30,
        backgroundColor:"#580A77",
        borderRadius:4,
        height:52,
        alignItems: "center",
        justifyContent: "center",
      }
})

