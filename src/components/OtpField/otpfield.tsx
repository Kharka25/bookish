import React, {forwardRef, useState} from 'react';
import {TextInput, TextInputProps, StyleSheet} from 'react-native';

import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';
import {Colors} from '@constants/colors';

interface Props extends TextInputProps {
  ref?: any;
}

const OtpField = forwardRef<TextInput, Props>((props, ref) => {
  const [focused, setFocused] = useState(false);
  return (
    <TextInput
      {...props}
      onEndEditing={() => setFocused(false)}
      onFocus={() => setFocused(true)}
      ref={ref}
      style={[styles.input, focused && styles.focused, props.style]}
      placeholderTextColor={Colors.GRAY_40}
      testID="otp-field"
    />
  );
});

const styles = StyleSheet.create({
  container: {},
  focused: {
    borderColor: Colors.PRIMARY,
    borderWidth: 1,
  },
  input: {
    backgroundColor: Colors.BACKGROUND_GRAY,
    borderRadius: horizontalScale(8),
    fontSize: fontScale(24),
    fontWeight: 'bold',
    height: verticalScale(52),
    textAlign: 'center',
    width: horizontalScale(52),
  },
});

export default React.memo(OtpField);
