import React from 'react';
import EventDetailsPage from '../../../../components/Blogs/EventDetailsPage';
import { getEvents } from '../../../(api)/api';

const page = async ({ params }) => {
  console.log(params);
  const data = await getEvents();
  return (
    <>
      <EventDetailsPage data={data} id={params} />
    </>
  );
};

export default page;
