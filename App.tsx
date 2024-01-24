import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GameBoard from './components/GameBoard';
import FinalJeopardy from './components/FinalJeopardy';
import Question from './components/Question';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GameBoard">
        <Stack.Screen
          name="Gameboard"
          component={GameBoard}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Question" component={Question} />
        <Stack.Screen name="FinalJeopardy" component={FinalJeopardy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
