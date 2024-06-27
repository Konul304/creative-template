'use client';
import React from 'react';
import aboutData from '../../data/about-us1.json';
import { getAbout } from '../../app/(api)/api';
import { useQuery } from 'react-query';
import HTMLReactParser from 'html-react-parser';
import { usePathname } from 'next/navigation';

const AboutUs1 = () => {
  const pathname = usePathname();
  const language = pathname?.split('/')[1];

  const { data } = useQuery(['aboutData'], async () => await getAbout(), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  const azAboutData = {
    wePhotoLink: data?.wePhotoLink,
    weTitle: data?.weTitleAz,
    weText: data?.weTextAz,
  };
  const engAboutData = {
    wePhotoLink: data?.wePhotoLink,
    weTitle: data?.weTitleEng,
    weText: data?.weTextEng,
  };
  const rusAboutData = {
    wePhotoLink: data?.wePhotoLink,
    weTitle: data?.weTitleRus,
    weText: data?.weTextRus,
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
            ? 'Ən Dəyərli Partnyorunuz'
            : language === 'en'
            ? 'YOUR MOST VALUABLE PARTNER'
            : 'Ваш самый ценный партнер'}
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
                    ? 'Daha çox'
                    : language === 'en'
                    ? 'Read more'
                    : 'Далее'}
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
