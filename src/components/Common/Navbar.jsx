'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
//= Scripts
import { handleDropdown, handleMobileDropdown } from '../../common/navbar';
import { usePathname, useRouter } from 'next/navigation';
//= Static Data
import { getLogo } from '../../app/(api)/api';
import { useQuery } from 'react-query';
import { Select } from 'antd';
import { i18n } from '../../../i18n-config';

const Navbar = ({ lr, theme }) => {
  const navbar = useRef();
  const router = useRouter();
  const pathname = usePathname();
  const language = pathname.substring(1, 3);

  const { data, isLoading, isError } = useQuery(
    ['Logo'],
    async () => await getLogo(),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
  const img_url =
    'https://project141.s3.eu-north-1.amazonaws.com/' + data?.[0]?.logoLink;

  function handleScroll() {
    if (window.scrollY > 300) {
      navbar?.current?.classList?.add('nav-scroll');
    } else {
      navbar?.current?.classList?.remove('nav-scroll');
    }
  }
  const handleTranslate = (e) => {
    const route = pathname.substring(4, pathname.length);
    router.push(`/${e}/${route}`);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return (
    <nav
      ref={navbar}
      className={`navbar navbar-expand-lg change ${
        theme === 'light' ? 'light' : ''
      }`}
    >
      <div
        className="container"
        style={{
          marginLeft: '0px',
          marginRight: '24px',
          maxWidth: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Link className="logo" href="/">
          <img
            src={data ? `${img_url}` : ''}
            style={{ maxWidth: '300px', maxHeight: '150px', padding: '10px' }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{
            flexGrow: '0',
            backdropFilter: ' blur(20px)',
            backgroundColor: '#2d303273',
            borderRadius: '9999px',
            // marginRight: '120px',
          }}
        >
          <ul className="navbar-nav ">
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <a
                href={`/${pathname?.split('/')?.[1]}/homepage`}
                className="nav-link "
                // className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Home
              </a>
              {/* <div className="dropdown-menu">
                <a className="dropdown-item" href={`/homepage/home1-dark`}>
                  Main Home
                </a>
                <a className="dropdown-item" href={`/homepage/home2-dark`}>
                  Creative Agency
                </a>
                <a className="dropdown-item" href={`/homepage/home5-dark`}>
                  Digital Agency
                </a>
                <a className="dropdown-item" href={`/homepage/home4-dark`}>
                  Business One Page
                </a>
                <a className="dropdown-item" href={`/homepage/home3-dark`}>
                  Corporate Business
                </a>
                <a className="dropdown-item" href={`/homepage/home6-dark`}>
                  Modern Agency
                </a>
                <a className="dropdown-item" href={`/homepage/home7-dark`}>
                  Freelancer
                </a>
                <a className="dropdown-item" href={`/homepage/home8-dark`}>
                  Architecture
                </a>
              </div> */}
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={`/${pathname?.split('/')?.[1]}/about`}
              >
                About
              </a>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                href={`/${pathname?.split('/')?.[1]}/portfolio`}
                className="nav-link "
                // className="nav-link dropdown-toggle"
                // data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Portfolio
              </a>
              {/* <div className="dropdown-menu">
                <a className="dropdown-item" href={`/showcase/showcase-dark`}>
                  Showcase Parallax
                </a>
                <a className="dropdown-item" href={`/showcase4/showcase4-dark`}>
                  Showcase Carousel
                </a>
                <a className="dropdown-item" href={`/showcase3/showcase3-dark`}>
                  Showcase Circle
                </a>
                <a className="dropdown-item" href={`/works/works-dark`}>
                  Portfolio Masonry
                </a>
                <a className="dropdown-item" href={`/works2/works2-dark`}>
                  Portfolio Filtering
                </a>
                <a className="dropdown-item" href={`/works3/works3-dark`}>
                  Portfolio Gallery
                </a>
              </div> */}
            {/* </li> */}
            <li className="nav-item dropdown">
              <a
                href={`/${pathname?.split('/')?.[1]}/services`}
                className="nav-link "
                // className="nav-link dropdown-toggle"
                // data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </a>
              {/* <div className="dropdown-menu">
                <a className="dropdown-item" href={`/blog/blog-dark`}>
                  Blog Standerd
                </a>
                <a className="dropdown-item" href={`/blog-list/blog-list-dark`}>
                  Blog List
                </a>
                <a className="dropdown-item" href={`/blog-grid/blog-grid-dark`}>
                  Blog Grid
                </a>
                <a className="dropdown-item" href={`/blog-details/blog-details-dark`}>
                  Blog Details
                </a>
              </div> */}
            </li>
            <li className="nav-item">
              <a
                href={`/${pathname?.split('/')?.[1]}/cases`}
                className="nav-link"
              >
                Cases
              </a>
            </li>

            <li className="nav-item">
              <a
                href={`/${pathname?.split('/')?.[1]}/news`}
                className="nav-link"
              >
                News
              </a>
            </li>
            <li className="nav-item">
              <a
                href={`/${pathname?.split('/')?.[1]}/events`}
                className="nav-link"
              >
                Events
              </a>
            </li>
            <li className="nav-item">
              <a
                href={`/${pathname?.split('/')?.[1]}/contact`}
                className="nav-link"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div style={{ height: '73px', width: '155px', paddingLeft: '90px' }}>
          <Select
            style={{
              width: '70px',
              color: 'white',
              marginTop: '18px',
              maxHeight: '150px',
            }}
            onChange={(e) => handleTranslate(e)}
            placeholder={pathname?.split('/')?.[1]}
            options={[
              { value: 'az', label: 'az' },
              { value: 'en', label: 'en' },
              { value: 'ru', label: 'ru' },
            ]}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
