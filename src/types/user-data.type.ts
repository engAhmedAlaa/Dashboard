import { Timestamp } from 'firebase/firestore';

export type UserDataTypeFS = {
  firstName: string;
  lastName: string;
  gender: string;
  country: string;
  dateOfBirth: Timestamp | undefined;
  language: string;
  phoneNumber: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

export type UserDataType = {
  firstName: string;
  lastName: string;
  gender: string;
  country: string;
  dateOfBirth: Date | undefined;
  language: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date;
};
