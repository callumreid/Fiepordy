// components/Podium.tsx
import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {podiumWithYouURI} from '../constants/visualAssets';

type PodiumProps = {
  setUserResponse: any;
  name: string;
  score: number;
  isCurrentUser?: boolean;
};

const Podium: React.FC<PodiumProps> = ({score, setUserResponse}) => {
  const formattedScore = score < 0 ? `-$${Math.abs(score)}` : `$${score}`;
  const scoreColor = score < 0 ? '#FF0000' : '#FFF';
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setUserResponse('what is bronson?')}>
        <Text style={[styles.score, {color: scoreColor}]}>
          {formattedScore}
        </Text>
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
    color: '#FFF',
    fontSize: 24,
    marginBottom: -80,
    marginLeft: 85,
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
