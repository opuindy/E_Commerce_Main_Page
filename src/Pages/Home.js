import React from 'react';
import { Outlet } from 'react-router-dom';
import MainPage from '../components/MainPage';
import { GlobalStyle } from '../components/mainPageStyles';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <MainPage />
      <Outlet />
    </>
  );
};

export default Home;
