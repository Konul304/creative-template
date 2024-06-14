import React from 'react';
import LoadingScreen from '../../../components/Common/Loader';
import Navbar from '../../../components/Common/Navbar';
import Footer from '../../../components/Common/Footer';
import CelebritiesPage from '../../../components/Celebrities/CelebritiesPage';
import PageHeader from '../../../components/Headers/PageHeader';

const page = () => {
  return (
    <>
      <LoadingScreen />
      <Navbar theme={'dark'} />
      <CelebritiesPage />
      <Footer hideBGCOLOR={false} />
    </>
  );
};

export default page;
