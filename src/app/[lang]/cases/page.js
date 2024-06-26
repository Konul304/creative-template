'use client';
import React from 'react';
import Loading from '../../../components/Common/Loader';
import Navbar from '../../../components/Common/Navbar';
import PageHeader from '../../../components/Headers/PageHeader';
import Footer from '../../../components/Common/Footer';
import CasesGrid from '../../../components/Blogs/CasesGrid';
import { usePathname } from 'next/navigation';

const CasesPage = async () => {
  const pathname = usePathname();
  const language = pathname?.split('/')[1];
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
        title={
          language === 'en'
            ? 'Our Cases'
            : language === 'az'
            ? 'Our Cases'
            : 'Наши кейсы'
        }
        paragraph="All the most current news and events of our creative team."
      />
      <CasesGrid />
      <Footer />
    </>
  );
};

export default CasesPage;
