'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { getCases } from '@/app/(api)/api';
import { useQuery } from 'react-query';
import initIsotope from '@/common/initIsotopePortfolio';

const BlogGrid = ({ grid = 3, filterPosition, hideFilter }) => {
  const { data, isLoading, isError } = useQuery(
    ['casesData'],
    async () => await getCases(),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
  useEffect(() => {
    // setTimeout(() => {
    initIsotope();
    // }, 500);
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
                {/* <span data-filter=".web">Mobile App</span>
                <span data-filter=".graphic">Creative</span> */}
              </div>
            </div>
          )}
          <div
            className="gallery full-width"
            style={{ minHeight: '400px', display: 'flex' }}
          >
            <div className="posts">
              <div className="row">
                {data?.map((item, index) => {
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
                            href={`/cases/cases-dark/${item?.id}`}
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
                                {/* <Link href="/blog/blog-dark" className="date">
                          <span>
                            <i>{blogItem.date.day}</i>
                            {blogItem.date.month}
                          </span>
                        </Link> */}
                                {/* <span>/</span> */}
                                {item.tagNames.map((tagItem, index) => {
                                  return (
                                    <>
                                      <Link
                                        key={index}
                                        href={`/cases/cases-dark/${item?.id}`}
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
                                  href={`/cases/cases-dark/${item?.id}`}
                                  // style={{ color: '#5f5f5f' }}
                                >
                                  {item.title.substr(0, 55) + '...'}
                                </Link>
                              </h5>
                              <div className="btn-more">
                                <Link
                                  href={`/cases/cases-dark/${item?.id}`}
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
