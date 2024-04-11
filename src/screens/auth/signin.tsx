import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import {
  AuthInput,
  BackIcon,
  Button,
  LineBreak,
  Link,
  PasswordVisibilityIcon,
  Text,
} from '@components';
import {
  fontScale,
  globalStyles,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';
import {useAppNavigation} from '@models/navigation';

import useAuth from '@store/auth/hooks';
import {SigninDataI} from '@customTypes/request.types';
import {saveToAsyncStorage} from '@utils/cache';
import {Keys} from '@customTypes/keys.types';
import {signIn} from '@services/auth';

import {Colors} from '@constants/colors';
import authStyles from './authStyles';

const SignIn: React.FC = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [loading, setLoading] = useState(false);
  const [signinData, setSigninData] = useState<SigninDataI>({
    email: '',
    password: '',
  });

  const {updateCredentials, updateIsLoggedIn, updateUserProfile} = useAuth();

  const navigation = useAppNavigation();

  function signInDataHandler(inputIdentifier: string, enteredValue: string) {
    setSigninData(currentInput => {
      return {...currentInput, [inputIdentifier]: enteredValue};
    });
  }

  function btnDisabled() {
    return signinData.email.trim() === '' || signinData.password.trim() === '';
  }

  function togglePasswordVisbility() {
    setSecureTextEntry(!secureTextEntry);
  }

  function signUp() {
    navigation.navigate('SignUp');
  }

  function forgotPassword() {
    navigation.navigate('ForgotPassword');
  }

  async function handleSignIn() {
    setLoading(true);
    try {
      const {profile, token} = await signIn({...signinData});
      saveToAsyncStorage(Keys.AUTH_TOKEN, token);
      updateIsLoggedIn(true);
      updateCredentials(token);
      updateUserProfile(profile);
      navigation.navigate('TabNavigator');
    } catch (error) {
      console.log('Sign in error: ', error);
    }
    setLoading(false);
  }

  return (
    <SafeAreaView testID="signin-screen">
      <View style={globalStyles.phSm}>
        <BackIcon />
        <View style={[styles.headingContainer, globalStyles.mtSm]}>
          <Text
            content="Welcome Back"
            fontSize={fontScale(24)}
            fontWeight="600"
            style={authStyles.heading}
          />
          <Text content="👋" fontSize={fontScale(24)} style={styles.icon} />
        </View>
        <Text
          content="Sign in to your account"
          color={Colors.GRAY_50}
          fontSize={fontScale(13)}
          style={[authStyles.subHeading, globalStyles.mbMD]}
        />
        <AuthInput
          autoCorrect={false}
          autoComplete="off"
          autoFocus={true}
          containerStyle={styles.inputContainer}
          label="Email"
          onChangeText={value => signInDataHandler('email', value)}
          placeholder="Your email"
        />
        <AuthInput
          autoCorrect={false}
          autoComplete="off"
          containerStyle={styles.inputContainer}
          label="Password"
          onChangeText={value => signInDataHandler('password', value)}
          onRightIconPress={togglePasswordVisbility}
          placeholder="Your password"
          rightIcon={<PasswordVisibilityIcon privateIcon={secureTextEntry} />}
          secureTextEntry={secureTextEntry}
        />
        <Link
          containerStyle={globalStyles.mbMD}
          onPress={forgotPassword}
          title="Forgot Password?"
          titleStyle={styles.linkTxt}
        />
        <Button
          disable={btnDisabled()}
          label="Login"
          loading={loading}
          onPress={handleSignIn}
          style={[styles.btn, globalStyles.mtSm]}
          labelStyle={styles.btlLabel}
        />
        <View style={authStyles.linkContainer}>
          <Text
            content="Don't have an account?"
            color={Colors.GRAY_50}
            fontWeight="500"
          />
          <Link title="Sign Up" onPress={signUp} titleStyle={styles.linkTxt} />
        </View>
      </View>
      <LineBreak label="Or with" style={[globalStyles.mbMD]} />
      <View style={[globalStyles.phSm, styles.container]}>
        <Button
          icon={require('@assets/icons/google.png')}
          iconStyle={styles.btnIcon}
          label="Sign in with Google"
          labelStyle={styles.externalBtnLabel}
          light
          style={[styles.btn, globalStyles.mbSm, styles.externalBtn]}
        />
        <Button
          icon={require('@assets/icons/apple.png')}
          iconStyle={styles.btnIcon}
          label="Sign in with Apple"
          labelStyle={styles.externalBtnLabel}
          light
          style={[styles.btn, globalStyles.mtSm, styles.externalBtn]}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
  btn: {
    borderRadius: horizontalScale(50),
  },
  btnIcon: {
    height: verticalScale(18),
    marginRight: horizontalScale(10),
    resizeMode: 'contain',
    width: horizontalScale(18),
  },
  btlLabel: {
    fontSize: fontScale(15),
    fontWeight: '600',
  },
  externalBtn: {
    backgroundColor: 'transparent',
    borderColor: Colors.GRAY_20,
    borderWidth: 1,
  },
  externalBtnLabel: {
    fontSize: fontScale(14),
    fontWeight: '400',
  },
  headingContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    bottom: verticalScale(3),
    marginLeft: horizontalScale(5),
  },
  inputContainer: {
    marginBottom: verticalScale(16),
  },
  linkTxt: {
    fontWeight: '500',
    marginLeft: horizontalScale(5),
  },
});

export default SignIn;
