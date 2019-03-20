import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Game from '../screens/Game';
import GameEnd from '../screens/GameEnd';
import MainMenu from '../screens/MainMenu';
import JoinGroup from '../screens/JoinGroup'
import CreateGroup from '../screens/CreateGroup';

const MainNavigator = createStackNavigator({
    Main: {screen: MainMenu},
    EndScreen: {screen: GameEnd},
    Join: {screen: JoinGroup},
    Create: {screen: CreateGroup},
    GameScreen: {screen:Game}
});

const AppContainer = createAppContainer(MainNavigator);

// Now AppContainer is the main component for React to render

export default class AppNavigator extends React.Component {
    render() {
      return <AppContainer />;
    }
  }