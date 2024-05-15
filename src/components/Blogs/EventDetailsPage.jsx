'use client';
import React from 'react';
//= Page components
import Loading from '../Common/Loader';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import EventDetails from './EventDetails';

const EventDetailsPage = (data) => {
  return (
    <>
      <Loading />
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar />
      <EventDetails data={data} />
      <Footer />
    </>
  );
};
export default EventDetailsPage;
