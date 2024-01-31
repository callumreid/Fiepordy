import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {podiumWithYouURI} from '../constants/visualAssets';
import {PodiumProps} from '../types/props';
import {COLORS} from '../constants/values';

const Podium: React.FC<PodiumProps> = ({score, setUserResponse, name}) => {
  const formattedScore = score < 0 ? `-$${Math.abs(score)}` : `$${score}`;
  const scoreColor = score < 0 ? COLORS.RED : COLORS.WHITE;
  const scorePosition = calculateScorePosition(formattedScore);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setUserResponse('what is bronson?')}>
        <Text style={[styles.score, {color: scoreColor, left: scorePosition}]}>
          {formattedScore}
        </Text>
        <Text style={[styles.playerName]}>{name}</Text>
        {podiumWithYouURI && (
          <Image
            source={{
              uri: podiumWithYouURI,
            }}
            style={styles.podium}
          />
        )}
      </TouchableOpacity>
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
    position: 'absolute',
    top: '61%',
    transform: [{translateX: -50}, {translateY: -50}],
    textAlign: 'center',
    color: '#FFF',
    fontSize: 24,
    zIndex: 10,
  },
  playerName: {
    position: 'absolute',
    top: 150,
    transform: [{translateX: -50}, {translateY: -50}],
    textAlign: 'center',
    color: '#FFF',
    fontSize: 24,
    backgroundColor: 'rgb(48, 57, 203)',
    left: 95,
    width: 109,
    height: 100,
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

/**
 * Uses length of score text string and adjustment factor to keep score text centered on podium
 */
const calculateScorePosition = (scoreText: string) => {
  const basePosition = 144;
  const adjustmentFactor = 4.9;
  const adjustment = scoreText.length * adjustmentFactor;

  return basePosition - adjustment;
};
