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
            <View style={styles.container}>
                <Text>CONGRATULATIONS! YOU HAVE WON THE GAME! FIND THE GAME ADMINS!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: 150,
    }
});