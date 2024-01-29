import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';

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
import {
  boardImageURIs,
  gameBoardBlueStageURI,
  jeopardyLogoSmallURI,
} from '../constants/visualAssets';
import {localImages} from '../../android/app/assets';
import Podium from '../components/Podium';
import Animated, {FadeOut} from 'react-native-reanimated';

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

  const preGameBoardDisplay = true;
  return (
    <Animated.View style={styles.container} exiting={FadeOut.duration(500)}>
      <ImageBackground
        source={{
          uri: gameBoardBlueStageURI ?? localImages.gameBoardBlueStage,
        }}
        style={styles.fullscreen}
      />
      <View style={styles.gameBoard}>
        {preGameBoardDisplay ? (
          <View style={styles.categoriesContainer}>
            {categories.map(category => (
              <Image
                key={category}
                style={styles.logoSmall}
                source={{
                  uri: jeopardyLogoSmallURI ?? localImages.jeopardyLogoSmall,
                }}
              />
            ))}
          </View>
        ) : (
          <View style={styles.categoriesContainer}>
            {categories.map(category => (
              <Text key={category} style={styles.categoryTitle}>
                {category}
              </Text>
            ))}
          </View>
        )}
        {preGameBoardDisplay ? (
          <View style={styles.valuesContainer}>
            {values.map(value => (
              <View key={value} style={styles.valueRow}>
                {categories.map((category, categoryIndex) => {
                  const x = (categoryIndex + 1).toString();
                  const y = (categoryIndex + 1).toString();

                  const imageURI = boardImageURIs[x][y];

                  return (
                    <Image
                      key={`${category}-${value}`}
                      style={styles.logoSmall}
                      source={{uri: imageURI}}
                    />
                  );
                })}
              </View>
            ))}
          </View>
        ) : (
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
        )}
      </View>
      <View style={styles.podiumContainer}>
        <Podium name="You" score={score} isCurrentUser={true} />
      </View>
    </Animated.View>
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
  logoSmall: {
    flex: 1,
    paddingVertical: 20,
    marginHorizontal: 2,
    width: 85,
    height: 80,
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
    width: 85,
    height: 80,
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
    width: 85,
    height: 80,
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
