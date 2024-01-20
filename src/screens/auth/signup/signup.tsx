import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';

import {
  AuthInput,
  BackIcon,
  Button,
  Link,
  PasswordVisibilityIcon,
} from '@components';
import {
  globalStyles,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';
import {useAuthNavigation} from '@models/navigation';

import authStyles from '../authStyles';

const SignUp: React.FC = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const navigation = useAuthNavigation();

  function togglePasswordVisbility() {
    setSecureTextEntry(!secureTextEntry);
  }

  function handleSignUp() {
    navigation.navigate('Verification', {mode: 'Email', prevScreen: 'SignUp'});
  }

  function signIn() {
    navigation.navigate('SignIn');
  }

  return (
    <SafeAreaView style={[styles.container]} testID="signup-screen">
      <BackIcon />
      <View style={[globalStyles.screenContainer, styles.container]}>
        <Text style={authStyles.heading}>Sign Up</Text>
        <Text style={[authStyles.subHeading, globalStyles.mbMD]}>
          Create an account and start your Bookish adventure!
        </Text>
        <AuthInput
          autoCorrect={false}
          autoComplete="off"
          autoFocus={true}
          containerStyle={styles.inputContainer}
          label="Name"
          placeholder="Your name"
        />
        <AuthInput
          autoCorrect={false}
          autoComplete="off"
          containerStyle={styles.inputContainer}
          label="Email"
          placeholder="Your email"
        />
        <AuthInput
          autoCorrect={false}
          autoComplete="off"
          containerStyle={[styles.inputContainer, globalStyles.mbLg]}
          label="Password"
          onRightIconPress={togglePasswordVisbility}
          placeholder="Your password"
          rightIcon={<PasswordVisibilityIcon privateIcon={secureTextEntry} />}
          secureTextEntry={secureTextEntry}
        />
        <Button onPress={handleSignUp} label="Register" style={styles.btn} />
        <Text style={[authStyles.linkContainer, globalStyles.mbMD]}>
          Have an account?
          <Link title="Sign In" onPress={signIn} style={styles.signInTxt} />
        </Text>
        <Text style={[authStyles.linkContainer, globalStyles.mtLg]}>
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
  signInTxt: {
    marginLeft: horizontalScale(5),
  },
});

export default SignUp;
