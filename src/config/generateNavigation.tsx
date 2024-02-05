import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppStackParamList, AppTabParamList} from '@models/navigation';
import {Colors} from '@constants/colors';
import {verticalScale} from '@utils/responsiveDesign';

const Stack = createNativeStackNavigator<AppStackParamList & AppTabParamList>();
const Tab = createBottomTabNavigator<AppTabParamList & AppStackParamList>();

export type ScreenType = {
  name: keyof AppTabParamList | keyof AppStackParamList;
  component: React.FC<any>;
  options?: BottomTabNavigationOptions;
};

interface GenerateNavigatorI {
  initialRouteName: keyof AppStackParamList | keyof AppTabParamList;
  paths: ScreenType[];
  navType: 'stack' | 'tab';
}

const GenerateNavigator: React.FC<GenerateNavigatorI> = props => {
  const {initialRouteName, navType, paths} = props;

  if (navType === 'stack') {
    return (
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{headerShown: false}}>
        {paths.map((data, i) => (
          <Stack.Screen
            key={i}
            component={data.component}
            name={data.name}
            options={() => ({headerShown: false})}
          />
        ))}
      </Stack.Navigator>
    );
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.WHITE_10,
          height: verticalScale(80),
          paddingVertical: verticalScale(12),
        },
      }}
      initialRouteName={initialRouteName}>
      {paths.map((data, i) => (
        <Tab.Screen
          key={i}
          component={data.component}
          name={data.name}
          options={() => ({...data?.options, headerShown: false})}
        />
      ))}
    </Tab.Navigator>
  );
};

export default GenerateNavigator;
