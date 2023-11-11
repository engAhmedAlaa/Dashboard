import { FirebaseError } from 'firebase/app';
import {
  addDoc as addDocFS,
  DocumentData,
  DocumentReference,
  collection,
  deleteDoc as deleteDocFS,
  doc,
  getFirestore,
  setDoc,
  updateDoc as updateDocFS,
  writeBatch,
} from 'firebase/firestore';
import { app } from './firebase';
import { clients } from '../data/clients';
import { products } from '../data/products';
import { orders } from '../data/orders';

export const db = getFirestore(app);

export async function initializeUserData(uid: string, data: DocumentData) {
  const docRef = doc(db, 'users', uid);
  await setDoc(docRef, {
    ...data,
    country: '',
    phoneNumber: '',
    gender: '',
    language: '',
  });
  await initializeUserDataBatch(docRef, 'clients', clients);
  await initializeUserDataBatch(docRef, 'products', products);
  await initializeUserDataBatch(docRef, 'orders', orders);
}

async function initializeUserDataBatch(
  docRef: DocumentReference,
  slug: string,
  data: DocumentData[]
) {
  const collectionRef = collection(docRef, slug);
  const batch = writeBatch(db);
  for (const dataItem of data) {
    const docRef = doc(collectionRef);
    batch.set(docRef, dataItem);
  }
  await batch.commit();
}

export async function updateUserData(userUid: string, data: DocumentData) {
  if (!navigator.onLine)
    throw new FirebaseError(
      'firestore/network-request-failed',
      'Network request failed'
    );

  const docRef = doc(db, 'users', userUid);
  await updateDocFS(docRef, data);
}

export async function deleteUserData(userUid: string) {
  const docRef = doc(db, 'users', userUid);
  await deleteDocFS(docRef);
}

export async function addDoc(uid: string, slug: string, values: DocumentData) {
  if (!navigator.onLine)
    throw new FirebaseError(
      'firestore/network-request-failed',
      'Network request failed'
    );
  const docRef = collection(db, 'users', uid, slug);
  await addDocFS(docRef, values);
}

export async function updateDoc(
  uid: string,
  slug: string,
  docId: string,
  values: DocumentData
) {
  if (!navigator.onLine)
    new FirebaseError(
      'firestore/network-request-failed',
      'Network request failed'
    );
  const docRef = doc(db, 'users', uid, slug, docId);
  await updateDocFS(docRef, values);
}

export async function deleteDoc(uid: string, slug: string, docId: string) {
  if (!navigator.onLine)
    throw new FirebaseError(
      'firestore/network-request-failed',
      'Network request failed'
    );
  const docRef = doc(db, 'users', uid, slug, docId);
  await deleteDocFS(docRef);
}

export async function deleteMultipleDocs(
  uid: string,
  slug: string,
  dataIds: string[]
) {
  if (!navigator.onLine)
    throw new FirebaseError(
      'firestore/network-request-failed',
      'Network request failed'
    );
  const batch = writeBatch(db);

  for (const dataItemId of dataIds) {
    const docRef = doc(db, 'users', uid, slug, dataItemId);
    batch.delete(docRef);
  }
  await batch.commit();
}
