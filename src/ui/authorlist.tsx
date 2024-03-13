import React from 'react';
import {FlatList, ListRenderItem, Pressable} from 'react-native';

import {AuthorProfile} from '@components';
import {AuthorProfileI} from '@models/auth';
import {useAppNavigation} from '@models/navigation';

import {horizontalScale} from '@utils/responsiveDesign';
import styles from './styles';

interface Props {
  data: AuthorProfileI[];
}

const AuthorList: React.FC<Props> = props => {
  const {data} = props;

  const navigation = useAppNavigation();

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

  return (
    <FlatList
      keyExtractor={(item, index) => String(item?.id) + index}
      contentContainerStyle={[
        styles.flatlistContainer,
        {gap: horizontalScale(20)},
      ]}
      data={data.slice(0, 5)}
      horizontal
      renderItem={renderAuthors}
    />
  );
};

export default React.memo(AuthorList);
