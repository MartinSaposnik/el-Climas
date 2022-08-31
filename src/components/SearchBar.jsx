import React from 'react';
import { BsSearch } from 'react-icons/bs';
import style from './SearchBar.module.css';

export default function SearchBar(props) {
  // acá va tu código
  return (
  <form className={style.searchBar}>
    <input className={style.input} placeholder='Ciudad...' />
    <button className={style.submit} type="submit">
      <BsSearch />
    </button>
  </form>
  );
}