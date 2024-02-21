import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {BackIcon, Header, Text} from '@components';
import {globalStyles} from '@utils/responsiveDesign';

interface Props {}

const Author: React.FC<Props> = props => {
  const {} = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={globalStyles.phSm}>
        <Header
          leftIcon={<BackIcon />}
          containerStyle={[globalStyles.headerStyle, globalStyles.mbSm]}
          title="Author"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Author;
