import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Header} from '@components';

interface Props {}

const Category: React.FC<Props> = props => {
  const {} = props;
  return (
    <SafeAreaView style={styles.container}>
      <Header containerStyle={styles.headerStyle} title="Category" />
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

export default Category;
