// components/GameBoard.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Podium from './Podium';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import {Scene} from '../App';

const categories = [
  'Myths & Legends',
  'TV Show',
  'Holidays Around The World',
  '19th Century America',
];

const values = [200, 400, 800];

function GameBoard({setScene}: {setScene: any}) {
  // Handle question selection (for example purposes, this is just a placeholder)
  const selectQuestion = (category: string, value: number) => {
    console.log(`Selected ${category} for $${value}`);
    setScene(Scene.QUESTION);
    // Here, you would navigate to the Question component with the selected category and value
  };

  return (
    <Animated.View style={styles.container} entering={FadeIn} exiting={FadeOut}>
      {/* Game board header */}
      <Text style={styles.gameBoardTitle}>Jeopardy</Text>

      {/* Categories and values */}
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

      {/* Podiums */}
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
    backgroundColor: '#0f0f23', // Adjust the background color to match the Jeopardy blue
    paddingVertical: 20, // Add some padding at the top and bottom
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10, // Space between categories and values
  },
  categoryTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    paddingVertical: 10, // Vertical padding for the titles
    backgroundColor: '#1c3f94', // Category title background color
    marginHorizontal: 2, // Adjust as needed for spacing between titles
  },
  valuesContainer: {
    // No specific styles needed here yet
  },
  valueRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10, // Space between each value row
  },
  valueBox: {
    backgroundColor: '#1c3f94', // Value box background color
    paddingVertical: 20, // Vertical padding for the value boxes
    flex: 1,
    marginHorizontal: 2, // Adjust as needed for spacing between boxes
    alignItems: 'center', // Center the dollar value horizontally
    justifyContent: 'center', // Center the dollar value vertically
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
    paddingVertical: 10, // Add padding for spacing from the bottom edge
    backgroundColor: 'transparent', // To match the background
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
