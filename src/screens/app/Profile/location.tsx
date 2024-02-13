import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {BackIcon, Header} from '@components';

import {globalStyles} from '@utils/responsiveDesign';

const Location: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        containerStyle={[
          globalStyles.headerStyle,
          globalStyles.mbMD,
          globalStyles.phSm,
        ]}
        leftIcon={<BackIcon size={18} />}
        title="Location"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Location;
