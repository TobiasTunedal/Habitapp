import React from 'react';
import { View, Text, render} from 'react-native';

export default class Welcome extends React.Component {
    render(){
        return(
            <View>
                <Text>Welcome to Habitapp!</Text>
            </View>
        )
    }
}