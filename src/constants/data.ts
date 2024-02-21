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
    title: 'Carrie Fisher',
  },
  {
    id: 2,
    img: require('@assets/images/book2.png'),
    price: '£27.92',
    title: 'The Waiting',
  },
  {
    id: 3,
    img: require('@assets/images/book3.png'),
    price: '£13.52',
    title: 'Bright Young Women',
  },
];

export const MockOrderHistoryData = [
  {
    id: 1,
    deliveryStatus: 'Delivered',
    img: require('@assets/images/book1.png'),
    title: 'Carrie Fisher',
    quantity: '1',
  },
  {
    id: 2,
    deliveryStatus: 'Delivered',
    img: require('@assets/images/book2.png'),
    title: 'The Waiting',
    quantity: '5',
  },
  {
    id: 3,
    deliveryStatus: 'Cancelled',
    img: require('@assets/images/book3.png'),
    title: 'Bright Young Women',
    quantity: '2',
  },
];

export const CategoryListData = [
  {
    id: 1,
    title: 'All',
  },
  {
    id: 2,
    title: 'Art',
  },
  {
    id: 3,
    title: 'Novels',
  },
  {
    id: 4,
    title: 'Self Love',
  },
  {
    id: 5,
    title: 'Science',
  },
  {
    id: 6,
    title: 'Romantic',
  },
  {
    id: 7,
    title: 'Religion',
  },
];

export const MockBooksListData = [
  {
    id: 1,
    img: require('@assets/images/book5.png'),
    price: '£19.99',
    title: 'The Da Vinci Code',
  },
  {
    id: 2,
    img: require('@assets/images/carrie.png'),
    price: '£27.92',
    title: 'Carrie Fisher',
  },
  {
    id: 3,
    img: require('@assets/images/book4.png'),
    price: '£17.60',
    title: 'The Good Sister',
  },
  {
    id: 4,
    img: require('@assets/images/waiting.png'),
    price: '£22.00',
    title: 'The Waiting',
  },
  {
    id: 5,
    img: require('@assets/images/book6.png'),
    price: '£15.50',
    title: 'Where are you',
  },
  {
    id: 6,
    img: require('@assets/images/bright.png'),
    price: '£13.52',
    title: 'Bright Young Women',
  },
];

export const MockTopVendorsData = [
  {
    id: 1,
    img: require('@assets/images/vendor1.png'),
    name: 'Warehouse',
  },
  {
    id: 2,
    img: require('@assets/images/vendor2.png'),
    name: 'Kuromi',
  },
  {
    id: 3,
    img: require('@assets/images/vendor3.png'),
    name: 'GooDay',
  },
  {
    id: 4,
    img: require('@assets/images/vendor4.png'),
    name: 'Crane & Co.',
  },
  {
    id: 5,
    img: require('@assets/images/vendor5.png'),
    name: 'Jstor',
  },
  {
    id: 6,
    img: require('@assets/images/vendor6.png'),
    name: 'Peloton',
  },
  {
    id: 7,
    img: require('@assets/images/vendor7.png'),
    name: 'Haymarket',
  },
  {
    id: 8,
    img: require('@assets/images/vendor8.png'),
    name: 'Wattpad',
  },
];

export const MockTopOfTheWeekData = [
  {
    id: 1,
    img: require('@assets/images/book7.png'),
    price: '£14.99',
    title: 'The Kite Runner',
  },
  {
    id: 2,
    img: require('@assets/images/book8.png'),
    price: '£20.99',
    title: 'The Subtle Art Of Not Giving A Fuck',
  },
  {
    id: 3,
    img: require('@assets/images/book9.png'),
    price: '£10.99',
    title: 'Little Prince',
  },
];

export const MockPromoData = [
  {
    id: 1,
    ctaText: 'Order Now',
    img: require('@assets/images/waiting.png'),
    mainText: 'Special Offer',
    subText: 'Discount 25%',
  },
];

export const MockAuthorsData = [
  {
    id: 1,
    img: require('@assets/images/author1.png'),
    name: 'John Freeman',
    rating: 3.5,
    type: 'Writer',
  },
  {
    id: 2,
    img: require('@assets/images/author2.png'),
    name: 'Tess Gunty',
    type: 'Novelist',
    rating: 4.5,
  },
  {
    id: 3,
    img: require('@assets/images/author3.png'),
    name: 'Richard Peterson',
    type: 'Journalist',
    rating: 3,
  },
  {
    id: 4,
    img: require('@assets/images/author4.png'),
    name: 'Adam Dalva',
    type: 'Writer',
    rating: 2.5,
  },
  {
    id: 5,
    img: require('@assets/images/author5.png'),
    name: 'Abraham Verghese',
    type: 'Writer',
    rating: 3.5,
  },
  {
    id: 6,
    img: require('@assets/images/author6.png'),
    name: 'Ann Napolitano',
    type: 'Poet',
    rating: 3,
  },
  {
    id: 7,
    img: require('@assets/images/author7.png'),
    name: 'Hernan Diaz',
    type: 'Writer',
    rating: 4.5,
  },
];
