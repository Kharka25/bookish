import React from 'react';
import {TouchableOpacity, StyleSheet, ViewProps} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Ionicons';

import {Colors} from '@constants/colors';
import {horizontalScale, verticalScale} from '@utils/responsiveDesign';

interface Props extends ViewProps {
  color?: string;
  size?: number;
  handleBack?: () => void;
}

const BackIcon: React.FC<Props> = props => {
  const nav = useNavigation();

  function goBack() {
    return nav.goBack();
  }

  const {
    color = Colors.BLACK,
    size = 24,
    handleBack = goBack,
    style,
    ...otherProps
  } = props;
  return (
    <TouchableOpacity
      {...otherProps}
      onPress={handleBack}
      style={[styles.container, style]}
      testID="goBack-btn">
      <Icons
        name="arrow-back-outline"
        color={color}
        size={size}
        testID="icon"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: verticalScale(40),
    justifyContent: 'center',
    marginHorizontal: horizontalScale(15),
    width: horizontalScale(40),
  },
});

export default React.memo(BackIcon);
