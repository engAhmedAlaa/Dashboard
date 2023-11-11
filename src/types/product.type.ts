import { Timestamp } from 'firebase/firestore';

export type ProductType = {
  id: string;
  name: string;
  color: string;
  price: number;
  inStock: boolean;
  producer: string;
  addedAt: Date;
  updatedAt: Date;
};

export type ProductTypeFS = {
  id: string;
  name: string;
  color: string;
  price: number;
  inStock: boolean;
  producer: string;
  addedAt: Timestamp;
  updatedAt: Timestamp;
};
