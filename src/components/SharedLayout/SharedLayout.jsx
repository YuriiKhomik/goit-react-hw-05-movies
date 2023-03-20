import React from 'react';
// import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { SuspenseComponent } from 'components/Suspense';
import { NavBar } from 'components/NavBar';

export const SharedLayout = () => {
  return (
    <div>
      <NavBar />

      {/* <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense> */}
      <SuspenseComponent />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};
