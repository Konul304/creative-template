import React from 'react';
import Loading from '../../../components/Common/Loader';
import SliderHeader from '../../../components/Headers/SliderHeader';
import AboutUs from '../../../components/AboutUs/AboutUs1';
import Numbers from '../../../components/Numbers/Numbers1';
import Partners from '../../../components/Clients/Partners';
import Footer from '../../../components/Common/Footer';
import Works from '../../../components/Works/Works1';
import FullTestimonials from '../../../components/Testimonials/FullTestimonials';
import HomepageServicesSection from '../../../components/Services/HomepageServicesSection';
import Navbar from '../../../components/Common/Navbar';

export const metadata = {
  title: 'C141',
};

const Home1 = async () => {
  return (
    <>
      <Loading />
      <Navbar />
      <SliderHeader />
      <div className="main-content">
        <AboutUs />
        <Numbers />
        <Partners theme="dark" />
        <HomepageServicesSection style="4item" />
        <Works />
        <FullTestimonials />
        <Footer />
      </div>
    </>
  );
};

export default Home1;
