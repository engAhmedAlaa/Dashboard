import { Timestamp } from 'firebase/firestore';

export type ClientType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  phoneNumber: string;
  country: string;
  verified: boolean;
  addedAt: Date;
  updatedAt: Date;
};

export type ClientTypeFS = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  country: string;
  phoneNumber: string;
  verified: boolean;
  addedAt: Timestamp;
  updatedAt: Timestamp;
};
