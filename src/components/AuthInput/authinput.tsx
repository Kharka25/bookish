import React, {ReactNode} from 'react';
import {
  Text,
  TextInputProps,
  View,
  ViewStyle,
  StyleSheet,
  Pressable,
  StyleProp,
} from 'react-native';

import {TextInput} from '@components';
import {fontScale, verticalScale} from '@utils/responsiveDesign';
import {Colors} from '@constants/colors';

interface Props extends TextInputProps {
  accessibilityLabel?: TextInputProps['accessibilityLabel'];
  autoCapitalize?: TextInputProps['autoCapitalize'];
  autoCorrect?: boolean;
  autoFocus?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  keyboardType?: TextInputProps['keyboardType'];
  label?: string;
  onRightIconPress?: () => void;
  placeholder?: string;
  rightIcon?: ReactNode;
  secureTextEntry?: TextInputProps['secureTextEntry'];
}

const AuthInput: React.FC<Props> = props => {
  const {
    accessibilityLabel,
    autoCapitalize,
    autoCorrect,
    autoFocus,
    containerStyle,
    keyboardType,
    label,
    onRightIconPress,
    placeholder,
    rightIcon,
    secureTextEntry,
  } = props;
  return (
    <View style={[styles.container, containerStyle]} testID="auth-input">
      <Text style={styles.label}>{label}</Text>
      <View>
        <TextInput
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          autoFocus={autoFocus}
          keyboardType={keyboardType}
          placeholder={placeholder}
          accessibilityLabel={accessibilityLabel}
          secureTextEntry={secureTextEntry}
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
    color: Colors.BLACK,
    fontSize: fontScale(14),
    fontWeight: '500',
    lineHeight: fontScale(19),
    marginBottom: verticalScale(6),
  },
  rightIcon: {
    alignItems: 'center',
    height: 45,
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    top: 0,
    width: 45,
  },
});

export default AuthInput;
