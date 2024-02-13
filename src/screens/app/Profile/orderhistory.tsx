import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {BackIcon, Header} from '@components';
// import useAuth from '@store/auth/hooks';

import {globalStyles} from '@utils/responsiveDesign';

const OrderHistory: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        containerStyle={[
          globalStyles.headerStyle,
          globalStyles.mbMD,
          globalStyles.phSm,
        ]}
        leftIcon={<BackIcon size={18} />}
        title="Order History"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default OrderHistory;
