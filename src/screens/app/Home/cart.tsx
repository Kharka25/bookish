import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Header} from '@components';
// import {useAppNavigation} from '@models/navigation';

interface Props {}

const Cart: React.FC<Props> = props => {
  const {} = props;
  // const navigation = useAppNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Header containerStyle={styles.headerStyle} title="Cart" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  headerStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default Cart;
