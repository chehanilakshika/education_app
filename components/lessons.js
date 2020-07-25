import React,{Component} from 'react';
import { ImageBackground,Text, View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import home1 from "./../assets/home1.jpg"


export default class home extends Component{

   
    render (){
        return(
            <View style={styles.container}>
                   <ImageBackground
            style={styles.stretch}
              source={home1}>
                  <IconButton
                                                type="solid"
                                                iconRight
                                                icon="pencil-circle"
                                                color="#5D248C"
                                                size={50}
                                                onPress={() => console.log('Pressed')} >

                                    <Text></Text></IconButton>
              </ImageBackground>               
            </View>

        );
    }
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        
        
      },
      stretch: {
       width:350,
       height:150,
       left:5,
        alignItems:"center" ,
        borderRadius:10,
     
    
      },
    
})

