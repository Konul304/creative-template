'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import initIsotope from '../../common/initIsotope';
import { download_icon } from '../../../public/img';
import styles from '../../styles/Works2.module.scss';
import ModalVideo from '../Common/ModalVideo';
import { usePathname } from 'next/navigation';

function WorksStyle2({
  grid,
  filterPosition,
  hideHeader = false,
  presentations,
  videos,
  images,
  id,
}) {
  const pathname = usePathname();
  const language = pathname?.split('/')[1];
  const [isOpenMap, setOpenMap] = useState({});
  const handleToggleModal = (index) => {
    setOpenMap((prevOpenMap) => ({
      ...prevOpenMap,
      [index]: !prevOpenMap[index],
    }));
  };

  useEffect(() => {
    initIsotope(id, videos, images);
  }, [id]);

  const handleDownload = (pdfUrl, pdfName) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    if (pdfName) {
      link.download = pdfName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section
      className={`${
        grid ? (grid === 3 ? 'three-column' : null) : null
      } portfolio pt-60  pb-70`}
    >
      {!hideHeader && (
        <div className={`container`}>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head text-center">
                <h6>Portfolio</h6>
                <h3 className=" color-font fz-40 fw-500">
                  Our Recent Web Design &amp; <br />
                  Some Past Projects.
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={`container ${styles.tabs}`}>
        <div className="row">
          <div
            className={`filtering-${id} filtering ${
              filterPosition === 'center'
                ? 'text-center'
                : filterPosition === 'left'
                ? 'text-left'
                : 'text-right'
            } col-12`}
          >
            <div className="filter">
              {videos && videos.length > 0 && (
                <span
                  data-filter=".videos"
                  className={videos?.length > 0 ? `active` : ''}
                >
                  Videos
                </span>
              )}
              {images && images.length > 0 && (
                <span
                  data-filter=".images"
                  className={!(videos?.length > 0) ? `active` : ''}
                >
                  Images
                </span>
              )}
            </div>
          </div>

          <div className={`gallery-${id} full-width`}>
            {presentations?.map((item, index) => {
              const img_link =
                'https://project141.s3.eu-north-1.amazonaws.com/' +
                item?.logoLink;
              const download_url = item?.pdfLink
                ?.replace('/view?usp=drive_link', '')
                ?.replace('file/d/', 'uc?id=');
              const view_url = item?.pdfLink?.replace(
                'view?usp=drive_link',
                'preview'
              );
              return (
                <div
                  key={index}
                  className={`${
                    grid === 3
                      ? 'col-lg-4 col-md-6'
                      : grid === 2
                      ? 'col-md-6'
                      : 'col-12'
                  } items presentation `}
                >
                  <div className="item-img">
                    <div className="imago wow">
                      <Link href={view_url} target="_blank">
                        <img src={img_link} alt="image" />
                      </Link>
                      <div className="item-img-overlay"></div>
                    </div>
                  </div>
                  <div className="cont">
                    <h6>
                      {language === 'en'
                        ? item?.titleEng
                        : language === 'az'
                        ? item?.titleAz
                        : item?.titleRus}
                      <span
                        onClick={handleDownload}
                        className={styles.download_icon}
                      >
                        <div
                          onClick={() =>
                            handleDownload(
                              download_url,
                              language === 'en'
                                ? item?.titleEng
                                : language === 'az'
                                ? item?.titleAz
                                : item?.titleRus
                            )
                          }
                        >
                          {download_icon}
                        </div>
                      </span>
                    </h6>
                  </div>
                </div>
              );
            })}

            {videos?.map((item, index) => {
              const cover_link =
                'https://project141.s3.eu-north-1.amazonaws.com/' +
                item?.logoLink;
              const video_link = item?.videoLink?.replace(
                'view?usp=drive_link',
                'preview'
              );
              return (
                <div
                  key={index}
                  className={`col-lg-4 col-md-6 col-12 items videos `}
                >
                  <div className="item-img">
                    <div
                      onClick={() => handleToggleModal(index)}
                      className="imago wow w-100 h-100"
                    >
                      <img src={cover_link} alt="image" />
                      <div className="item-img-overlay"></div>
                    </div>
                  </div>
                  <div className="cont">
                    <h6 className="text-center mt-4">
                      {' '}
                      {language === 'en'
                        ? item?.titleEng
                        : language === 'az'
                        ? item?.titleAz
                        : item?.titleRus}
                    </h6>
                    <ModalVideo
                      source={video_link}
                      isOpen={isOpenMap[index]}
                      onClose={() => handleToggleModal(index)}
                      autoplay
                    />
                  </div>
                </div>
              );
            })}

            {images?.map((item, index) => {
              const img_link =
                'https://project141.s3.eu-north-1.amazonaws.com/' +
                item?.logoLink;
              return (
                <div
                  key={index}
                  className={`${
                    grid === 3
                      ? 'col-lg-4 col-md-6'
                      : grid === 2
                      ? 'col-md-6'
                      : 'col-12'
                  } items images`}
                >
                  <div className="item-img">
                    <div className="imago wow">
                      <Link href={img_link} target="_blank">
                        <img src={img_link} alt="image" />
                      </Link>
                      <div className="item-img-overlay"></div>
                    </div>
                  </div>
                  <div className="cont">
                    <h6 className="text-center mt-4">
                      {' '}
                      {language === 'en'
                        ? item?.titleEng
                        : language === 'az'
                        ? item?.titleAz
                        : item?.titleRus}
                    </h6>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorksStyle2;
