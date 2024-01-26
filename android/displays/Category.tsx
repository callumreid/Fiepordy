import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Text,
} from 'react-native';
import {CategoryProps} from '../../types/props';
import {blueBGURI} from '../constants/visualAssets';
import {Scene} from '../../types/scenes';
import {useAtom} from 'jotai';
import {sceneAtom} from '../../atoms/atoms';

const {width, height} = Dimensions.get('window');

const Category: React.FC<CategoryProps> = ({categories}) => {
  const [, setScene] = useAtom(sceneAtom);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  useEffect(() => {
    if (currentCategoryIndex < categories.length) {
      const timer = setTimeout(() => {
        setCurrentCategoryIndex(prevIndex => prevIndex + 1);
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setScene(Scene.GAME_BOARD);
    }
  }, [currentCategoryIndex, categories.length, setScene]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: blueBGURI,
        }}
        style={styles.backgroundImage}>
        <Text style={styles.categoryText}>
          {categories[currentCategoryIndex]}
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 48,
    color: 'white',
  },
});

export default Category;
