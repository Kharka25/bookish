import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Header} from '@components';
import {AppStackParamList} from '@models/navigation';

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'Home'>;

const Home: React.FC<ScreenProps> = () => {
  return (
    <SafeAreaView>
      <Header containerStyle={styles.headerStyle} title="Home" />
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

export default Home;
