'use client';
import React from 'react';
import Loading from '../Common/Loader';
import Navbar from '../Common/Navbar';
import PageHeader from '../Headers/PageHeader';
import Footer from '../Common/Footer';
import NewsDetails from './NewsDetails';
import { usePathname } from 'next/navigation';

export const metadata = {
  title: 'MVP Agency',
};

const NewsDetailsPage = ({ data, logo, id }) => {
  const pathname = usePathname();
  const language = pathname?.split('/')[1];
  const newsData = data?.find((item) => item.id?.toString() === id?.newsID);
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
      <PageHeader
        title={
          language === 'en'
            ? newsData?.titleEng
            : language === 'az'
            ? newsData?.titleAz
            : newsData?.titleRus
        }
        paragraph="All the most current news and events of our creative team."
      />
      <NewsDetails data={data} id={id?.newsID} />
      <Footer />
    </>
  );
};
export default NewsDetailsPage;
