import { ChangeEvent, ComponentProps } from 'react';
import { DayPicker } from 'react-day-picker';
import { ArrowLeftIcon, ArrowRightIcon } from '../../Icons';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from '../select/Select';
import './calendar.scss';
import { SelectGroup } from '@radix-ui/react-select';

export type CalendarProps = ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      className={className}
      classNames={{
        nav_button: 'rdp-nav_button button-shape outline',
        day: 'rdp-day button-shape ghost',
        ...classNames,
      }}
      captionLayout="dropdown-buttons"
      showOutsideDays={showOutsideDays}
      components={{
        IconLeft: () => <ArrowLeftIcon className="rdp-nav_button-arrow-icon" />,
        IconRight: () => (
          <ArrowRightIcon className="rdp-nav_button-arrow-icon" />
        ),
        Dropdown: (props) => {
          return (
            <Select
              name={props.name}
              onValueChange={(value) => {
                const event = {
                  target: { value: value },
                } as ChangeEvent<HTMLSelectElement>;
                props.onChange?.(event);
              }}
            >
              <SelectTrigger
                className="rdp-select-trigger"
                aria-label={`${props['aria-label']}${props.caption}`}
              >
                {props.caption}
              </SelectTrigger>
              <SelectContent
                side="bottom"
                align="center"
                sideOffset={4}
                className="rdp-select-content"
              >
                <SelectGroup>
                  <SelectLabel>{props.name}</SelectLabel>
                  {(props.children as JSX.Element[]).map(
                    ({ key, props: { value, children } }) => (
                      <SelectItem key={key} value={value}>
                        {children}
                      </SelectItem>
                    )
                  )}
                </SelectGroup>
              </SelectContent>
            </Select>
          );
        },
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export default Calendar;
