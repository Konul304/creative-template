import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Cases.module.scss';

const SimilarNews = (data) => {
  const allData = data?.data?.data;
  const newsData = data?.data?.data?.find(
    (item) => item.id?.toString() === data?.data?.id?.newsID
  );
  const matchingObjects = allData?.filter((item) => {
    const hasMatchingTag = newsData?.tagNames.some(
      (tagName) => item.tagNames && item.tagNames.includes(tagName)
    );
    return hasMatchingTag;
  });

  const filteredMatchingObjects = matchingObjects?.filter(
    (item) => item.id !== newsData.id
  );
  return (
    <section className={`blog ${styles.similar_cases_container}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 ">
            <div className="sec-head  text-center">
              {/* <h6 className="wow fadeIn" data-wow-delay=".5s">
                RECENT ARTICLES
              </h6> */}
              {filteredMatchingObjects?.length !== 0 && (
                <h3 className="wow color-font mb-5">
                  Related News
                  <br />
                  <br />
                </h3>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          {filteredMatchingObjects?.map((item) => {
            const img_url =
              'https://project141.s3.eu-north-1.amazonaws.com/' +
              item?.logoLink;
            return (
              <div key={item?.id} className="col-md-4 mt-5">
                <div className="item md-mb50 wow fadeInUp" data-wow-delay=".3s">
                  <a href={`/news/${item?.id}`} className="img">
                    <img src={img_url} alt="" />
                  </a>
                  <div className="cont">
                    <div>
                      <div className="info">
                        {/* <Link href="/blog/blog-dark" className="date">
                          <span>
                            <i>06</i> August
                          </span>
                        </Link>
                        <span>/</span> */}
                        <Link href={`/news/${item?.id}`} className="tag">
                          {item?.tagNames?.map((tag, index) => {
                            return (
                              <>
                                <span key={index}>{tag}</span>&nbsp;&nbsp;&nbsp;
                              </>
                            );
                          })}
                        </Link>
                      </div>
                      <h5>
                        <Link href={`/news/${item?.id}`}>{item?.title}</Link>
                      </h5>
                      <div className="btn-more">
                        <Link href={`/news/${item?.id}`} className="simple-btn">
                          READ MORE
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
    </section>
  );
};

export default SimilarNews;
