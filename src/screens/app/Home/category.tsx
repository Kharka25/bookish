/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {
  BookCard,
  CategoryList,
  Header,
  NotificationIcon,
  SearchIcon,
} from '@components';
import {
  fontScale,
  globalStyles,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';
import {useAppNavigation} from '@models/navigation';
import {CategoryListData, MockBooksListData} from '@constants/data';
import {Colors} from '@constants/colors';

const Category: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    CategoryListData[0].title,
  );
  const navigation = useAppNavigation();

  return (
    <SafeAreaView style={styles.container}>
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
          title="Category"
        />
        <CategoryList
          categories={CategoryListData}
          onSelect={setSelectedCategory}
        />
        <Text style={[styles.selectedCategoryText, globalStyles.mtSm]}>
          {selectedCategory}
        </Text>
        <FlatList
          keyExtractor={(item, index) => String(item.id) + index}
          contentContainerStyle={{
            gap: horizontalScale(20),
            marginTop: verticalScale(15),
            paddingBottom: verticalScale(230),
          }}
          data={MockBooksListData}
          renderItem={({item, index}) => (
            <BookCard
              img={item.img}
              price={item.price}
              style={[
                index % 2 === 0 ? {marginRight: '8%'} : {},
                {height: verticalScale(220), width: '46%'},
              ]}
              title={item.title}
              key={index + item.id}
            />
          )}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  selectedCategoryText: {
    color: Colors.PRIMARY,
    fontSize: fontScale(24),
    fontWeight: '500',
    marginBottom: verticalScale(7),
  },
});

export default Category;
