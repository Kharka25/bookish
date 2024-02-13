import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';

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
        <Text style={styles.usernameText}>{username}</Text>
        <Text style={styles.emailText}>{email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  emailText: {
    color: Colors.GRAY_50,
    fontSize: fontScale(14),
    fontWeight: '300',
  },
  profileImage: {
    height: verticalScale(56),
    marginRight: verticalScale(12),
    resizeMode: 'contain',
    width: horizontalScale(56),
  },
  usernameText: {
    fontSize: fontScale(16),
    fontWeight: '600',
  },
});

export default UserProfile;
