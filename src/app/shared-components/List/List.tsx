import { FC } from 'react';
import bulletIcon from '../../../assets/images/checkmark-circle.svg';
import { Image } from '../Image';
import { Typography } from '../Typography';

export interface IListProps {
  items: string[];
}

export const List: FC<IListProps> = ({ items }: IListProps) => (
  <div className="flex flex-col">
    {items.map((item, index) => (
      <div className="flex flex-row" key={index}>
        <div className="mr-2 mt-1">
          <Image src={bulletIcon} alt="" />
        </div>
        <Typography text={item} variant="BodyText" className="mt-3" />
      </div>
    ))}
  </div>
);
