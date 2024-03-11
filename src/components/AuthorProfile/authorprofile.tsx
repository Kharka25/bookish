/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

import {Text} from '@components';

import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';
import {Colors} from '@constants/colors';

type Props = {
  flex?: boolean;
  img: ImageSourcePropType;
  imgStyle?: ImageStyle;
  infoStyle?: ViewStyle;
  name?: string;
  nameStyle?: TextStyle;
  type?: string;
  wrap?: boolean;
} & ViewProps;

const AuthorProfile: React.FC<Props> = props => {
  const {flex, img, imgStyle, infoStyle, name, nameStyle, style, type, wrap} =
    props;

  return (
    <View style={[styles.container, style, flex && styles.flex]}>
      <View
        style={[
          wrap && styles.imgContainer,
          wrap && {marginRight: flex ? horizontalScale(4) : 0},
        ]}>
        <Image resizeMode="cover" source={img} style={[styles.img, imgStyle]} />
      </View>
      <View
        style={[{paddingLeft: horizontalScale(5), width: '200%'}, infoStyle]}>
        {name && (
          <Text
            content={name}
            fontSize={fontScale(13)}
            fontWeight="500"
            style={[styles.nameText, nameStyle]}
            numberOfLines={1}
          />
        )}
        {type && (
          <Text
            content={type}
            color={Colors.GRAY_40}
            fontSize={fontScale(12)}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  flex: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  img: {
    height: verticalScale(100),
    width: horizontalScale(103),
  },
  imgContainer: {
    borderColor: Colors.PRIMARY,
    borderRadius: horizontalScale(50),
    borderWidth: 0.9,
    marginBottom: verticalScale(10),
    padding: horizontalScale(3),
    height: 'auto',
    width: 'auto',
  },
  nameText: {
    marginBottom: verticalScale(3),
    maxWidth: horizontalScale(100),
  },
});

export default React.memo(AuthorProfile);
