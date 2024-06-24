import React from 'react';
import Celebrity from '../../../../components/celebrities/Celebrity';

const page = async ({ params }) => {
  console.log(params);
  return (
    <>
      <Celebrity id={params} />
    </>
  );
};

export default page;
