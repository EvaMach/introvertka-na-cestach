import React from 'react';
import TravelListItem from './TravelListItem';

interface Props {
  name: string;
  items: TravelItem[];
}

export interface TravelItem {
  name: string;
  type: string;
  amount: number;
}

const TravelList = ({ name, items }: Props): JSX.Element => {
  return (
    <div className="flex flex-col gap-1">
      <div className="font-semibold">{name}</div>
      {items.map((item) => (
        <TravelListItem amount={item.amount} clothingItem={item.name} />
      ))}
    </div>
  );
};

export default TravelList;
