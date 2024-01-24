import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Animated, {FadeOut} from 'react-native-reanimated';
import {Scene} from '../App';

const Question = ({setScene}: {setScene: (scene: Scene) => void}) => {
  return (
    <Animated.View
      style={styles.container}
      exiting={FadeOut.duration(500)}
      onPointerDown={() => setScene(Scene.GAMEBOARD)}>
      <TouchableOpacity onPress={() => setScene(Scene.GAMEBOARD)}>
        <Text style={styles.question}>Question Question :D!</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c3f94',
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
  },
});

export default Question;
