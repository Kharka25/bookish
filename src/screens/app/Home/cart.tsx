import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface Props {}

const Cart: React.FC<Props> = props => {
  const {} = props;
  return (
    <SafeAreaView style={styles.container}>
      <Text>Cart Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Cart;
