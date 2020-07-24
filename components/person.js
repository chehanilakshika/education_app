import React,{Component} from 'react';
import {View,Text,FlatList} from "react-native";
import {Card} from "react-native-paper";
import {Icon,Button,Container,Header,Content,Left} from 'native-base';


export default class lessonsPage extends React.Component{


    render() {
        return (
            <Container >
                <Text> Loading profile</Text>
                <View>
                <IconButton
                    type="solid"
                   
                    iconleft
                    icon="plus-circle"
                    color={Colors.pink500}
                    size={80}
                    onPress={this.addclass} >
                    </IconButton>
                    
                    </View>
                
            </Container>
        );
    }
}

