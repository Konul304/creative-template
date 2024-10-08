import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Cases.module.scss';
import { usePathname } from 'next/navigation';

const SimilarCases = ({ data }) => {
  console.log(data);
  const pathname = usePathname();
  const language = pathname?.split('/')[1];
  const allData = data;
  const caseData = data.find(
    (item) => item.id?.toString() === data?.id?.casesID
  );
  const matchingObjects = allData?.filter((item) => {
    const hasMatchingTag = caseData?.tagNamesAz?.some(
      (tagName) => item.tagNamesAz && item.tagNamesAz?.includes(tagName)
    );
    return hasMatchingTag;
  });

  const filteredMatchingObjects = matchingObjects?.filter(
    (item) => item.id !== caseData.id
  );
  console.log(filteredMatchingObjects);
  return (
    <section className={`blog ${styles.similar_cases_container}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 ">
            <div className="sec-head  text-center">
              {filteredMatchingObjects?.length !== 0 && (
                <h3 className="wow color-font mb-5">
                  Related Cases
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
                  <a href={`/cases/cases-dark/${item?.id}`} className="img">
                    <img src={img_url} alt="" />
                  </a>
                  <div className="cont">
                    <div>
                      <div className="info">
                        <Link
                          href={`/cases/cases-dark/${item?.id}`}
                          className="tag"
                        >
                          {(language === 'en'
                            ? item?.tagNamesEng
                            : language === 'az'
                            ? item?.tagNamesAz
                            : item?.tagNamesRus
                          ).map((tag, index) => {
                            return (
                              <>
                                <span key={index}>{tag}</span>&nbsp;&nbsp;&nbsp;
                              </>
                            );
                          })}
                        </Link>
                      </div>
                      <h5>
                        <Link href={`/cases/cases-dark/${item?.id}`}>
                          {language === 'en'
                            ? item.titleEng
                            : language === 'az'
                            ? item.titleAz
                            : item.titleRus}
                        </Link>
                      </h5>
                      <div className="btn-more">
                        <Link
                          href={`/cases/cases-dark/${item?.id}`}
                          className="simple-btn"
                        >
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

export default SimilarCases;
