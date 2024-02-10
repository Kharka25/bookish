import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {
  AppStackParamList,
  AppTabParamList,
  useAppNavigation,
} from '@models/navigation';

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'Home'>;

const Home: React.FC<ScreenProps> = () => {
  const navigation = useAppNavigation();
  return (
    <SafeAreaView>
      <Text
        onPress={() =>
          navigation.navigate('Status', {
            statusProps: {
              btnText: 'Get Started',
              message:
                'Your account is complete, please enjoy the best menu from us.',
              route: 'Profile',
              title: 'Congratulations!',
            },
          })
        }>
        Home Screen
      </Text>
    </SafeAreaView>
  );
};

export default Home;
