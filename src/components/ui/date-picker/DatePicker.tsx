import { useField } from 'formik';
import { format } from 'date-fns';
import classNames from 'classnames';
import { CalendarIcon, ErrorIcon } from '../../Icons';
import { Popover, PopoverContent, PopoverTrigger } from '../popover/Popover';
import Calendar from '../calendar/Calendar';
import './date-picker.scss';

type Props = {
  label: string;
  id: string;
  name: string;
};

function DatePicker({ label, id, name }: Props) {
  const [{ value, onBlur, onChange }, { touched, error }] = useField(name);

  return (
    <div className="date-picker">
      <label htmlFor={id} className="date-picker-label">
        {label}
      </label>
      <Popover>
        <PopoverTrigger
          id={id}
          name={name}
          className={classNames('date-picker-popover-trigger', {
            invalid: touched && error,
          })}
        >
          {value ? format(value, 'PPP') : 'Pick a date...'}
          <CalendarIcon className="calendar-icon" />
        </PopoverTrigger>
        <PopoverContent
          sideOffset={6}
          className="date-picker-popover"
          onCloseAutoFocus={() => {
            const event = { target: { name: name } };
            onBlur(event);
          }}
        >
          <Calendar
            mode="single"
            selected={value || undefined}
            onSelect={(newValue) => {
              const event = { target: { name: name, value: newValue || '' } };
              onChange(event);
            }}
            fromYear={1960}
            toYear={2010}
            defaultMonth={value ? value : new Date(2000, 0)}
            initialFocus
            showOutsideDays
            fixedWeeks
          />
        </PopoverContent>
      </Popover>
      {touched && error && (
        <p className="message">
          <ErrorIcon className="error-icon" />
          <span className="text">{error}</span>
        </p>
      )}
    </div>
  );
}

export default DatePicker;
