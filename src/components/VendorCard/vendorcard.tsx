import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import {Text} from '@components';

import {Colors} from '@constants/colors';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';

export type VendorCardProps = {
  id: string | number;
  img: ImageSourcePropType;
  name?: string;
  style?: StyleProp<ViewStyle>;
};

const vendorcard: React.FC<VendorCardProps> = props => {
  const {img, name, style} = props;
  return (
    <View>
      <View style={[styles.container, style]}>
        <Image style={styles.img} source={img} resizeMode="center" />
      </View>
      {name && (
        <Text
          content={name}
          fontWeight="500"
          fontSize={fontScale(16)}
          style={styles.nameText}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.BACKGROUND_GRAY,
    borderRadius: horizontalScale(12),
    height: verticalScale(100),
    justifyContent: 'center',
    marginBottom: verticalScale(8),
    width: horizontalScale(100),
  },
  img: {
    width: '100%',
  },
  nameText: {
    marginVertical: verticalScale(5),
  },
});

export default React.memo(vendorcard);
