import React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import io from 'socket.io-client';

export default class StartApp extends React.Component {
    constructor(props) {
        super(props)

        this.socket = io('https://loppuprojekti.herokuapp.com/');

        this.socket.on('uservalidation', function (data) {
            if (data.error) {
                Alert.alert(data.error)
            } else if (data.username) {
               props.navigation.navigate('EndScreen')
            }
        })
        this.state = {
            text: 'Placeholder',
        }

        this.sendUsername = this.sendUsername.bind(this);
    }
    static navigationOptions = {
        header: null
    }
    sendUsername() {
        var data = {
            username: this.state.text
        }
        this.socket.emit('validateuser', data);
        // Alert.alert(this.state.text);
    }

    render() {

        return (
            <View>
                <Text>Welcome to the scavenger hunt! Please insert your name.</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />
                <TouchableOpacity 
                    onPress={this.sendUsername}
                    title="Send username!"
                    color="#841584"
                ><Text>CLICK ME</Text></TouchableOpacity>
            </View>
        );
    }
}