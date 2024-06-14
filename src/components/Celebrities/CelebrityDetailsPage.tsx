'use client';
import React from 'react';
import dayjs from 'dayjs';
import { usePathname } from 'next/navigation';
import styles from '../../styles/Celebrities.module.scss';
import Content from '../Blogs/Details/Content';
import { medal } from '../../../public/img';

const listData = [
  {
    id: 1,
    name: '1st Plave: Egyptian Super Cup',
    date: '2023 - Egypt',
  },
  {
    id: 1,
    name: '1st Plave: Egyptian Super Cup',
    date: '2023 - Egypt',
  },
  {
    id: 1,
    name: '1st Plave: Egyptian Super Cup',
    date: '2023 - Egypt',
  },
  {
    id: 1,
    name: '1st Plave: Egyptian Super Cup',
    date: '2023 - Egypt',
  },
];

const CelebrityDetailsPage = ({ data }) => {
  const pathname = usePathname();
  const language = pathname?.split('/')[1];
  const eventsData = data?.data?.find(
    (item) => item.id?.toString() === data?.id?.eventID
  );
  const img_url =
    'https://project141.s3.eu-north-1.amazonaws.com/' + eventsData?.logoLink;
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
                border: 'none',
                backgroundImage:
                  'linear-gradient(rgba(245, 246, 252, 0.52), rgb(37 23 136 / 73%))',
              }}
            ></div>
            <img
              style={{
                width: '100vw',
                height: '100%',
                objectFit: 'cover',
              }}
              src={
                'https://img.redbull.com/images/c_crop,x_0,y_3,h_2787,w_4180/c_fill,w_1700,h_1100/q_auto,f_auto/redbullcom/2020/12/9/joytbf9g7obwgq7zzulb/nicola-abadjiev-sofia-2020'
              }
              alt=""
            />
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '0px',
                color: 'white',
                fontSize: '20px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  width: '100vw',
                  justifyContent: 'space-evenly',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                  }}
                >
                  <img
                    src={`https://img.redbull.com/images/c_crop,x_0,y_61,h_3196,w_3196/c_fill,w_150,h_150/q_auto,f_auto/redbullcom/2022/4/26/k1wzshxsxnoiwflkgh9n/antonia-abraham-portrait`}
                    alt={'celebrity'}
                    className={styles.celebrity_image}
                    style={{
                      width: '120px',
                      height: '120px',
                      marginRight: '40px',
                      marginBottom: '20px',
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontWeight: '500',
                        fontSize: '48px',
                        marginBottom: '20px',
                      }}
                    >
                      Nicola Abadjiev
                    </div>
                    <div
                      style={{
                        fontWeight: '500',
                        fontSize: '16px',
                        marginBottom: '10px',
                      }}
                    >
                      Bulgaria - Kitesurfing
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '10px' }}>
                  <a
                    style={{ marginRight: '30px' }}
                    href="https://www.instagram.com/creative_141?igsh=ZjZtZjAxcGdoMjJh"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.facebook.com/c141worldwide?mibextid=ZbWKwL">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="container"
            style={{
              marginTop: '50px',
            }}
          >
            <div
              style={{
                maxWidth: '850px',
                margin: '0 auto',
                textAlign: 'center',
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              commodi obcaecati culpa consectetur rem ullam esse neque corporis
              similique? Explicabo, sint ex? Ex ipsa dolorum nam mollitia ipsum
              quo provident?Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Eveniet, dolore maiores. Doloribus aut architecto ullam
              quis, nulla dicta vel facere consequuntur quaerat nesciunt
              voluptas neque doloremque, animi laboriosam explicabo praesentium.
            </div>
            <div className={styles.info_card}>
              <div className={styles.item}>
                <div className={styles.title}>Date of birth</div>
                <div className={styles.description}>27 January 2000</div>
              </div>
              <div className={styles.item}>
                <div className={styles.title}>Place of birth</div>
                <div className={styles.description}>Sofia</div>
              </div>
              <div className={styles.item}>
                <div className={styles.title}>Age</div>
                <div className={styles.description}>24</div>
              </div>
              <div className={styles.item}>
                <div className={styles.title}>Nationality</div>
                <div className={styles.description}>Bulgaria</div>
              </div>
              <div className={styles.item}>
                <div className={styles.title}>Career start</div>
                <div className={styles.description}>2012</div>
              </div>
              <div className={styles.item}>
                <div className={styles.title}>Disciplines</div>
                <div className={styles.description}>Kitesurfing wave</div>
              </div>
            </div>
            <Content data={[]} />
            <div className={styles.celebrity_list}>
              <div className={styles.achievements}>
                <span style={{ marginRight: '20px', paddingTop: '6px' }}>
                  {medal}
                </span>
                Achievements
              </div>
              {listData?.map((celebrity, index) => (
                <div
                  onClick={() =>
                    window.open(
                      `/${pathname?.split('/')?.[1]}/celebrities/${
                        celebrity?.id
                      }`,
                      '_blank'
                    )
                  }
                  key={index}
                  className={styles.celebrity_item}
                  style={{ cursor: 'default' }}
                >
                  <div className={styles.celebrity_info}>
                    <h2 className={styles.celebrity_name}>{celebrity.name}</h2>
                    <div style={{ fontSize: '12px', marginTop: '15px' }}>
                      {celebrity?.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CelebrityDetailsPage;
