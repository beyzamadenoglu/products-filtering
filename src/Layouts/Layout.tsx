import React, { ReactNode } from 'react';
import './Layout.scss';
import Filter from '../Components/Filter/Filter.tsx';
import Header from '../Components/Header/Header.tsx';

const withLayout = (PageContent: ReactNode) => {
  return function fn(_props: unknown) {
    return (
      <>
        <div className="header">
          <Header />
        </div>
        <div style={{display: "flex"}}>
        <div className="sidebar">
          <Filter />
        </div>
        <div className="container">
          <div className="content">
            {PageContent}
          </div>
        </div>
        </div>
      </>
    );
  }
};

export default withLayout;
