'use client';
import React from 'react';
import Loading from '../../../components/Common/Loader';
import Navbar from '../../../components/Common/Navbar';
import PageHeader from '../../../components/Headers/PageHeader';
import Footer from '../../../components/Common/Footer';
import CasesGrid from '../../../components/Blogs/CasesGrid';
import { usePathname } from 'next/navigation';
import { getLogo } from '../../(api)/api';

const CasesPage = async () => {
  const pathname = usePathname();
  const language = pathname?.split('/')[1];
  const logo = await getLogo();
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
            ? 'OUR CASES'
            : language === 'az'
            ? 'OUR CASES'
            : 'НАШИ КЕЙСЫ'
        }
        paragraph="All the most current news and events of our creative team."
      />
      <CasesGrid />
      <Footer />
    </>
  );
};

export default CasesPage;
