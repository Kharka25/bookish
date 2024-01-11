import React from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';

import {BackIcon, Button, Link, TextInput} from '@components';
import {
  globalStyles,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';
import {useAuthNavigation} from '@models/navigation';

import authStyles from '../authStyles';

const SignUp: React.FC = () => {
  const navigation = useAuthNavigation();

  function signIn() {
    navigation.navigate('SignIn');
  }

  return (
    <SafeAreaView style={[styles.container]} testID="signup-screen">
      <BackIcon />
      <View style={[globalStyles.screenContainer, styles.container]}>
        <Text style={authStyles.heading}>Sign Up</Text>
        <Text style={[authStyles.subHeading, styles.mbMD]}>
          Create an account and start your Bookish adventure!
        </Text>
        <TextInput
          autoCorrect={false}
          autoComplete="off"
          containerStyle={styles.inputContainer}
          label="Name"
          placeholder="Your name"
        />
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
        <Button label="Register" style={styles.btn} />
        <Text style={[authStyles.linkContainer, styles.mbMD]}>
          Have an account?
          <Link title="Sign In" onPress={signIn} style={styles.signInTxt} />
        </Text>
        <Text style={[authStyles.linkContainer, styles.mtLg]}>
          By Clicking Register, you agree to our
        </Text>
        <Link
          style={styles.footerLink}
          title="Terms and Data Policy."
          testID="terms-and-data-link"
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
  footerLink: {
    alignSelf: 'center',
    marginTop: verticalScale(4),
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

export default SignUp;
