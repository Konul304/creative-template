import React from 'react';
import Navbar from '../../../components/Common/Navbar';
import PagesHeader from '../../../components/Headers/PagesHeader';
import AboutIntro from '../../../components/AboutUs/AboutIntro';
import Team from '../../../components/Team/Team1';
import Partners from '../../../components/Clients/Partners';
import Footer from '../../../components/Common/Footer';
import Loading from '../../../components/Common/Loader';
import OurHistory from '../../../components/OurHistory';

export const metadata = {
  title: 'MVP Agency',
};

const AboutDark = async () => {
  return (
    <>
      <Loading />
      <Navbar />
      <PagesHeader />
      <div className="main-content">
        <AboutIntro />
        <Partners theme="dark" />
        <OurHistory />
        <Team />
        <Footer />
      </div>
    </>
  );
};

export default AboutDark;
