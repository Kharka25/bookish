import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';

import {
  AuthInput,
  BackIcon,
  Button,
  LineBreak,
  Link,
  PasswordVisibilityIcon,
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

import authStyles from './authStyles';
import {Colors} from '@constants/colors';

const SignIn: React.FC = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [loading, setLoading] = useState(false);
  const [signinData, setSigninData] = useState<SigninDataI>({
    email: '',
    username: '',
  });

  const {updateCredentials, updateIsLoggedIn, updateUserProfile} = useAuth();

  const navigation = useAppNavigation();

  function signInDataHandler(inputIdentifier: string, enteredValue: string) {
    setSigninData(currentInput => {
      return {...currentInput, [inputIdentifier]: enteredValue};
    });
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
      <BackIcon />
      <View style={[globalStyles.screenContainer, styles.container]}>
        <View style={styles.headingContainer}>
          <Text style={authStyles.heading}>Welcome Back</Text>
          <Text style={styles.icon}>👋</Text>
        </View>
        <Text style={[authStyles.subHeading, globalStyles.mbMD]}>
          Sign in to your account
        </Text>
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
        />
        <Button
          label="Login"
          loading={loading}
          onPress={handleSignIn}
          style={[styles.btn, globalStyles.mtSm]}
        />
        <Text style={[authStyles.linkContainer, globalStyles.mbMD]}>
          Don't have an account?
          <Link title="Sign Up" onPress={signUp} style={styles.signInTxt} />
        </Text>
      </View>
      <LineBreak label="Or with" style={globalStyles.mbMD} />
      <View style={[globalStyles.screenContainer, styles.container]}>
        <Button
          icon={require('@assets/icons/google.png')}
          iconStyle={styles.btnIcon}
          label="Sign in with Google"
          labelStyle={styles.externalBtnLabel}
          style={[styles.btn, styles.externalBtn]}
        />
        <Button
          icon={require('@assets/icons/apple.png')}
          iconStyle={styles.btnIcon}
          label="Sign in with Apple"
          labelStyle={styles.externalBtnLabel}
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
  externalBtn: {
    backgroundColor: 'transparent',
    borderColor: Colors.GRAY_20,
    borderWidth: 1,
  },
  externalBtnLabel: {
    color: Colors.BLACK,
    fontSize: fontScale(14),
    fontWeight: '400',
  },
  footerLink: {
    alignSelf: 'center',
    marginTop: verticalScale(4),
  },
  headingContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    bottom: verticalScale(1),
    fontSize: fontScale(24),
  },
  inputContainer: {
    marginBottom: verticalScale(16),
  },
  signInTxt: {
    marginLeft: horizontalScale(5),
  },
});

export default SignIn;
