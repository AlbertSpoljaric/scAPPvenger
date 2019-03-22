import React from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';
import { Image } from 'react-native-elements';


export default class TeamWait extends React.Component {
    constructor(props) {
        super(props)

        this.socket = props.navigation.state.params.socket;
        this.data = props.navigation.state.params.data;

        this.socket.on('', function(data){

        })
    }
    static navigationOptions = {
        header: null
    }


    /* {id:1, imgUri: require(`../images/1.png`)}
    search for the right imgUri with the id.  */

    render() {
        return (
            <View style={styles.container}>
                <Text>Game instructions:</Text>
                    <Text>  1.You will get a clue about QR-code location</Text>
                    <Text>  2. Find the right QR code and scan it</Text>
                    <Text>  3. You will get a new clue for a new QR code</Text>
                    <Text>  4. After you have successfully found 5 QR codes and scanned them, you win!</Text>
                <Text>WAITING FOR ADMIN TO START THE GAME...</Text>
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