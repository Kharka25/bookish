import React from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {BackIcon, Header} from '@components';
import {MockOrderHistoryData} from '@constants/data';
import {OrderHistoryBooksI} from '@models/books';

import {fontScale, globalStyles, verticalScale} from '@utils/responsiveDesign';
import {Colors} from '@constants/colors';

import {styles as styles2} from './favorites';

const OrderHistory: React.FC = () => {
  const renderItem: ListRenderItem<OrderHistoryBooksI> = ({item}) => {
    const color =
      item.deliveryStatus === 'Delivered'
        ? Colors.GREEN_10
        : item.deliveryStatus === 'Cancelled'
        ? Colors.RED
        : item.deliveryStatus === 'Pending'
        ? Colors.YELLOW_10
        : Colors.BLACK;
    return (
      <View>
        <View
          key={item.id}
          style={[styles2.renderItemInnerFlex, globalStyles.mbSm]}>
          <Image source={item.img} style={styles2.bookImg} />
          <View>
            <Text style={[styles2.bookTitle, globalStyles.mbSm]}>
              {item.title}
            </Text>
            <View
              style={[styles2.renderItemInnerFlex, {gap: verticalScale(15)}]}>
              <Text style={[{color: color}, styles.deliveryStatusTxt]}>
                {item.deliveryStatus}
              </Text>
              <Text style={styles.itemQuantityText}>
                {item.quantity} item{Number(item.quantity) > 1 ? 's' : ''}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles2.bottomBorder} />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <Header
        containerStyle={[
          globalStyles.headerStyle,
          // globalStyles.mbMD,
          globalStyles.phSm,
        ]}
        leftIcon={<BackIcon size={18} />}
        title="Order History"
      />
      <FlatList
        keyExtractor={(item, index) => String(item.id) + index}
        contentContainerStyle={[globalStyles.phSm, styles.container]}
        // @ts-ignore
        data={MockOrderHistoryData}
        renderItem={renderItem}
        // scrollEnabled={MockOrderHistoryData.length > 5}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: verticalScale(24),
  },
  deliveryStatusTxt: {
    fontSize: fontScale(14),
    fontWeight: '500',
  },
  itemQuantityText: {
    color: Colors.GRAY_90,
  },
});

export default OrderHistory;
