import React from 'react';
import {View,Text,Container,ScrollView} from "react-native";
import { IconButton, Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';


export default class classesPage extends React.Component{

    
    addclass = () =>{
        console.log('I am  adding a class');
        this.props.navigation.navigate('addclass');
    }
    render() {
        return (
            <View >
                <Text> Loading Classes</Text>
                <IconButton
                    type="solid"
                   
                    iconRight
                    icon="plus-circle"
                    color={Colors.pink500}
                    size={50}
                    onPress={this.addclass} >

                    </IconButton>


                    <IconButton
                    type="solid"
                   
                    iconRight
                    icon="delete-circle"
                    color={Colors.pink500}
                    size={50}
                    onPress={() => console.log('Pressed')} >

                    </IconButton>
                    <IconButton
                    type="solid"
                   
                    iconRight
                    icon="pencil-circle"
                    color={Colors.pink500}
                    size={50}
                    onPress={() => console.log('Pressed')} >

                    </IconButton>
                    
                    <View>
                    
                    <ScrollView>
                    
 
                    <Card>
                        
                        <CardAction 
                        separator={true} 
                        inColumn={false}>
                        <CardButton
                            onPress={() => {}}
                            title="Classes"
                            color="#1C0F6B"
                        />
                        
                        </CardAction>
                    </Card>
                                    
                    
                    
                </ScrollView>

                    </View>
            </View>
        );
    }
}

