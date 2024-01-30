import React, {useState} from 'react';
import {Canvas, Group, RoundedRect, Rect} from '@shopify/react-native-skia';
import {View, StyleSheet} from 'react-native';

export const ChatBubble = ({children}: {children?: React.ReactNode}) => {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(100);
  const r = 15;
  const shift = 6;
  const tipSize = 15;

  return (
    <>
      <Canvas style={{width, height: height + shift + tipSize + 5}}>
        <RoundedRect
          x={0}
          y={shift}
          width={width}
          height={height}
          r={r}
          color="black"
        />
        <Group transform={[{translateY: shift}]}>
          <Group
            transform={[{rotate: (45 / 180) * Math.PI}]}
            origin={{x: width / 2, y: height}}>
            <Rect
              x={width / 2 - tipSize}
              y={height - tipSize}
              width={tipSize * 2}
              height={tipSize * 2}
              color="black"
            />
          </Group>
        </Group>
        <RoundedRect
          x={0}
          y={0}
          width={width}
          height={height}
          r={r}
          color="white"
        />
        <Group
          transform={[{rotate: (45 / 180) * Math.PI}]}
          origin={{x: width / 2, y: height}}>
          <Rect
            x={width / 2 - tipSize}
            y={height - tipSize}
            width={tipSize * 2}
            height={tipSize * 2}
            color="white"
          />
        </Group>
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
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
});
