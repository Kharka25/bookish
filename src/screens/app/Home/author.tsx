/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AuthorProfile, BackIcon, Header, Text} from '@components';
import {AppStackParamList} from '@models/navigation';

import {fontScale, globalStyles, verticalScale} from '@utils/responsiveDesign';
import {Colors} from '@constants/colors';

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'Author'>;

const Author: React.FC<ScreenProps> = props => {
  const {route} = props;
  const {authorInfo} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={globalStyles.phSm}>
        <Header
          leftIcon={<BackIcon />}
          containerStyle={[globalStyles.headerStyle, globalStyles.mbMD]}
          title="Author"
        />
        <AuthorProfile
          nameStyle={{maxWidth: '100%'}}
          type={authorInfo.type}
          img={authorInfo.img}
          infoStyle={styles.authorInfoStyle}
          style={{alignSelf: 'center'}}
        />
        <Text
          content={authorInfo.name}
          fontSize={fontScale(18)}
          fontWeight="500"
          style={{marginVertical: verticalScale(8), textAlign: 'center'}}
        />
        <Text
          content="About"
          fontSize={fontScale(16)}
          fontWeight="500"
          style={{marginBottom: verticalScale(6)}}
        />
        <Text
          color={Colors.GRAY_50}
          content={authorInfo.bio || undefined}
          fontSize={fontScale(13)}
          style={[styles.bioText, globalStyles.mbSm]}
        />
        <Text
          content="Products"
          fontSize={fontScale(16)}
          fontWeight="500"
          style={{marginBottom: verticalScale(6)}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bioText: {
    letterSpacing: 0.2,
    textAlign: 'justify',
  },
  container: {},
  authorInfoStyle: {
    alignSelf: 'center',
    marginTop: verticalScale(3),
  },
});

export default Author;
