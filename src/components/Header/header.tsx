import React, {ReactNode} from 'react';
import {
  Pressable,
  Text,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {fontScale} from '@utils/responsiveDesign';

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  title: string;
}

const Header: React.FC<Props> = props => {
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
      <Text style={styles.title}>{title}</Text>
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
