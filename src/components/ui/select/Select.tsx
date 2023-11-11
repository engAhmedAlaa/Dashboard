import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import classNames from 'classnames';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ArrowDownIcon } from '../../Icons';
import './select.scss';

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = forwardRef<
  ElementRef<typeof SelectPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={classNames('select-trigger', className)}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ArrowDownIcon className="arrow-down-icon" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = forwardRef<
  ElementRef<typeof SelectPrimitive.Content>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(
  (
    {
      className,
      children,
      position = 'popper',
      align = 'center',
      sideOffset = 4,
      ...props
    },
    ref
  ) => (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={classNames(
          'select-content',
          position === 'popper' && 'popper',
          className
        )}
        position={position}
        sideOffset={sideOffset}
        align={align}
        {...props}
      >
        <SelectPrimitive.SelectScrollUpButton className="select-scroll-btn">
          <ArrowDownIcon />
        </SelectPrimitive.SelectScrollUpButton>
        <SelectPrimitive.Viewport
          className={classNames(
            'select-viewport',
            position === 'popper' && 'popper'
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectPrimitive.SelectScrollDownButton className="select-scroll-btn">
          <ArrowDownIcon />
        </SelectPrimitive.SelectScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = forwardRef<
  ElementRef<typeof SelectPrimitive.Label>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={classNames('select-label', className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = forwardRef<
  ElementRef<typeof SelectPrimitive.Item>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={classNames('select-item', className)}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = forwardRef<
  ElementRef<typeof SelectPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={classNames('select-separator', className)}
    {...props}
  />
));

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};
