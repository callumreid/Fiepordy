import React, {useState} from 'react';
import {Canvas, RoundedRect} from '@shopify/react-native-skia';
import {View, StyleSheet} from 'react-native';

export const ChatBubble = ({children}: {children?: React.ReactNode}) => {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(100);
  const r = 15;

  return (
    <>
      <Canvas style={{width, height: height + 5}}>
        <RoundedRect
          x={0}
          y={5}
          width={width}
          height={height}
          r={r}
          color="black"
        />
        <RoundedRect
          x={0}
          y={0}
          width={width}
          height={height}
          r={r}
          color="white"
        />
      </Canvas>
      <View
        onLayout={event => {
          const {layout} = event.nativeEvent;
          setWidth(layout.width);
          setHeight(layout.height);
        }}
        style={styles.container}>
        {children}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    paddingHorizontal: 15,
  },
});
