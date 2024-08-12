import { getCases, getLogo } from '../../../(api)/api';
import BlogDetailsPage from '../../../../components/Blogs/BlogDetailsPage';
import React from 'react';

const page = async ({ params }) => {
  const data = await getCases();
  const logo = await getLogo();
  return (
    <>
      <BlogDetailsPage data={data} id={params} logo={logo} />
    </>
  );
};

export default page;
