import React, {ReactNode} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface Props {
  children: ReactNode;
}

const AppContainer: React.FC<Props> = props => {
  const {children} = props;
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(AppContainer);
