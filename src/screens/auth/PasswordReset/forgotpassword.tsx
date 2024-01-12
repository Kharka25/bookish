import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface Props {}

const ForgotPassword: React.FC<Props> = props => {
  const {} = props;
  return (
    <View style={styles.container} testID="forgot-password">
      <Text>forgotpassword</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ForgotPassword;
