import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Text,
} from 'react-native';
import {CategoryProps} from '../types/props';
import {blueBGURI} from '../constants/visualAssets';
import {Scene} from '../types/scenes';
import {useAtom} from 'jotai';
import {localImages} from '../../android/app/assets';
import {sceneAtom} from '../atoms/atoms';

const {width, height} = Dimensions.get('window');

const Category: React.FC<CategoryProps> = ({categories}) => {
  const [, setScene] = useAtom(sceneAtom);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (showSplash) {
      timer = setTimeout(() => {
        setShowSplash(false);
      }, 1500);
    } else if (currentCategoryIndex < categories.length) {
      timer = setTimeout(() => {
        setShowSplash(true);
        setCurrentCategoryIndex(prevIndex => prevIndex + 1);
      }, 2000);
    } else {
      setScene(Scene.GAME_BOARD);
    }

    return () => clearTimeout(timer);
  }, [currentCategoryIndex, categories.length, setScene, showSplash]);

  return showSplash ? (
    <View style={styles.container}>
      <ImageBackground
        source={localImages.jeopardyLogo}
        style={styles.backgroundImage}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <ImageBackground
        source={blueBGURI ? {uri: blueBGURI} : localImages.blueBG}
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
