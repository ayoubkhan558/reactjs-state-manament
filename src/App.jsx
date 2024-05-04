import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'notyf/notyf.min.css';

// layouts
import DefaultLayout from '@layouts/DefaultLayout';
// pages
import Home from '@pages/Home';
import Error from '@pages/Error';

// import BgImage1 from "/bg-1.jpg";
// import BgImage1 from "/bg-2.jpg";
import BgImage1 from "/bg-3.jpg";

import "./App.scss";
import { StoreProvider, useStoreActions } from 'easy-peasy';

function App() {
  const getUser = useStoreActions((actions) => actions.auth.getUser);

  useEffect(() => {
    getUser(2); // Fetch user data when the component mounts
  }, []);


  return (
    <div className="bg-cover bg-top bg-[#0492F5]"
      style={{ backgroundImage: `url(${BgImage1})` }}
    >
      <Routes>
        <Route path="/" element={
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        } />
        <Route path="*" element={
          <DefaultLayout>
            <Error />
          </DefaultLayout>
        } />
      </Routes>
    </div>
  );
}

export default App;
