import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {Text} from '@components';

import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';
import {Colors} from '@constants/colors';

interface Props {
  email: string;
  profileImage?: string;
  username: string;
}

const UserProfile: React.FC<Props> = props => {
  const {email, profileImage, username} = props;
  return (
    <View style={styles.container}>
      <View>
        {profileImage && (
          <Image source={{uri: profileImage}} style={styles.profileImage} />
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
    borderRadius: horizontalScale(50),
    height: verticalScale(65),
    marginRight: verticalScale(12),
    resizeMode: 'cover',
    width: horizontalScale(65),
  },
});

export default UserProfile;
