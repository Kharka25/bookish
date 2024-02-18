import React, {ReactNode, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput as TxtInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {Text} from '@components';

import {Colors} from '@constants/colors';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';

interface Props extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  defaultValue?: TextInputProps['defaultValue'];
  label?: string;
  leftIcon?: ReactNode;
  placeholderTextColor?: TextInputProps['placeholderTextColor'];
  testID?: string;
  value?: TextInputProps['value'];
}

const TextInput: React.FC<Props> = props => {
  const {
    defaultValue,
    label,
    leftIcon,
    placeholderTextColor,
    testID = 'text-input',
    value,
  } = props;
  const [focused, setFocused] = useState(false);
  return (
    <View style={styles.container}>
      {label && <Text content={label} style={styles.label} />}
      <View style={[styles.inputContainer, focused && styles.focused]}>
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
        <TxtInput
          {...props}
          role="form"
          cursorColor={Colors.PRIMARY}
          defaultValue={defaultValue}
          onEndEditing={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          placeholderTextColor={
            placeholderTextColor ? placeholderTextColor : Colors.GRAY_40
          }
          style={[styles.txtInputContainer, props.style]}
          testID={testID}
          value={value}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  focused: {
    borderColor: Colors.PRIMARY,
    borderWidth: 0.7,
  },
  label: {
    fontWeight: '500',
    lineHeight: fontScale(19),
    marginBottom: verticalScale(6),
  },
  leftIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: horizontalScale(10),
  },
  inputContainer: {
    alignItems: 'center',
    backgroundColor: Colors.BACKGROUND_GRAY,
    borderRadius: horizontalScale(12),
    flexDirection: 'row',
    height: verticalScale(50),
    justifyContent: 'space-between',
    paddingLeft: horizontalScale(12),
    width: '100%',
  },
  txtInputContainer: {
    height: '100%',
    width: '100%',
  },
});

export default React.memo(TextInput);
