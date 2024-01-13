import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AuthStackParamList} from '@models/navigation';

type ScreenProps = NativeStackScreenProps<AuthStackParamList, 'ResetPassword'>;

const ResetPassword: React.FC<ScreenProps> = ({route}) => {
  const {mode} = route.params;
  console.log(mode);
  return (
    <View style={styles.container} testID="reset-password">
      <Text>resetpassword</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ResetPassword;
