import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {BackIcon, Button, Status as StatusComp} from '@components';
import {AppStackParamList, useAppNavigation} from '@models/navigation';
import {globalStyles} from '@utils/responsiveDesign';
// import {useNavigation} from '@react-navigation/native';

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'Status'>;

const Status: React.FC<ScreenProps> = ({route}) => {
  const {statusProps} = route.params;
  const {btnText, message, route: navigateTo, title} = statusProps;

  // const navigation = useNavigation();
  const navigation = useAppNavigation();

  function handleNavigate() {
    navigation.navigate(navigateTo as never);
  }

  return (
    <SafeAreaView testID="status-screen">
      <BackIcon />
      <View style={[globalStyles.screenContainer, styles.container]}>
        <StatusComp message={message} title={title} />
        <Button onPress={handleNavigate} label={btnText} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    flex: 0,
    paddingVertical: '30%',
  },
});

export default Status;
