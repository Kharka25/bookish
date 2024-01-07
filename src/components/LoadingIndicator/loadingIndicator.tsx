import React, {useEffect} from 'react';
import {Text, StyleSheet, ViewProps} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Colors} from '@constants/colors';

interface Props extends ViewProps {
  color: string;
  size: number;
}

const LoadingIndicator: React.FC<Props> = props => {
  const {color = Colors.WHITE, size} = props;

  const rotateValue = useSharedValue(0);

  const transformValue = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotateValue}deg`}],
    };
  });

  useEffect(() => {
    rotateValue.value = withRepeat(withTiming(360), -1);
  });

  return (
    <Animated.View
      style={[styles.container, transformValue]}
      testID="loadingIndicator">
      <Text>loadingIndicator</Text>
      <AntDesign color={color} size={size} name="loading1" testID="icon" />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default React.memo(LoadingIndicator);
