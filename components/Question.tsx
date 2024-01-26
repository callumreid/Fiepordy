import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Animated, {FadeOut} from 'react-native-reanimated';
import {
  sceneAtom,
  selectedCategoryAtom,
  selectedValueAtom,
} from '../atoms/atoms';
import {useAtom} from 'jotai';
import {Scene} from '../types/scenes';

const Question = () => {
  const [, setScene] = useAtom(sceneAtom);
  const [selectedCategory] = useAtom(selectedCategoryAtom);
  const [selectedValue] = useAtom(selectedValueAtom);

  return (
    <Animated.View style={styles.container} exiting={FadeOut.duration(500)}>
      <TouchableOpacity onPress={() => setScene(Scene.GAME_BOARD)}>
        <Text
          style={
            styles.question
          }>{`${selectedCategory}: $${selectedValue}`}</Text>
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
