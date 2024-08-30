import React from "react";
import Loading from "../../../components/Common/Loader";
import SliderHeader from "../../../components/Headers/SliderHeader";
import AboutUs from "../../../components/AboutUs/AboutUs1";
import Numbers from "../../../components/Numbers/Numbers1";
import Partners from "../../../components/Clients/Partners";
import Footer from "../../../components/Common/Footer";
import FullTestimonials from "../../../components/Testimonials/FullTestimonials";
import HomepageServicesSection from "../../../components/Services/HomepageServicesSection";
import Navbar from "../../../components/Common/Navbar";
import {
  getAbout,
  getCases,
  getContactData,
  getEvents,
  getLogo,
  getNews,
  getPartners,
  getServiceFAQ,
  getStatistics,
  getTestimonials,
} from "../../(api)/api";

export const metadata = {
  title: "MVP Agency",
};

const Home1 = async () => {
  const aboutData = await getAbout();
  const partnersData = await getPartners();
  const casesData = await getCases();
  const eventsData = await getEvents();
  const newsData = await getNews();
  const servicesFaqData = await getServiceFAQ();
  const statisticsData = await getStatistics();
  const testimonialsData = await getTestimonials();
  const contactData = await getContactData();
  const logo = await getLogo();

  return (
    <>
      <Loading />
      <Navbar logo={logo} />
      <SliderHeader cases={casesData} events={eventsData} news={newsData} />
      <div className="main-content">
        <AboutUs data={aboutData} />
        <Numbers data={statisticsData} />
        <Partners theme="dark" data={partnersData} />
        <HomepageServicesSection style="4item" FAQData={servicesFaqData} />
        {/* <Works /> */}
        <FullTestimonials data={testimonialsData} />
        <Footer contactData={contactData} />
      </div>
    </>
  );
};

export default Home1;
