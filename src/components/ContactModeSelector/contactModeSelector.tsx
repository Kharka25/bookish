import React, {useState, Dispatch, SetStateAction} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageSourcePropType,
  Pressable,
  Image,
} from 'react-native';

import {
  fontScale,
  globalStyles,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';
import {Colors} from '@constants/colors';
import {ResetMode} from '@models/navigation';

interface ContactModeI {
  iconActive: ImageSourcePropType;
  iconInactive: ImageSourcePropType;
  subText: string;
  title: string;
}

interface Props<T> {
  data?: ContactModeI[];
  onSelect?: Dispatch<SetStateAction<ResetMode> | any>;
  renderItem?: (item: T) => JSX.Element; //Should be removed if no usage for it occurs
}

const ContactModeSelector = <T extends any>({data, onSelect}: Props<T>) => {
  const [selectedCard, setSelectedCard] = useState<number | null>(0);

  function handleSelect(item: ContactModeI, index: number) {
    setSelectedCard(index);
    onSelect && onSelect(item?.title);
  }

  return (
    <View
      style={[styles.container, globalStyles.mbLg, globalStyles.mtSm]}
      testID="contact-mode-selector">
      {data?.map((item, index) => {
        return (
          <Pressable
            onPress={() => handleSelect(item, index)}
            key={index}
            testID="mode-card">
            <View
              style={[
                styles.card,
                selectedCard === index ? styles.selectedCard : {},
              ]}>
              <View
                style={[
                  styles.iconContainer,
                  selectedCard !== index ? styles.iconInactiveContainer : {},
                ]}>
                <Image
                  source={
                    selectedCard === index ? item.iconActive : item.iconInactive
                  }
                  style={styles.icon}
                />
              </View>
              <Text style={styles.modeText}>{item.title}</Text>
              <Text style={styles.modeSubtext}>{item.subText}</Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: horizontalScale(40),
  },
  card: {
    backgroundColor: Colors.BACKGROUND_GRAY,
    borderRadius: horizontalScale(8),
    height: verticalScale(150),
    padding: horizontalScale(16),
    width: '115%',
  },
  icon: {
    height: verticalScale(35),
    resizeMode: 'contain',
    width: horizontalScale(35),
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: 'tranparent',
    borderRadius: horizontalScale(50),
    borderWidth: 0,
    height: '45%',
    marginBottom: verticalScale(20),
    padding: horizontalScale(10),
    width: '40%',
  },
  iconInactiveContainer: {
    backgroundColor: '#ffffff',
    borderRadius: horizontalScale(50),
  },
  modeSubtext: {
    color: Colors.GRAY_50,
    fontSize: fontScale(14),
    fontWeight: '500',
    lineHeight: fontScale(19),
  },
  modeText: {
    color: Colors.BLACK,
    fontSize: fontScale(14),
    fontWeight: '600',
    lineHeight: fontScale(19),
  },
  selectedCard: {
    borderColor: Colors.PRIMARY,
    borderWidth: 0.85,
    height: verticalScale(150),
  },
});

export default ContactModeSelector;
