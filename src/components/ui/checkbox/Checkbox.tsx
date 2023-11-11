import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import classNames from 'classnames';
import { CheckIcon, CheckIndeterminateIcon } from '../../Icons';
import './checkbox.scss';

const Checkbox = forwardRef<
  ElementRef<typeof CheckboxPrimitive.Root>,
  ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, checked, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={classNames('checkbox', className)}
    checked={checked}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="checkbox-indicator">
      {checked === 'indeterminate' && <CheckIndeterminateIcon />}
      {checked === true && <CheckIcon />}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
