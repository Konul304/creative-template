import React from 'react';
import Loading from '../Common/Loader';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import EventDetails from './EventDetails';

const EventDetailsPage = ({ data, logo, id }) => {
  return (
    <>
      <Loading />
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar logo={logo} />
      <EventDetails data={data} id={id} />
      <Footer />
    </>
  );
};
export default EventDetailsPage;
