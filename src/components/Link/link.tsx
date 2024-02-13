import React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  ViewProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

import {Colors} from '@constants/colors';

interface Props extends ViewProps {
  active?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  testID?: string;
  title: string;
  titleStyle?: StyleProp<TextStyle>;
}

const link: React.FC<Props> = props => {
  const {
    active = true,
    containerStyle,
    onPress,
    testID = 'link',
    title,
    titleStyle,
    ...otherProps
  } = props;
  return (
    <Pressable
      {...otherProps}
      onPress={active ? onPress : null}
      style={[active ? styles.active : styles.inActive, containerStyle]}
      testID={testID}>
      <Text role="link" style={[styles.title, titleStyle]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  active: {
    opacity: 1,
  },
  inActive: {
    opacity: 0.6,
  },
  title: {
    color: Colors.PRIMARY,
    fontWeight: '600',
  },
});

export default link;
