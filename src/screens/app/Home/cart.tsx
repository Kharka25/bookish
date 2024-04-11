/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CartIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Header, NotificationIcon, Text} from '@components';
import {useAppNavigation} from '@models/navigation';
import {fontScale, globalStyles, verticalScale} from '@utils/responsiveDesign';
import {Colors} from '@constants/colors';

const Cart: React.FC = () => {
  const navigation = useAppNavigation();

  const renderEmptyList: React.FC = () => {
    return (
      <View style={styles.emptyListContainer}>
        <CartIcon
          name="cart-outline"
          size={fontScale(200)}
          color={Colors.GRAY_20}
        />
        <Text
          content="Your cart is empty"
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
    <SafeAreaView style={styles.container}>
      <View style={globalStyles.phSm}>
        <Header
          containerStyle={globalStyles.headerStyle}
          rightIcon={
            <NotificationIcon
              handleViewNotifications={() =>
                navigation.navigate('Notification')
              }
            />
          }
          title="Cart"
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
    flex: 1,
  },
  emptyListText: {
    marginTop: verticalScale(10),
  },
});

export default Cart;
