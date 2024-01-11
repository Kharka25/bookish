import React from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';

import {BackIcon, Button, Link, TextInput} from '@components';
import {
  fontScale,
  globalStyles,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';
import {useAuthNavigation} from '@models/navigation';

import authStyles from '../authStyles';

const SignIn: React.FC = () => {
  const navigation = useAuthNavigation();

  function signUp() {
    navigation.navigate('SignUp');
  }
  return (
    <SafeAreaView style={styles.container} testID="signin-screen">
      <BackIcon />
      <View style={[globalStyles.screenContainer, styles.container]}>
        <View style={styles.headingContainer}>
          <Text style={authStyles.heading}>Welcome Back</Text>
          <Text style={styles.icon}>👋</Text>
        </View>
        <Text style={[authStyles.subHeading, styles.mbMD]}>
          Sign in to your account
        </Text>
        <TextInput
          autoCorrect={false}
          autoComplete="off"
          containerStyle={styles.inputContainer}
          label="Email"
          placeholder="Your email"
        />
        <TextInput
          autoCorrect={false}
          autoComplete="off"
          containerStyle={[styles.inputContainer, styles.mbLg]}
          label="Password"
          placeholder="Your password"
          secureTextEntry
        />
        <Button label="Login" style={styles.btn} />
        <Text style={[authStyles.linkContainer, styles.mbMD]}>
          Don't have an account?
          <Link title="Sign Up" onPress={signUp} style={styles.signInTxt} />
        </Text>
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
  mbMD: {
    // marginBottom: verticalScale(24),
    marginBottom: '6%',
  },
  mbLg: {
    // marginBottom: verticalScale(32),
    marginBottom: '15%',
  },
  mtLg: {
    marginTop: '40%',
  },
  signInTxt: {
    marginLeft: horizontalScale(5),
  },
});

export default SignIn;
