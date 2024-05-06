import React from 'react';
import EventDetailsPage from '../../../../components/Blogs/EventDetailsPage';

const data = [
  {
    id: 1,
    image:
      'https://project141.s3.eu-north-1.amazonaws.com/images/1bb6206b-e829-4c8a-aa8c-a42c4d616e1b-1U6A4768.jpg',
    title: 'Red Bull Car Park Drift 2024',
    date: '8 – 9 İyun 2024',
    adress: 'Baku,Azerbaijan',
    content: {
      heading1:
        'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum',
      paragraph:
        'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum',
    },

    organizer: {
      name: 'Veyseloglu LLC',
      adress: 'Keshle SettleMent',
    },
    ticketSeller: {
      company: 'ticket seller',
      phoneNumber: '+99412',
      email: 'info@tickets.az',
    },
  },
  {
    id: 2,
    image:
      'https://project141.s3.eu-north-1.amazonaws.com/images/1bb6206b-e829-4c8a-aa8c-a42c4d616e1b-1U6A4768.jpg',
    title: 'Red Bull Car Park Drift 2024',
    date: 'May 6 2024',
    adress: 'Baku,Azerbaijan',
    content: {
      heading1:
        'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum',
      paragraph:
        'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum',
    },
    organizer: {
      name: 'Veyseloglu LLC',
      adress: 'Keshle SettleMent',
    },
    ticketSeller: {
      company: 'ticket seller',
      phoneNumber: '+99412',
      email: 'info@tickets.az',
    },
  },
];
const page = async ({ params }) => {
  /// await getData
  return (
    <>
      <EventDetailsPage data={data} id={params} />
    </>
  );
};

export default page;
