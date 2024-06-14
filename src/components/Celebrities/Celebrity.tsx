import React from 'react';
import LoadingScreen from '../Common/Loader';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import CelebrityDetailsPage from './CelebrityDetailsPage';

const Celebrity = (id: any) => {
  return (
    <>
      {' '}
      <LoadingScreen />
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <CelebrityDetailsPage data={[]} />
      <Navbar theme={''} />
      <Footer hideBGCOLOR={''} />
    </>
  );
};

export default Celebrity;
