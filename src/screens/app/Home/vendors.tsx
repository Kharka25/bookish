import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Text} from '@components';

interface Props {}

const Vendors: React.FC<Props> = props => {
  const {} = props;
  return (
    <View style={styles.container}>
      <Text content={'vendors'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Vendors;
