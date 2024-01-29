import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Animated, {FadeOut} from 'react-native-reanimated';
import {
  sceneAtom,
  scoreAtom,
  selectedCategoryAtom,
  selectedValueAtom,
} from '../atoms/atoms';
import {useAtom} from 'jotai';
import {Scene} from '../types/scenes';

const Question = () => {
  const [, setScene] = useAtom(sceneAtom);
  const [selectedCategory] = useAtom(selectedCategoryAtom);
  const [selectedValue] = useAtom(selectedValueAtom);
  const [score, setScore] = useAtom(scoreAtom);

  const handleCorrectAnswer = (value: number) => {
    const newScore = score + value;
    console.log(`New score: ${newScore}`);
    setScore(newScore);
  };

  const handleIncorrectAnswer = (value: number) => {
    const newScore = score - value;
    console.log(`New score: ${newScore}`);
    setScore(newScore);
  };

  const handleQuestionAnswered = (isCorrect: boolean, value: number) => {
    console.log(`Answered ${isCorrect} for ${value}`);
    if (isCorrect) {
      handleCorrectAnswer(value);
    } else {
      handleIncorrectAnswer(value);
    }

    setScene(Scene.GAME_BOARD);
  };

  const isAnswerCorrect = () => {
    return Math.random() < 0.5;
  };

  return (
    <Animated.View style={styles.container} exiting={FadeOut.duration(500)}>
      <TouchableOpacity
        onPress={() =>
          handleQuestionAnswered(isAnswerCorrect(), selectedValue)
        }>
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
