import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ViewProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {LoadingIndicator} from '@components';
import {Colors} from '@constants/colors';

import styles from './styles';

interface Props extends ViewProps {
  label: string;
  labelStyle?: StyleProp<ViewStyle>;
  loading?: boolean;
  onPress?: () => void;
  light?: boolean;
}

const Button: React.FC<Props> = props => {
  const {label, labelStyle, light, loading, onPress, style, ...otherProps} =
    props;
  return (
    <TouchableOpacity testID="btn" onPress={onPress}>
      <View
        {...otherProps}
        style={[styles.container, light && styles.btnLight, style]}>
        {loading ? (
          <LoadingIndicator color={Colors.WHITE} size={15} testID="loadings" />
        ) : (
          <Text
            style={[
              styles.btnLabel,
              light && styles.btnLabelLight,
              labelStyle,
            ]}>
            {label}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
