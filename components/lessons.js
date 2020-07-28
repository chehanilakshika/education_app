import React,{Component} from 'react';
import { ImageBackground,Text, View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import home1 from "./../assets/home1.jpg"


export default class home extends Component{

    addlesson = () =>{
        console.log('I am  example');
        this.props.navigation.navigate('addlesson');
    }
    render (){
        return(
            <View style={styles.container}>
                  <IconButton
                                
                                type="solid"
                            
                                iconRight
                                icon="plus-circle"
                                color="#5D248C"
                                size={50}
                                onPress={this.addlesson} >
                    </IconButton>

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

