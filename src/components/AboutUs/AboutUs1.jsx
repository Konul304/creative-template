'use client';
import React from 'react';
import aboutData from '../../data/about-us1.json';
import HTMLReactParser from 'html-react-parser';
import { usePathname } from 'next/navigation';

const AboutUs1 = (data) => {
  const pathname = usePathname();
  const language = pathname?.split('/')[1];

  const azAboutData = {
    wePhotoLink: data?.data?.wePhotoLink,
    weTitle: data?.data?.weTitleAz,
    weText: data?.data?.weTextAz,
  };
  const engAboutData = {
    wePhotoLink: data?.data?.wePhotoLink,
    weTitle: data?.data?.weTitleEng,
    weText: data?.data?.weTextEng,
  };
  const rusAboutData = {
    wePhotoLink: data?.data?.wePhotoLink,
    weTitle: data?.data?.weTitleRus,
    weText: data?.data?.weTextRus,
  };

  const dataToRender =
    language === 'en'
      ? engAboutData
      : language === 'az'
      ? azAboutData
      : rusAboutData;

  const img_link =
    'https://project141.s3.eu-north-1.amazonaws.com/' +
    dataToRender?.wePhotoLink;

  return (
    <section className="about-us section-padding">
      <div className="container">
        <div
          style={{
            margin: '0px auto 50px',
            color: '#fff',
            fontSize: '32px',
          }}
        >
          {language === 'az'
            ? 'ƏN DƏYƏRLİ PARTNYORUNUZ'
            : language === 'en'
            ? 'YOUR MOST VALUABLE PARTNER'
            : 'ВАШ САМЫЙ ЦЕННЫЙ ПАРТНЕР'}
        </div>
        <div className="row">
          <div className="col-lg-5 valign md-mb50">
            <div className="mb-50">
              <h6 className="fw-100 text-u ls10 mb-10 fw-500">
                {language === 'en'
                  ? 'About us'
                  : language === 'az'
                  ? 'Haqqımızda'
                  : 'О нас'}
              </h6>

              <h3 className="fw-600 text-u ls1 mb-30 color-font">
                {dataToRender?.weTitle &&
                  HTMLReactParser(dataToRender?.weTitle)}
              </h3>
              <p>
                {dataToRender?.weText && HTMLReactParser(dataToRender?.weText)}
              </p>
              <a
                href={`/${pathname?.split('/')?.[1]}/about`}
                className="butn bord curve mt-30"
              >
                <span>
                  {language === 'az'
                    ? 'DAHA ÇOX'
                    : language === 'en'
                    ? 'READ MORE'
                    : 'ДАЛЕЕ'}
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-7 img">
            <img src={img_link} alt={aboutData.title} />
            <div className="stauts"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs1;
