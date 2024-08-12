import React from 'react';
import LoadingScreen from '../../../components/Common/Loader';
import Navbar from '../../../components/Common/Navbar';
import Footer from '../../../components/Common/Footer';
import CelebritiesPage from '../../../components/celebrities/CelebritiesPage';
import { getLogo } from '../../(api)/api';

const page = async () => {
  const logo = await getLogo();
  return (
    <>
      <LoadingScreen />
      <Navbar logo={logo} />
      <CelebritiesPage />
      <Footer />
    </>
  );
};

export default page;
