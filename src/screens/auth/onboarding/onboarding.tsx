import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Button, Carousel} from '@components';
import {CarouselData} from '@constants/data';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';
import {Colors} from '@constants/colors';
import {useAppNavigation} from '@models/navigation';

// type ScreenProp = NativeStackScreenProps<AuthStackParamList, 'Onboarding'>;

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
        <Text style={styles.skipText} testID="skip" onPress={signUp}>
          Skip
        </Text>
        <Carousel data={CarouselData} />
        <View style={styles.btnContainer}>
          <Button label="Get Started" onPress={signUp} />
          <Button label="Sign In" light testID="signin-btn" onPress={signIn} />
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
  skipText: {
    color: Colors.PRIMARY,
    fontSize: fontScale(16),
    fontWeight: '500',
    paddingHorizontal: horizontalScale(24),
  },
});

export default Onboarding;
