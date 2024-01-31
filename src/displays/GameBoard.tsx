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
  currentPlayerIndexAtom,
  opp1ResponseAtom,
  opp2ResponseAtom,
  playerNamesAtom,
  pregameGameBoardDisplayAtom,
  sceneAtom,
  scoresAtom,
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

const {width, height} = Dimensions.get('window');

const GameBoard: React.FC<GameBoardProps> = ({categories}) => {
  // state
  const [, setScene] = useAtom(sceneAtom);
  const [, setSelectedCategory] = useAtom(selectedCategoryAtom);
  const [, setSelectedValue] = useAtom(selectedValueAtom);
  const [selectedQuestions, setSelectedQuestions] = useAtom(
    selectedQuestionsAtom,
  );
  const [scores, setScores] = useAtom(scoresAtom);
  const [userResponse, setUserResponse] = useAtom(userResponseAtom);
  const [opp1Response, setOpp1Response] = useAtom(opp1ResponseAtom);
  const [opp2Response, setOpp2Response] = useAtom(opp2ResponseAtom);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useAtom(
    currentPlayerIndexAtom,
  );
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
    setTimeout(() => {
      setPregameGameBoardDisplay(false);
    }, 2000);
  }, [setPregameGameBoardDisplay]);

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
      <View style={styles.podiumsContainer}>
        <View style={styles.podiumContainer}>
          <Podium
            name={playerNames[0]}
            score={scores[0]}
            isCurrentUser={currentPlayerIndex === 0}
            setResponse={setOpp1Response}
          />
        </View>
        {opp1Response !== '' && (
          <View style={styles.chatBubbleContainer}>
            <ChatBubble>
              <Text style={styles.chatBubbleText}>{opp1Response}</Text>
            </ChatBubble>
          </View>
        )}

        <View style={styles.podiumContainer}>
          <Podium
            name={playerNames[1]}
            score={scores[1]}
            isCurrentUser={currentPlayerIndex === 1}
            setResponse={setUserResponse}
          />
        </View>
        {userResponse !== '' && (
          <View style={styles.chatBubbleContainer}>
            <ChatBubble>
              <Text style={styles.chatBubbleText}>{userResponse}</Text>
            </ChatBubble>
          </View>
        )}

        <View style={styles.podiumContainer}>
          <Podium
            name={playerNames[2]}
            score={scores[2]}
            isCurrentUser={currentPlayerIndex === 2}
            setResponse={setOpp2Response}
          />
        </View>
        {opp2Response !== '' && (
          <View style={styles.chatBubbleContainer}>
            <ChatBubble>
              <Text style={styles.chatBubbleText}>{opp2Response}</Text>
            </ChatBubble>
          </View>
        )}
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
  valueRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  valuesContainer: {
    marginBottom: 100,
  },
  podiumsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  podiumContainer: {
    flex: 1,
    maxWidth: 300,
    alignItems: 'center',
  },
  chatBubbleContainer: {
    position: 'absolute',
    bottom: 150,
    left: 350,
    width: 500,
  },
  chatBubbleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default GameBoard;
