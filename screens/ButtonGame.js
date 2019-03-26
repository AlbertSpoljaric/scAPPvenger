import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';


export default class ButtonGame extends React.Component {
    constructor(props) {
        super(props)

        this.socket = props.navigation.state.params.socket;
        this.data = props.navigation.state.params.data;
        this.groupSize = props.navigation.state.params.groupSize;

        this.socket.on('colorgame', function(data){
            if(data.score===0){
                this.setState({start:true})
            } else{
                this.setState({
                    score:data.score,
                    clue:data.clue,
                    btnColor: data.color
                })
                if(data.score==20){
                    Alert.alert('Who-hoo, you won the game!!!');
                    this.props.navigation.navigate('EndScreen');
                }
                this.setState({

                })
            }
        }.bind(this))

        this.socket.on('colorgameinit', function(data){
            
            clearTimeout(this.startTimer);
            Alert.alert("Oh no, your group pushed a wrong button! But you can try again..");
            this.data = data;
            this.restartGame();
        }.bind(this))

        

        this.state = {
            score: 0,
            btnColor: [],
            clue: '',
            time: 0,
            timeLimit: 100,
            start: false
        }
    }
    static navigationOptions = {
        header: null
    }

    async componentWillMount() {
        Alert.alert(`Oh no, there is an obstacle in your way! 

You have to click buttons in a correct order to finish the game. Once you push the start button, the game will start!`)
        }

    submitColor = () => {
        this.socket.emit('colorgame');
    }

    // startTimer = () =>{
    //     if(this.state.time==100){
    //         clearTimeout(this.startTimer);
    //         Alert.alert("Oh no, the time ran out! Start the game again!");
    //         this.restartGame();
    //     } else{
    //         this.setState({time: (this.state.time+1)})
    //         setTimeout(this.startTimer, this.state.timeLimit);
    //     }   
    // }

    startGame = () =>{
        this.setState({
            start: true,
            clue: this.data.clue,
            btnColor: this.data.color
        });
        this.socket.emit('colorgame');
        // this.startTimer();
    }

    restartGame = () =>{
        this.setState({
            score: 0,
            btnColor: '',
            clue: [],
            time: 0,
            start: false
        })
    }



    render() {
        let btn = this.state.start ? <TouchableOpacity
        style={{
            borderWidth:3,
            borderColor:'rgba(0,0,0,0.2)',
            alignItems:'center',
            justifyContent:'center',
            width:200,
            height:200,
            backgroundColor:this.state.btnColor,
            borderRadius:100,
            }}
         onPress={this.submitColor}   
        ></TouchableOpacity>:<TouchableOpacity
        style={{
            borderWidth:3,
            borderColor:'rgba(0,0,0,0.2)',
            alignItems:'center',
            justifyContent:'center',
            width:200,
            height:100,
            backgroundColor:'#000000',
            }}
         onPress={this.startGame}   
        ><Text style={{color:'#fff', fontWeight:'bold', fontSize:30}}>Start</Text>

    </TouchableOpacity>
    ;
        let infoText = this.state.start ? this.state.clue +"!" : "";
        return (
            <View style={{ flex: 1 }}>
                <View style={{ alignItems:'center', justifyContent:'center', height: 150, paddingTop: 50, paddingLeft: 20, paddingRight: 20, paddingBottom: 20, backgroundColor: '#ff9d0a' }}><Text style={{ color: 'black', fontSize: 40, fontWeight: 'bold' }} numberOfLines={3}>{infoText}</Text>
                </View>
                <View style={styles.container}>
                    <View style={{alignItems: 'flex-start', height: 150}}>
                        <Text style={{fontWeight:'bold', fontSize:20}}>Score: {this.state.score}/20</Text>
                        <ProgressCircle percent={this.state.time}
                            radius={50}
                            borderWidth={8}
                            color="#000000"
                            shadowColor="#999"
                            bgColor="#fff"
                        >
                          
                        </ProgressCircle>
                    </View>
                    {btn}
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
    }
});