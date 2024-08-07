'use client';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import removeSlashFromBagination from '../../common/removeSlashpagination';
import HTMLReactParser from 'html-react-parser';
import { usePathname } from 'next/navigation';

const swiperOptions = {
  modules: [Autoplay, Navigation],
  loop: true,
  navigation: {
    prevEl: '.arrows .prev',
    nextEl: '.arrows .next',
  },
  centeredSlides: true,
  autoplay: true,
  slidesPerView: 3,
  spaceBetween: 60,
  breakpoints: {
    1024: {
      slidesPerView: 3,
      centeredSlides: false,
    },
    767: {
      slidesPerView: 1,
      centeredSlides: false,
    },
    480: {
      slidesPerView: 1,
      centeredSlides: false,
    },
    410: {
      slidesPerView: 1,
      centeredSlides: false,
    },
    110: {
      slidesPerView: 1,
      centeredSlides: false,
    },
  },
};

function FullTestimonials({
  withIMG,
  withCOLOR,
  noPadding,
  classText,
  showHead,
  data,
}) {
  const pathname = usePathname();
  const language = pathname?.split('/')[1];

  const azTestimonialsData = data?.map((item) => ({
    logoLink: item.logoLink,
    id: item.id,
    fullName: item.fullName,
    position: item?.position,
    company: item?.company,
    testimonial: item?.testimonialAz,
  }));
  const engTestimonialsData = data?.map((item) => ({
    logoLink: item.logoLink,
    id: item.id,
    fullName: item.fullName,
    position: item?.position,
    company: item?.company,
    testimonial: item?.testimonialEng,
  }));
  const rusTestimonialsData = data?.map((item) => ({
    logoLink: item.logoLink,
    id: item.id,
    fullName: item.fullName,
    position: item?.position,
    company: item?.company,
    testimonial: item?.testimonialRus,
  }));

  const dataToRender =
    language === 'en'
      ? engTestimonialsData
      : language === 'az'
      ? azTestimonialsData
      : rusTestimonialsData;

  useEffect(() => {
    removeSlashFromBagination();
  }, []);

  return (
    <section
      className={`testimonials ${
        withIMG
          ? 'section-padding bg-img'
          : withCOLOR
          ? 'section-padding back-color'
          : noPadding
          ? ''
          : 'section-padding'
      } ${classText ? classText : ''}`}
      style={{
        backgroundImage: `${withIMG ? 'url(' + withIMG + ')' : 'none'}`,
      }}
    >
      {showHead && (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head text-center">
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                  Testimonials
                </h6>
                <h3 className="wow color-font">
                  We love our clients from all over the world.
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container-fluid position-re">
        <div className="row wow fadeInUp" data-wow-delay=".5s">
          <div className="col-lg-12">
            <Swiper
              {...swiperOptions}
              className="slic-item"
              data-wow-delay=".5s"
            >
              {dataToRender?.map((item) => {
                const img_url =
                  'https://project141.s3.eu-north-1.amazonaws.com/' +
                  item?.logoLink;
                return (
                  <SwiperSlide className="item" key={item?.id}>
                    <div className="info valign">
                      <div className="cont">
                        <div className="author">
                          <div className="img">
                            <img src={img_url} alt="" />
                          </div>
                          <h6 className="author-name color-font">
                            {item?.fullName}
                          </h6>
                          <span className="author-details">
                            {' '}
                            {item?.position}, {item?.company}{' '}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p>
                      {item?.testimonial && HTMLReactParser(item?.testimonial)}
                    </p>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div className="arrows">
          <div className="container">
            <div className="next cursor-pointer">
              <span className="pe-7s-angle-right"></span>
            </div>
            <div className="prev cursor-pointer">
              <span className="pe-7s-angle-left"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FullTestimonials;
