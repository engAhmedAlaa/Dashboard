import { useField } from 'formik';
import classNames from 'classnames';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group/RadioGroup';
import { ErrorIcon } from '../Icons';
import './radio-group-field.scss';

interface Props {
  id: string;
  name: string;
  label: string;
  list: { value: string; label: string }[];
}

const RadioGroupField = ({ label, id, name, list }: Props) => {
  const [{ value, onChange }, { error, touched }] = useField(name);

  return (
    <div className="radio-group-field">
      <label htmlFor={id} className="radio-group-label">
        {label}
      </label>
      <RadioGroup
        id={id}
        name={name}
        value={value}
        onValueChange={(newValue) => {
          const event = { target: { name: name, value: newValue } };
          onChange(event);
        }}
      >
        {list.map(({ value, label }, index) => (
          <div className="radio-group-item-container" key={value}>
            <RadioGroupItem
              id={`r${index}`}
              value={value}
              className={classNames({ invalid: touched && error })}
            ></RadioGroupItem>
            <label htmlFor={`r${index}`} className="radio-group-item-label">
              {label}
            </label>
          </div>
        ))}
      </RadioGroup>
      {touched && error && (
        <p className="message">
          <ErrorIcon className="error-icon" />
          <span className="text">{error}</span>
        </p>
      )}
    </div>
  );
};

export default RadioGroupField;
