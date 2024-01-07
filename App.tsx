import React from 'react';
import {View, Text} from 'react-native';

import {Button, Carousel} from '@components';
import {CarouselData} from '@constants/data';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <View testID="App-screen">
      <Text>Skip</Text>
      <Carousel data={CarouselData} />
      <Button label="Get Started" />
      <Button label="Sign in" />
    </View>
  );
};

export default App;
