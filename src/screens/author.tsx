import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface Props {}

const Author: React.FC<Props> = props => {
  const {} = props;
  return (
    <View style={styles.container}>
      <Text>author</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Author;
