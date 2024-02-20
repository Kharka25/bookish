import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  View,
  Image,
  ImageSourcePropType,
  ListRenderItem,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

import {Paginator, Text} from '@components';
import styles from './styles';

interface CarouseDataI {
  id?: number;
  img: ImageSourcePropType | any;
  subtitle?: string;
  title?: string;
}

interface Props {
  data: CarouseDataI[];
}

const {width} = Dimensions.get('window');

const Carousel: React.FC<Props> = ({data}) => {
  const [activeIdx, setActveIdx] = useState<number>(0);
  const carouselRef = useRef<any>();
  // const scrollX = useRef(new Animated.Value(0)).current;

  const renderItem: ListRenderItem<CarouseDataI> = ({item}) => {
    return (
      <View
        key={item.id}
        style={styles.carouselContainer}
        testID="scroll-component">
        <Image source={item.img} style={styles.carouseImg} />
        <Text content={item.title} style={styles.carouseTitle} />
        <Text content={item.subtitle} style={styles.carouselSubTitle} />
      </View>
    );
  };

  // To enhance performance for rendering carousel image
  const getItemLayout = (_data: any, index: any) => ({
    length: width,
    offset: width * index,
    index,
  });

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPos = event.nativeEvent.contentOffset.x;
    const index = scrollPos / width;
    setActveIdx(index);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const renderScrollIndicator = () => {
    return data?.map((dot, index) => {
      return (
        <View
          testID="scroll-indicator"
          key={index}
          style={[
            styles.carouselScrollItemActive,
            activeIdx !== index ? styles.carouselScrollItemInactive : {},
          ]}
        />
      );
    });
  };

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     setActveIdx(prev => prev + 1);
  //     if (!carouselRef.current) {
  //       return;
  //     }
  //     if (activeIdx < data!.length - 1) {
  //       carouselRef.current.scrollToIndex({
  //         index: activeIdx + 1,
  //         animation: true,
  //       });
  //     } else {
  //       setActveIdx(0);
  //       carouselRef.current.scrollToIndex({
  //         index: 0,
  //         animation: true,
  //       });
  //     }
  //     clearInterval(interval);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [activeIdx]);
  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIdx === data.length - 1) {
        carouselRef.current.scrollToIndex({
          index: 0,
          animation: true,
        });
      } else {
        carouselRef.current.scrollToIndex({
          index: activeIdx + 1,
          animation: true,
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  });
  return (
    <View testID="carousel">
      <FlatList
        data={data}
        getItemLayout={getItemLayout}
        horizontal
        keyExtractor={(item, index) => String(item.id) + index}
        onScroll={handleScroll}
        pagingEnabled
        ref={carouselRef}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        testID="listItem"
      />
      <Paginator data={data} />
    </View>
  );
};

export default React.memo(Carousel);
