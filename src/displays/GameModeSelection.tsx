import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {sceneAtom} from '../atoms/atoms';
import {useAtom} from 'jotai';
import {blueBGURI, jeopardyTitleTextURI} from '../constants/visualAssets';
import {useTVEventHandler} from 'react-native';
import {Scene} from '../types/scenes';
import Animated, {FadeOut} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

const GameModeSelection = () => {
  const [, setScene] = useAtom(sceneAtom);
  const [_lastEventType, setLastEventType] = React.useState('');

  const myTVEventHandler = (evt: any) => {
    console.log('evt:', evt);
    setLastEventType(evt.eventType);
  };

  useTVEventHandler(myTVEventHandler);

  return (
    <Animated.View style={styles.container} exiting={FadeOut.duration(500)}>
      <ImageBackground source={{uri: blueBGURI}} style={styles.backgroundImage}>
        <View style={styles.container}>
          {jeopardyTitleTextURI && (
            <Image
              source={{
                uri: jeopardyTitleTextURI,
              }}
              style={styles.logo}
            />
          )}

          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text
              style={styles.buttonText}
              onPress={() => {
                setScene(Scene.CATEGORY);
              }}>
              Play{' '}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setScene(Scene.CATEGORY);
            }}>
            <Text style={styles.buttonText}>Practice</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </Animated.View>
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
  logo: {
    width: width * 0.8,
    height: height * 0.6,
    resizeMode: 'contain',
    marginBottom: -30,
  },
  button: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
    width: width * 0.3,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default GameModeSelection;
