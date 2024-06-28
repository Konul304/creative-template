'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import styles from '../../styles/Celebrities.module.scss';
import Content from '../Blogs/Details/Content';
import { medal } from '../../../public/img';
import dayjs from 'dayjs';
import { useQuery } from 'react-query';
import { getCelebrities } from '../../app/(api)/api';
import HTMLReactParser from 'html-react-parser';

const CelebrityDetailsPage = ({ id }) => {
  const pathname = usePathname();
  const language = pathname?.split('/')[1];
  const { data } = useQuery(
    ['celebrityData'],
    async () => await getCelebrities(),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
  const celebrityData = data?.find(
    (item) => item.id?.toString() === id?.id?.celebrityID
  );

  const img_url =
    'https://project141.s3.eu-north-1.amazonaws.com/' +
    celebrityData?.backgroundImage;

  const azCelebrityData = {
    description: celebrityData?.descriptionAz,
  };
  const engCelebrityData = {
    description: celebrityData?.descriptionEng,
  };
  const rusCelebrityData = {
    description: celebrityData?.descriptionRus,
  };

  const birthDate = new Date(celebrityData?.birthdate);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  const dataToRender =
    language === 'en'
      ? engCelebrityData
      : language === 'az'
      ? azCelebrityData
      : rusCelebrityData;

  const profile_img =
    'https://project141.s3.eu-north-1.amazonaws.com/' +
    celebrityData?.profileImage;

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
              src={img_url}
              alt="bgImage"
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
                    src={profile_img}
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
                      {celebrityData?.fullname}
                    </div>
                    <div
                      style={{
                        fontWeight: '500',
                        fontSize: '16px',
                        marginBottom: '10px',
                      }}
                    >
                      {celebrityData?.country} - {celebrityData?.field}
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '10px' }}>
                  <a
                    style={{ marginRight: '30px' }}
                    href={`${celebrityData?.instagram}`}
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href={`${celebrityData?.facebook}`}>
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
              {dataToRender?.description &&
                HTMLReactParser(dataToRender?.description)}
            </div>
            <div className={styles.info_card}>
              <div className={styles.item}>
                <div className={styles.title}>Date of birth</div>
                <div className={styles.description}>
                  {dayjs(celebrityData?.birthdate).format('D MMM YYYY')}
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.title}>Place of birth</div>
                <div className={styles.description}>
                  {celebrityData?.birthPlace}
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.title}>Age</div>
                <div className={styles.description}>{age}</div>
              </div>
              <div className={styles.item}>
                <div className={styles.title}>Nationality</div>
                <div className={styles.description}>
                  {celebrityData?.country}
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.title}>Career start</div>
                <div className={styles.description}>
                  {celebrityData?.careerStart}
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.title}>Disciplines</div>
                <div className={styles.description}>{celebrityData?.field}</div>
              </div>
            </div>
            <Content data={celebrityData} />
            <div
              className={styles.celebrity_list}
              style={{ marginTop: '30px' }}
            >
              <div className={styles.achievements}>
                <span style={{ marginRight: '20px', paddingTop: '6px' }}>
                  {medal}
                </span>
                Achievements
              </div>
              {celebrityData?.celebrityAchievements?.map(
                (achievement, index) => (
                  <div
                    key={index}
                    className={styles.celebrity_item}
                    style={{ cursor: 'default' }}
                  >
                    <div className={styles.celebrity_info}>
                      <h2 className={styles.celebrity_name}>
                        {achievement?.place}
                        {achievement?.place == '1'
                          ? 'st'
                          : achievement?.place == '2'
                          ? 'nd'
                          : achievement?.place == '3'
                          ? 'rd'
                          : 'th'}{' '}
                        Place:{' '}
                        {language === 'en'
                          ? achievement?.nameEng
                          : language === 'az'
                          ? achievement?.nameAz
                          : achievement?.nameRus}
                      </h2>
                      <div style={{ fontSize: '12px', marginTop: '15px' }}>
                        {dayjs(achievement?.date).format('YYYY')} -{' '}
                        {achievement?.country}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CelebrityDetailsPage;
