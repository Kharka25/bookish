import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface Props {}

const Address: React.FC<Props> = props => {
  const {} = props;
  return (
    <View style={styles.container}>
      <Text>address</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Address;
