import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {BackIcon, Button, ContactModeSelector} from '@components';
import {globalStyles, horizontalScale} from '@utils/responsiveDesign';
import {ContactModeData} from '@constants/data';
import {ResetMode, useAuthNavigation} from '@models/navigation';

import authStyles from '../authStyles';

const ForgotPassword = () => {
  const [selectedMode, setSelectedMode] = useState<ResetMode>('Email');
  const navigation = useAuthNavigation();

  function resetPassword() {
    setSelectedMode(selectedMode);
    navigation.navigate(
      selectedMode === 'Phone' ? 'ResetPassword' : 'Verification',
      {mode: selectedMode},
    );
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
});

export default ForgotPassword;
