import React from 'react';

import GlobalStyle from '../styleGlobal';
import Sidebar from '../components/Sidebar';
import Loader from '../components/Loader';

const DefaultLayout = Content => {
  return () => {
    return (
      <>
        <GlobalStyle />
        <Loader />

        <div className="container-fluid p-0 ">
          <div className="row h-100">
            <div className="col-2 d-none d-sm-block">
              <Sidebar />
            </div>
            <div className="col-sm-10 wrapper-content">
              <Content />
            </div>
          </div>
        </div>
      </>
    );
  };
};

export default DefaultLayout;
