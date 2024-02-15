import React from 'react';
import CartIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CategoryIcon from 'react-native-vector-icons/FontAwesome6';
import HomeIcon from 'react-native-vector-icons/Octicons';
import ProfileIcon from 'react-native-vector-icons/FontAwesome6';

import {
  Account,
  Address,
  Author,
  Cart,
  Category,
  Favorites,
  HelpCenter,
  Home,
  Location,
  NewPassword,
  Notification,
  Offers,
  OrderHistory,
  Profile,
  Search,
  Status,
} from '@screens';
import GenerateNavigator, {ScreenType} from '@config/generateNavigation';
import {Colors} from '@constants/colors';
import {fontScale} from '@utils/responsiveDesign';

const tabs: ScreenType[] = [
  {
    name: 'Home',
    component: Home,
    options: {
      tabBarIcon: props => {
        return <HomeIcon name="home" size={20} color={props.color} />;
      },
    },
  },
  {
    name: 'Category',
    component: Category,
    options: {
      tabBarIcon: props => {
        return <CategoryIcon name="file-lines" size={20} color={props.color} />;
      },
    },
  },
  {
    name: 'Cart',
    component: Cart,
    options: {
      tabBarIcon: props => {
        return <CartIcon name="cart-outline" size={22} color={props.color} />;
      },
      tabBarBadge: 3,
      tabBarBadgeStyle: {
        backgroundColor: Colors.PRIMARY,
        fontSize: fontScale(12),
        fontWeight: '300',
      },
    },
  },
  {
    name: 'Profile',
    component: Profile,
    options: {
      tabBarIcon: props => {
        return <ProfileIcon name="user" size={20} color={props.color} />;
      },
    },
  },
];

export const TabNavigator: React.FC = () => {
  return (
    <GenerateNavigator navType="tab" paths={tabs} initialRouteName="Home" />
  );
};

const stacks: ScreenType[] = [
  {
    name: 'TabNavigator',
    component: TabNavigator,
  },
  {
    name: 'Address',
    component: Address,
  },
  {
    name: 'Account',
    component: Account,
  },
  {
    name: 'Authors',
    component: Author,
  },
  {
    name: 'Favorites',
    component: Favorites,
  },
  {
    name: 'Location',
    component: Location,
  },
  {
    name: 'NewPassword',
    component: NewPassword,
  },
  {
    name: 'Notification',
    component: Notification,
  },
  {
    name: 'Offers',
    component: Offers,
  },
  {
    name: 'OrderHistory',
    component: OrderHistory,
  },
  {
    name: 'Search',
    component: Search,
  },
  {
    name: 'Status',
    component: Status,
  },
  {
    name: 'Support',
    component: HelpCenter,
  },
];

const AppNavigator = () => {
  return (
    <GenerateNavigator navType="stack" paths={stacks} initialRouteName="Home" />
  );
};

export default AppNavigator;
