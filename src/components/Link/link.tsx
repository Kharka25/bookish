import React from 'react';
import {Pressable, Text, StyleSheet, ViewProps} from 'react-native';

import {Colors} from '@constants/colors';

interface Props extends ViewProps {
  active?: boolean;
  onPress?: () => void;
  testID?: string;
  title: string;
}

const link: React.FC<Props> = props => {
  const {
    active = true,
    onPress,
    testID = 'link',
    style,
    title,
    ...otherProps
  } = props;
  return (
    <Pressable
      {...otherProps}
      onPress={active ? onPress : null}
      style={active ? styles.active : styles.inActive}
      testID={testID}>
      <Text role="link" style={[styles.title, style]}>
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
    opacity: 0.4,
  },
  title: {
    color: Colors.PRIMARY,
    fontWeight: '600',
  },
});

export default link;
