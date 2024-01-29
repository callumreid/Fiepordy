import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Podium from '../components/Podium';
import Animated, {FadeOut} from 'react-native-reanimated';
import {Scene} from '../types/scenes';
import {
  sceneAtom,
  scoreAtom,
  selectedCategoryAtom,
  selectedQuestionsAtom,
  selectedValueAtom,
} from '../atoms/atoms';
import {useAtom} from 'jotai';
import {GameBoardProps} from '../types/props';
import {gameBoardBlueStageURI} from '../constants/visualAssets';
import {localImages} from '../../android/app/assets';

const values = [300, 400, 800];
const {width, height} = Dimensions.get('window');

const GameBoard: React.FC<GameBoardProps> = ({categories}) => {
  // state
  const [, setScene] = useAtom(sceneAtom);
  const [, setSelectedCategory] = useAtom(selectedCategoryAtom);
  const [, setSelectedValue] = useAtom(selectedValueAtom);
  const [selectedQuestions, setSelectedQuestions] = useAtom(
    selectedQuestionsAtom,
  );
  const [score] = useAtom(scoreAtom);

  // handlers
  const handleSelectQuestion = (category: string, value: number) => {
    console.log(`Selected ${category} for $${value}`);
    setSelectedCategory(category);
    setSelectedValue(value);
    setSelectedQuestions(prev => ({
      ...prev,
      [`${category}-${value}`]: true,
    }));
    setScene(Scene.QUESTION);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: gameBoardBlueStageURI ?? localImages.gameBoardBlueStage,
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
                  onPress={() => handleSelectQuestion(category, value)}
                  disabled={selectedQuestions[`${category}-${value}`]}>
                  {!selectedQuestions[`${category}-${value}`] && (
                    <Text style={styles.valueText}>${value}</Text>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </View>
      <View style={styles.podiumContainer}>
        <Podium name="You" score={score} isCurrentUser={true} />
      </View>
    </View>
  );
};
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
