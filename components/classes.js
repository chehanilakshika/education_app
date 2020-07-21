import React from 'react';
import {View,Text,TouchableOpacity} from "react-native";
import { IconButton, Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class classesPage extends React.Component{
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
                    onPress={() => console.log('Pressed')} >

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
                    icon="plus-circle"
                    color={Colors.pink500}
                    size={50}
                    onPress={() => console.log('Pressed')} >

                    </IconButton>
                    
                    
                    
  
            </View>
        );
    }
}