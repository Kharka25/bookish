import React, {ReactNode} from 'react';
import {
  // Text,
  TextInputProps,
  View,
  ViewStyle,
  StyleSheet,
  Pressable,
  StyleProp,
} from 'react-native';

import {Text, TextInput} from '@components';
import {fontScale, verticalScale} from '@utils/responsiveDesign';

interface Props extends TextInputProps {
  autoCapitalize?: TextInputProps['autoCapitalize'];
  autoCorrect?: boolean;
  autoFocus?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  defaultValue?: TextInputProps['defaultValue'];
  keyboardType?: TextInputProps['keyboardType'];
  label?: string;
  onChangeText?: TextInputProps['onChangeText'];
  onRightIconPress?: () => void;
  placeholder?: string;
  placeholderTextColor?: TextInputProps['placeholderTextColor'];
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  secureTextEntry?: TextInputProps['secureTextEntry'];
  value?: TextInputProps['value'];
}

const AuthInput: React.FC<Props> = props => {
  const {
    autoCapitalize,
    autoCorrect,
    autoFocus,
    containerStyle,
    defaultValue,
    keyboardType,
    label,
    onChangeText,
    onRightIconPress,
    placeholder,
    placeholderTextColor,
    leftIcon,
    rightIcon,
    secureTextEntry,
    value,
  } = props;
  return (
    <View style={[styles.container, containerStyle]} testID="auth-input">
      {label && <Text content={label} style={styles.label} />}
      <View>
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
        <TextInput
          // {...props}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          autoFocus={autoFocus}
          defaultValue={defaultValue}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={secureTextEntry}
          value={value}
        />
        {rightIcon ? (
          <Pressable
            onPress={onRightIconPress}
            role="button"
            style={styles.rightIcon}>
            {rightIcon}
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: fontScale(14),
    fontWeight: '500',
    lineHeight: fontScale(19),
    marginBottom: verticalScale(6),
  },
  leftIcon: {
    alignItems: 'center',
    height: 45,
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 2,
    width: 45,
    zIndex: 100,
  },
  rightIcon: {
    alignItems: 'center',
    height: 45,
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    top: 2,
    width: 45,
  },
});

export default React.memo(AuthInput);
