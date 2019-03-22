import React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, Alert } from 'react-native';

export default class CreateGroup extends React.Component {
    constructor(props) {
        super(props)

        this.socket = props.navigation.state.params.socket;

        this.socket.on('groupvalidation', function (data) {
            if (data.error) {
                Alert.alert(data.error)
            } else if (data.groupname) {
        
               props.navigation.navigate('TeamJoin', {socket:this.socket, data: data})
            }
        }.bind(this))

        this.state = {
            text: 'Placeholder',
        }

        this.createNewGroup = this.createNewGroup.bind(this);
    }
    static navigationOptions = {
        header: null
    }
    createNewGroup() {
        console.log(this.socket.io.engine.id)
        var data = {
            groupName: this.state.text
        }
        this.socket.emit('newgroup', data);
        // Alert.alert(this.state.text);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Select your groups name!</Text>
                <TextInput
                    style={{ height: 40, width:100, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />
                <TouchableOpacity 
                    onPress={this.createNewGroup}
                    title="Send groupname!"
                    color="#841584"
                ><Text>CLICK ME</Text></TouchableOpacity>
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