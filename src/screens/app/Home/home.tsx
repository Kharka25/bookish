/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Header, Link, NotificationIcon, SearchIcon, Text} from '@components';
import {AdsList, AuthorList, TopOfTheWeek, TopVendors} from '@ui';
import {AppStackParamList, useAppNavigation} from '@models/navigation';
import {
  MockPromoData,
  MockTopOfTheWeekData,
  MockTopVendorsData,
  MockAuthorsData,
} from '@constants/data';

import {fontScale, globalStyles, verticalScale} from '@utils/responsiveDesign';
import {Colors} from '@constants/colors';

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'Home'>;

const Home: React.FC<ScreenProps> = () => {
  const navigation = useAppNavigation();

  function rowHeading(
    headingText: string,
    linkRoute: any,
    linkTitle = 'See all',
  ) {
    return (
      <View style={[styles.flexView, globalStyles.mbSm]}>
        <Text content={headingText} fontSize={fontScale(17)} fontWeight="600" />
        <Link
          onPress={() => navigation.navigate(linkRoute)}
          title={linkTitle}
          titleStyle={styles.linkText}
        />
      </View>
    );
  }

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
          <AdsList data={MockPromoData} />
          {rowHeading('Top of the Week', 'Vendors')}
          <TopOfTheWeek data={MockTopOfTheWeekData} />
          {rowHeading('Best Vendors', 'Vendors')}
          <TopVendors data={MockTopVendorsData} />
          {rowHeading('Authors', 'Authors')}
          <AuthorList data={MockAuthorsData} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
