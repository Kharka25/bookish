import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {BackIcon, Header} from '@components';
import {globalStyles} from '@utils/responsiveDesign';
// import {Colors} from '@constants/colors';

const Notification: React.FC = () => {
  return (
    <SafeAreaView>
      <View style={globalStyles.phSm}>
        <Header
          leftIcon={<BackIcon size={18} />}
          containerStyle={[globalStyles.headerStyle, globalStyles.mbMD]}
          title="Notifications"
        />
      </View>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {},
// });

export default Notification;
