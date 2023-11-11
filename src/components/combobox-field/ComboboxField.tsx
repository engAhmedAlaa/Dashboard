import { useState } from 'react';
import { useField } from 'formik';
import classNames from 'classnames';
import { ArrowsUpDownIcon, ErrorIcon } from '../Icons';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover/Popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command/Command';
import './combobox-field.scss';

type Props = {
  label: string;
  id: string;
  name: string;
  placeholder: string;
  list: { value: string; label: string }[];
  modal?: boolean;
};

function ComboboxField({
  label,
  id,
  name,
  placeholder,
  list,
  modal = false,
}: Props) {
  const [open, setOpen] = useState(false);
  const [{ value: selectedValue, onBlur, onChange }, { touched, error }] =
    useField(name);

  return (
    <div className="combobox-field">
      <label htmlFor={id} className="combobox-field-label">
        {label}
      </label>
      <Popover open={open} onOpenChange={setOpen} modal={modal}>
        <PopoverTrigger
          id={id}
          name={name}
          role="combobox"
          className={classNames('combobox-field-popover-trigger', {
            invalid: touched && error,
          })}
        >
          {selectedValue
            ? list.find(({ value }) => value === selectedValue)?.label
            : placeholder}
          <ArrowsUpDownIcon className="arrows-up-down-icon" />
        </PopoverTrigger>
        <PopoverContent
          sideOffset={6}
          className="combobox-field-popover"
          onCloseAutoFocus={() => {
            const event = { target: { name: name } };
            onBlur(event);
          }}
        >
          <Command>
            <CommandInput placeholder="Search country..." />
            <CommandList>
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {list.map(({ value, label }) => (
                  <CommandItem
                    key={value}
                    className={classNames({ active: selectedValue === value })}
                    onSelect={(newValue) => {
                      const event = {
                        target: {
                          name: name,
                          value: newValue === selectedValue ? '' : newValue,
                        },
                      };
                      onChange(event);
                      setOpen(false);
                    }}
                  >
                    {label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
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

export default ComboboxField;
