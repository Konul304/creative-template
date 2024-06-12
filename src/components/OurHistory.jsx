'use client';
import { getAbout } from '../app/(api)/api';
import HTMLReactParser from 'html-react-parser';
import { usePathname } from 'next/navigation';
import React from 'react';
import { useQuery } from 'react-query';

const OurHistory = () => {
  const pathname = usePathname();
  const language = pathname?.split('/')[1];
  const { data } = useQuery(['aboutData'], async () => await getAbout(), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const azAboutData = {
    historyTitle: data?.historyTitleAz,
    historyText: data?.historyTextAz,
  };
  const engAboutData = {
    historyTitle: data?.historyTitleEng,
    historyText: data?.historyTextEng,
  };
  const rusAboutData = {
    historyTitle: data?.historyTitleRus,
    historyText: data?.historyTextRus,
  };

  const dataToRender =
    language === 'en'
      ? engAboutData
      : language === 'az'
      ? azAboutData
      : rusAboutData;

  const img_link =
    'https://project141.s3.eu-north-1.amazonaws.com/' + data?.historyPhotoLink;

  return (
    <div>
      <header className="slider-stwo valign position-re">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="img">
                <img src={`${img_link}`} alt="" />
              </div>
            </div>
            <div className="col-lg-7 valign">
              <div className="cont">
                <h1 className="wow color-font  mb-50 fw-700 ">
                  {dataToRender?.historyTitle}
                </h1>
                {/* <p>{data?.historyText}</p> */}
                <div>
                  {dataToRender?.historyText &&
                    HTMLReactParser(dataToRender?.historyText)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default OurHistory;
