import React from 'react';

const Image = (data) => {
  // const img_url =
  //   'https://project141.s3.eu-north-1.amazonaws.com/' + data?.data?.image;
  return (
    <div className="case_header_img">
      <img src={data?.data?.image} alt="" />
    </div>
  );
};

export default Image;
