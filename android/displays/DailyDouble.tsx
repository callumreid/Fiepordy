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
type DoubleJeopardyProps = {
  // Add your props here
};
const {width, height} = Dimensions.get('window');

const DoubleJeopardy: React.FC<DoubleJeopardyProps> = () => {
  const [, setScene] = useAtom(sceneAtom);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setScene(Scene.GAME_BOARD)}>
        <Image
          source={{
            uri: 'https://custom-skills-public.s3.amazonaws.com/Fiepordy/fiepordy.dailyDouble.png',
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

export default DoubleJeopardy;
