import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import {
  AuthInput,
  BackIcon,
  Button,
  Link,
  PasswordConditionCheck,
  PasswordVisibilityIcon,
  Text,
} from '@components';
import {
  fontScale,
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
import {SignupDataI} from '@customTypes/request.types';
import {signUp} from '@services/auth';

import authStyles from './authStyles';
import {Colors} from '@constants/colors';

const SignUp: React.FC = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [signupData, setSignupData] = useState<SignupDataI>({
    email: '',
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

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

  function signIn() {
    navigation.navigate('SignIn');
  }

  async function handleSignUp() {
    setLoading(true);
    try {
      const {user} = await signUp({...signupData});
      navigation.navigate('Verification', {
        mode: 'Email',
        prevScreen: 'SignUp',
        userInfo: user,
      });
    } catch (error) {
      throw error;
    }
    setLoading(false);
  }

  return (
    <SafeAreaView testID="signup-screen">
      <View style={[globalStyles.phSm]}>
        <BackIcon />
        <View style={globalStyles.mtSm}>
          <Text
            content="Sign Up"
            fontSize={fontScale(24)}
            fontWeight="600"
            style={authStyles.heading}
          />
          <Text
            content="Create an account and start your Bookish adventure!"
            color={Colors.GRAY_50}
            fontSize={fontScale(13)}
            style={[authStyles.subHeading, globalStyles.mbMD]}
          />
        </View>
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
          loading={loading}
        />
        <View style={[globalStyles.mbMD, authStyles.linkContainer]}>
          <Text
            content="Have an account?"
            color={Colors.GRAY_50}
            fontWeight="500"
          />
          <Link title="Sign In" onPress={signIn} titleStyle={styles.linkTxt} />
        </View>
        <View style={[authStyles.linkContainer, globalStyles.mtLg]}>
          <Text
            content="By Clicking Register, you agree to our"
            color={Colors.GRAY_50}
            fontSize={fontScale(12)}
            fontWeight="500"
          />
          <Link
            style={styles.footerLink}
            title="Terms and Data Policy"
            titleStyle={styles.linkTxt}
            testID="terms-and-data-link"
          />
        </View>
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
  linkTxt: {
    fontSize: fontScale(14),
    fontWeight: '500',
    marginLeft: horizontalScale(5),
  },
  signInTxt: {
    marginLeft: horizontalScale(5),
  },
});

export default SignUp;
