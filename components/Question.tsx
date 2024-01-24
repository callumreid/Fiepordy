import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';

type QuestionProps = {
  // Props for category, value, and the actual question
};

const Question: React.FC<QuestionProps> = () => {
  return (
    <Animated.View style={styles.container} entering={FadeIn} exiting={FadeOut}>
      <Text style={styles.question}>Question Question :D!</Text>
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
