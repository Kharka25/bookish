import React from 'react';
import {Dimensions, FlatList, ListRenderItem} from 'react-native';

import {PromoCard} from '@components';
import {horizontalScale, verticalScale} from '@utils/responsiveDesign';

interface Props {
  data: any[];
}

interface AdsItem {
  id: number;
  ctaText: string;
  img: any;
  mainText: string;
  subText: string;
}

const WIDTH = Dimensions.get('window').width;

const AdsList: React.FC<Props> = props => {
  const {data} = props;

  const renderAdsItem: ListRenderItem<AdsItem> = ({item, index}) => {
    return (
      <PromoCard
        key={index + item.id}
        ctaText={item.ctaText}
        img={item.img}
        mainText={item.mainText}
        subText={item.subText}
        style={{
          marginBottom: verticalScale(27),
          width: WIDTH - horizontalScale(37),
        }}
      />
    );
  };

  return <FlatList data={data} horizontal renderItem={renderAdsItem} />;
};

export default React.memo(AdsList);
