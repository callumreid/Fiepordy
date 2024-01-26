import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {sceneAtom} from '../../atoms/atoms';
import {useAtom} from 'jotai';
import {Scene} from '../../types/scenes';
import {jeopardyLogoURI} from '../constants/visualAssets';

const {width, height} = Dimensions.get('window');

const SplashScreen = () => {
  const [, setScene] = useAtom(sceneAtom);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setScene(Scene.GAME_MODE_SELECTION)}>
        {jeopardyLogoURI && (
          <Image
            source={{
              uri: jeopardyLogoURI,
            }}
            style={styles.backgroundImage}
          />
        )}
      </TouchableOpacity>
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
