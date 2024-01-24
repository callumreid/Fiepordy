import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type QuestionProps = {
  // Props for category, value, and the actual question
};

const Question: React.FC<QuestionProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Question for the selected category and value</Text>
      {/* Add more UI elements as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Styles for your question container
  },
});

export default Question;
