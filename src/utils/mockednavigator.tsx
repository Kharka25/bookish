import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const {Navigator, Screen} = createNativeStackNavigator();

interface MockedNavigatorT {
  component: JSX.Element | any;
  params?: object;
}

const MockedNavigator: React.FC<MockedNavigatorT> = ({
  component,
  params = {},
}) => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="MockedScreen"
          component={component}
          initialParams={params}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default MockedNavigator;
