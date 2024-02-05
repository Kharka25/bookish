import React from 'react';
import CartIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CategoryIcon from 'react-native-vector-icons/FontAwesome6';
import HomeIcon from 'react-native-vector-icons/Octicons';
import ProfileIcon from 'react-native-vector-icons/FontAwesome6';

import {Cart, Category, Home, Profile} from '@screens';
import GenerateNavigator, {ScreenType} from '@config/generateNavigation';
import {Colors} from '@constants/colors';

const tabs: ScreenType[] = [
  {
    name: 'Home',
    component: Home,
    options: {
      tabBarIcon: props => {
        return <HomeIcon name="home" size={props.size} color={props.color} />;
      },
    },
  },
  {
    name: 'Category',
    component: Category,
    options: {
      tabBarIcon: props => {
        return (
          <CategoryIcon
            name="file-lines"
            size={props.size}
            color={props.color}
          />
        );
      },
    },
  },
  {
    name: 'Cart',
    component: Cart,
    options: {
      tabBarIcon: props => {
        return <CartIcon name="cart-outline" size={28} color={props.color} />;
      },
      tabBarBadge: 3,
      tabBarBadgeStyle: {
        backgroundColor: Colors.PRIMARY,
      },
    },
  },
  {
    name: 'Profile',
    component: Profile,
    options: {
      tabBarIcon: props => {
        return (
          <ProfileIcon name="user" size={props.size} color={props.color} />
        );
      },
    },
  },
];

const TabNavigator: React.FC = () => {
  return (
    <GenerateNavigator navType="tab" paths={tabs} initialRouteName="Home" />
  );
};

const stacks: ScreenType[] = [
  {
    name: 'TabNavigator',
    component: TabNavigator,
  },
];

const AppNavigator = () => {
  return (
    <GenerateNavigator navType="stack" paths={stacks} initialRouteName="Home" />
  );
};

export default AppNavigator;
