/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  TextStyle,
  View,
} from 'react-native';

import {Text} from '@components';

import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';
import {Colors} from '@constants/colors';

interface Props {
  flex?: boolean;
  img: ImageSourcePropType;
  imgStyle?: ImageStyle;
  name: string;
  nameStyle?: TextStyle;
  type?: string;
  wrap?: boolean;
}

const AuthorProfile: React.FC<Props> = props => {
  const {flex, img, imgStyle, name, nameStyle, type, wrap} = props;
  return (
    <View style={[styles.container, flex && styles.flex]}>
      <View
        style={[
          wrap && styles.imgContainer,
          wrap && {marginRight: flex ? horizontalScale(4) : 0},
        ]}>
        <Image resizeMode="cover" source={img} style={[styles.img, imgStyle]} />
      </View>
      <View style={{paddingLeft: horizontalScale(5), width: '200%'}}>
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
        {/* {flex && (
          <Text content={bio} fontSize={fontScale(12)} fontWeight="300" />
        )} */}
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
