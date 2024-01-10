import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {AuthStackParamList} from '@models/navigation';

// type ScreenProp = NativeStackScreenProps<AuthStackParamList, 'SignUp'>;

const SignUp: React.FC = () => {
  return (
    <SafeAreaView style={styles.container} testID="signup-screen">
      <Text>signup</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SignUp;
