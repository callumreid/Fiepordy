import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';

import {Scene} from '../types/scenes';
import {
  playerNamesAtom,
  pregameGameBoardDisplayAtom,
  sceneAtom,
  scoreAtom,
  selectedCategoryAtom,
  selectedQuestionsAtom,
  selectedValueAtom,
  userResponseAtom,
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

import {ChatBubble} from '../components/ChatBubble';
import ValueBox from '../components/ValueBox';
import {GAME_BOARD} from '../constants/values';
import {getRandomName} from '../utils/getRandomName';

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
  const [userResponse, setUserResponse] = useAtom(userResponseAtom);
  const [pregameGameBoardDisplay, setPregameGameBoardDisplay] = useAtom(
    pregameGameBoardDisplayAtom,
  );
  const [playerNames, setPlayerNames] = useAtom(playerNamesAtom);

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

  // Set testing state:
  useEffect(() => {
    setPlayerNames([getRandomName(), 'You', getRandomName()]);
  }, [setPlayerNames]);

  return (
    <Animated.View style={styles.container} exiting={FadeOut.duration(500)}>
      <ImageBackground
        source={{
          uri: gameBoardBlueStageURI ?? localImages.gameBoardBlueStage,
        }}
        style={styles.fullscreen}
      />
      <View style={styles.gameBoard}>
        <View style={styles.categoriesContainer}>
          {categories.map(category => {
            return (
              <ValueBox
                isPregameBoard={pregameGameBoardDisplay}
                isTitle={true}
                key={`${category}`}
                category={category}
                value={0}
                isSelected={false}
                onSelect={() => ({})}
                imageURI={jeopardyLogoSmallURI ?? localImages.jeopardyLogoSmall}
                disabled={false}
              />
            );
          })}
        </View>
        <View style={styles.valuesContainer}>
          {GAME_BOARD.VALUES.map((value, valueIndex) => (
            <View key={value} style={styles.valueRow}>
              {categories.map((category, categoryIndex) => {
                const isSelected = selectedQuestions[`${category}-${value}`];

                const x = (categoryIndex + 1).toString();
                const y = (valueIndex + 1).toString();

                const imageURI = boardImageURIs[x][y];
                return (
                  <ValueBox
                    isPregameBoard={pregameGameBoardDisplay}
                    isTitle={false}
                    key={`${category}-${value}`}
                    category={category}
                    value={value}
                    isSelected={isSelected}
                    onSelect={() => handleSelectQuestion(category, value)}
                    imageURI={imageURI}
                    disabled={selectedQuestions[`${category}-${value}`]}
                  />
                );
              })}
            </View>
          ))}
        </View>
      </View>
      <View style={styles.podiumContainer}>
        <Podium
          name={playerNames[0]}
          score={score}
          isCurrentUser={true}
          setUserResponse={setUserResponse}
        />
      </View>
      {userResponse !== '' && (
        <View style={styles.chatBubbleContainer}>
          <ChatBubble>
            <Text style={styles.chatBubbleText}>{userResponse}</Text>
          </ChatBubble>
        </View>
      )}
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
  valueRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  valuesContainer: {
    marginBottom: 100,
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
  chatBubbleContainer: {
    position: 'absolute',
    bottom: 150,
    left: 435,
    width: 500,
  },
  chatBubbleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default GameBoard;
