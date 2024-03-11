/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  ListRenderItem,
  ScrollView,
  Pressable,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {
  AuthorProfile,
  BookCard,
  // Carousel,
  Header,
  Link,
  NotificationIcon,
  // Paginator,
  PromoCard,
  SearchIcon,
  Text,
  VendorCard,
} from '@components';
import {AuthorProfileI} from '@models/auth';
import {AppStackParamList, useAppNavigation} from '@models/navigation';
import {VendorCardProps} from 'src/components/VendorCard/vendorcard';
import {
  MockPromoData,
  MockTopOfTheWeekData,
  MockTopVendorsData,
  MockAuthorsData,
} from '@constants/data';

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

  const renderAuthors: ListRenderItem<AuthorProfileI> = ({item, index}) => {
    return (
      <Pressable
        onPress={() => navigation.navigate('Author', {authorInfo: item})}>
        <AuthorProfile
          key={index}
          name={item.name}
          img={item.img}
          type={item.type}
        />
      </Pressable>
    );
  };

  const renderPromoCard = () => {
    return (
      <View>
        {MockPromoData.map((item, index) => {
          return (
            <PromoCard
              key={index + item.id}
              ctaText={item.ctaText}
              img={item.img}
              mainText={item.mainText}
              subText={item.subText}
              style={{marginBottom: verticalScale(27)}}
            />
          );
        })}
        {/* <Paginator data={MockPromoData} /> */}
      </View>
    );
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
          containerStyle={[globalStyles.headerStyle, globalStyles.mbMD]}
          title="Homes"
        />
        <ScrollView
          contentContainerStyle={{paddingBottom: '20%'}}
          showsVerticalScrollIndicator={false}>
          {renderPromoCard()}
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
              marginTop: verticalScale(10),
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
          <View style={[styles.flexView, globalStyles.mbSm]}>
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
              marginTop: verticalScale(10),
            }}
            data={MockTopVendorsData}
            horizontal
            renderItem={renderTopVendors}
          />
          <View style={[styles.flexView, globalStyles.mbSm]}>
            <Text
              content={'Authors'}
              fontSize={fontScale(17)}
              fontWeight="600"
            />
            <Link
              onPress={() => navigation.navigate('Authors')}
              title="See all"
              titleStyle={styles.linkText}
            />
          </View>
          <FlatList
            keyExtractor={(item, index) => String(item?.id) + index}
            contentContainerStyle={{
              gap: horizontalScale(20),
              marginBottom: verticalScale(5),
              marginTop: verticalScale(10),
            }}
            data={MockAuthorsData.slice(0, 5)}
            horizontal
            renderItem={renderAuthors}
          />
        </ScrollView>
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
  promoCard: {
    height: verticalScale(160),
    marginVertical: verticalScale(16),
    width: '100%',
  },
  promoImg: {
    height: '100%',
    width: '100%',
  },
});

export default Home;
