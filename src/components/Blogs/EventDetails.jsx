'use client';
import React from 'react';
import EventContent from './Details/EventContent';
import { Card } from 'antd';
import {
  callIcon,
  emailIcon,
  organizerIcon,
  organizerLocationIcon,
} from '../../../public/img';
import Link from 'next/link';
import dayjs from 'dayjs';
import { usePathname } from 'next/navigation';

const EventDetails = ({ data, id }) => {
  const pathname = usePathname();
  const language = pathname?.split('/')[1];
  const eventsData = data?.find((item) => item.id?.toString() === id?.eventID);
  const img_url =
    'https://project141.s3.eu-north-1.amazonaws.com/' + eventsData?.logoLink;
  const formattedStartDate = dayjs(eventsData?.startDate).format('D MMM');
  const formattedEndDate = dayjs(eventsData?.endDate).format('D MMM');

  const azEventData = {
    title: eventsData?.titleAz,
    location: eventsData?.locationAz,
    organizerName: eventsData?.organizerNameAz,
    organizerAddress: eventsData?.organizerAddressAz,
    ticketSellerName: eventsData?.ticketSellerNameAz,
  };
  const engEventData = {
    title: eventsData?.titleEng,
    location: eventsData?.locationEng,
    organizerName: eventsData?.organizerNameEng,
    organizerAddress: eventsData?.organizerAddressEng,
    ticketSellerName: eventsData?.ticketSellerNameEng,
  };
  const rusEventData = {
    title: eventsData?.titleRus,
    location: eventsData?.locationRus,
    organizerName: eventsData?.organizerNameRus,
    organizerAddress: eventsData?.organizerAddressRus,
    ticketSellerName: eventsData?.ticketSellerNameRus,
  };

  const dataToRender =
    language === 'en'
      ? engEventData
      : language === 'az'
      ? azEventData
      : rusEventData;

  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="case_header_img"
            style={{ position: 'relative', height: '650px' }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage:
                  'linear-gradient(to bottom, rgba(245, 246, 252, 0.52),  rgb(37 10 226 / 73%))',
              }}
            ></div>
            <img
              style={{
                width: '100vw',
                height: '100%',
                objectFit: 'cover',
              }}
              src={img_url}
              alt=""
            />
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '200px',
                color: 'white',
                fontSize: '20px',
              }}
            >
              <div
                style={{
                  fontWeight: '500',
                  fontSize: '48px',
                  marginBottom: '20px',
                }}
              >
                {dataToRender?.title}
              </div>
              <div
                style={{
                  fontWeight: '500',
                  fontSize: '16px',
                  marginBottom: '10px',
                }}
              >
                {formattedStartDate} - {formattedEndDate}
              </div>
              <div style={{ fontWeight: '500', fontSize: '12px' }}>
                {dataToRender?.location}
              </div>
            </div>
          </div>
          <EventContent data={eventsData} />
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              gap: '100px',
              width: '100%',
              marginLeft: '100px',
              marginTop: '100px',
            }}
          >
            {dataToRender?.organizerName && (
              <Card
                title="TƏŞKİLATÇI"
                bordered={false}
                style={{
                  width: 300,
                  background:
                    'linear-gradient(-30deg, rgb(86 64 242), #ffffff)',
                }}
              >
                <div
                  style={{ display: 'flex', gap: '7px', marginBottom: '10px' }}
                >
                  <div>{organizerIcon}</div>
                  <div>{dataToRender?.organizerName}</div>
                </div>
                <Link
                  href={`${eventsData?.organizerAddressLink}`}
                  style={{ display: 'flex', gap: '7px' }}
                >
                  <div>{organizerLocationIcon}</div>
                  <div>{dataToRender?.organizerAddress}</div>
                </Link>
              </Card>
            )}
            {dataToRender?.ticketSellerName && (
              <Card
                title="BİLET SATICI"
                bordered={false}
                style={{
                  width: 300,
                  background:
                    'linear-gradient(-30deg, rgb(86 64 242), #ffffff)',
                }}
              >
                <div
                  style={{ display: 'flex', gap: '7px', marginBottom: '10px' }}
                >
                  <div>{organizerIcon}</div>
                  <div>{dataToRender?.ticketSellerName}</div>
                </div>
                <a
                  href={`tel: ${eventsData?.ticketSellerPhoneNumber}`}
                  style={{ display: 'flex', gap: '7px', marginBottom: '10px' }}
                >
                  <div>{callIcon}</div>
                  <div>{eventsData?.ticketSellerPhoneNumber}</div>
                </a>
                <a
                  href={`mailto: ${eventsData?.ticketSellerEmail}`}
                  style={{ display: 'flex', gap: '7px', marginBottom: '10px' }}
                >
                  <div>{emailIcon}</div>
                  <div>{eventsData?.ticketSellerEmail}</div>
                </a>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
