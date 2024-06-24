import React from 'react';
import LoadingScreen from '../../../components/Common/Loader';
import Navbar from '../../../components/Common/Navbar';
import Footer from '../../../components/Common/Footer';
import CelebritiesPage from '../../../components/celebrities/CelebritiesPage';

const page = () => {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <CelebritiesPage />
      <Footer />
    </>
  );
};

export default page;
