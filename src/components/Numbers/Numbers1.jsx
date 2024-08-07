'use client';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import Split from '../Common/Split';
import { usePathname } from 'next/navigation';

const Numbers = ({ data }) => {
  const [renderCounters, setRenderCounters] = useState(false);
  const pathname = usePathname();
  const language = pathname?.split('/')[1];

  const azNumbersData = data?.map((item) => ({
    icon: item.icon,
    number: item.number,
    title: item.titleAz,
  }));
  const engNumbersData = data?.map((item) => ({
    icon: item.icon,
    number: item.number,
    title: item.titleEng,
  }));
  const rusNumbersData = data?.map((item) => ({
    icon: item.icon,
    number: item.number,
    title: item.titleRus,
  }));

  const dataToRender =
    language === 'en'
      ? engNumbersData
      : language === 'az'
      ? azNumbersData
      : rusNumbersData;

  useEffect(() => {
    let funFactsSection = document.querySelector('.number-sec');
    new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setRenderCounters(true);
      } else {
        setRenderCounters(false);
      }
    }).observe(funFactsSection);
  }, []);

  return (
    <section className="number-sec section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h3 className="wow color-font mb-4">
                {language === 'en'
                  ? 'STATISTICS'
                  : language === 'az'
                  ? 'STATİSTİKA'
                  : 'CТАТИСТИКА'}
              </h3>
            </div>
          </div>
        </div>
        <div className="row_statistics">
          {dataToRender?.map((item) => {
            const icon_url =
              'https://project141.s3.eu-north-1.amazonaws.com/' + item?.icon;
            return (
              <div className="col-md-2">
                <div className="item no-bord sm-mb50">
                  <img src={icon_url} alt="icon" />
                  <h3 className="mt-10">
                    &nbsp;
                    {renderCounters && (
                      <CountUp redraw={true} end={item?.number} duration="3">
                        <span className="count" />
                      </CountUp>
                    )}
                  </h3>
                  <Split>
                    <p className="wow txt words chars splitting" data-splitting>
                      {item?.title}
                    </p>
                  </Split>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Numbers;
