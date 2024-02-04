import React, {useContext, useEffect} from 'react';
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
import {Scene} from '../types/scenes';
import {jeopardyTitleTextURI} from '../constants/visualAssets';
import {useTVEventHandler} from 'react-native';
import {Socket, io} from 'socket.io-client';
import {SocketContext} from '../context/SocketContext';

const {width, height} = Dimensions.get('window');

const GameModeSelection = () => {
  const {init} = useContext(SocketContext);

  const [, setScene] = useAtom(sceneAtom);
  const [_lastEventType, setLastEventType] = React.useState('');

  const myTVEventHandler = evt => {
    console.log('evt');
    setLastEventType(evt.eventType);
  };

  useTVEventHandler(myTVEventHandler);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <ImageBackground
      source={{
        uri: 'https://custom-skills-public.s3.amazonaws.com/Fiepordy/fiepordy.blueBG.png',
      }}
      style={styles.backgroundImage}>
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
          <Text style={styles.buttonText}>Play {_lastEventType}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Practice</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
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
