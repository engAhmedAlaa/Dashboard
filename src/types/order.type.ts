import { Timestamp } from 'firebase/firestore';

export type OrderType = {
  id: string;
  name: string;
  color: string;
  totalPrice: number;
  producer: string;
  quantity: number;
  delivered: boolean;
  addedAt: Date;
  updatedAt: Date;
};

export type OrderTypeFS = {
  id: string;
  name: string;
  color: string;
  totalPrice: number;
  inStock: boolean;
  producer: string;
  quantity: number;
  delivered: boolean;
  addedAt: Timestamp;
  updatedAt: Timestamp;
};
