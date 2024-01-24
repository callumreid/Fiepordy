import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
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

function GameBoard() {
  const [, setScene] = useAtom(sceneAtom);

  const selectQuestion = (category: string, value: number) => {
    console.log(`Selected ${category} for $${value}`);
    setScene(Scene.QUESTION);
  };

  return (
    <Animated.View style={styles.container} exiting={FadeOut.duration(500)}>
      <Text style={styles.gameBoardTitle}>Jeopardy</Text>
      <ScrollView>
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
      </ScrollView>

      <View style={styles.podiumContainer}>
        <Podium name="Freddie" score={0} />
        <Podium name="You" score={0} isCurrentUser={true} />
        <Podium name="Eric" score={0} />
      </View>
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f23',
    paddingVertical: 20,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  categoryTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    paddingVertical: 10,
    backgroundColor: '#1c3f94',
    marginHorizontal: 2,
  },
  valuesContainer: {
    // No specific styles needed here yet
  },
  valueRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  valueBox: {
    backgroundColor: '#1c3f94',
    paddingVertical: 20,
    flex: 1,
    marginHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  valueText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  podiumContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingVertical: 10,
    backgroundColor: 'transparent',
  },
  gameBoardTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'black',
  },
});

export default GameBoard;
