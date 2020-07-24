import React from 'react';
import {View,Text,ScrollView} from "react-native";
import { IconButton, Colors,RadioButtonItem } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import Drawer from './drawer';
import {  Header, Content, Container } from 'native-base';


export default class classesPage extends React.Component{

    
    addclass = () =>{
        console.log('I am  adding a class');
        this.props.navigation.navigate('addclass');
    }
    render() {
        return (
            <Container>
                <Content>
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

                                    <Text></Text></IconButton>
                                                
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
                                            
                        </Content>
                
                            <View style={{marginBottom:20, paddingBottom:20}}>
                                    <Drawer/>
                            </View>

        </Container>

        );
    }
}

