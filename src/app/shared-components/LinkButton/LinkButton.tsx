import React, { FC } from 'react';
import classNames from 'classnames';

export interface ILinkIButtonProps extends React.ComponentProps<'button'> {
  text: string;
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
  classes?: string;
  [x: string]: any;
  type?: 'submit' | 'button' | 'reset';
  href: string;
  onClickButton?: Function;
}

export const LinkButton: FC<ILinkIButtonProps> = ({
  text,
  size = '',
  classes,
  type = 'button',
  href,
  onClickButton,
  ...rest
}) => {
  let sizeMap;

  switch (size) {
    case 'small':
      sizeMap = 'px-4';
      break;
    case 'medium':
      sizeMap = 'px-8';
      break;
    case 'large':
      sizeMap = 'px-12';
      break;
    default:
      sizeMap = 'w-full';
  }

  return (
    <button
      {...rest}
      onClick={() => onClickButton!(href)}
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={classNames(
        'rounded-lg inline-block text-caption font-semibold uppercase h-8',
        {
          [`${classes}`]: classes,
          [`${sizeMap}`]: sizeMap,
        }
      )}
      aria-label="button-target"
    >
      {text}
    </button>
  );
};
