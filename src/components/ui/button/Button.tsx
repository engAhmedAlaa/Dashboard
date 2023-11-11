import { ButtonHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';
import './button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?:
    | 'default-variant'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  size?: 'default-size' | 'sm' | 'lg' | 'icon' | 'link-size';
  shadow?: boolean;
  transform?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild,
      className,
      variant = 'default-variant',
      size = 'default-size',
      shadow,
      transform,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={classNames(
          className,
          'button',
          size,
          variant,
          {
            shadow,
          },
          {
            pressable: transform,
          }
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export default Button;
