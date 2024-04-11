/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  FlatList,
  ListRenderItem,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {
  BackIcon,
  CategoryList,
  Header,
  SearchIcon,
  Text,
  VendorCard,
} from '@components';
import {useAppNavigation} from '@models/navigation';
import {VendorCategoryListData, MockTopVendorsData} from '@constants/data';
import {VendorCardProps} from 'src/components/VendorCard/vendorcard';

import {
  fontScale,
  globalStyles,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';
import {Colors} from '@constants/colors';

const Vendors: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    VendorCategoryListData[0].title,
  );

  const navigation = useAppNavigation();

  const renderItems: ListRenderItem<VendorCardProps> = ({item, index}) => {
    return (
      <Pressable
        style={[
          index % 3 === 0 + 1 ? {marginHorizontal: horizontalScale(12)} : {},
        ]}>
        <VendorCard
          style={[{height: verticalScale(120), width: horizontalScale(120)}]}
          img={item.img}
          key={index}
          id={item.id}
          name={item.name}
        />
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={globalStyles.phSm}>
        <Header
          leftIcon={<BackIcon />}
          rightIcon={
            <SearchIcon handleSearch={() => navigation.navigate('Search')} />
          }
          containerStyle={[globalStyles.headerStyle, globalStyles.mbSm]}
          title="Vendors"
        />
        <Text
          content={selectedCategory}
          color={Colors.PRIMARY}
          fontSize={fontScale(20)}
          fontWeight="500"
          style={[globalStyles.mbSm]}
        />
        <CategoryList
          categories={VendorCategoryListData}
          onSelect={setSelectedCategory}
          style={{paddingBottom: verticalScale(10)}}
        />
        <FlatList
          keyExtractor={(item, index) => String(item?.id) + index}
          contentContainerStyle={{
            gap: horizontalScale(10),
            height: '100%',
            marginBottom: verticalScale(5),
            marginTop: verticalScale(15),
          }}
          data={MockTopVendorsData}
          numColumns={3}
          renderItem={renderItems}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Vendors;
