'use client';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';
import { calendarIconEvents } from '../../../public/img';
import { useQuery } from 'react-query';
import { getEvents } from '../../app/(api)/api';
import dayjs from 'dayjs';
import { usePathname } from 'next/navigation';

const EventCards = () => {
  const pathname = usePathname();
  const language = pathname?.split('/')[1];
  const { data: eventData } = useQuery(
    ['eventsData'],
    async () => await getEvents(),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  return (
    <div className="container">
      <div className="row">
        {' '}
        <div
          className="gallery full-width"
          style={{ minHeight: '400px', display: 'flex' }}
        >
          <div className="posts" style={{ width: '100%' }}>
            <div className="row">
              {eventData?.map((item, index) => {
                const img_url =
                  'https://project141.s3.eu-north-1.amazonaws.com/' +
                  item?.thumbnailLink;
                const formattedStartDate = dayjs(item?.startDate).format(
                  'D MMM'
                );
                const formattedEndDate = dayjs(item?.endDate).format('D MMM');
                return (
                  <div
                    key={index}
                    className={`col-md-4
               items presentation wow fadeInUp`}
                    data-wow-delay=".4s"
                    style={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <div className="" key={item.id}>
                      <div
                        className="item mb-80 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        {' '}
                        <a
                          href={`/${pathname?.split('/')?.[1]}/events/${
                            item?.id
                          }`}
                        >
                          <Card
                            hoverable
                            style={{ width: 340 }}
                            cover={
                              <img
                                alt="example"
                                style={{ height: '250px', objectFit: 'cover' }}
                                src={img_url}
                              />
                            }
                          >
                            <Meta
                              title={
                                language === 'en'
                                  ? item?.titleEng
                                  : language === 'az'
                                  ? item?.titleAz
                                  : item?.titleRus
                              }
                              description={
                                <div
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '7px',
                                  }}
                                >
                                  {' '}
                                  <div>{calendarIconEvents}</div>
                                  <div style={{ marginBottom: '5px' }}>
                                    {formattedStartDate} - {formattedEndDate}
                                  </div>
                                </div>
                              }
                            />
                          </Card>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCards;
