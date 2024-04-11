import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {BackIcon, Header} from '@components';

import {globalStyles} from '@utils/responsiveDesign';

const HelpCenter: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        containerStyle={[
          globalStyles.headerStyle,
          globalStyles.mbMD,
          globalStyles.phSm,
        ]}
        leftIcon={<BackIcon size={18} />}
        title="Help Center"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default HelpCenter;
