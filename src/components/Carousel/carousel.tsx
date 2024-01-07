/* eslint-disable react-hooks/exhaustive-deps */

import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Text,
  View,
  Image,
  ImageSourcePropType,
  ListRenderItem,
} from 'react-native';

import {CarouselData} from '@constants/data';
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
  const scrollX = useRef(new Animated.Value(0)).current;

  const renderItem: ListRenderItem<CarouseDataI> = ({item}) => {
    return (
      <View key={item.id} testID="scroll-component">
        <Image source={item.img} />
        <Text>{item.title}</Text>
        <Text>{item.subtitle}</Text>
      </View>
    );
  };

  const getItemLayout = (index: any) => ({
    length: width,
    offset: width * index,
    index: index,
  });

  const renderScrollIndicator = () => {
    return data?.map((dot, index) => {
      const inputRange = [
        (index - 1) * width,
        index * width,
        (index + 1) * width,
      ];

      const dotWidth = scrollX.interpolate({
        inputRange,
        outputRange: [10, 10, 10],
        extrapolate: 'clamp',
      });

      const opacity = scrollX.interpolate({
        inputRange,
        outputRange: [0.3, 1, 0.3],
        extrapolate: 'clamp',
      });

      return (
        <Animated.View
          key={index.toString()}
          testID="scroll-indicator"
          style={(styles.dot, [{opacity: opacity, width: dotWidth}])}
        />
      );
    });
  };

  useEffect(() => {
    let interval = setInterval(() => {
      setActveIdx(prev => prev + 1);
      if (!carouselRef.current) {
        return;
      }
      if (activeIdx < data!.length - 1) {
        carouselRef.current.scrollToIndex({
          index: activeIdx + 1,
          animation: true,
        });
      } else {
        setActveIdx(0);
        carouselRef.current.scrollToIndex({
          index: 0,
          animation: true,
        });
      }
      clearInterval(interval);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIdx]);

  return (
    <View style={styles.container} testID="carousel">
      <FlatList
        getItemLayout={getItemLayout}
        horizontal
        data={CarouselData}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        testID="listItem"
      />
      <View testID="scroll-container">{renderScrollIndicator()}</View>
    </View>
  );
};

export default React.memo(Carousel);
