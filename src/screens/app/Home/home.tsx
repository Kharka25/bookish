import React from 'react';
import {FlatList, StyleSheet, View, ListRenderItem} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {
  BookCard,
  Carousel,
  Header,
  Link,
  NotificationIcon,
  Paginator,
  SearchIcon,
  Text,
  VendorCard,
} from '@components';
import {AppStackParamList, useAppNavigation} from '@models/navigation';
import {VendorCardProps} from 'src/components/VendorCard/vendorcard';
import {MockTopOfTheWeekData, MockTopVendorsData} from '@constants/data';

import {
  fontScale,
  globalStyles,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';
import {Colors} from '@constants/colors';

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'Home'>;

const Home: React.FC<ScreenProps> = () => {
  const navigation = useAppNavigation();

  const renderTopVendors: ListRenderItem<VendorCardProps> = ({item, index}) => {
    return <VendorCard img={item.img} key={index} id={item.id} />;
  };

  return (
    <SafeAreaView>
      <View style={globalStyles.phSm}>
        <Header
          leftIcon={
            <SearchIcon handleSearch={() => navigation.navigate('Search')} />
          }
          rightIcon={
            <NotificationIcon
              handleViewNotifications={() =>
                navigation.navigate('Notification')
              }
            />
          }
          containerStyle={[globalStyles.headerStyle, globalStyles.mbSm]}
          title="Home"
        />
        <View style={[styles.flexView, globalStyles.mbSm]}>
          <Text
            content={'Top of the Week'}
            fontSize={fontScale(17)}
            fontWeight="600"
          />
          <Link
            onPress={() => navigation.navigate('Vendors')}
            title="See all"
            titleStyle={styles.linkText}
          />
        </View>
        <FlatList
          keyExtractor={(item, index) => String(item.id) + index}
          data={MockTopOfTheWeekData}
          horizontal
          contentContainerStyle={{
            gap: horizontalScale(15),
            marginBottom: verticalScale(5),
          }}
          renderItem={({item, index}) => (
            <BookCard
              key={index + item.id}
              img={item.img}
              price={item.price}
              title={item.title}
              style={{
                height: verticalScale(220),
                marginBottom: verticalScale(8),
                width: horizontalScale(150),
              }}
            />
          )}
        />
        <View style={[styles.flexView, globalStyles.mtSm, globalStyles.mbSm]}>
          <Text
            content={'Best Vendors'}
            fontSize={fontScale(17)}
            fontWeight="600"
          />
          <Link
            onPress={() => navigation.navigate('Vendors')}
            title="See all"
            titleStyle={styles.linkText}
          />
        </View>
        <FlatList
          keyExtractor={(item, index) => String(item?.id) + index}
          contentContainerStyle={{
            gap: horizontalScale(10),
            marginBottom: verticalScale(5),
          }}
          data={MockTopVendorsData}
          horizontal
          renderItem={renderTopVendors}
        />
        <View style={[styles.flexView, globalStyles.mbSm]}>
          <Text content={'Authors'} fontSize={fontScale(17)} fontWeight="600" />
          <Link
            onPress={() => navigation.navigate('Authors')}
            title="See all"
            titleStyle={styles.linkText}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  headerStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  flexView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  linkText: {
    color: Colors.PRIMARY,
    fontWeight: '500',
  },
});

export default Home;
