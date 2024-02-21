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
  AuthorProfile,
  BackIcon,
  CategoryList,
  Header,
  SearchIcon,
  Text,
} from '@components';
import {AuthorsCategoryListData, MockAuthorsData} from '@constants/data';
import {useAppNavigation} from '@models/navigation';
import {AuthorProfileI} from '@models/auth';

import {Colors} from '@constants/colors';
import {
  fontScale,
  globalStyles,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';

const Author: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    AuthorsCategoryListData[0].title,
  );
  const navigation = useAppNavigation();

  const renderAuthors: ListRenderItem<AuthorProfileI> = ({item, index}) => {
    return (
      <Pressable>
        <AuthorProfile
          key={index}
          flex
          name={item.name}
          nameStyle={{maxWidth: '100%'}}
          img={item.img}
          imgStyle={styles.imgStyle}
          type={item.type}
          wrap
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
          title="Authors"
        />
        <Text
          content={selectedCategory}
          color={Colors.PRIMARY}
          fontSize={fontScale(20)}
          fontWeight="500"
          style={[globalStyles.mbSm]}
        />
        <CategoryList
          categories={AuthorsCategoryListData}
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
          data={MockAuthorsData}
          renderItem={renderAuthors}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  imgStyle: {
    height: verticalScale(62),
    width: horizontalScale(64),
  },
});

export default Author;
