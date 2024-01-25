import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {AuthInput, BackIcon, Button, PasswordVisibilityIcon} from '@components';
import {
  globalStyles,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';
import authStyles from '../authStyles';
import {useAppNavigation} from '@models/navigation';

interface Props {}

const NewPassword: React.FC<Props> = props => {
  const {} = props;
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const navigation = useAppNavigation();

  function togglePasswordVisbility() {
    setSecureTextEntry(!secureTextEntry);
  }

  function handleResetPassword() {
    navigation.navigate('Status', {
      statusProps: {
        btnText: 'Login',
        message: 'You have successfully updated your password.',
        route: 'SignIn',
        title: 'Password Changed!',
      },
    });
  }

  return (
    <SafeAreaView style={styles.container} testID="new-password">
      <BackIcon />
      <View style={[globalStyles.screenContainer, styles.container]}>
        <Text style={authStyles.heading}>New Password</Text>
        <Text style={[authStyles.subHeading, globalStyles.mbMD]}>
          Create your new password, so you can login to your account
        </Text>
        <AuthInput
          autoCorrect={false}
          autoComplete="off"
          containerStyle={styles.inputContainer}
          label="New Password"
          onRightIconPress={togglePasswordVisbility}
          placeholder="Your password"
          rightIcon={<PasswordVisibilityIcon privateIcon={secureTextEntry} />}
          secureTextEntry={secureTextEntry}
        />
        <AuthInput
          autoCorrect={false}
          autoComplete="off"
          containerStyle={[styles.inputContainer, globalStyles.mbLg]}
          label="Confirm Password"
          onRightIconPress={togglePasswordVisbility}
          placeholder="Your password"
          rightIcon={<PasswordVisibilityIcon privateIcon={secureTextEntry} />}
          secureTextEntry={secureTextEntry}
        />
        <Button onPress={handleResetPassword} label="Send" />
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
  inputContainer: {
    marginBottom: verticalScale(16),
  },
});
export default React.memo(NewPassword);
