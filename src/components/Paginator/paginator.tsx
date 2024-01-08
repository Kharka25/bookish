/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {Animated, View, StyleSheet} from 'react-native';

import {horizontalScale, verticalScale} from '@utils/responsiveDesign';
import {Colors} from '@constants/colors';

interface Props {
  data?: any[];
}

const Paginator: React.FC<Props> = props => {
  const {data} = props;
  const [activeIdx, setActiveIdx] = useState<number>(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIdx === data!.length - 1) {
        setActiveIdx(0);
      } else {
        setActiveIdx(activeIdx + 1);
      }
    }, 3200);

    return () => clearInterval(interval);
  }, [activeIdx]);

  return (
    <View
      accessible
      style={styles.container}
      role="radiogroup"
      testID="paginator">
      {data?.map((_, idx) => {
        return (
          <Animated.View
            key={idx.toString()}
            style={[styles.dot, activeIdx !== idx ? styles.dotInactive : {}]}
            testID="dot-indicator"
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    bottom: verticalScale(-30),
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
  },
  dot: {
    borderRadius: horizontalScale(30),
    backgroundColor: Colors.PRIMARY,
    height: verticalScale(10),
    marginHorizontal: horizontalScale(5),
    width: horizontalScale(9),
  },
  dotInactive: {
    backgroundColor: Colors.GRAY_20,
    height: verticalScale(8),
    width: horizontalScale(7),
  },
});

export default Paginator;
