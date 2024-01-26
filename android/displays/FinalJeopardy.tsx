import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {useAtom} from 'jotai';
import {sceneAtom} from '../../atoms/atoms';
import {Scene} from '../../types/scenes';
import {finalJeopardyURI} from '../constants/visualAssets';
import {FinalJeopardyProps} from '../../types/props';
import {localImages} from '../app/assets';

const {width, height} = Dimensions.get('window');

const FinalJeopardy: React.FC<FinalJeopardyProps> = () => {
  const [, setScene] = useAtom(sceneAtom);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setScene(Scene.GAME_BOARD)}>
        <Image
          source={
            finalJeopardyURI
              ? {
                  uri: finalJeopardyURI,
                }
              : localImages.finalJeopardy
          }
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

export default FinalJeopardy;
