import React from 'react';
import Loading from '../../../components/Common/Loader';
import Navbar from '../../../components/Common/Navbar';
import PageHeader from '../../../components/Headers/PageHeader';
import EventCards from '../../../components/events/EventCards';

const page = () => {
  return (
    <>
      {' '}
      <Loading />
      {/* <div className="circle-bg">
    <div className="circle-color fixed">
      <div className="gradient-circle"></div>
      <div className="gradient-circle two"></div>
    </div>
  </div> */}
      <Navbar />
      <PageHeader title="Our Events" />
      <EventCards />
    </>
  );
};

export default page;
