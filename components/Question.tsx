import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Animated, {FadeOut} from 'react-native-reanimated';
import {sceneAtom} from '../atoms/atoms';
import {useAtom} from 'jotai';
import {Scene} from '../types/scenes';

const Question = () => {
  const [, setScene] = useAtom(sceneAtom);
  return (
    <Animated.View style={styles.container} exiting={FadeOut.duration(500)}>
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
