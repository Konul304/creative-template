import React from 'react';
import Celebrity from '../../../../components/Celebrities/Celebrity';

const page = async ({ params }) => {
  console.log(params);
  return (
    <>
      <Celebrity id={params} />
    </>
  );
};

export default page;
