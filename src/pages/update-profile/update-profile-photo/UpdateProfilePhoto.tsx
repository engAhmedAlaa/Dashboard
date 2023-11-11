import { ChangeEvent, useMemo, useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { FirebaseError } from 'firebase/app';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useAuth } from '../../../hooks/use-auth';
import {
  deleteProfilePhoto,
  uploadProfilePhoto,
} from '../../../firebase/storage';
import { getErrorMessage } from '../../../utils/getErrorMessage';
import { Form, Formik } from 'formik';
import { LoadingIcon, SuccessIcon } from '../../../components/Icons';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../../../components/ui/dialog/Dialog';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../../../components/ui/alert-dialog/AlertDialog';
import ReactCrop, {
  PixelCrop,
  type Crop,
  centerCrop,
  makeAspectCrop,
} from 'react-image-crop';
import { ToastMessage } from '../../../components/toast/Toast';
import Button from '../../../components/ui/button/Button';
import Avatar from '../../../components/ui/avatar/Avatar';
import 'react-image-crop/dist/ReactCrop.css';
import './update-profile-photo.scss';

function ChangeProfilePhoto() {
  const { user, updateUser } = useAuth();
  const [file, setFile] = useState<File | null>(null);
  const [value, setValue] = useState('');
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const { showBoundary } = useErrorBoundary();
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const imageUrl = useMemo(
    () => (file ? URL.createObjectURL(file) : ''),
    [file]
  );

  function handleChangeImage(e: ChangeEvent<HTMLInputElement>) {
    function isValidFile(file: File) {
      const isValidType = file.type.search(/image\/(jpg|jpeg|png|gif)/) !== -1;
      const isValidSize = file.size < 5 * 1024 * 1024;
      return isValidSize && isValidType;
    }

    if (e.target.files?.length) {
      const file = e.target.files[0];
      if (isValidFile(file)) {
        setFile(file);
        setDialogOpen(true);
      } else {
        setFile(null);
        toast.error(
          <ToastMessage
            title="Oops! Something went wrong"
            description="Image is over 5MB or not the right type."
          />,
          {
            icon: SuccessIcon,
          }
        );
      }
      setValue('');
    }
  }

  function handleCloseDialog() {
    setFile(null);
    setCrop(undefined);
    setCompletedCrop(undefined);
  }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    function centerAspectCrop(
      mediaWidth: number,
      mediaHeight: number,
      aspect: number
    ) {
      return centerCrop(
        makeAspectCrop(
          {
            unit: '%',
            width: 100,
          },
          aspect,
          mediaWidth,
          mediaHeight
        ),
        mediaWidth,
        mediaHeight
      );
    }

    const image = e.currentTarget;
    setImage(image);
    setCrop(centerAspectCrop(image.width, image.height, 1));
  }

  function getCroppedImage(): Promise<Blob> {
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 400;

    const scaleX = image!.naturalWidth / image!.width;
    const scaleY = image!.naturalHeight / image!.height;

    const ctx = canvas.getContext('2d')!;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(
      image!,
      completedCrop!.x * scaleX,
      completedCrop!.y * scaleY,
      completedCrop!.width * scaleX,
      completedCrop!.height * scaleY,
      0,
      0,
      canvas.width,
      canvas.height
    );

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob!);
      }, file!.type);
    });
  }

  async function handelUploadProfilePhoto() {
    try {
      const croppedImage = await getCroppedImage();
      const photoURL = await uploadProfilePhoto(user!.uid, croppedImage);
      await updateProfile(user!, {
        photoURL: photoURL,
      });
      updateUser();
      setDialogOpen(false);
      toast.success(
        <ToastMessage
          title="Amazing! Success"
          description="Profile photo has been uploaded"
        />,
        {
          icon: SuccessIcon,
        }
      );
    } catch (error) {
      let message;
      if (error instanceof FirebaseError) message = getErrorMessage(error);
      toast.error(
        <ToastMessage
          title="Oops! Something went wrong"
          description={message}
        />,
        {
          icon: SuccessIcon,
        }
      );
    }
  }

  async function handleDeleteProfilePhoto() {
    try {
      await deleteProfilePhoto(user!.uid);
      await updateProfile(user!, {
        photoURL: '',
      });
      updateUser();
      setAlertDialogOpen(false);
    } catch (error) {
      const description = getErrorMessage(error);
      toast.error(
        <ToastMessage
          title="Oops! Something went wrong"
          description={description}
        />,
        {
          icon: SuccessIcon,
        }
      );
    }
  }

  return (
    <section className="section-update-profile-photo">
      <Avatar src={user!.photoURL!} alt={user!.displayName!} />
      <div className="section-content">
        <h2 className="section-title">Profile photo</h2>
        <p className="section-description">
          You can upload a .jpg, .jpeg, .png, or .gif photo with max size of
          5MB.
        </p>
        <div className="actions">
          <label className="file-label button-shape default-variant default-size shadow transform">
            Upload photo
            <input
              type="file"
              className="src-only"
              value={value}
              onChange={handleChangeImage}
              accept=".jpg, .jpeg, .png, .gif"
            />
          </label>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogContent
              className="change-profile-photo-dialog-content"
              onCloseAutoFocus={handleCloseDialog}
            >
              <DialogHeader>
                <DialogTitle>Crop your new profile photo</DialogTitle>
              </DialogHeader>
              <div className="react-crop-container">
                <ReactCrop
                  crop={crop}
                  onChange={(p) => setCrop(p)}
                  onComplete={(c) => setCompletedCrop(c)}
                  aspect={1}
                >
                  <img
                    src={imageUrl}
                    onLoad={onImageLoad}
                    onError={() => {
                      showBoundary(new Error('Image not found.'));
                    }}
                    alt="Crop me"
                    className="react-crop-image"
                  />
                </ReactCrop>
              </div>
              <Formik initialValues={{}} onSubmit={handelUploadProfilePhoto}>
                {({ isSubmitting }) => (
                  <Form className="form-change-profile-photo">
                    <div className="form-action">
                      <Button
                        type="submit"
                        className="submit-button"
                        shadow
                        transform
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <LoadingIcon className="loading-icon" />
                        ) : (
                          'Set new profile photo'
                        )}
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </DialogContent>
          </Dialog>
          <AlertDialog open={alertDialogOpen} onOpenChange={setAlertDialogOpen}>
            {user!.photoURL! && (
              <AlertDialogTrigger asChild>
                <Button type="button" variant="destructive" shadow transform>
                  Remove
                </Button>
              </AlertDialogTrigger>
            )}
            <AlertDialogContent className="delete-profile-photo-alert-dialog-content">
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to remove your current profile photo?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <Formik initialValues={{}} onSubmit={handleDeleteProfilePhoto}>
                {({ isSubmitting }) => (
                  <Form className="form-delete-profile-photo">
                    <div className="form-actions">
                      <AlertDialogCancel asChild>
                        <Button variant="outline" transform shadow>
                          Cancel
                        </Button>
                      </AlertDialogCancel>
                      <Button
                        type="submit"
                        variant="destructive"
                        className="submit-button"
                        shadow
                        transform
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <LoadingIcon className="loading-icon" />
                        ) : (
                          'Remove'
                        )}
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </section>
  );
}

export default ChangeProfilePhoto;
