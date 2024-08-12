import React from 'react';
import EventDetailsPage from '../../../../components/Blogs/EventDetailsPage';
import { getEvents, getLogo } from '../../../(api)/api';

const page = async ({ params }) => {
  const data = await getEvents();
  const logo = await getLogo();

  return (
    <>
      <EventDetailsPage data={data} id={params} logo={logo} />
    </>
  );
};

export default page;
