import React from 'react';
import Loading from '../../../components/Common/Loader';
import Navbar from '../../../components/Common/Navbar';
import PageHeader from '../../../components/Headers/PageHeader';
import EventCards from '../../../components/events/EventCards';
import Footer from '../../../components/Common/Footer';

const page = () => {
  return (
    <>
      <Loading />
      <Navbar />
      <PageHeader title="Our Events" />
      <EventCards />
      <Footer />
    </>
  );
};

export default page;
