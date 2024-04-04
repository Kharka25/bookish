import React, {ReactNode} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import {Text} from '@components';

// const {height: SCREEN_HEIGHT} = Dimensions.get('window');

interface Props {
  children?: ReactNode;
}

const ButtomSheet: React.FC<Props> = props => {
  const {} = props;
  return (
    <View style={styles.container}>
      <Text content={'buttomsheet'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default React.memo(ButtomSheet);
