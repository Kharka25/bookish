/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';

import {BackIcon, Header, Text} from '@components';
import {fontScale, globalStyles, verticalScale} from '@utils/responsiveDesign';
import {Colors} from '@constants/colors';

const Notification: React.FC = () => {
  const renderEmptyList: React.FC = () => {
    return (
      <View style={styles.emptyListContainer}>
        <Icon name="bell" size={fontScale(200)} color={Colors.GRAY_20} />
        <Text
          content="No Notifications"
          fontSize={fontScale(18)}
          fontWeight="500"
          style={styles.emptyListText}
        />
      </View>
    );
  };
  const renderItems: ListRenderItem<any> = ({}) => {
    return (
      <View>
        <Text content="Cart Items" />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={globalStyles.phSm}>
        <Header
          leftIcon={<BackIcon size={18} />}
          containerStyle={globalStyles.headerStyle}
          title="Notifications"
        />
        <FlatList
          contentContainerStyle={{height: '100%'}}
          data={[]}
          ListEmptyComponent={renderEmptyList}
          renderItem={renderItems}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  emptyListContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.9,
  },
  emptyListText: {
    marginTop: verticalScale(10),
  },
});

export default Notification;
