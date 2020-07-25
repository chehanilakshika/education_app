import React,{Component} from 'react';
import { ImageBackground,TouchableOpacity,Text, TextInput, View, StyleSheet } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import home1 from "./../assets/home1.jpg"
import home2 from "./../assets/home2.jpg"

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
    render (){
        return(
            <View style={styles.container}>
                    <ScrollView>
                        
                            <View style={styles.greeting}>

                                <Text style={styles.greeting}>Classmate is now on your fingerTips</Text>
            
                            </View>
                            
                            <View style={styles.container2}>
                            <View>
                                    <ImageBackground
                                            style={styles.stretch}
                                            source={home1}>
                                            
                                    </ImageBackground>     
                            </View>
                            <View style={styles.container2}>
                                    <ImageBackground
                                            style={styles.stretch}
                                            source={home2}>
                                            
                                    </ImageBackground>     
                            </View>
                            
                        </View>
                    </ScrollView>

               
            </View>

        );
    }
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        
      },
      container2: {
        flex: 1,
        marginTop:10,
      },

      button:{
        marginHorizontal:30,
        backgroundColor:"#580A77",
        borderRadius:4,
        alignItems: "center",
        justifyContent: "center",
      },
      stretch: {
        width:350,
        height:150,
        left:5,
         alignItems:"center" ,
         borderRadius:10,
        overlayColor:"#fff"
     
       },
       greeting: {
        marginTop:32,
        fontSize:18,
        fontWeight:"400",
        alignItems:"center",
        color:"#580A77",
      },
        
})

