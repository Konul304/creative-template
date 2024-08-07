'use client';
import React, { useEffect, useRef } from 'react';

const PagesHeader = (data) => {
  const fixedSlider = useRef();

  useEffect(() => {
    if (fixedSlider.current) {
      const MainContent = document.querySelector('.main-content');
      const slideHeight = fixedSlider.current.offsetHeight;
      MainContent.style.marginTop = slideHeight + 'px';
    }
  }, []);
  const img_link =
    'https://project141.s3.eu-north-1.amazonaws.com/' + data?.data?.wePhotoLink;

  return (
    <header
      ref={fixedSlider}
      className="works-header fixed-slider hfixd valign sub-bg"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="">
            <div className="about_header_img ">
              <img src={`${img_link}`} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="half sub-bg">
        <div className="circle-color">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
    </header>
  );
};

export default PagesHeader;
