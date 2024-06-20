'use client';
import React from 'react';
import Link from 'next/link';
import { getCases } from '../../app/(api)/api';
import { useQuery } from 'react-query';
import { usePathname } from 'next/navigation';

const CasesGrid = () => {
  const pathname = usePathname();
  const language = pathname?.split('/')[1];
  const { data } = useQuery(['casesData'], async () => await getCases(), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  return (
    <section className="blog-pg blog section-padding pt-0">
      <div className="container">
        <div className="posts">
          <div className="row">
            {data?.map((item) => {
              const img_url =
                'https://project141.s3.eu-north-1.amazonaws.com/' +
                item?.logoLink;
              return (
                <div className="col-lg-4" key={item.id}>
                  <div className="item mb-80 wow fadeInUp" data-wow-delay=".3s">
                    <a
                      href={`/${pathname?.split('/')?.[1]}/cases/${item?.id}`}
                      className="img"
                    >
                      <img src={img_url} alt="" />
                    </a>
                    <div className="cont">
                      <div>
                        <div className="info">
                          {(language === 'en'
                            ? item?.tagNamesEng
                            : language === 'az'
                            ? item?.tagNamesAz
                            : item?.tagNamesRus
                          )?.map((tagItem, index) => {
                            return (
                              <>
                                <Link
                                  key={index}
                                  href={`/${pathname?.split('/')?.[1]}/cases/${
                                    item?.id
                                  }`}
                                  className="tag"
                                >
                                  <span
                                    className="wow color-font fw-700 "
                                    key={index}
                                  >
                                    {tagItem}
                                  </span>
                                  &nbsp;&nbsp;&nbsp;
                                </Link>
                              </>
                            );
                          })}
                        </div>
                        <h5>
                          <Link
                            href={`/${pathname?.split('/')?.[1]}/cases/${
                              item?.id
                            }`}
                            style={{ color: '#5f5f5f' }}
                          >
                            {(language === 'en'
                              ? item.titleEng
                              : language === 'az'
                              ? item.titleAz
                              : item.titleRus
                            )?.substr(0, 55) + '...'}
                          </Link>
                        </h5>
                        <div className="btn-more">
                          <Link
                            href={`/${pathname?.split('/')?.[1]}/cases/${
                              item?.id
                            }`}
                            className="simple-btn"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesGrid;
