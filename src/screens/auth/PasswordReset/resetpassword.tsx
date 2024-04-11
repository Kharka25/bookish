import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Feather';

import {AuthInput, BackIcon, Button} from '@components';
import {AuthStackParamList, useAppNavigation} from '@models/navigation';
import {globalStyles, verticalScale} from '@utils/responsiveDesign';

import authStyles from '../authStyles';
import {Colors} from '@constants/colors';

type ScreenProps = NativeStackScreenProps<AuthStackParamList, 'ResetPassword'>;

const ResetPassword: React.FC<ScreenProps> = ({route}) => {
  const {mode} = route.params;
  const [resetValue, setResetValue] = useState<string>();

  const navigation = useAppNavigation();

  function verify() {
    navigation.navigate('Verification', {mode, prevScreen: 'ResetPassword'});
  }

  const selectedMode = mode === 'Email' ? 'email' : 'phone number';

  function renderPhoneIcon() {
    return (
      <Icon
        name="phone"
        color={Colors.PRIMARY}
        size={20}
        testID="visiblity-toggle"
      />
    );
  }

  return (
    <SafeAreaView style={styles.container} testID="reset-password">
      <BackIcon />
      <View style={[globalStyles.screenContainer, styles.container]}>
        <Text style={authStyles.heading}>Reset Password</Text>
        <Text style={[authStyles.subHeading, globalStyles.mbMD]}>
          Please enter your {selectedMode} to recieve a verification code.
        </Text>
        <AuthInput
          autoCorrect={false}
          autoComplete="off"
          inputMode={mode === 'Email' ? 'email' : 'numeric'}
          label={mode === 'Phone' ? 'Phone' : 'Email'}
          onChangeText={value => setResetValue(value)}
          leftIcon={mode === 'Phone' && renderPhoneIcon()}
          containerStyle={globalStyles.mbLg}
          value={resetValue}
        />
        <Button disable={true} onPress={verify} label="Send" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
  inputContainer: {
    marginBottom: verticalScale(16),
  },
});

export default ResetPassword;
