import React, {ReactNode} from 'react';
import {
  Pressable,
  StyleSheet,
  StyleProp,
  View,
  ViewStyle,
  ViewProps,
} from 'react-native';

import {Text} from '@components';
import {fontScale} from '@utils/responsiveDesign';

type HeaderProps = {
  containerStyle?: StyleProp<ViewStyle>;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  title: string;
} & ViewProps;

const Header: React.FC<HeaderProps> = props => {
  const {
    containerStyle,
    onLeftIconPress,
    onRightIconPress,
    leftIcon,
    rightIcon,
    title,
  } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      {leftIcon ? (
        <Pressable
          role="button"
          onPress={onLeftIconPress}
          style={styles.iconStyle}>
          {leftIcon}
        </Pressable>
      ) : (
        <View style={styles.iconStyle} />
      )}
      <Text content={title} style={styles.title} />
      {rightIcon ? (
        <Pressable
          role="button"
          onPress={onRightIconPress}
          style={styles.iconStyle}>
          {rightIcon}
        </Pressable>
      ) : (
        <View style={styles.iconStyle} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  iconStyle: {
    width: '5%',
    maxWidth: '5%',
  },
  title: {
    fontSize: fontScale(18),
    fontWeight: '500',
    alignSelf: 'center',
  },
});

export default Header;
