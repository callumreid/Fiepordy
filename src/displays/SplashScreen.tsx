import React, {useEffect} from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import {sceneAtom} from '../atoms/atoms';
import {useAtom} from 'jotai';
import {Scene} from '../types/scenes';
import {jeopardyLogoURI} from '../constants/visualAssets';
import {localImages} from '../../android/app/assets';

const {width, height} = Dimensions.get('window');

const SplashScreen = () => {
  const [, setScene] = useAtom(sceneAtom);
  useEffect(() => {
    setTimeout(() => {
      setScene(Scene.GAME_MODE_SELECTION);
    }, 2000);
  }, [setScene]);

  return (
    <View style={styles.container}>
      <Image
        source={
          jeopardyLogoURI
            ? {
                uri: jeopardyLogoURI,
              }
            : localImages.jeopardyLogo
        }
        style={styles.backgroundImage}
      />
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
});

export default SplashScreen;
