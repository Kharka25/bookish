import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {BackIcon, Button, TextInput} from '@components';
import {
  globalStyles,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';
import authStyles from '../authStyles';
import {useAuthNavigation} from '@models/navigation';

interface Props {}

const NewPassword: React.FC<Props> = props => {
  const {} = props;

  const navigation = useAuthNavigation();

  function handleResetPassword() {
    navigation.navigate('Status');
  }

  return (
    <SafeAreaView style={styles.container} testID="new-password">
      <BackIcon />
      <View style={[globalStyles.screenContainer, styles.container]}>
        <Text style={authStyles.heading}>New Password</Text>
        <Text style={[authStyles.subHeading, globalStyles.mbMD]}>
          Create your new password, so you can login to your account
        </Text>
        <TextInput
          autoCorrect={false}
          autoComplete="off"
          containerStyle={styles.inputContainer}
          label="New Password"
          placeholder="Your password"
          secureTextEntry
        />
        <TextInput
          autoCorrect={false}
          autoComplete="off"
          containerStyle={[styles.inputContainer, globalStyles.mbLg]}
          label="Confirm Password"
          placeholder="Your password"
          secureTextEntry
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
