import React from 'react';
import {TouchableOpacity, StyleSheet, ViewProps} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

import {Colors} from '@constants/colors';
import {useAppNavigation} from '@models/navigation';

interface Props extends ViewProps {
  color?: string;
  size?: number;
  handleBack?: () => void;
}

const BackIcon: React.FC<Props> = props => {
  const nav = useAppNavigation();

  function goBack() {
    return nav.goBack();
  }

  const {
    color = Colors.BLACK,
    size = 18,
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
    justifyContent: 'center',
  },
});

export default React.memo(BackIcon);
