"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";
import { usePathname, useRouter } from "next/navigation";
import { Select } from "antd";
import styles from "../../styles/Navbar.module.scss";

const Navbar = ({ logo }) => {
  const router = useRouter();
  const navbarRef = useRef(null);
  const pathname = usePathname();
  const language = pathname?.split("/")[1];

  const img_url =
    "https://project141.s3.eu-north-1.amazonaws.com/" + logo?.[0]?.logoLink;
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [navVisible, setNavVisible] = useState(true);
  const scrollThreshold = 50; // Adjust the threshold as needed

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop + scrollThreshold) {
      // Scroll down
      setNavVisible(false);
    } else if (scrollTop < lastScrollTop - scrollThreshold) {
      // Scroll up
      setNavVisible(true);
    }

    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // Prevent negative values
  };

  const handleTranslate = (e) => {
    const route = pathname.substring(4, pathname.length);
    router.push(`/${e}/${route}`);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);
  // ${
  //   theme === 'light' ? 'light' : ''
  // }
  return (
    <nav
      ref={navbarRef}
      className={`navbar navbar-expand-lg nav-scroll 
        
       ${navVisible ? "visible" : ""}`}
    >
      <div
        className="container"
        style={{
          marginLeft: "0px",
          marginRight: "24px",
          maxWidth: "100%",
          justifyContent: "space-between",
        }}
      >
        <Link className="logo" href="/" style={{ marginRight: "45px" }}>
          <img
            src={logo ? `${img_url}` : ""}
            style={{
              maxWidth: "300px",
              maxHeight: "150px",
              minWidth: "120px",
              padding: "10px",
            }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          style={{
            zIndex: "2",
            position: "absolute",
            right: "15px",
            top: "14px",
          }}
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
            flexGrow: "0",
            backdropFilter: "blur(20px)",
            backgroundColor: "#2d303273",
            borderRadius: "9999px",
            width: language === "az" && "1488px",
          }}
        >
          <ul className="navbar-nav">
            <li
              className={`nav-item dropdown ${
                pathname.includes("homepage") ? "active" : ""
              }`}
              onClick={handleDropdown}
            >
              <a
                href={`/${pathname?.split("/")?.[1]}/homepage`}
                className="nav-link"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {language === "en"
                  ? "HOME"
                  : language === "az"
                  ? "ANA SƏHİFƏ"
                  : "ГЛАВНАЯ"}
              </a>
            </li>
            <li
              className={`nav-item ${
                pathname.includes("about") ? "active" : ""
              }`}
            >
              <a
                className="nav-link"
                href={`/${pathname?.split("/")?.[1]}/about`}
              >
                {language === "en"
                  ? "ABOUT"
                  : language === "az"
                  ? "HAQQIMIZDA"
                  : "О НАС"}
              </a>
            </li>
            <li
              className={`nav-item dropdown ${
                pathname.includes("services") ? "active" : ""
              }`}
            >
              <a
                href={`/${pathname?.split("/")?.[1]}/services`}
                className="nav-link"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {language === "en"
                  ? "SERVICES"
                  : language === "az"
                  ? "XİDMƏTLƏR"
                  : "УСЛУГИ"}
              </a>
            </li>
            <li
              className={`nav-item ${
                pathname.includes("cases") ? "active" : ""
              }`}
            >
              <a
                className="nav-link"
                href={`/${pathname?.split("/")?.[1]}/cases`}
              >
                {language === "en"
                  ? "CASES"
                  : language === "az"
                  ? "KEYSLƏR"
                  : "КЕЙСЫ"}
              </a>
            </li>
            <li
              className={`nav-item ${
                pathname.includes("news") ? "active" : ""
              }`}
            >
              <a
                className="nav-link"
                href={`/${pathname?.split("/")?.[1]}/news`}
              >
                {language === "en"
                  ? "NEWS & INSIGHTS"
                  : language === "az"
                  ? "XƏBƏRLƏR VƏ DƏRİNLİKLƏR"
                  : "НОВОСТИ И ИНСАЙТЫ"}
              </a>
            </li>
            <li
              className={`nav-item ${
                pathname.includes("events") ? "active" : ""
              }`}
            >
              <a
                className="nav-link"
                href={`/${pathname?.split("/")?.[1]}/events`}
              >
                {language === "en"
                  ? "EVENTS"
                  : language === "az"
                  ? "TƏDBİRLƏR"
                  : "МЕРОПРИЯТИЯ"}
              </a>
            </li>
            <li
              className={`nav-item ${
                pathname.includes("celebrities") ? "active" : ""
              }`}
            >
              <a
                className="nav-link"
                href={`/${pathname?.split("/")?.[1]}/celebrities`}
              >
                {language === "en"
                  ? "ATHLETES & ARTISTS"
                  : language === "az"
                  ? "ATLETLƏR & ARTİSTLƏR"
                  : "АТЛЕТЫ & АРТИСТЫ"}
              </a>
            </li>
            <li
              className={`nav-item ${
                pathname.includes("contact") ? "active" : ""
              }`}
            >
              <a
                className="nav-link"
                href={`/${pathname?.split("/")?.[1]}/contact`}
              >
                {language === "en"
                  ? "CONTACT"
                  : language === "az"
                  ? "ƏLAQƏ"
                  : "КОНТАКТЫ"}
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.translate_select}>
          <Select
            style={{
              width: "70px",
              color: "white",
              marginTop: "18px",
              maxHeight: "150px",
            }}
            onChange={(e) => handleTranslate(e)}
            placeholder={pathname?.split("/")?.[1]}
            options={[
              { value: "az", label: "az" },
              { value: "en", label: "en" },
              { value: "ru", label: "ru" },
            ]}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
