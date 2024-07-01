"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";
import { usePathname, useRouter } from "next/navigation";
import { getLogo } from "../../app/(api)/api";
import { useQuery } from "react-query";
import { Select } from "antd";
import styles from "../../styles/Navbar.module.scss";

const Navbar = ({ theme }) => {
  const navbar = useRef();
  const router = useRouter();
  const pathname = usePathname();
  const language = pathname?.split("/")[1];

  const { data } = useQuery(["Logo"], async () => await getLogo(), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  const img_url =
    "https://project141.s3.eu-north-1.amazonaws.com/" + data?.[0]?.logoLink;

  function handleScroll() {
    if (window.scrollY > 300) {
      navbar?.current?.classList?.add("nav-scroll");
    } else {
      navbar?.current?.classList?.remove("nav-scroll");
    }
  }

  const handleTranslate = (e) => {
    const route = pathname.substring(4, pathname.length);
    router.push(`/${e}/${route}`);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      ref={navbar}
      className={`navbar navbar-expand-lg change ${
        theme === "light" ? "light" : ""
      }`}
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
            src={data ? `${img_url}` : ""}
            style={{ maxWidth: "300px", maxHeight: "150px", padding: "10px" }}
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
            backdropFilter: " blur(20px)",
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
                href={`/${pathname?.split("/")?.[1]}/cases`}
                className="nav-link"
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
                href={`/${pathname?.split("/")?.[1]}/news`}
                className="nav-link"
              >
                {language === "en"
                  ? "NEWS"
                  : language === "az"
                  ? "XƏBƏRLƏR"
                  : "НОВОСТИ"}
              </a>
            </li>
            <li
              className={`nav-item ${
                pathname.includes("events") ? "active" : ""
              }`}
            >
              <a
                href={`/${pathname?.split("/")?.[1]}/events`}
                className="nav-link"
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
                href={`/${pathname?.split("/")?.[1]}/contact`}
                className="nav-link"
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
