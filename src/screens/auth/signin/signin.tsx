import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {AuthStackParamList} from '@models/navigation';

// type ScreenProp = NativeStackScreenProps<AuthStackParamList, 'SignUp'>;

const SignIn: React.FC = () => {
  return (
    <SafeAreaView style={styles.container} testID="signin-screen">
      <Text>signin</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SignIn;
