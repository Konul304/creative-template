import React from 'react';
//= Components
// import Image from './Details/Image';
import Content from './Details/Content';
import { Card } from 'antd';
import {
  callIcon,
  emailIcon,
  organizerIcon,
  organizerLocationIcon,
} from '../../../public/img';
import Link from 'next/link';
// import Pagination from "./Details/Pagination";
// import CommentsArea from "./Details/CommentsArea";
// import CommentsForm from "./Details/CommentsForm";
// import WorksStyle2 from '../Works/WorksStyle2';
// import SimilarNews from './SimilarNews';

const EventDetails = ({ theme, data }) => {
  const eventsData = data?.data?.find(
    (item) => item.id?.toString() === data?.id?.eventID
  );
  //   const hasImages = newsData?.newsImages && newsData?.newsImages.length > 0;
  //   const hasVideos = newsData?.newsVideos && newsData.newsVideos.length > 0;
  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          {/* <div className="col-lg-11"> */}
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
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              src={eventsData?.image}
              alt=""
            />
            <div
              style={{
                position: 'absolute',
                bottom: '10px', // Adjust as needed
                left: '200px', // Adjust as needed
                color: 'white',
                fontSize: '20px', // Adjust as needed
              }}
            >
              <div
                style={{
                  fontWeight: '500',
                  fontSize: '48px',
                  marginBottom: '20px',
                }}
              >
                {eventsData?.title}
              </div>
              <div
                style={{
                  fontWeight: '500',
                  fontSize: '16px',
                  marginBottom: '10px',
                }}
              >
                {eventsData?.date}
              </div>
              <div style={{ fontWeight: '500', fontSize: '12px' }}>
                {eventsData?.adress}
              </div>
            </div>
          </div>
          <Content data={eventsData} />
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
            {eventsData?.organizer && (
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
                  <div>{eventsData?.organizer?.name}</div>
                </div>
                <Link href="" style={{ display: 'flex', gap: '7px' }}>
                  <div>{organizerLocationIcon}</div>
                  <div>{eventsData?.organizer?.adress}</div>
                </Link>
              </Card>
            )}
            {eventsData?.ticketSeller && (
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
                  <div>{eventsData?.ticketSeller?.company}</div>
                </div>
                <a
                  href={`tel: ${eventsData?.ticketSeller?.phoneNumber}`}
                  style={{ display: 'flex', gap: '7px', marginBottom: '10px' }}
                >
                  <div>{callIcon}</div>
                  <div>{eventsData?.ticketSeller?.phoneNumber}</div>
                </a>
                <a
                  href={`mailto: ${eventsData?.ticketSeller?.email}`}
                  style={{ display: 'flex', gap: '7px', marginBottom: '10px' }}
                >
                  <div>{emailIcon}</div>
                  <div>{eventsData?.ticketSeller?.email}</div>
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
