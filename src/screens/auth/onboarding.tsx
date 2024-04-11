import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Button, Carousel, Link} from '@components';
import {CarouselData} from '@constants/data';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';
import {useAppNavigation} from '@models/navigation';

const Onboarding: React.FC = () => {
  const navigation = useAppNavigation();

  function signUp() {
    navigation.navigate('SignUp');
  }

  function signIn() {
    navigation.navigate('SignIn');
  }

  return (
    <SafeAreaView testID="onboard-screen">
      <View>
        <Link title="Skip" titleStyle={styles.skipText} onPress={signUp} />
        <Carousel data={CarouselData} />
        <View style={styles.btnContainer}>
          <Button
            label="Get Started"
            labelStyle={styles.btlLabel}
            onPress={signUp}
          />
          <Button
            label="Sign In"
            labelStyle={styles.btlLabel}
            light
            testID="signin-btn"
            onPress={signIn}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    gap: horizontalScale(15),
    marginTop: verticalScale(90),
    paddingHorizontal: horizontalScale(24),
  },
  btlLabel: {
    fontSize: fontScale(15),
    fontWeight: '600',
  },
  skipText: {
    fontSize: fontScale(16),
    fontWeight: '500',
    paddingHorizontal: horizontalScale(24),
  },
});

export default Onboarding;
