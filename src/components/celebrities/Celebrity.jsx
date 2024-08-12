import React from 'react';
import LoadingScreen from '../Common/Loader';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import CelebrityDetailsPage from './CelebrityDetailsPage';
import { getLogo } from '../../app/(api)/api';

const Celebrity = ({ id, logo }) => {
  return (
    <>
      <LoadingScreen />
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <CelebrityDetailsPage id={id} />
      <Navbar logo={logo} />
      <Footer hideBGCOLOR={''} />
    </>
  );
};

export default Celebrity;
