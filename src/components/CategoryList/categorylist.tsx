import React, {Dispatch, SetStateAction, useState} from 'react';
import {
  FlatList,
  ListRenderItem,
  Pressable,
  StyleSheet,
  View,
  ViewProps,
} from 'react-native';

import {Text} from '@components';
import {Colors} from '@constants/colors';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';

export interface CategoryI {
  id: number;
  title: string;
}

interface Props extends ViewProps {
  categories: CategoryI[];
  onSelect?: Dispatch<SetStateAction<string>>;
}

const CategoryList: React.FC<Props> = props => {
  const {categories, onSelect, style} = props;

  const [selectedCategory, setSelectedCategory] = useState<number | null>(0);

  function handleCategorySelect(item: CategoryI, index: number) {
    setSelectedCategory(index);
    onSelect && onSelect(item?.title);
  }

  const renderItem: ListRenderItem<CategoryI> = ({item, index}) => {
    return (
      <View key={item.id + index} style={style}>
        <Pressable
          key={index + item.id}
          onPress={() => handleCategorySelect(item, index)}
          style={[
            styles.categoryContainer,
            selectedCategory === index ? styles.selectedCategoryContainer : {},
          ]}>
          <Text
            content={item.title}
            fontSize={fontScale(15)}
            color={
              selectedCategory === index
                ? styles.selectedCategoryText.color
                : styles.categoryText.color
            }
            style={[
              styles.categoryText,
              selectedCategory === index ? styles.selectedCategoryText : {},
            ]}
          />
        </Pressable>
      </View>
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => String(item?.id) + index}
      contentContainerStyle={{gap: horizontalScale(15)}}
      horizontal
      data={categories}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
  categoryText: {
    color: Colors.GRAY_40,
    lineHeight: fontScale(25),
  },
  selectedCategoryText: {
    color: Colors.BLACK,
  },
  categoryContainer: {
    alignItems: 'center',
    paddingVertical: verticalScale(4),
  },
  selectedCategoryContainer: {
    alignItems: 'center',
    backgroundColor: Colors.GRAY_20,
    borderRadius: horizontalScale(12),
    paddingHorizontal: horizontalScale(10),
  },
});

export default React.memo(CategoryList);
