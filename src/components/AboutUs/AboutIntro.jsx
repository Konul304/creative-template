'use client';
import HTMLReactParser from 'html-react-parser';
import { usePathname } from 'next/navigation';
import React from 'react';

const AboutIntro = (data) => {
  const pathname = usePathname();
  const language = pathname?.split('/')[1];
  const azAboutData = {
    weTitle: data?.data?.data?.data?.weTitleAz,
    weText: data?.data?.weTextAz,
  };
  const engAboutData = {
    weTitle: data?.data?.weTitleEng,
    weText: data?.data?.weTextEng,
  };
  const rusAboutData = {
    weTitle: data?.data?.weTitleRus,
    weText: data?.data?.weTextRus,
  };

  const dataToRender =
    language === 'en'
      ? engAboutData
      : language === 'az'
      ? azAboutData
      : rusAboutData;

  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>
                {language === 'en'
                  ? 'WHO WE ARE?'
                  : language === 'az'
                  ? 'BİZ KİMİK?'
                  : 'КТО МЫ?'}
              </h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <p className="wow txt mb-10 words chars splitting" data-splitting>
                <div>
                  {dataToRender?.weText &&
                    HTMLReactParser(dataToRender?.weText)}
                </div>
              </p>
              {/* <p className="wow txt words chars splitting" data-splitting>
                {AboutInfo1Data.paragraph2}
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
