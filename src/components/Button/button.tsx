import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ViewProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {LoadingIndicator} from '@components';
import {Colors} from '@constants/colors';

interface Props extends ViewProps {
  label: string;
  labelStyle?: StyleProp<ViewStyle>;
  loading?: boolean;
  onPress?: () => void;
}

const Button: React.FC<Props> = props => {
  const {label, labelStyle, loading, onPress, style, ...otherProps} = props;
  return (
    <TouchableOpacity testID="btn" onPress={onPress}>
      <View {...otherProps} style={[styles.container, style]}>
        {loading ? (
          <LoadingIndicator color={Colors.WHITE} size={24} testID="loadings" />
        ) : (
          <Text style={[labelStyle]}>{label}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default React.memo(Button);
