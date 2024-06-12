'use client';
import { getAbout } from '../../app/(api)/api';
import React, { useEffect, useRef } from 'react';
import { useQuery } from 'react-query';

const PagesHeader = () => {
  const fixedSlider = useRef();
  const { data } = useQuery(['aboutData'], async () => await getAbout(), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  useEffect(() => {
    if (fixedSlider.current) {
      const MainContent = document.querySelector('.main-content');
      const slideHeight = fixedSlider.current.offsetHeight;
      MainContent.style.marginTop = slideHeight + 'px';
    }
  }, []);
  const img_link =
    'https://project141.s3.eu-north-1.amazonaws.com/' + data?.wePhotoLink;

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
