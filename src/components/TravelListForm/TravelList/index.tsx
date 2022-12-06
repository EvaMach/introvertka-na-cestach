import React, { ChangeEvent, useState } from 'react';
import TravelListItem from './TravelListItem';
import Select from 'react-select';

type TravelListItem = {
  label: string;
  value: string;
  type: string;
  amount: number;
};

const travelListsData2 = [
  {
    label: 'košile',
    value: 'košile',
    type: 'outdoor',
    amount: 0.3,
  },
  {
    label: 'kraťasy',
    value: 'kraťasy',
    type: 'casual',
    amount: 0.5,
  },
  {
    label: 'tílko',
    value: 'tílko',
    type: 'casual',
    amount: 0.5,
  },
];

const travelListsData = [
  {
    label: 'merino triko',
    value: 'merino triko',
    type: 'outdoor',
    amount: 0.3,
  },
  {
    label: 'casual triko',
    value: 'casual triko',
    type: 'casual',
    amount: 0.5,
  },
  {
    label: 'jeany',
    value: 'jeany',
    type: 'casual',
    amount: 0.5,
  },
];

interface Props {
  name: string;
  items: TravelItem[];
}

export interface TravelItem {
  label: string;
  type: string;
  amount: number;
}

const TravelList = ({ name, items }: Props): JSX.Element => {
  const [addedItem, setAddedItem] = useState(travelListsData);

  const handleChange = (value: any): void => {
    setAddedItem([...addedItem, value]);
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="font-semibold">{name}</div>
      <form>
        <Select options={travelListsData2} onChange={handleChange} />
      </form>
      {addedItem.map((item) => (
        <TravelListItem amount={item.amount} clothingItem={item.label} />
      ))}
    </div>
  );
};

export default TravelList;
