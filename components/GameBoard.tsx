import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Podium from './Podium';
import Animated, {FadeOut} from 'react-native-reanimated';
import {Scene} from '../types/scenes';
import {sceneAtom} from '../atoms/atoms';
import {useAtom} from 'jotai';

const categories = [
  'Myths & Legends',
  'TV Show',
  'Holidays Around The World',
  '19th Century America',
];

const values = [200, 400, 800];
const {width, height} = Dimensions.get('window');
function GameBoard() {
  const [, setScene] = useAtom(sceneAtom);

  const selectQuestion = (category: string, value: number) => {
    console.log(`Selected ${category} for $${value}`);
    setScene(Scene.QUESTION);
  };

  return (
    <Animated.View style={styles.container} exiting={FadeOut.duration(500)}>
      <ImageBackground
        source={{
          uri: 'https://custom-skills-public.s3.amazonaws.com/Fiepordy/fiepordy.stageBGBlue.png',
        }}
        style={styles.fullscreen}
      />
      <View style={styles.gameBoard}>
        <View style={styles.categoriesContainer}>
          {categories.map(category => (
            <Text key={category} style={styles.categoryTitle}>
              {category}
            </Text>
          ))}
        </View>
        <View style={styles.valuesContainer}>
          {values.map(value => (
            <View key={value} style={styles.valueRow}>
              {categories.map(category => (
                <TouchableOpacity
                  key={`${category}-${value}`}
                  style={styles.valueBox}
                  onPress={() => selectQuestion(category, value)}>
                  <Text style={styles.valueText}>${value}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </View>
      <View style={styles.podiumContainer}>
        <Podium name="You" score={0} isCurrentUser={true} />
      </View>
      <ImageBackground />
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    width: width,
    height: height,
  },
  container: {
    flex: 1,
  },
  gameBoard: {
    backgroundColor: 'black',
    maxWidth: 600,
    alignSelf: 'center',
    maxHeight: 300,
    marginBottom: 165,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
    width: '100%',
  },
  categoryTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    paddingVertical: 20,
    backgroundColor: '#1b199c',
    marginHorizontal: 2,
    maxWidth: 145,
    maxHeight: 80,
  },
  valuesContainer: {
    marginBottom: 100,
  },
  valueRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  valueBox: {
    backgroundColor: '#1b199c',
    paddingVertical: 20,
    flex: 1,
    marginHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 145,
    maxHeight: 80,
  },
  valueText: {
    color: '#EABD5E',
    fontSize: 38,
    fontWeight: 'bold',
  },
  podiumContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
});

export default GameBoard;
