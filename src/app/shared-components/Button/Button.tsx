import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
  children?: React.ReactNode;
  className?: string;
  [x: string]: any;
  type?: 'submit' | 'button' | 'reset';
  disabled?: true | false;
  onClick?: () => void;
}
export const Button: FC<IButtonProps> = ({
  text,
  size = 'small',
  className,
  type = 'button',
  disabled = false,
  onClick,
  ...rest
}) => {
  const sizeMap = {
    'x-small': 'h-8',
    small: 'h-8 px-4',
    medium: 'h-8 px-8',
    large: 'h-8 px-12',
    'x-large': 'h-8 w-full',
  };

  return (
    <button
      {...rest}
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={classNames(
        'rounded-full inline-block text-sm font-semibold opacity-1 hover:opacity-90',
        {
          [`${className}`]: className,
          [`${sizeMap[size]}`]: size,
          'bg-gray-400': disabled,
        }
      )}
      disabled={disabled}
      aria-label="button-target"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
