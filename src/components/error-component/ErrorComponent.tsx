import { useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';
import { FallbackProps } from 'react-error-boundary';
import { getErrorMessage } from '../../utils/getErrorMessage';
import { ErrorIcon } from '../Icons';
import Button from '../ui/button/Button';
import './error-component.scss';

function ErrorComponent({ error, resetErrorBoundary }: FallbackProps) {
  const navigate = useNavigate();
  let resetFunction = resetErrorBoundary;
  let message;

  function reload() {
    navigate(0);
  }

  if (error instanceof FirebaseError) {
    message = getErrorMessage(error);
  }

  if (error.message.includes('Failed to fetch dynamically imported module')) {
    resetFunction = reload;
    message = 'Network request failed';
  }

  return (
    <div role="alert" className="error-container">
      <div className="error-info">
        <ErrorIcon className="error-icon" />
        <p className="error-header">Oops! Something went wrong</p>
        {message && <p className="error-message">Network request failed</p>}
        <Button variant="destructive" shadow transform onClick={resetFunction}>
          Try again
        </Button>
      </div>
    </div>
  );
}

export default ErrorComponent;
