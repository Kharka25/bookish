import React from 'react';
import {
  TextStyle,
  TouchableOpacity,
  View,
  ViewProps,
  StyleProp,
  ImageSourcePropType,
  Image,
  ImageStyle,
} from 'react-native';

import {LoadingIndicator, Text} from '@components';
import {Colors} from '@constants/colors';
import {fontScale} from '@utils/responsiveDesign';

import styles from './styles';

interface Props extends ViewProps {
  disable?: boolean;
  icon?: ImageSourcePropType;
  iconStyle?: StyleProp<ImageStyle>;
  label: string;
  labelStyle?: StyleProp<TextStyle>;
  loading?: boolean;
  onPress?: () => void;
  light?: boolean;
}

const Button: React.FC<Props> = props => {
  const {
    disable = false,
    icon,
    iconStyle,
    label,
    light,
    loading,
    onPress,
    style,
    ...otherProps
  } = props;
  return (
    <TouchableOpacity
      disabled={disable}
      activeOpacity={0.5}
      testID="btn"
      onPress={onPress}>
      <View
        {...otherProps}
        style={[
          styles.container,
          light && styles.btnLight,
          disable && styles.btnDisabled,
          style,
        ]}>
        {loading ? (
          <LoadingIndicator color={Colors.WHITE} size={15} testID="loadings" />
        ) : (
          <View style={icon ? styles.labelFlex : {}}>
            {icon && <Image source={icon} style={iconStyle} />}
            <Text
              color={!light ? Colors.WHITE : Colors.PRIMARY}
              fontSize={fontScale(16)}
              fontWeight={!light ? '400' : '500'}
              content={label}
            />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
