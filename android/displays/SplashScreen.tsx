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

const {width, height} = Dimensions.get('window'); // Get the window dimensions

const SplashScreen = () => {
  const [, setScene] = useAtom(sceneAtom);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setScene(Scene.GAME_MODE_SELECTION)}>
        <Image
          source={{
            uri: 'https://custom-skills-public.s3.amazonaws.com/Fiepordy/fiepordy.jeopardyLogo.png',
          }}
          style={styles.backgroundImage}
        />
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
