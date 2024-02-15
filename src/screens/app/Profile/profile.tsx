import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';

import {Header, UserProfile} from '@components';
import {ProfileScreensOptionsData} from '@constants/data';
import useAuth from '@store/auth/hooks';

import {Colors} from '@constants/colors';
import {
  fontScale,
  globalStyles,
  horizontalScale,
  verticalScale,
  SCREEN_HEIGHT,
} from '@utils/responsiveDesign';

const Profile: React.FC = () => {
  const navigation = useNavigation();
  const {authState} = useAuth();
  const {profile} = authState;

  const scrollEnabled = SCREEN_HEIGHT <= 300;

  return (
    <SafeAreaView>
      <Header containerStyle={styles.headerStyle} title="Profile" />
      <ScrollView
        style={styles.container}
        scrollEnabled={scrollEnabled}
        stickyHeaderIndices={[0]}>
        <View style={{backgroundColor: Colors.WHITE}}>
          <View style={styles.profileContainer}>
            <UserProfile
              profileImage={
                profile?.profileImage || require('@assets/images/user.png')
              }
              username={profile!.username}
              email={profile!.email}
            />
            <Text style={styles.logoutBtn}>Logout</Text>
          </View>
        </View>
        <View style={[globalStyles.phSm, globalStyles.mtSm]}>
          {ProfileScreensOptionsData.map((item, idx) => (
            <View
              key={item.id + idx}
              style={[styles.innerContainer, globalStyles.mbMD]}>
              <View style={styles.innerContainer}>
                <View style={styles.iconContainer}>
                  <Icon
                    name={item.icon}
                    size={16}
                    color={Colors.PRIMARY}
                    solid
                  />
                </View>
                <Pressable
                  onPress={() => navigation.navigate(item.screen as never)}>
                  <Text style={styles.screenTitleText}>{item.title}</Text>
                </Pressable>
              </View>
              <Pressable
                onPress={() => navigation.navigate(item.screen as never)}>
                <Icon
                  name="chevron-right"
                  color={Colors.GRAY_40}
                  light
                  size={14}
                />
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  headerStyle: {
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: Colors.WHITE_10,
    borderRadius: horizontalScale(50),
    height: 'auto',
    justifyContent: 'center',
    marginRight: horizontalScale(14),
    padding: horizontalScale(10),
  },
  innerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoutBtn: {
    color: Colors.RED,
    fontSize: fontScale(14),
    fontWeight: '600',
  },
  profileContainer: {
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    borderBottomColor: Colors.GRAY_20,
    borderTopColor: Colors.GRAY_20,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(24),
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(16),
  },
  screenTitleText: {
    fontSize: fontScale(16),
    fontWeight: '500',
  },
});

export default Profile;
