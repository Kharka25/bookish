import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useAppNavigation} from '@models/navigation';
import useAuth from '@store/auth/hooks';

interface Props {}

const Profile: React.FC<Props> = props => {
  const {} = props;
  const navigation = useAppNavigation();
  const {authState} = useAuth();
  const {profile} = authState;

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={() => navigation.navigate('Address')}>
        {profile?.username}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Profile;
