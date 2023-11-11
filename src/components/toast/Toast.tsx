import { useWindowSize } from 'react-use';
import { Slide, ToastContainer, CloseButtonProps } from 'react-toastify';
import { CloseIcon } from '../Icons';
import 'react-toastify/dist/ReactToastify.css';
import './toast.scss';

export default function Toast() {
  const { width } = useWindowSize();

  return (
    <ToastContainer
      position={width > 480 ? 'bottom-right' : 'top-center'}
      limit={1}
      hideProgressBar={true}
      autoClose={2500}
      closeButton={CloseButton}
      closeOnClick={false}
      draggablePercent={20}
      transition={Slide}
    />
  );
}

export function ToastMessage({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <>
      {title && <div className="Toastify__title">{title}</div>}
      {description && (
        <div className="Toastify__description">{description}</div>
      )}
    </>
  );
}

function CloseButton({ closeToast }: CloseButtonProps) {
  return (
    <button
      className="Toastify__close"
      type="button"
      aria-label="Close"
      onClick={closeToast}
    >
      <CloseIcon />
    </button>
  );
}
