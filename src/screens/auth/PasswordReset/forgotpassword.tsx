import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {BackIcon, Button, ContactModeSelector} from '@components';
import {
  fontScale,
  globalStyles,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';
import {Colors} from '@constants/colors';
import {ContactModeData} from '@constants/data';
import {ResetMode, useAuthNavigation} from '@models/navigation';

import authStyles from '../authStyles';

const ForgotPassword = () => {
  const [selectedMode, setSelectedMode] = useState<ResetMode>('Email');
  const navigation = useAuthNavigation();

  function resetPassword() {
    setSelectedMode(selectedMode);
    navigation.navigate('ResetPassword', {mode: selectedMode});
  }

  return (
    <SafeAreaView style={styles.container} testID="forgot-password">
      <BackIcon />
      <View style={[globalStyles.screenContainer, styles.container]}>
        <Text style={authStyles.heading}>Forgot Password</Text>
        <Text style={[authStyles.subHeading, globalStyles.mbMD]}>
          Select a mode of contact to reset your password
        </Text>
        <ContactModeSelector
          data={ContactModeData}
          onSelect={setSelectedMode}
        />
        <Button
          onPress={resetPassword}
          label="Continue"
          style={[styles.btn, globalStyles.mtSm]}
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

export default ForgotPassword;
