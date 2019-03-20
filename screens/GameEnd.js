import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class GameEnd extends React.Component {
    static navigationOptions = {
        header: null
    }
    state = {
    }
    render() {
        return (
            <Text>CONGRATULATIONS! YOU HAVE WON THE GAME! FIND THE GAME ADMINS!</Text>
        );
    }
}