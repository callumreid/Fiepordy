// components/FinalJeopardy.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type FinalJeopardyProps = {
  // Add your props here
};

const FinalJeopardy: React.FC<FinalJeopardyProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.finalJeopardyText}>Final Jeopardy</Text>
      {/* Render the podiums here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000080', // Navy blue
  },
  finalJeopardyText: {
    color: '#FFF',
    fontSize: 48,
    fontWeight: 'bold',
  },
});

export default FinalJeopardy;
