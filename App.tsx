import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

import {Button, Carousel} from '@components';
import {CarouselData} from '@constants/data';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';
import {Colors} from '@constants/colors';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <SafeAreaView testID="App-screen">
      <Text style={styles.skipText}>Skip</Text>
      <Carousel data={CarouselData} />
      <View style={styles.btnContainer}>
        <Button label="Get Started" />
        <Button label="Sign in" light />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    gap: horizontalScale(15),
    marginTop: verticalScale(100),
    paddingHorizontal: horizontalScale(22),
  },
  skipText: {
    color: Colors.PRIMARY,
    fontSize: fontScale(16),
    fontWeight: '500',
  },
});

export default App;
