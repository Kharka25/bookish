import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AuthNavigator} from '@navigation';

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
