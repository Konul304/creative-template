'use client';
import React from 'react';
//= Page components
import Loading from '../Common/Loader';
import Navbar from '../Common/Navbar';
import PageHeader from '../Headers/PageHeader';
import Footer from '../Common/Footer';
import EventDetails from './EventDetails';

const EventDetailsPage = (data) => {
  console.log(
    data?.data?.find((item) => item.id?.toString() === data?.id?.eventID)
  );
  const eventsData = data?.data?.find(
    (item) => item.id?.toString() === data?.id?.eventID
  );
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
      {/* <PageHeader
        title={eventsData?.title}
        paragraph="All the most current news and events of our creative team."
      /> */}
      <EventDetails data={data} />
      <Footer />
    </>
  );
};
export default EventDetailsPage;
