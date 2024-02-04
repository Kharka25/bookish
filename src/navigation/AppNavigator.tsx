/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CartIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CategoryIcon from 'react-native-vector-icons/FontAwesome6';
import HomeIcon from 'react-native-vector-icons/Octicons';
import ProfileIcon from 'react-native-vector-icons/FontAwesome6';

import {AppStackParamList} from '@models/navigation';
import {Cart, Category, Home, Profile} from '@screens';
import {Colors} from '@constants/colors';
import {verticalScale} from '@utils/responsiveDesign';

const {Navigator, Screen} = createBottomTabNavigator<AppStackParamList>();

const AppNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.WHITE_10,
          height: verticalScale(80),
          paddingVertical: verticalScale(12),
        },
      }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: props => {
            return (
              <HomeIcon name="home" size={props.size} color={props.color} />
            );
          },
        }}
      />
      <Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: props => {
            return (
              <CategoryIcon
                name="file-lines"
                size={props.size}
                color={props.color}
              />
            );
          },
        }}
      />
      <Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: props => {
            return (
              <CartIcon name="cart-outline" size={28} color={props.color} />
            );
          },
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: props => {
            return (
              <ProfileIcon name="user" size={props.size} color={props.color} />
            );
          },
        }}
      />
    </Navigator>
  );
};

export default AppNavigator;
