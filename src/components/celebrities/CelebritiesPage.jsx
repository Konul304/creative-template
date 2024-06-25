'use client';
import React from 'react';
import styles from '../../styles/Celebrities.module.scss';
import { usePathname } from 'next/navigation';
import { useQuery } from 'react-query';
import { getCelebrities } from '../../app/(api)/api';

const CelebritiesPage = () => {
  const pathname = usePathname();
  const { data } = useQuery(
    ['celebrityData'],
    async () => await getCelebrities(),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  return (
    <div className={styles.celebrities_container}>
      <div className={styles.heading}>Our Athletes and Artists</div>
      <div className={styles.celebrity_list}>
        {data?.map((celebrity, index) => {
          const profile_img =
            'https://project141.s3.eu-north-1.amazonaws.com/' +
            celebrity?.profileImage;
          return (
            <div
              onClick={() =>
                window.open(
                  `/${pathname?.split('/')?.[1]}/celebrities/${celebrity?.id}`,
                  '_blank'
                )
              }
              key={index}
              className={styles.celebrity_item}
            >
              {celebrity?.backgroundImage !== 'string' && (
                <img
                  src={profile_img}
                  alt={celebrity.fullname}
                  className={styles.celebrity_image}
                />
              )}

              <div className={styles.celebrity_info}>
                <div style={{ fontSize: '12px', marginTop: '15px' }}>
                  {celebrity?.field}
                </div>
                <h2 className={styles.celebrity_name}>{celebrity.fullname}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CelebritiesPage;
