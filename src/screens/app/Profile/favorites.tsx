import React from 'react';
import {
  Image,
  FlatList,
  ListRenderItem,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome6';

import {BackIcon, Header} from '@components';
import {MockFavoritesData} from '@constants/data';

import {
  fontScale,
  globalStyles,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';
import {FavoritesBooksI} from '@models/books';
import {Colors} from '@constants/colors';

const Favorites: React.FC = () => {
  const renderEmptyList: React.FC = () => {
    return (
      <View>
        <Text>You haven't added any book to you wishlist</Text>
      </View>
    );
  };

  const renderItem: ListRenderItem<FavoritesBooksI> = ({item}) => {
    return (
      <View>
        <View
          key={item.id}
          style={[
            globalStyles.phSm,
            globalStyles.mbSm,
            styles.renderItemContainer,
          ]}>
          <View style={styles.renderItemInnerFlex}>
            <Image source={item.img} style={styles.bookImg} />
            <View>
              <Text style={styles.bookTitle}>{item.title}</Text>
              <Text style={styles.bookPrice}>{item.price}</Text>
            </View>
          </View>
          <Icon name="heart" size={16} color={Colors.PRIMARY} solid />
        </View>
        <View style={styles.bottomBorder} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        containerStyle={[
          globalStyles.headerStyle,
          globalStyles.mbMD,
          globalStyles.phSm,
        ]}
        leftIcon={<BackIcon size={18} />}
        title="Your Favorites"
      />
      <FlatList
        contentContainerStyle={styles.container}
        data={MockFavoritesData}
        ListEmptyComponent={renderEmptyList}
        renderItem={renderItem}
        scrollEnabled={MockFavoritesData.length > 5}
      />
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  bookImg: {
    borderRadius: horizontalScale(8),
    height: verticalScale(50),
    marginRight: horizontalScale(14),
    resizeMode: 'cover',
    width: horizontalScale(50),
  },
  bookPrice: {
    color: Colors.PRIMARY,
    fontSize: fontScale(15),
    fontWeight: '500',
  },
  bookTitle: {
    fontSize: fontScale(17),
    fontWeight: '500',
  },
  bottomBorder: {
    borderBottomColor: Colors.GRAY_20,
    borderBottomWidth: 1,
    marginBottom: verticalScale(16),
  },
  renderItemContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  renderItemInnerFlex: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default Favorites;
