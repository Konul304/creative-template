'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { getNews } from '../../app/(api)/api';
import { useQuery } from 'react-query';
import initIsotope from '../../common/initIsotopePortfolio';
import { usePathname } from 'next/navigation';

const BlogGrid = ({ grid = 3, hideFilter }) => {
  const pathname = usePathname();
  const language = pathname?.split('/')[1];
  const { data } = useQuery(['newsData'], async () => await getNews(), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const ourNews = data?.filter((item) => item?.isOurNews === true);
  const otherNews = data?.filter((item) => item?.isOurNews === false);

  useEffect(() => {
    initIsotope();
  }, [data]);

  return (
    <section
      className={`${
        grid ? (grid === 3 ? 'three-column' : null) : null
      } portfolio  pb-70`}
    >
      <div className="container">
        <div className="row">
          {!hideFilter && (
            <div className={`filtering text-center col-12`}>
              <div className="filter">
                <span
                  data-filter=".presentation"
                  className={data?.length > 0 ? `active` : ''}
                >
                  {' '}
                  Öz xəbərlərimiz{' '}
                </span>
                <span data-filter=".videos">Digərlər </span>
              </div>
            </div>
          )}
          <div
            className="gallery full-width"
            style={{ minHeight: '400px', display: 'flex' }}
          >
            <div className="posts">
              <div className="row">
                {ourNews?.map((item, index) => {
                  const img_url =
                    'https://project141.s3.eu-north-1.amazonaws.com/' +
                    item?.logoLink;
                  return (
                    <div
                      key={index}
                      className={`col-md-4
                       items presentation wow fadeInUp`}
                      data-wow-delay=".4s"
                    >
                      <div className="" key={item.id}>
                        <div
                          className="item mb-80 wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <a
                            href={`/${pathname?.split('/')?.[1]}/news/${
                              item?.id
                            }`}
                            className="img"
                          >
                            <img
                              style={{ height: '277px' }}
                              src={img_url}
                              alt=""
                            />
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
                                        href={`/${
                                          pathname?.split('/')?.[1]
                                        }/news/${item?.id}`}
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
                                  href={`/${pathname?.split('/')?.[1]}/news/${
                                    item?.id
                                  }`}
                                >
                                  {item?.title?.substr(0, 55) + '...'}
                                </Link>
                              </h5>
                              <div className="btn-more">
                                <Link
                                  href={`/${pathname?.split('/')?.[1]}/news/${
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
                    </div>
                  );
                })}
                {otherNews?.map((item, index) => {
                  const img_url =
                    'https://project141.s3.eu-north-1.amazonaws.com/' +
                    item?.logoLink;
                  return (
                    <div
                      key={index}
                      className={`col-md-4
                       items videos wow fadeInUp`}
                      data-wow-delay=".4s"
                    >
                      <div className="" key={item.id}>
                        <div
                          className="item mb-80 wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <a
                            href={`/${pathname?.split('/')?.[1]}/news/${
                              item?.id
                            }`}
                            className="img"
                          >
                            <img
                              style={{ height: '277px' }}
                              src={img_url}
                              alt=""
                            />
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
                                        href={`/${
                                          pathname?.split('/')?.[1]
                                        }/news/${item?.id}`}
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
                                  href={`/${pathname?.split('/')?.[1]}/news/${
                                    item?.id
                                  }`}
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
                                  href={`/${pathname?.split('/')?.[1]}/news/${
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
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
