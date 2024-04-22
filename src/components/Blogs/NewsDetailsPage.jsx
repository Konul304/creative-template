'use client';
import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import PageHeader from '@/components/Headers/PageHeader';
import Footer from '@/components/Common/Footer';
import NewsDetails from './NewsDetails';

export const metadata = {
  title: 'C141',
};

const NewsDetailsPage = (data) => {
  const newsData = data?.data?.find(
    (item) => item.id?.toString() === data?.id?.newsID
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
      <PageHeader
        title={newsData?.title}
        paragraph="All the most current news and events of our creative team."
      />
      <NewsDetails data={data} />
      <Footer />
    </>
  );
};
export default NewsDetailsPage;
