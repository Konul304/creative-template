import React from "react";
import Navbar from "../../../components/Common/Navbar";
import Footer from "../../../components/Common/Footer";
import Loading from "../../../components/Common/Loader";
import Services1 from "../../../components/Services/Services1";
import BlogStanderd from "../../../components/Blogs/ServicesFAQ";
import { getContactData, getLogo } from "../../(api)/api";

const Services = async () => {
  const logo = await getLogo();
  const contactData = await getContactData();

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
      <div className="main-content">
        <Services1 style="4item" />
        <BlogStanderd />
        <Footer contactData={contactData} />
      </div>
    </>
  );
};
export default Services;
