// components/Podium.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type PodiumProps = {
  name: string;
  score: number;
  isCurrentUser?: boolean;
};

const Podium: React.FC<PodiumProps> = ({
  name,
  score,
  isCurrentUser = false,
}) => {
  return (
    <View style={[styles.container, isCurrentUser && styles.currentUser]}>
      <Text style={styles.score}>${score}</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#000080', // Navy blue
    borderRadius: 5,
    margin: 5,
  },
  currentUser: {
    backgroundColor: '#FFA500', // Orange color for the current user
  },
  score: {
    color: '#FFF',
    fontSize: 24,
  },
  name: {
    color: '#FFF',
    fontSize: 20,
    marginTop: 5,
  },
});

export default Podium;
