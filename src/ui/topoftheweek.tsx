import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';

import {BookCard} from '@components';
import {BookItemI} from 'src/components/BookCard/bookcard';
import {horizontalScale, verticalScale} from '@utils/responsiveDesign';
import styles from './styles';

interface Props {
  data: any[];
}

const TopOfTheWeek: React.FC<Props> = props => {
  const {data} = props;

  const renderTopOfTheWeek: ListRenderItem<BookItemI> = ({item, index}) => {
    return (
      <BookCard
        key={index + item.id!}
        img={item.img}
        price={item.price}
        title={item.title}
        style={{
          height: verticalScale(220),
          marginBottom: verticalScale(8),
          width: horizontalScale(150),
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => String(item.id) + index}
      contentContainerStyle={[
        styles.flatlistContainer,
        {gap: horizontalScale(15)},
      ]}
      data={data}
      horizontal
      renderItem={renderTopOfTheWeek}
    />
  );
};

export default React.memo(TopOfTheWeek);
