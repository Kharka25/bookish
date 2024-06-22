import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';

import {
  AuthInput,
  BackIcon,
  Button,
  Header,
  Link,
  PasswordVisibilityIcon,
} from '@components';
import useAuth from '@store/auth/hooks';
import {useAppNavigation} from '@models/navigation';

import {Colors} from '@constants/colors';
import {
  fontScale,
  globalStyles,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';
import {ImageSource, selectImage} from '@utils/image-upload';
import {UserProfileI} from '@models/auth';

const Account: React.FC = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [uploadSource, _setUploadSource] = useState<ImageSource>('CAMERA'); // TODO - Finish up image upload flow

  const navigation = useAppNavigation();

  const {authState, updateUserProfile} = useAuth();
  const {profile} = authState;

  const [userInfo, setUserInfo] = useState<UserProfileI>({
    username: profile?.username || '',
    email: profile?.email || '',
    phoneNumber: profile?.phoneNumber || '',
    profileImage: profile?.profileImage || '',
    id: profile?.id || '',
    verified: profile?.verified || false,
  });

  function onChangeText(value: string, inputIdentifier: string) {
    setUserInfo({...userInfo, [inputIdentifier]: value});
  }

  function togglePasswordVisbility() {
    setSecureTextEntry(!secureTextEntry);
  }

  function changePassword() {
    navigation.navigate('NewPassword', {prevScreen: 'Account'});
  }

  function renderPhoneIcon() {
    return (
      <Icon
        name="phone"
        color={Colors.PRIMARY}
        size={20}
        testID="visiblity-toggle"
      />
    );
  }

  async function handleImageUpload() {
    const selectedImage = await selectImage(uploadSource);
    const uri = selectedImage?.assets![0].uri!;
    updateUserProfile({...userInfo, profileImage: uri});
  }

  // async function takePhoto() {
  //   setUploadSource('CAMERA');
  //   // await
  // }

  return (
    <SafeAreaView>
      <Header
        leftIcon={<BackIcon size={18} />}
        title="My Account"
        containerStyle={[
          globalStyles.headerStyle,
          globalStyles.mbMD,
          globalStyles.phSm,
        ]}
      />
      <View style={[styles.profileImageBackground, globalStyles.mbMD]} />
      <View style={[styles.profileImageContainer]}>
        <Image
          source={{
            uri: profile?.profileImage
              ? userInfo?.profileImage || profile.profileImage
              : require('@assets/images/user.png'),
          }}
          style={styles.profileImage}
        />
        <Icon
          name="camera"
          color={Colors.GRAY_40}
          size={20}
          style={styles.camaraIcon}
          onPress={handleImageUpload}
        />
      </View>
      <View style={[globalStyles.phSm, styles.container]}>
        <AuthInput
          autoCorrect={false}
          autoComplete="off"
          containerStyle={styles.inputContainer}
          label="Name"
          onChangeText={value => onChangeText(value, 'username')}
          placeholderTextColor={Colors.BLACK}
          value={userInfo?.username}
        />
        <AuthInput
          autoCorrect={false}
          autoComplete="off"
          containerStyle={styles.inputContainer}
          defaultValue={userInfo?.email}
          label="Email"
          onChangeText={value => onChangeText(value, 'email')}
          placeholderTextColor={Colors.BLACK}
          value={userInfo?.email}
        />
        <AuthInput
          autoCorrect={false}
          autoComplete="off"
          inputMode="numeric"
          label="Phone"
          onChangeText={value => onChangeText(value, 'phoneNumber')}
          leftIcon={renderPhoneIcon()}
          containerStyle={styles.inputContainer}
          value={userInfo.phoneNumber}
        />
        <AuthInput
          autoCorrect={false}
          autoComplete="off"
          containerStyle={[styles.inputContainer]}
          defaultValue="********"
          label="Password"
          onRightIconPress={togglePasswordVisbility}
          rightIcon={<PasswordVisibilityIcon privateIcon={secureTextEntry} />}
          secureTextEntry={secureTextEntry}
          // value={''}
        />
        <Link
          containerStyle={globalStyles.mbLg}
          onPress={changePassword}
          titleStyle={styles.changePasswordTxt}
          title="Change Password"
        />
        <Button label="Save Changes" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -30,
  },
  camaraIcon: {
    bottom: '-8%',
    position: 'absolute',
    right: '-0.6%',
  },
  changePasswordTxt: {
    color: Colors.PRIMARY,
    fontSize: fontScale(14),
    fontWeight: '400',
    textAlign: 'right',
  },
  inputContainer: {
    marginBottom: verticalScale(16),
  },
  profileImage: {
    borderRadius: horizontalScale(50),
    height: verticalScale(98),
    resizeMode: 'cover',
    width: horizontalScale(100),
  },
  profileImageBackground: {
    backgroundColor: Colors.WHITE_10,
    height: '12%',
    width: '100%',
  },
  profileImageContainer: {
    alignSelf: 'center',
    borderColor: Colors.PRIMARY,
    borderRadius: horizontalScale(55),
    borderWidth: 0.9,
    bottom: verticalScale(60),
    padding: '0.5%',
  },
});

export default Account;
