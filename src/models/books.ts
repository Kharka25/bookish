import {ImageSourcePropType} from 'react-native';

export type DeliveryStatusT = 'Delivered' | 'Cancelled' | 'Pending';

export enum DeliveryStatusE {
  DELIVERED = 'Delivered',
  CANCELLED = 'Cancelled',
  PENDING = 'Pending',
}

export interface FavoritesBooksI {
  id: number;
  img: ImageSourcePropType;
  price?: string;
  title: string;
}

export interface OrderHistoryBooksI {
  id: number;
  img: ImageSourcePropType;
  deliveryStatus: DeliveryStatusT;
  title: string;
  quantity: string;
}
