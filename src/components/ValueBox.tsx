import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import {ValueBoxProps} from '../types/props';

/**
 * ValueBox components are the "tiles" of the game board. They can be provided with config to render as either category title, value, or image for pregame board display. Values are disabled once selected.
 */
const ValueBox: React.FC<ValueBoxProps> = ({
  isPregameBoard,
  isTitle,
  category,
  value,
  onSelect,
  imageURI,
  disabled,
}) => {
  if (isPregameBoard) {
    if (isTitle) {
      return (
        <Image
          key={`${category}-${value}`}
          style={styles.logoSmall}
          source={{uri: imageURI}}
        />
      );
    } else {
      return (
        <Image
          key={`${category}-${value}`}
          style={styles.logoSmall}
          source={{uri: imageURI}}
        />
      );
    }
  }
  if (!isPregameBoard) {
    if (isTitle) {
      return (
        <Text key={`${category}-${value}`} style={styles.categoryTitle}>
          {category}
        </Text>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={onSelect}
          style={styles.valueBox}
          disabled={disabled}>
          {!disabled && <Text style={styles.valueText}>${value}</Text>}
        </TouchableOpacity>
      );
    }
  }
};

const styles = StyleSheet.create({
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
});

export default ValueBox;
