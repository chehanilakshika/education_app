import React,{Component} from 'react';
import { ImageBackground,Text, View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import 'react-native-gesture-handler';
import log1 from "./../assets/Capture5.png"
import { ScrollView } from 'react-native-gesture-handler';

export default class profile extends Component{

  signup = () =>{
    console.log('I am  signing up ');
    this.props.navigation.navigate('signup');
}
    render (){

        return(
          
            <View style={styles.container}>
                 
                 <ImageBackground
                        style={styles.container2}
                        source={log1}>
                             <ScrollView>
                    <View style = {styles.container3}>
                             <IconButton
                                
                                type="solid"
                                style={styles.iconb}
                                iconRight
                                icon="arrow-right-circle"
                                color="#1976D2"
                                size={60}
                                onPress={this.signup} >
                                  
                            </IconButton>
                            <Text style={styles.greeting}>B.A.L.C.Lakshika</Text>
                            <Text style={styles.greeting}>2017/CS/094</Text>
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
        padding:1,
        
      },
      container3: {
        flex: 1,
        marginTop:300,
        marginBottom:10,
        marginRight:50,
        marginLeft:50,
        justifyContent: "space-between",
        borderRadius:0,
        alignItems: "center",

        padding:1,

      },
      iconb:{

      },


      button:{
        flex: 1,
      
        backgroundColor:"#B7B2BC",
        borderRadius:4,
        alignItems: "center",
        justifyContent: "space-between",
      },
      stretch: {
        width: 100,
        height: 100,
        alignItems:"center" ,
        borderRadius:75,
     
    
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
        fontWeight:"bold",
        alignItems:"center",
        color:"black",

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

