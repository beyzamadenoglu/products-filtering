import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Icon } from '@iconify/react';
import { setSearchTerm } from '../../Actions/productActions.tsx';

import './CustomSearch.scss'

const CustomSearch = () => {
  const [searchText, setSearchText] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    dispatch(setSearchTerm(event.target.value));
    
  };

  return (
    <div className="search-box">
      <input
        className="search-txt"
        type="text"
        name=""
        placeholder="Find Product"
        value={searchText}
        onChange={handleInputChange}
      />
      <button className="search-btn" onClick={() => {return}}>
        <Icon icon="material-symbols:search" />   
      </button>
    </div>
  );
};

export default CustomSearch;
