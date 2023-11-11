import { InputHTMLAttributes, forwardRef } from 'react';
import { useField } from 'formik';
import classNames from 'classnames';
import { ErrorIcon } from '../Icons';
import './form-field.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const FormField = forwardRef<HTMLInputElement, Props>(
  ({ label, name, id, type, className, ...otherProps }, ref) => {
    const [{ value, onChange, onBlur }, { touched, error }] = useField(name);

    return (
      <div className="form-field">
        <label htmlFor={id} className="form-label">
          {label}
        </label>
        <input
          ref={ref}
          type={type || 'text'}
          id={id}
          name={name}
          className={classNames(
            'form-input',
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
        {touched && error && (
          <p className="error-message">
            <ErrorIcon className="error-icon" />
            <span className="error-text">{error}</span>
          </p>
        )}
      </div>
    );
  }
);

export default FormField;
