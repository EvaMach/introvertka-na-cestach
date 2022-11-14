import React from 'react';
import { useFormik } from 'formik';
import tentImg from './img/tent.jpg';
import hotelImg from './img/hotel.jpg';
import TravelList from './TravelList/';
// @ts-ignore
import { travelListsData } from './travelListsData.js';
import { TravelItem } from './TravelList/';
import './style.css';

export interface TravelListType {
  name: string;
  items: TravelItem[];
}

const TravelListForm = (): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      listName: '',
      stayLength: 0,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form
      className="flex flex-col items-center gap-3"
      onSubmit={formik.handleSubmit}
    >
      <input
        className="p-1 ... bg-slate-300 rounded-md border-zinc-500"
        placeholder="Název seznamu"
        type="text"
        name="listName"
        onChange={formik.handleChange}
        value={formik.values.listName}
      />
      <input
        className="p-1 ... bg-slate-300 rounded-md border-zinc-500"
        type="number"
        name="stayLength"
        value={formik.values.stayLength}
        onChange={formik.handleChange}
      />
      <div className="flex items-center">
        <input
          className="input-hidden"
          type="radio"
          name="tentOption"
          id="tentOption"
        />
        <label htmlFor="tentOption">
          <img className="h-44 cursor-pointer" src={tentImg} alt="camping" />
        </label>
        <input
          className="input-hidden"
          type="radio"
          name="tentOption"
          id="hotelOption"
        />
        <label htmlFor="hotelOption">
          <img className="h-44 cursor-pointer" src={hotelImg} alt="hotel" />
        </label>
      </div>
      <div className="flex items-center gap-3 flex-wrap">
        {travelListsData.map((list: TravelListType) => (
          <TravelList name={list.name} items={list.items} />
        ))}
      </div>
      <button
        className="h-10 px-6 font-semibold rounded-md bg-cyan-600 text-white"
        type="submit"
      >
        Vytvořit seznam
      </button>
    </form>
  );
};

export default TravelListForm;
