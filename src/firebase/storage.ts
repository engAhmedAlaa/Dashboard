import { FirebaseError } from 'firebase/app';
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from 'firebase/storage';
import { app } from './firebase';

export const storage = getStorage(app);

export async function uploadProfilePhoto(userUid: string, profilePhoto: Blob) {
  if (!navigator.onLine)
    throw new FirebaseError(
      'storage/network-request-failed',
      'Network request failed'
    );

  const profilePhotoRef = ref(storage, `avatars/${userUid}`);
  await uploadBytes(profilePhotoRef, profilePhoto);
  return await getDownloadURL(profilePhotoRef);
}

export async function deleteProfilePhoto(userUid: string) {
  if (!navigator.onLine)
    throw new FirebaseError(
      'storage/network-request-failed',
      'Network request failed'
    );

  const profilePhotoRef = ref(storage, `avatars/${userUid}`);
  await deleteObject(profilePhotoRef);
}
