import React,{Component} from 'react';
import { Button,Icon,TouchableOpacity,Text, TextInput, View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards'
// import { TouchableOpacity } from 'react-native-gesture-handler';
import card2 from "./../assets/card2.jpg"
import card from "./../assets/card.jpg"

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
                        <View style={styles.container}>
                            <Card>
                            <CardImage style={styles.image}
                                source={card2} 
                            />
                            {/* <CardTitle 
                                title="This is a title" 
                            /> */}
                            <CardAction 
                                separator={true} 
                                inColumn={false}>
                                <CardButton
                                onPress={this.classes}
                                title="Classes"
                                color="blue"
                                />
                                
                            </CardAction>
                            </Card>
                            </View>

                            <View style={styles.container}>
                            <Card>
                            <CardImage 
                                source={card} 
                            />
                            
                            <CardAction 
                                separator={true} 
                                inColumn={false}>
                                <CardButton
                                onPress={this.lessons}
                                title="lessons"
                                color="blue"
                                />
                               
                            </CardAction>
                            </Card>
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
     

      button:{
        marginHorizontal:30,
        backgroundColor:"#E65100",
        borderRadius:100,
        height:52,
        top:100,
        alignItems: "center",
        justifyContent: "center",
      },
      image:{
          
      }
    
})

