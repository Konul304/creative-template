import React from 'react';
import Navbar from '../../../components/Common/Navbar';
import PagesHeader from '../../../components/Headers/PagesHeader';
import AboutIntro from '../../../components/AboutUs/AboutIntro';
import Team from '../../../components/Team/Team1';
import Partners from '../../../components/Clients/Partners';
import Footer from '../../../components/Common/Footer';
import Loading from '../../../components/Common/Loader';
import OurHistory from '../../../components/OurHistory';
import {
  getAbout,
  getContactData,
  getPartners,
  getTeamMembers,
  getTeamMembersImages,
} from '../../(api)/api';

export const metadata = {
  title: 'MVP Agency',
};

const AboutDark = async () => {
  const aboutData = await getAbout();
  const historyData = await getAbout();
  const partnersData = await getPartners();
  const teamData = await getTeamMembers();
  const contactData = await getContactData();
  const teamImagesData = await getTeamMembersImages();
  return (
    <>
      <Loading />
      <Navbar />
      <PagesHeader data={aboutData} />
      <div className="main-content">
        <AboutIntro data={aboutData} />
        <Partners theme="dark" data={partnersData} />
        <OurHistory data={historyData} />
        <Team data={teamData} teamImagesData={teamImagesData} />
        <Footer contactData={contactData} />
      </div>
    </>
  );
};

export default AboutDark;
