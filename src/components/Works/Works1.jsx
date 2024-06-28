'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import { getPortfolio } from '../../app/(api)/api';
import { useQuery } from 'react-query';
import { usePathname, useRouter } from 'next/navigation';

const swiperOptions = {
  modules: [Autoplay, Navigation],
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  slidesPerView: 2,
  centeredSlides: true,
  autoPlay: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 1000,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: false,
    },
    991: {
      slidesPerView: 2,
    },
  },
};

const Works1 = () => {
  const pathname = usePathname();
  const router = useRouter();
  const language = pathname?.split('/')[1];

  const { data: portfolio } = useQuery(
    ['portfolioData'],
    async () => await getPortfolio(),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  const azPortfolioData = portfolio?.map((item) => ({
    logoLink: item.logoLink,
    id: item.id,
    title: item.titleAz,
  }));
  const engPortfolioData = portfolio?.map((item) => ({
    logoLink: item.logoLink,
    id: item.id,
    title: item.titleEng,
  }));
  const rusPortfolioData = portfolio?.map((item) => ({
    logoLink: item.logoLink,
    id: item.id,
    title: item.titleRus,
  }));

  const dataToRender =
    language === 'en'
      ? engPortfolioData
      : language === 'az'
      ? azPortfolioData
      : rusPortfolioData;

  return (
    <section className="work-carousel metro position-re">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 no-padding">
            <div className="swiper-container">
              <Swiper {...swiperOptions} className="swiper-wrapper">
                {dataToRender?.map((item) => {
                  const img_url =
                    'https://project141.s3.eu-north-1.amazonaws.com/' +
                    item?.logoLink;
                  return (
                    <SwiperSlide key={item?.id} className="swiper-slide">
                      <div
                        style={{ cursor: 'pointer' }}
                        className="content wow noraidus fadeInUp"
                        data-wow-delay=".3s"
                        onClick={() =>
                          router.push(`/${pathname?.split('/')?.[1]}/portfolio`)
                        }
                      >
                        <div
                          className="item-img bg-img wow imago"
                          onClick={() =>
                            router.push(
                              `/${pathname?.split('/')?.[1]}/portfolio`
                            )
                          }
                          style={{ backgroundImage: `url(${img_url})` }}
                        ></div>
                        <div className="cont">
                          <h6 className="color-font">
                            <a href={`/${pathname?.split('/')?.[1]}/portfolio`}>
                              {item?.title}
                            </a>
                          </h6>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className="swiper-button-next swiper-nav-ctrl simp-next cursor-pointer">
                <span className="simple-btn right">Next</span>
              </div>
              <div className="swiper-button-prev swiper-nav-ctrl simp-prev cursor-pointer">
                <span className="simple-btn">Prev</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works1;
