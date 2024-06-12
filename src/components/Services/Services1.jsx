'use client';
import React from 'react';
import { getServiceDetail } from '../../app/(api)/api';
import { useQuery } from 'react-query';
import HTMLReactParser from 'html-react-parser';
import styles from '../../styles/Cases.module.scss';
import ReactPlayer from 'react-player';
import { usePathname } from 'next/navigation';

function Services1({ style, lines }) {
  const pathname = usePathname();
  const language = pathname?.split('/')[1];
  const { data } = useQuery(
    ['serviceDetails'],
    async () => await getServiceDetail(),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  const azServicesData = {
    title: data?.titleAz,
    videoLink: data?.videoLink,
    description: data?.descriptionAz,
  };
  const engServicesData = {
    title: data?.titleEng,
    videoLink: data?.videoLink,
    description: data?.descriptionEng,
  };
  const rusServicesData = {
    title: data?.titleRus,
    videoLink: data?.videoLink,
    description: data?.descriptionRus,
  };

  const dataToRender =
    language === 'en'
      ? engServicesData
      : language === 'az'
      ? azServicesData
      : rusServicesData;

  return (
    <section
      className={`services bords section-padding ${
        style === '4item' ? 'lficon' : lines ? '' : 'pt-0'
      }`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="sec-head  text-center ">
            <h3 style={{ fontSize: '48px' }} className="wow color-font">
              {' '}
              {dataToRender?.title && HTMLReactParser(dataToRender?.title)}
            </h3>
            <ReactPlayer
              url={dataToRender?.videoLink}
              width={1280}
              height={680}
              controls
              playing={true}
              style={{ width: '1240px', height: '680px' }}
              loop={true}
            />
          </div>

          <div className={styles.team_info}>
            {dataToRender?.description &&
              HTMLReactParser(dataToRender?.description)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services1;
