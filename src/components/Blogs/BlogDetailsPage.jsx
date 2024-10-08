'use client';
import React from 'react';
import Loading from '../Common/Loader';
import Navbar from '../Common/Navbar';
import PageHeader from '../Headers/PageHeader';
import BlogDetails from '../Blogs/BlogDetails';
import Footer from '../Common/Footer';
import { usePathname } from 'next/navigation';

export const metadata = {
  title: 'MVP Agency',
};

const BlogDetailsPage = ({ data, logo, id }) => {
  const pathname = usePathname();
  const language = pathname?.split('/')[1];
  const caseData = data?.find((item) => item.id?.toString() === id?.casesID);
  const azCaseData = {
    title: caseData?.titleAz,
  };
  const engCaseData = {
    title: caseData?.titleEng,
  };
  const rusCaseData = {
    title: caseData?.titleRus,
  };

  const dataToRender =
    language === 'en'
      ? engCaseData
      : language === 'az'
      ? azCaseData
      : rusCaseData;

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
        title={dataToRender?.title}
        paragraph="All the most current news and events of our creative team."
      />
      <BlogDetails data={data} id={id?.casesID} />
      <Footer />
    </>
  );
};
export default BlogDetailsPage;
