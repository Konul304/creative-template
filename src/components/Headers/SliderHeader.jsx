'use client';
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax } from 'swiper';
import removeSlashFromBagination from '../../common/removeSlashpagination';
import fadeWhenScroll from '../../common/fadeWhenScroll';
import HTMLReactParser from 'html-react-parser';
import { usePathname } from 'next/navigation';

const swiperOptions = {
  modules: [Parallax, Navigation, Pagination],
  loop: true,
  speed: 1000,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  parallax: true,
  pagination: {
    type: 'fraction',
    clickable: true,
    el: '.swiper-pagination',
  },
  onSwiper: (swiper) => {
    for (var i = 0; i < swiper.slides.length; i++) {
      swiper.slides[i].childNodes[0].setAttribute(
        'data-swiper-parallax',
        0.75 * swiper.width
      );
    }
  },
};

const SliderHeader = ({ cases, news, events }) => {
  const fixedSlider = useRef();
  const pathname = usePathname();
  const language = pathname?.split('/')[1];

  const filteredCaseData = cases?.filter((item) => item.isSlider === true);
  const filteredNewsData = news?.filter((item) => item.isSlider === true);
  const filteredEventsData = events?.filter((item) => item.isSlider === true);

  const azCaseData = filteredCaseData?.map((item) => ({
    sliderLogoLink: item.sliderLogoLink,
    id: item.id,
    sliderTitle: item.sliderTitleAz,
    sliderDescription: item.sliderDescriptionAz,
  }));
  const engCaseData = filteredCaseData?.map((item) => ({
    sliderLogoLink: item.sliderLogoLink,
    id: item.id,
    sliderTitle: item.sliderTitleEng,
    sliderDescription: item.sliderDescriptionEng,
  }));
  const rusCaseData = filteredCaseData?.map((item) => ({
    sliderLogoLink: item.sliderLogoLink,
    id: item.id,
    sliderTitle: item.sliderTitleRus,
    sliderDescription: item.sliderDescriptionRus,
  }));
  const azNewsData = filteredNewsData?.map((item) => ({
    sliderLogoLink: item.sliderLogoLink,
    id: item.id,
    sliderTitle: item.sliderTitleAz,
    sliderDescription: item.sliderDescriptionAz,
  }));
  const engNewsData = filteredNewsData?.map((item) => ({
    sliderLogoLink: item.sliderLogoLink,
    id: item.id,
    sliderTitle: item.sliderTitleEng,
    sliderDescription: item.sliderDescriptionEng,
  }));
  const rusNewsData = filteredNewsData?.map((item) => ({
    sliderLogoLink: item.sliderLogoLink,
    id: item.id,
    sliderTitle: item.sliderTitleRus,
    sliderDescription: item.sliderDescriptionRus,
  }));

  const azEventData = filteredEventsData?.map((item) => ({
    sliderLogoLink: item.sliderLogoLink,
    id: item.id,
    sliderTitle: item.titleAz,
    sliderDescription: item.descriptionAz,
  }));
  const engEventData = filteredEventsData?.map((item) => ({
    sliderLogoLink: item.sliderLogoLink,
    id: item.id,
    sliderTitle: item.titleEng,
    sliderDescription: item.descriptionEng,
  }));
  const rusEventData = filteredEventsData?.map((item) => ({
    sliderLogoLink: item.sliderLogoLink,
    id: item.id,
    sliderTitle: item.titleRus,
    sliderDescription: item.descriptionRus,
  }));

  useEffect(() => {
    removeSlashFromBagination();
    fadeWhenScroll(document.querySelectorAll('.fixed-slider .caption'));
  }, [cases]);

  useEffect(() => {
    if (fixedSlider.current) {
      const MainContent = document.querySelector('.main-content');
      const slideHeight = fixedSlider.current.offsetHeight;
      MainContent.style.marginTop = slideHeight + 'px';
    }
  }, [cases]);
  const casesToRender =
    language === 'en'
      ? engCaseData
      : language === 'az'
      ? azCaseData
      : rusCaseData;
  const newsToRender =
    language === 'en'
      ? engNewsData
      : language === 'az'
      ? azNewsData
      : rusNewsData;
  const eventsToRender =
    language === 'en'
      ? engEventData
      : language === 'az'
      ? azEventData
      : rusEventData;
  return (
    <header
      className="slider slider-prlx fixed-slider text-center"
      ref={fixedSlider}
    >
      <div className="swiper-container parallax-slider">
        {(casesToRender || newsToRender || eventsToRender) && (
          <Swiper {...swiperOptions} className="swiper-wrapper">
            {casesToRender?.map((slide) => {
              const img_url =
                'https://project141.s3.eu-north-1.amazonaws.com/' +
                slide?.sliderLogoLink;
              return (
                <SwiperSlide key={slide.id} className="swiper-slide">
                  <div
                    className="bg-img valign"
                    style={{ backgroundImage: `url('${img_url}')` }}
                    data-overlay-dark="6"
                  >
                    <a
                      href={`/${pathname?.split('/')?.[1]}/cases/${slide?.id}`}
                      className="container"
                      style={{
                        display: 'block',
                        height: '100vh',
                        position: 'absolute',
                      }}
                    >
                      <div
                        className=" justify-content-center"
                        style={{
                          position: 'absolute',
                          bottom: '10px',
                          left: '3%',
                          maxWidth: '900px',
                        }}
                      >
                        <div>
                          <div className="caption center mt-30">
                            <h1
                              className="color-font"
                              style={{ fontSize: '48px', textAlign: 'left' }}
                            >
                              {' '}
                              {slide.sliderTitle &&
                                HTMLReactParser(slide.sliderTitle)}
                            </h1>
                            <div
                              style={{
                                fontSize: '16px',
                                textAlign: 'left',
                              }}
                              className="slider_desc"
                            >
                              {slide.sliderDescription &&
                                HTMLReactParser(slide.sliderDescription)}
                            </div>
                            {/* <a href="#" className="butn bord curve mt-30">
                              <span>Look More</span>
                            </a> */}
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
              );
            })}
            {newsToRender?.map((slide) => {
              const img_url =
                'https://project141.s3.eu-north-1.amazonaws.com/' +
                slide?.sliderLogoLink;
              return (
                <SwiperSlide key={slide.id} className="swiper-slide">
                  <div
                    className="bg-img valign"
                    style={{ backgroundImage: `url('${img_url}')` }}
                    data-overlay-dark="6"
                  >
                    <a
                      href={`/${pathname?.split('/')?.[1]}/news/${slide?.id}`}
                      className="container"
                      style={{
                        display: 'block',
                        height: '100vh',
                        position: 'absolute',
                      }}
                    >
                      <div
                        className=" justify-content-center"
                        style={{
                          position: 'absolute',
                          bottom: '10px',
                          left: '3%',
                          maxWidth: '900px',
                        }}
                      >
                        <div>
                          <div className="caption center mt-30">
                            <h1
                              className="color-font"
                              style={{ fontSize: '48px', textAlign: 'left' }}
                            >
                              {' '}
                              {slide.sliderTitle &&
                                HTMLReactParser(slide.sliderTitle)}
                            </h1>
                            <div
                              style={{
                                fontSize: '16px',
                                textAlign: 'left',
                              }}
                              className="slider_desc"
                            >
                              {slide.sliderDescription &&
                                HTMLReactParser(slide.sliderDescription)}
                            </div>
                            {/* <a href="#" className="butn bord curve mt-30">
                              <span>Look More</span>
                            </a> */}
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
              );
            })}
            {eventsToRender?.map((slide) => {
              const img_url =
                'https://project141.s3.eu-north-1.amazonaws.com/' +
                slide?.sliderLogoLink;
              return (
                <SwiperSlide key={slide.id} className="swiper-slide">
                  <div
                    className="bg-img valign"
                    style={{ backgroundImage: `url('${img_url}')` }}
                    data-overlay-dark="6"
                  >
                    <a
                      href={`/${pathname?.split('/')?.[1]}/events/${slide?.id}`}
                      className="container"
                      style={{
                        display: 'block',
                        height: '100vh',
                        position: 'absolute',
                      }}
                    >
                      <div
                        className=" justify-content-center"
                        style={{
                          position: 'absolute',
                          bottom: '10px',
                          left: '3%',
                          maxWidth: '900px',
                        }}
                      >
                        <div>
                          <div className="caption center mt-30">
                            <h1
                              className="color-font"
                              style={{ fontSize: '48px', textAlign: 'left' }}
                            >
                              {' '}
                              {slide.sliderTitle &&
                                HTMLReactParser(slide.sliderTitle)}
                            </h1>
                            <div
                              style={{
                                fontSize: '16px',
                                textAlign: 'left',
                              }}
                              className="slider_desc"
                            >
                              {slide.sliderDescription &&
                                HTMLReactParser(slide.sliderDescription)}
                            </div>
                            {/* <a href="#" className="butn bord curve mt-30">
                              <span>Look More</span>
                            </a> */}
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
        <div className="setone setwo">
          <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
            <i className="fas fa-chevron-right"></i>
          </div>
          <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>
        <div className="swiper-pagination top botm"></div>
      </div>
    </header>
  );
};

export default SliderHeader;
