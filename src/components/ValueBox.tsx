import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

type ValueBoxProps = {
  isPregameBoard: boolean;
  isTitle: boolean;
  category: string;
  value: number;
  isSelected: boolean;
  onSelect: () => void;
  imageURI: string;
};

const ValueBox: React.FC<ValueBoxProps> = ({
  isPregameBoard,
  isTitle,
  category,
  value,
  onSelect,
  imageURI,
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
        <TouchableOpacity onPress={onSelect} style={styles.valueBox}>
          <Text style={styles.valueText}>${value}</Text>
        </TouchableOpacity>
      );
    }
  }
};

const styles = StyleSheet.create({
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
});

export default ValueBox;
