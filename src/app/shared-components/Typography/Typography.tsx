import { FC, HTMLAttributes } from 'react';

export interface ITypographyProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  variant:
    | 'Title'
    | 'BodyText'
    | 'ButtonCaption'
    ;
  classes?: string;
}

export const Typography: FC<ITypographyProps> = ({ text, variant = 'Title', classes }) => {
  const variantMap = {
    Title: 'font-custom2 text-bigTitle text-bodyTextColor',
    BodyText: 'font-custom1 text-bodyText text-bodyTextColor',
    ButtonCaption: 'font-custom1 text-caption font-light text-body'
  };

  const extraClasses = variantMap[variant];

  return <div className={[classes, extraClasses].join(' ')}>{text!}</div>;
};
