import React from 'react';
import {View, Text} from 'react-native';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <View testID="App-screen">
      <Text>App Screen</Text>
    </View>
  );
};

export default App;
