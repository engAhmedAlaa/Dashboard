import { useField } from 'formik';
import { Checkbox } from '../ui/checkbox/Checkbox';
import './checkbox-field.scss';

interface Props {
  id: string;
  name: string;
  label: string;
}

const CheckboxField = ({ label, id, name }: Props) => {
  const [{ value, onChange }] = useField(name);

  return (
    <div className="checkbox-field">
      <Checkbox
        id={id}
        className="checkbox-input"
        name={name}
        checked={value}
        onCheckedChange={(newValue) => {
          const event = { target: { name: name, value: newValue } };
          onChange(event);
        }}
      />
      <label htmlFor={id} className="checkbox-label">
        {label}
      </label>
    </div>
  );
};

export default CheckboxField;
