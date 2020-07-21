import React from 'react';
import {View,Text,ScrollView} from "react-native";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import card from '../assets/card.jpg';
import card2 from '../assets/card2.jpg';


export default class home extends React.Component{


    classes = () =>{
        console.log('I have  classes');
        this.props.navigation.navigate('classes');
    }
    lessons = () =>{
        console.log('I have  lessons');
        this.props.navigation.navigate('lessons');
    }
    render() {
        return (
            <View>
                
                <ScrollView>
                    
 
                    <Card>
                        <CardImage 
                        source={card} 
                        title="   "
                        />
                        <CardAction 
                        separator={true} 
                        inColumn={false}>
                        <CardButton
                            onPress={() => {}}
                            title="Classes"
                            color="#1C0F6B"
                            onPress={this.classes}
                        />
                        
                        </CardAction>
                    </Card>
                    <Card>
                        <CardImage 
                        source={card2} 
                        title="   "
                        />
                      
                        <CardAction 
                        separator={true} 
                        inColumn={false}>
                        <CardButton
                            onPress={() => {}}
                            title="Lessons"
                            color="#1C0F6B"
                            onPress={this.lessons}
                        />
                        
                        </CardAction>
                    </Card>
                    
                </ScrollView>
            </View>
        );
    }
}

const styles = {

    sub : {
        fontSize : 20,
        fontWeight : "5000" ,
        color : "pink"
    }

}

