import React, { useState } from 'react';
import circle from './circle-outline.svg';
import tickCircle from './tick-circle.svg';
import shoppingBag from './shopping-bag.svg';

interface Props {
  amount: number;
  clothingItem: string;
}

const TravelList = ({ amount, clothingItem }: Props): JSX.Element => {
  const [isChecked, setIsChecked] = useState(false);
  const [needsBuying, setNeedsBuying] = useState(false);

  const onCheck = (): void => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={`flex gap-1 px-5 py-2 rounded-md ${
        isChecked ? 'bg-emerald-600' : 'bg-slate-300'
      }`}
    >
      <input
        className={`w-10 ${isChecked ? 'bg-emerald-600' : 'bg-slate-300'}`}
        type="number"
        value={amount}
      />
      <div className="w-32">{clothingItem}</div>
      <button onClick={onCheck}>
        <img className="w-4" src={isChecked ? tickCircle : circle}></img>
      </button>
      <button>
        {' '}
        <img className="w-4 ml-3 fill-red-500" src={shoppingBag}></img>
      </button>
    </div>
  );
};

export default TravelList;
