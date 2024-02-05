import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';

import {
  AuthInput,
  BackIcon,
  Button,
  Link,
  PasswordConditionCheck,
  PasswordVisibilityIcon,
} from '@components';
import {
  globalStyles,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';
import {
  allAretrue,
  hasNumber,
  hasSpecialCharacter,
  hasUppercase,
} from '@utils/helpers';
import {useAppNavigation} from '@models/navigation';

import authStyles from './authStyles';

interface SignupDataI {
  username: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [signupData, setSignupData] = useState<SignupDataI>({
    email: '',
    username: '',
    password: '',
  });

  const navigation = useAppNavigation();

  function btnDisabled() {
    return (
      !allAretrue(passwordCondition) ||
      signupData.email?.trim() === '' ||
      signupData.username?.trim() === ''
    );
  }

  function signUpDataHandler(inputIdentifier: string, enteredValue: string) {
    setSignupData(currentInput => {
      return {...currentInput, [inputIdentifier]: enteredValue};
    });
  }

  const passwordCondition = [
    {
      value: 'Minimum 8 characters',
      condition: signupData?.password.length >= 8,
    },
    {
      value: 'At least 1 number (1-9)',
      condition: hasNumber(signupData.password),
    },
    {
      value: 'At least 1 special character (!@#&*_%?)',
      condition: hasSpecialCharacter(signupData.password),
    },
    {
      value: 'At least 1 uppercase character',
      condition: hasUppercase(signupData.password),
    },
  ];

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
          onChangeText={value => signUpDataHandler('username', value)}
          placeholder="Your name"
          value={signupData.username}
        />
        <AuthInput
          autoCorrect={false}
          autoComplete="off"
          containerStyle={styles.inputContainer}
          label="Email"
          onChangeText={value => signUpDataHandler('email', value)}
          placeholder="Your email"
          value={signupData.email}
        />
        <AuthInput
          autoCorrect={false}
          autoComplete="off"
          containerStyle={[styles.inputContainer]}
          label="Password"
          onChangeText={value => signUpDataHandler('password', value)}
          onRightIconPress={togglePasswordVisbility}
          placeholder="Your password"
          rightIcon={<PasswordVisibilityIcon privateIcon={secureTextEntry} />}
          secureTextEntry={secureTextEntry}
          value={signupData.password}
        />
        <View style={[globalStyles.mbLg]}>
          {signupData.password?.trim() !== '' && (
            <PasswordConditionCheck conditions={passwordCondition} />
          )}
        </View>
        <Button
          disable={btnDisabled()}
          onPress={handleSignUp}
          label="Register"
          style={styles.btn}
        />
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
