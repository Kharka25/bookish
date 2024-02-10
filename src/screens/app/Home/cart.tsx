import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useAppNavigation} from '@models/navigation';

interface Props {}

const Cart: React.FC<Props> = props => {
  const {} = props;
  const navigation = useAppNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={() => navigation.navigate('Authors')}>Cart Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Cart;
