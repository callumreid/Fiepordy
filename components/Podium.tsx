// components/Podium.tsx
import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

type PodiumProps = {
  name: string;
  score: number;
  isCurrentUser?: boolean;
};

const Podium: React.FC<PodiumProps> = ({score}) => {
  const formattedScore = score < 0 ? `-$${Math.abs(score)}` : `$${score}`;
  return (
    <View style={styles.container}>
      <Text style={styles.score}>{formattedScore}</Text>
      <Image
        source={{
          uri: 'https://custom-skills-public.s3.amazonaws.com/Fiepordy/fiepordy.podiumWithYou.png',
        }}
        style={styles.podium}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },

  score: {
    color: '#FFF',
    fontSize: 24,
    marginBottom: -80,
    zIndex: 10,
  },
  podium: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: -40,
  },
});

export default Podium;
