import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Game from '../screens/Game';
import GameEnd from '../screens/GameEnd';

import MainMenu from '../screens/MainMenu';
import JoinGroup from '../screens/JoinGroup'
import CreateGroup from '../screens/CreateGroup';
import StartApp from '../screens/StartApp'; 
import TeamJoin from '../screens/TeamJoin';
import TeamWait from '../screens/TeamWait';
import CatchTheRabbit from '../screens/CatchTheRabbit'
import Instructions from '../screens/Instructions';
import ButtonGame from '../screens/ButtonGame';


const MainNavigator = createStackNavigator({
    Main: { screen: CatchTheRabbit}, // REMEMBER TO CHANGE TO: StartApp *********************************************************************
    MainMenu: {screen: MainMenu},
    EndScreen: {screen: GameEnd},
    Join: {screen: JoinGroup},
    Create: {screen: CreateGroup},
    Game: {screen:Game},
    TeamJoin: { screen: TeamJoin },
    TeamWait: { screen: TeamWait},
    CatchTheRabbit: {screen: CatchTheRabbit},
    Instructions: {screen: Instructions},
    ButtonGame: {screen: ButtonGame}

});

const AppContainer = createAppContainer(MainNavigator);

// Now AppContainer is thne main component for React to render

export default class AppNavigator extends React.Component {
    render() {
        return <AppContainer />;
    }
}