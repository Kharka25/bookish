import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';

import {VendorCard} from '@components';
import {VendorCardProps} from 'src/components/VendorCard/vendorcard';

import styles from './styles';

interface Props {
  data: VendorCardProps[];
}

const TopVendors: React.FC<Props> = props => {
  const {data} = props;

  const renderTopVendors: ListRenderItem<VendorCardProps> = ({item, index}) => {
    return <VendorCard img={item.img} key={index} id={item.id} />;
  };

  return (
    <FlatList
      contentContainerStyle={styles.flatlistContainer}
      data={data.slice(0, 5)}
      horizontal
      renderItem={renderTopVendors}
    />
  );
};

export default React.memo(TopVendors);
