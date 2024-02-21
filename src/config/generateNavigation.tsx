import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppStackParamList} from '@models/navigation';
import {Colors} from '@constants/colors';
import {verticalScale} from '@utils/responsiveDesign';

const Stack = createNativeStackNavigator<AppStackParamList>();
const Tab = createBottomTabNavigator<AppStackParamList>();

export type ScreenType = {
  name: keyof AppStackParamList;
  component: React.FC<any>;
  options?: BottomTabNavigationOptions;
};

interface GenerateNavigatorI {
  initialRouteName: keyof AppStackParamList;
  paths: ScreenType[];
  navType: 'stack' | 'tab';
}

const GenerateNavigator: React.FC<GenerateNavigatorI> = props => {
  const {initialRouteName, navType, paths} = props;

  let nonGestureScreens = 'Status' || 'Verification';

  if (navType === 'stack') {
    return (
      <Stack.Navigator initialRouteName={initialRouteName}>
        {paths.map((data, i) => (
          <Stack.Screen
            key={i}
            component={data.component}
            name={data.name}
            options={() => ({
              headerShown: false,
              gestureEnabled: data.name !== nonGestureScreens ? true : false,
              animation:
                data.name === 'Search' ? 'slide_from_bottom' : 'default',
            })}
          />
        ))}
      </Stack.Navigator>
    );
  }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.WHITE_10,
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
