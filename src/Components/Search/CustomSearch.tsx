import React from 'react';
import { Icon } from '@iconify/react';

import './CustomSearch.scss'

type Props = {};

const Search = (props: Props) => {
  return (
    <>
      <div className="search-box">
        <input className="search-txt" type="text" name="" placeholder="Find Product" />
        <a href="#" className="search-btn">
        <Icon icon="material-symbols:search" />   
             </a>
      </div>
    </>
  );
};

export default Search;
