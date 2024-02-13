import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput as TxtInput,
  TextInputProps,
  Text,
  StyleProp,
  ViewStyle,
} from 'react-native';

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
  placeholderTextColor?: TextInputProps['placeholderTextColor'];
  testID?: string;
  value?: TextInputProps['value'];
}

const TextInput: React.FC<Props> = props => {
  const {
    containerStyle,
    defaultValue,
    label,
    placeholderTextColor,
    testID = 'text-input',
    value,
  } = props;
  const [focused, setFocused] = useState(false);
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
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
        style={[
          styles.txtInputContainer,
          focused && styles.focused,
          props.style,
        ]}
        testID={testID}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  focused: {
    borderColor: Colors.PRIMARY,
    borderWidth: 0.7,
  },
  label: {
    color: Colors.BLACK,
    fontSize: fontScale(14),
    fontWeight: '500',
    lineHeight: fontScale(19),
    marginBottom: verticalScale(6),
  },
  txtInputContainer: {
    backgroundColor: Colors.BACKGROUND_GRAY,
    borderRadius: horizontalScale(12),
    height: verticalScale(50),
    paddingLeft: horizontalScale(16),
  },
});

export default React.memo(TextInput);
