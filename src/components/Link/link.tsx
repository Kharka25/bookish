import React from 'react';
import {
  Pressable,
  StyleSheet,
  ViewProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

import {Text} from '@components';

import {Colors} from '@constants/colors';

type Props = {
  active?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  testID?: string;
  title: string;
  titleStyle?: StyleProp<TextStyle>;
} & ViewProps;

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
      <Text content={title} role="link" style={[styles.title, titleStyle]} />
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
