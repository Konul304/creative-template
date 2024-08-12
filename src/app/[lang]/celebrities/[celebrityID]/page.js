import React from 'react';
import Celebrity from '../../../../components/celebrities/Celebrity';
import { getLogo } from '../../../(api)/api';

const page = async ({ params }) => {
  const logo = await getLogo();
  return (
    <>
      <Celebrity id={params} logo={logo} />
    </>
  );
};

export default page;
