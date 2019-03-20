import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class CreateGroup extends React.Component {
    static navigationOptions = {
        header: null
    }
    state = {
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome to create a group!</Text>
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
      height: 150
    },
  });