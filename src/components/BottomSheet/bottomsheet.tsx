/* eslint-disable curly */
import React, {
  ReactNode,
  createRef,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import {Dimensions, Modal, Pressable, StyleSheet, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {horizontalScale} from '@utils/responsiveDesign';
import {Colors} from '@constants/colors';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

interface Props {
  children?: ReactNode;
  scrollable?: boolean;
}

export type BottomSheetRefProps = {
  hide: () => void;
  show: () => void;
  scrollTo: (scrollToIdx: number) => void;
};

export const bottomSheetRef = createRef<BottomSheetRefProps>();

const BottomSheet = forwardRef<BottomSheetRefProps, Props>(
  ({children, scrollable = true}, ref) => {
    const [openSheet, setOpenSheet] = useState(false);
    const MAX_SHEET_HEIGHT = -SCREEN_HEIGHT + 100;
    const sheetHeight = useSharedValue(0);

    const sheetContext = useSharedValue({y: 0});

    const scrollTo = useCallback(
      (scrollIdx: number) => {
        'worklet';
        sheetHeight.value = withSpring(scrollIdx, {damping: 50});
      },
      [sheetHeight],
    );

    const gesture = Gesture.Pan()
      .onStart(() => {
        sheetContext.value = {y: sheetHeight.value};
      })
      .onUpdate(event => {
        if (!scrollable) return;

        sheetHeight.value = event.translationY + sheetContext.value.y;
        sheetHeight.value = Math.max(sheetHeight.value, MAX_SHEET_HEIGHT); // sets the max height for the sheet;
      })
      .onEnd(() => {
        if (sheetHeight.value > -SCREEN_HEIGHT / 3 && scrollable) {
          scrollTo(0);
          runOnJS(setOpenSheet)(false);
        } else if (sheetHeight.value < -SCREEN_HEIGHT / 1.5) {
          scrollTo(MAX_SHEET_HEIGHT);
        }
      });

    const sheetStyle = useAnimatedStyle(() => {
      const borderRadius = interpolate(
        sheetHeight.value,
        [MAX_SHEET_HEIGHT + 50, MAX_SHEET_HEIGHT],
        [25, 5],
        Extrapolation.CLAMP,
      );
      return {
        borderRadius,
        transform: [{translateY: sheetHeight.value}],
      };
    });

    useImperativeHandle(
      ref,
      () => ({
        hide: () => {
          setOpenSheet(false);
          scrollTo(0);
        },
        show: () => {
          setOpenSheet(true);
          scrollTo(-SCREEN_HEIGHT / 3.5);
        },
        scrollTo,
      }),
      [scrollTo],
    );

    return (
      <Modal animationType="slide" transparent visible={openSheet}>
        <Pressable
          onPress={() => bottomSheetRef.current?.hide()}
          style={styles.modalBackground}>
          <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.modalInnerContainer, sheetStyle]}>
              <View style={styles.scrollBar} />
              {children && children}
            </Animated.View>
          </GestureDetector>
        </Pressable>
      </Modal>
    );
  },
);

const styles = StyleSheet.create({
  container: {},
  modalBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    flex: 1,
  },
  modalInnerContainer: {
    backgroundColor: Colors.WHITE,
    borderRadius: horizontalScale(13),
    height: SCREEN_HEIGHT,
    paddingHorizontal: '4%',
    position: 'absolute',
    top: SCREEN_HEIGHT,
    width: '100%',
  },
  scrollBar: {
    alignSelf: 'center',
    backgroundColor: Colors.GRAY_40,
    borderRadius: horizontalScale(4),
    height: '0.5%',
    marginVertical: '4%',
    width: '25%',
  },
});

export default React.memo(BottomSheet);
