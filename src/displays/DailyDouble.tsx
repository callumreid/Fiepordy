import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {useAtom} from 'jotai';
import {sceneAtom} from '../atoms/atoms';
import {Scene} from '../types/scenes';
import {dailyDoubleURI} from '../constants/visualAssets';
import {localImages} from '../../android/app/assets';
import {DailyDoubleProps} from '../types/props';

const {width, height} = Dimensions.get('window');

const DailyDouble: React.FC<DailyDoubleProps> = () => {
  const [, setScene] = useAtom(sceneAtom);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setScene(Scene.GAME_BOARD)}>
        <Image
          source={
            dailyDoubleURI
              ? {
                  uri: dailyDoubleURI,
                }
              : localImages.dailyDouble
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

export default DailyDouble;
