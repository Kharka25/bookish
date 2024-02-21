/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
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
  bio?: string;
  img: ImageSourcePropType;
  imgStyle?: ImageStyle;
  name: string;
  type?: string;
}

const AuthorProfile: React.FC<Props> = props => {
  const {bio, img, imgStyle, name, type} = props;
  return (
    <View
      style={[
        styles.container,
        bio && styles.flex,
        // {flexDirection: bio ? 'row' : 'column'},
      ]}>
      <Image
        resizeMode="cover"
        source={img}
        style={[
          {marginRight: bio ? horizontalScale(4) : 0},
          styles.img,
          imgStyle,
        ]}
      />
      <View style={{paddingLeft: horizontalScale(5), width: '200%'}}>
        <Text
          content={name}
          fontSize={fontScale(13)}
          fontWeight="500"
          style={styles.nameText}
          numberOfLines={1}
        />
        {type && (
          <Text
            content={type}
            color={Colors.GRAY_40}
            fontSize={fontScale(12)}
          />
        )}
        {bio && (
          <Text content={bio} fontSize={fontScale(12)} fontWeight="300" />
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
    // backgroundColor: 'yellow',
    height: verticalScale(100),
    marginBottom: verticalScale(10),
    width: horizontalScale(103),
  },
  nameText: {
    marginBottom: verticalScale(3),
    maxWidth: horizontalScale(100),
  },
});

export default React.memo(AuthorProfile);
