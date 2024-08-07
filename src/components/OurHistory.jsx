'use client';
import HTMLReactParser from 'html-react-parser';
import { usePathname } from 'next/navigation';
import React from 'react';

const OurHistory = (data) => {
  const pathname = usePathname();
  const language = pathname?.split('/')[1];

  const azAboutData = {
    historyTitle: data?.data?.historyTitleAz,
    historyText: data?.data?.historyTextAz,
  };
  const engAboutData = {
    historyTitle: data?.data?.historyTitleEng,
    historyText: data?.data?.historyTextEng,
  };
  const rusAboutData = {
    historyTitle: data?.data?.historyTitleRus,
    historyText: data?.data?.historyTextRus,
  };

  const dataToRender =
    language === 'en'
      ? engAboutData
      : language === 'az'
      ? azAboutData
      : rusAboutData;

  const img_link =
    'https://project141.s3.eu-north-1.amazonaws.com/' +
    data?.data?.historyPhotoLink;

  return (
    <div>
      <header
        className="slider-stwo valign position-re"
        style={{ boxShadow: 'none' }}
      >
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
                  {language === 'en'
                    ? 'OUR HISTORY'
                    : language === 'az'
                    ? 'TARİXİMİZ'
                    : 'НАША ИСТОРИЯ'}
                </h1>
                {/* <p>{data?.data?.historyText}</p> */}
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
