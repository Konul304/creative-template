'use client';
import React from 'react';
import Loading from '../../../components/Common/Loader';
import Navbar from '../../../components/Common/Navbar';
import PageHeader from '../../../components/Headers/PageHeader';
import EventCards from '../../../components/events/EventCards';
import Footer from '../../../components/Common/Footer';
import { usePathname } from 'next/navigation';

const page = () => {
  const pathname = usePathname();
  const language = pathname?.split('/')[1];
  return (
    <>
      <Loading />
      <Navbar />
      <PageHeader
        title={
          language === 'en'
            ? 'Our Events'
            : language === 'az'
            ? 'Tədbirlər'
            : 'Мероприятия'
        }
      />
      <EventCards />
      <Footer />
    </>
  );
};

export default page;
