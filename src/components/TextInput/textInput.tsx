import React from 'react';
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
  label?: string;
  testID?: string;
}

const TextInput: React.FC<Props> = props => {
  const {containerStyle, label, testID = 'text-input'} = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TxtInput
        {...props}
        role="form"
        cursorColor={Colors.PRIMARY}
        placeholderTextColor={Colors.GRAY_40}
        style={[styles.txtInputContainer, props.style]}
        testID={testID}
      />
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
  txtInputContainer: {
    backgroundColor: Colors.BACKGROUND_GRAY,
    borderRadius: horizontalScale(12),
    height: verticalScale(50),
    paddingLeft: horizontalScale(16),
  },
});

export default TextInput;
