import React from 'react';
import { StyleSheet, View, TouchableOpacity, Alert, Text } from 'react-native';
import BackButton from '../components/BackButton';
import CreateGroupButton from '../components/CreateGroupButton';
import JoinGroupButton from '../components/JoinGroupButton';



export default class MainMenu extends React.Component {
    constructor(props) {
        super(props)

        this.socket = props.navigation.state.params.socket;

        this.socket.on('uservalidation', function (data) {
            if (data.error) {
                Alert.alert(data.error)
            } else if (data.username) {
                Alert.alert(data.username)
            }
        })
        
    }

    static navigationOptions = {
        header: null
    }
    state={}

    goBack=()=>{
        this.props.navigation.goBack();
    }

    joinGroup=()=>{
        this.props.navigation.navigate('Join')
    }

    createGroup=()=>{
        this.props.navigation.navigate('Create')
    }

    testSocket=()=>{
        console.log(this.socket.io.engine.id)
        var data = {
            username: "testitesti"
        }
        this.socket.emit('validateuser', data);
    }
    render() {
        return (
            <View style={styles.container}>
                <BackButton goBack={this.goBack}/>
                <View >
                    <JoinGroupButton joinGroup ={this.joinGroup}/>
                    <CreateGroupButton createGroup = {this.createGroup}/>
                </View>
                <TouchableOpacity onPress={this.testSocket}><Text>TEST</Text></TouchableOpacity>
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