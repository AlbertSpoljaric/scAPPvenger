import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Game from '../screens/Game';
import GameEnd from '../screens/GameEnd';
import StartApp from '../screens/StartApp';


const MainNavigator = createStackNavigator({
    Main: { screen: StartApp},
    Game: { screen: Game },
    EndScreen: { screen: GameEnd }
});

const AppContainer = createAppContainer(MainNavigator);

// Now AppContainer is the main component for React to render

export default class AppNavigator extends React.Component {
    render() {
        return <AppContainer />;
    }
}