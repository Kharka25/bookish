import React from 'react';
import {FlatList, Image, ListRenderItem, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {BackIcon, Header, Text} from '@components';
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
    const quantity = `${item.quantity} item${
      Number(item.quantity) > 1 ? 's' : ''
    }`;

    return (
      <View>
        <View
          key={item.id}
          style={[styles2.renderItemInnerFlex, globalStyles.mbSm]}>
          <Image source={item.img} style={styles2.bookImg} />
          <View>
            <Text
              content={item.title}
              fontSize={fontScale(17)}
              fontWeight="500"
            />
            <View
              style={[styles2.renderItemInnerFlex, {gap: verticalScale(15)}]}>
              <Text
                color={color}
                content={item.deliveryStatus}
                fontSize={fontScale(14)}
                fontWeight="500"
              />
              <Text content={quantity} color={Colors.GRAY_90} />
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
});

export default OrderHistory;
