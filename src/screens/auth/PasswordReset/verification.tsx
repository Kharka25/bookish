import React, {useEffect, useState, useRef} from 'react';
import {Keyboard, Text, TextInput, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {BackIcon, Button, Link, OtpField} from '@components';
import {AuthStackParamList, useAuthNavigation} from '@models/navigation';
import {
  fontScale,
  globalStyles,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';
import {Colors} from '@constants/colors';
import authStyles from '../authStyles';

type ScreenProps = NativeStackScreenProps<AuthStackParamList, 'Verification'>;

const otpFields = new Array(4).fill('');

const Verification: React.FC<ScreenProps> = ({route}) => {
  const {mode, prevScreen} = route.params;
  const [otp, setOtp] = useState([...otpFields]);
  const [activeOtpIdx, setActiveOtpIdx] = useState(0);
  const [requestNewOtp, setRequestNewOtp] = useState(false);
  const otpRef = useRef<TextInput>(null);

  const navigation = useAuthNavigation();

  const modeText = mode === 'Email' ? 'dummy@mail.com' : '(+965) 123 435 7565';

  const isValidOtp = otp.every(value => {
    return value.trim();
  });

  function handleVerification() {
    if (prevScreen === 'ResetPassword') {
      navigation.navigate('NewPassword');
      return;
    }

    navigation.navigate('Status');
  }

  function handleKeyPress(key: string, idx: number) {
    const newOtp = [...otp];
    if (key === 'Backspace') {
      if (!newOtp[idx]) {
        setActiveOtpIdx(idx - 1);
      }
      newOtp[idx] = '';
    } else {
      setActiveOtpIdx(idx + 1);
      newOtp[idx] = key;
    }
    setOtp([...newOtp]);
  }

  function handlePaste(value: string) {
    if (value.length === otpFields.length) {
      Keyboard.dismiss();
      const newOtpFields = value.split('');
      setOtp([...newOtpFields]);
    }
  }

  useEffect(() => {
    otpRef.current?.focus();
  }, [activeOtpIdx]);

  return (
    <SafeAreaView style={styles.container} testID="verification-screen">
      <BackIcon />
      <View style={[globalStyles.screenContainer, styles.container]}>
        <Text style={authStyles.heading}>Verification Code</Text>
        <Text style={[authStyles.subHeading, globalStyles.mbLg]}>
          Please enter the code sent to{' '}
          <Text style={styles.modeText}>{modeText}</Text>
        </Text>
        <View style={styles.otpContainer}>
          {otpFields.map((_, idx) => (
            <OtpField
              autoCapitalize="none"
              keyboardType="numeric"
              key={idx}
              onChangeText={handlePaste}
              onKeyPress={({nativeEvent}) => {
                handleKeyPress(nativeEvent.key, idx);
              }}
              placeholder="0"
              ref={activeOtpIdx === idx ? otpRef : null}
              selectionColor={Colors.PRIMARY}
              value={otp[idx] || ''}
            />
          ))}
        </View>
        <Text style={[authStyles.linkContainer, globalStyles.mbMD]}>
          If you didn't receive a code?
          <Link
            active={requestNewOtp}
            style={styles.resendLink}
            title="Resend"
          />
        </Text>
        <Button
          disable={!isValidOtp}
          onPress={handleVerification}
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
    // borderRadius: horizontalScale(50),
  },
  modeText: {
    color: Colors.BLACK,
    fontSize: fontScale(16),
  },
  otpContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: verticalScale(24),
    width: '70%',
  },
  resendLink: {
    marginLeft: horizontalScale(5),
  },
});

export default Verification;
