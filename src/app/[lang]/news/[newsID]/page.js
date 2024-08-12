import { getLogo, getNews } from '../../../(api)/api';
import NewsDetailsPage from '../../../../components/Blogs/NewsDetailsPage';
import React from 'react';

const page = async ({ params }) => {
  const data = await getNews();
  const logo = await getLogo();
  return (
    <>
      <NewsDetailsPage data={data} id={params} logo={logo} />
    </>
  );
};

export default page;
