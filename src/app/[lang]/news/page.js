import React from 'react';
//= Page components
import Loading from '../../../components/Common/Loader';
import Navbar from '../../../components/Common/Navbar';
import PageHeader from '../../../components/Headers/PageHeader';
import BlogGrid from '../../../components/Blogs/BlogGrid';
import Footer from '../../../components/Common/Footer';

export const metadata = {
  title: 'C141',
};

const NewsPage = async () => {
  return (
    <>
      <Loading />
      {/* <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div> */}
      <Navbar />
      <PageHeader title="Our News" />
      <BlogGrid />
      <Footer />
    </>
  );
};

export default NewsPage;
