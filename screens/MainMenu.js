import React from 'react';
import { StyleSheet, View} from 'react-native';
import BackButton from '../components/BackButton';
import CreateGroupButton from '../components/CreateGroupButton';
import JoinGroupButton from '../components/JoinGroupButton';


export default class Game extends React.Component {
    static navigationOptions = {
        header: null
    }
    state={}

    goBack=()=>{
        this.props.navigation.navigate('StartMenu')
    }

    joinGroup=()=>{
        this.props.navigation.navigate('Join')
    }

    createGroup=()=>{
        this.props.navigation.navigate('Create')
    }

    render() {
        return (
            <View style={styles.container}>
                <BackButton goBack={this.goBack}/>
                <View >
                    <JoinGroupButton joinGroup ={this.joinGroup}/>
                    <CreateGroupButton createGroup = {this.createGroup}/>
                </View>
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