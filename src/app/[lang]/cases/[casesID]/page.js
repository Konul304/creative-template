import { getCases } from '../../../(api)/api';
import BlogDetailsPage from '../../../../components/Blogs/BlogDetailsPage';
import React from 'react';

const page = async ({ params }) => {
  console.log(params);
  const data = await getCases();
  return (
    <>
      <BlogDetailsPage data={data} id={params} />
    </>
  );
};

export default page;
