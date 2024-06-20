'use client';
import React from 'react';
import styles from '../../styles/Celebrities.module.scss';
import { usePathname, useRouter } from 'next/navigation';
import { useQuery } from 'react-query';
import { getCelebrities } from '../../app/(api)/api';

const data = [
  {
    id: 1,
    name: 'Nicola Abadjiev',
    field: 'Voleyball',
    image:
      'https://img.redbull.com/images/c_crop,x_885,y_0,h_2136,w_2136/c_fill,w_150,h_150/q_auto,f_auto/redbullcom/2020/12/9/z17yyf4qjdepo5e6dedi/nicola-abadjiev-2020',
  },
  {
    id: 1,
    name: 'Nicola Abadjiev',
    field: 'Voleyball',
    image:
      'https://img.redbull.com/images/c_crop,x_885,y_0,h_2136,w_2136/c_fill,w_150,h_150/q_auto,f_auto/redbullcom/2020/12/9/z17yyf4qjdepo5e6dedi/nicola-abadjiev-2020',
  },
  {
    id: 1,
    name: 'Nicola Abadjiev',
    field: 'Voleyball',
    image:
      'https://img.redbull.com/images/c_crop,x_885,y_0,h_2136,w_2136/c_fill,w_150,h_150/q_auto,f_auto/redbullcom/2020/12/9/z17yyf4qjdepo5e6dedi/nicola-abadjiev-2020',
  },
  {
    id: 1,
    name: 'Nicola Abadjiev',
    field: 'Voleyball',
    image:
      'https://img.redbull.com/images/c_crop,x_885,y_0,h_2136,w_2136/c_fill,w_150,h_150/q_auto,f_auto/redbullcom/2020/12/9/z17yyf4qjdepo5e6dedi/nicola-abadjiev-2020',
  },
  {
    id: 1,
    name: 'Nicola Abadjiev',
    field: 'Voleyball',
    image:
      'https://img.redbull.com/images/c_crop,x_885,y_0,h_2136,w_2136/c_fill,w_150,h_150/q_auto,f_auto/redbullcom/2020/12/9/z17yyf4qjdepo5e6dedi/nicola-abadjiev-2020',
  },
  {
    id: 1,
    name: 'Nicola Abadjiev',
    field: 'Voleyball',
    image:
      'https://img.redbull.com/images/c_crop,x_885,y_0,h_2136,w_2136/c_fill,w_150,h_150/q_auto,f_auto/redbullcom/2020/12/9/z17yyf4qjdepo5e6dedi/nicola-abadjiev-2020',
  },
  {
    id: 1,
    name: 'Nicola Abadjiev',
    field: 'Voleyball',
    image:
      'https://img.redbull.com/images/c_crop,x_885,y_0,h_2136,w_2136/c_fill,w_150,h_150/q_auto,f_auto/redbullcom/2020/12/9/z17yyf4qjdepo5e6dedi/nicola-abadjiev-2020',
  },
];

const CelebritiesPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { data } = useQuery(
    ['celebrityData'],
    async () => await getCelebrities(),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
  console.log(data);
  return (
    <div className={styles.celebrities_container}>
      <div className={styles.heading}>Our Celebrities</div>
      <div className={styles.celebrity_list}>
        {data?.map((celebrity: any, index: any) => (
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
            <img
              src={celebrity.backgroundImage}
              alt={celebrity.fullname}
              className={styles.celebrity_image}
            />
            <div className={styles.celebrity_info}>
              <div style={{ fontSize: '12px', marginTop: '15px' }}>
                {celebrity?.field}
              </div>
              <h2 className={styles.celebrity_name}>{celebrity.fullname}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CelebritiesPage;
