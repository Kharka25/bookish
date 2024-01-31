import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppStackParamList} from '@models/navigation';
import {Home, Status} from '@screens';

const {Navigator, Screen} = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
      <Screen name="Status" component={Status} />
    </Navigator>
  );
};

export default AppNavigator;
