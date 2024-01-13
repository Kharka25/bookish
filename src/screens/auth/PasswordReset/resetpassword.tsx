import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {BackIcon, Button, TextInput} from '@components';
import {AuthStackParamList, useAuthNavigation} from '@models/navigation';
import {globalStyles} from '@utils/responsiveDesign';

import authStyles from '../authStyles';

type ScreenProps = NativeStackScreenProps<AuthStackParamList, 'ResetPassword'>;

const ResetPassword: React.FC<ScreenProps> = ({route}) => {
  const {mode} = route.params;
  const [phoneNumber, setPhoneNumber] = useState<string>();

  const navigation = useAuthNavigation();

  function verify() {
    navigation.navigate('Verification', {mode});
  }
  return (
    <SafeAreaView style={styles.container} testID="reset-password">
      <BackIcon />
      <View style={[globalStyles.screenContainer, styles.container]}>
        <Text style={authStyles.heading}>Reset Password</Text>
        <Text style={[authStyles.subHeading, globalStyles.mbMD]}>
          Please enter your phone number to recieve a verification code.
        </Text>
        <TextInput
          label="Phone"
          onChangeText={value => setPhoneNumber(value)}
          style={globalStyles.mbMD}
          value={phoneNumber}
        />
        <Button
          disable={true}
          onPress={verify}
          label="Send"
          style={globalStyles.mtSm}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
});

export default ResetPassword;
