import { FC } from 'react';
import classNames from 'classnames';
import defaultImage from '../../../assets/images/default-image.svg';

export interface IImageProps {
  src: string;
  className?: string;
  alt?: string;
}

export const Image: FC<IImageProps> = ({
  src,
  className,
  alt,
}: IImageProps) => {
  const onError = (event: any, src: string) => {
    event.target.src = src;
    event.onerror = null;
  };

  return (
    <img
      className={classNames('', {
        [`${className}`]: className,
      })}
      alt={alt}
      src={src}
      onError={evt => onError(evt, defaultImage)}
      aria-label="Image-target"
    />
  );
};
