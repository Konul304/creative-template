import { getNews } from '@/app/(api)/api';
import NewsDetailsPage from '@/components/Blogs/NewsDetailsPage';
import React from 'react';

const page = async ({ params }) => {
  const data = await getNews();
  return (
    <>
      <NewsDetailsPage data={data} id={params} />
    </>
  );
};

export default page;
