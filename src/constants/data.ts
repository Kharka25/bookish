export const CarouselData = [
  {
    id: 1,
    img: require('@assets/images/frame1.png'),
    subtitle:
      'Discover new worlds, join a vibrant reading community. Start your reading adventure effortlessly with us.',
    title: 'Now reading books will be easier',
  },
  {
    id: 2,
    img: require('@assets/images/frame2.png'),
    subtitle:
      'Let us be your guide to the perfect read. Discover books tailored to your tastes for a truly rewarding experience.',
    title: 'Your Bookish Soulmate Awaits',
  },
  {
    id: 3,
    img: require('@assets/images/frame3.png'),
    subtitle:
      'Ready to embark on a quest for inspiration and knowledge? Your adventure begins now. Lets go!',
    title: 'Start Your Bookish Adventure',
  },
];

export const ContactModeData = [
  {
    iconActive: require('@assets/icons/email.png'),
    iconInactive: require('@assets/icons/email2.png'),
    subText: 'Send to your email',
    // type: 'email',
    title: 'Email',
  },
  {
    iconActive: require('@assets/icons/call.png'),
    iconInactive: require('@assets/icons/call2.png'),
    subText: 'Send to your phone',
    // type: 'phone',
    title: 'Phone',
  },
];

export const ProfileScreensOptionsData = [
  {
    id: 1,
    icon: 'user',
    screen: 'Account',
    title: 'My Account',
  },
  {
    id: 2,
    icon: 'location-dot',
    screen: 'Location',
    title: 'Address',
  },
  {
    id: 3,
    icon: 'fire',
    screen: 'Offers',
    title: 'Offers & Promos',
  },
  {
    id: 4,
    icon: 'heart',
    screen: 'Favorites',
    title: 'Your Favorites',
  },
  {
    id: 5,
    icon: 'file-lines',
    screen: 'OrderHistory',
    title: 'Order History',
  },
  {
    id: 6,
    icon: 'comment-dots',
    screen: 'Support',
    title: 'Help Center',
  },
];

export const MockFavoritesData = [
  {
    id: 1,
    img: require('@assets/images/book1.png'),
    price: '£19.99',
    title: 'The Da Vinci Code',
  },
  {
    id: 2,
    img: require('@assets/images/book2.png'),
    price: '£27.92',
    title: 'Carrie Fisher',
  },
  {
    id: 3,
    img: require('@assets/images/book3.png'),
    price: '£13.52',
    title: 'The Waiting',
  },
];

export const MockOrderHistoryData = [
  {
    id: 1,
    deliveryStatus: 'Delivered',
    title: 'The Da Vinci Code',
    quantity: '1',
  },
  {
    id: 2,
    deliveryStatus: 'Delivered',
    title: 'Carrie Fisher',
    quantity: '5',
  },
  {
    id: 3,
    deliveryStatus: 'Cancelled',
    title: 'The Waiting',
    quantity: '2',
  },
];
