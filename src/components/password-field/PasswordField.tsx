import { InputHTMLAttributes, forwardRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useField } from 'formik';
import classNames from 'classnames';
import { ErrorIcon, HideIcon, ShowIcon } from '../Icons';
import './password-field.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  includeForget?: boolean;
}

const PasswordField = forwardRef<HTMLInputElement, Props>(function (
  { label, name, id, className, includeForget, ...otherProps },
  ref
) {
  const [{ value, onChange, onBlur }, { touched, error }] = useField(name);
  const [show, setShow] = useState(false);

  function handleToggle() {
    setShow((prevState) => !prevState);
  }

  return (
    <div className="password-field">
      {includeForget ? (
        <div className="password-head">
          <label htmlFor={id} className="password-label">
            {label}
          </label>
          <Link to="/forgot-password" className="forgot-link" tabIndex={-1}>
            Forgot password?
          </Link>
        </div>
      ) : (
        <label htmlFor={id} className="password-label">
          {label}
        </label>
      )}
      <div className="input-container">
        <input
          ref={ref}
          type={show ? 'text' : 'password'}
          id={id}
          name={name}
          className={classNames(
            'password-input',
            {
              invalid: touched && error,
            },
            className
          )}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          {...otherProps}
        />
        <button
          type="button"
          className={classNames('eye-button', { appear: value })}
          onClick={handleToggle}
          aria-label={show ? 'Show' : 'Hide'}
          tabIndex={-1}
        >
          {show ? <HideIcon /> : <ShowIcon />}
        </button>
      </div>
      {touched && error && (
        <p className="message">
          <ErrorIcon className="error-icon" />
          <span className="text">{error}</span>
        </p>
      )}
    </div>
  );
});

export default PasswordField;
