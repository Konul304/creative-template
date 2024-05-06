import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';
import { calendarIconEvents } from '../../../public/img';

const data = [
  {
    image:
      'https://img.redbull.com/images/c_crop,x_725,y_0,h_3640,w_3640/c_fill,w_450,h_450/q_auto,f_auto/redbullcom/2023/9/12/r8qqcafimi9dnlz1hmn2/car-park-drift-2023',
    title: 'Red Bull Four 2 Score Azerbaijan',
    description: '13 – 21 Aprel 2024',
  },
  {
    image:
      'https://img.redbull.com/images/c_crop,x_725,y_0,h_3640,w_3640/c_fill,w_450,h_450/q_auto,f_auto/redbullcom/2023/9/12/r8qqcafimi9dnlz1hmn2/car-park-drift-2023',
    title: 'Red Bull Four 2 Score Azerbaijan',
    description: '13 – 21 Aprel 2024',
  },
  {
    image:
      'https://img.redbull.com/images/c_crop,x_725,y_0,h_3640,w_3640/c_fill,w_450,h_450/q_auto,f_auto/redbullcom/2023/9/12/r8qqcafimi9dnlz1hmn2/car-park-drift-2023',
    title: 'Red Bull Four 2 Score Azerbaijan',
    description: '13 – 21 Aprel 2024',
  },

  {
    image:
      'https://img.redbull.com/images/c_crop,x_725,y_0,h_3640,w_3640/c_fill,w_450,h_450/q_auto,f_auto/redbullcom/2023/9/12/r8qqcafimi9dnlz1hmn2/car-park-drift-2023',
    title: 'Red Bull Four 2 Score Azerbaijan',
    description: '13 – 21 Aprel 2024',
  },
  {
    image:
      'https://img.redbull.com/images/c_crop,x_725,y_0,h_3640,w_3640/c_fill,w_450,h_450/q_auto,f_auto/redbullcom/2023/9/12/r8qqcafimi9dnlz1hmn2/car-park-drift-2023',
    title: 'Red Bull Four 2 Score Azerbaijan',
    description: '13 – 21 Aprel 2024',
  },
];

const EventCards = () => {
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
              {data.map((item, index) => {
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
                        <Card
                          hoverable
                          style={{ width: 340 }}
                          cover={
                            <img
                              alt="example"
                              style={{ height: '250px', objectFit: 'cover' }}
                              src={item?.image}
                            />
                          }
                        >
                          <Meta
                            title={item?.title}
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
                                  {item?.description}
                                </div>
                              </div>
                            }
                          />
                        </Card>
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
