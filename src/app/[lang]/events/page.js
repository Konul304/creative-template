'use client';
import React from 'react';
import Loading from '../../../components/Common/Loader';
import Navbar from '../../../components/Common/Navbar';
import PageHeader from '../../../components/Headers/PageHeader';
import EventCards from '../../../components/events/EventCards';
import Footer from '../../../components/Common/Footer';
import { usePathname } from 'next/navigation';
import { getLogo } from '../../(api)/api';

const page = async () => {
  const pathname = usePathname();
  const language = pathname?.split('/')[1];
  const logo = await getLogo();
  return (
    <>
      <Loading />
      <Navbar logo={logo} />
      <PageHeader
        title={
          language === 'en'
            ? 'OUR EVENTS'
            : language === 'az'
            ? 'TƏDBİRLƏR'
            : 'МЕРОПРИЯТИЯ'
        }
      />
      <EventCards />
      <Footer />
    </>
  );
};

export default page;
