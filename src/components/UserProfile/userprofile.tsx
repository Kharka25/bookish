import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';

import {Text} from '@components';

import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';
import {Colors} from '@constants/colors';

interface Props {
  email: string;
  profileImage?: ImageSourcePropType;
  username: string;
}

const UserProfile: React.FC<Props> = props => {
  const {email, profileImage, username} = props;
  return (
    <View style={styles.container}>
      <View>
        {profileImage && (
          <Image source={profileImage} style={styles.profileImage} />
        )}
      </View>
      <View>
        <Text content={username} fontSize={fontScale(16)} fontWeight="500" />
        <Text content={email} color={Colors.GRAY_50} fontWeight="400" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  profileImage: {
    height: verticalScale(56),
    marginRight: verticalScale(12),
    resizeMode: 'contain',
    width: horizontalScale(56),
  },
});

export default UserProfile;
