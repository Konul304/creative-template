"use client";

import { getContactData, getPortfolio, postEmail } from "../../app/(api)/api";
import { useEffect, useState } from "react";
import countryData from "../../data/regions-to-countries";
import { Select, message } from "antd";
import { usePathname, useRouter } from "next/navigation";

const Footer = ({ hideBGCOLOR }) => {
  const pathname = usePathname();
  const router = useRouter();
  const language = pathname?.split("/")[1];
  const { countries, zones } = require("moment-timezone/data/meta/latest.json");
  const timeZoneToCountry = {};
  const timeZoneCityToCountry = {};
  const [portfolioData, setPortfolioData] = useState();
  const [country, setCountry] = useState({ value: "", label: "" });
  const [contactData, setContactData] = useState();
  const [contactInfo, setContactInfo] = useState({
    email: "",
    phoneNumber: "",
    address: "",
  });
  const [email, setEmail] = useState();
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Successfully subscribed",
    });
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Something went wrong",
    });
  };

  const getPortfolioData = async () => {
    try {
      const portfolio = await getPortfolio();
      setPortfolioData([
        portfolio[portfolio?.length - 1],
        portfolio[portfolio?.length - 2],
      ]);
    } catch (error) {
      console.log(error);
    }
  };
  const azPortfolioData = portfolioData?.map((item) => ({
    logoLink: item?.logoLink,
    id: item?.id,
    title: item?.titleAz,
  }));
  const engPortfolioData = portfolioData?.map((item) => ({
    logoLink: item?.logoLink,
    id: item?.id,
    title: item?.titleEng,
  }));
  const rusPortfolioData = portfolioData?.map((item) => ({
    logoLink: item?.logoLink,
    id: item?.id,
    title: item?.titleRus,
  }));

  const dataToRender =
    language === "en"
      ? engPortfolioData
      : language === "az"
      ? azPortfolioData
      : rusPortfolioData;

  const getContact = async () => {
    try {
      const contact = await getContactData();
      setContactData(contact);
    } catch (error) {
      console.log(error);
    }
  };

  const sendEmail = async (e) => {
    e?.preventDefault();
    const query = {
      userMail: email,
    };
    const response = await postEmail(query);
    if (response?.message == "Added succesfully") {
      success();
    } else {
      error();
    }
  };

  useEffect(() => {
    getPortfolioData();
    getContact();
  }, []);

  useEffect(() => {
    Object.keys(zones).forEach((z) => {
      timeZoneToCountry[z] = countries[zones[z].countries[0]].name;
      const cityArr = z.split("/");
      const city = cityArr[cityArr.length - 1];
      timeZoneCityToCountry[city] = countries[zones[z].countries[0]].name;
    });
    if (Intl) {
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const myCountry = Object.entries(countryData).find(
        ([key, value]) => key === userTimeZone
      );
      const currentLocationData = contactData?.find(
        (item) => item.country === myCountry[1]
      );
      setContactInfo({
        email: currentLocationData?.email,
        phoneNumber: currentLocationData?.phoneNumber,
        address:
          language === "en"
            ? currentLocationData?.addressEng
            : language === "az"
            ? currentLocationData?.addressAz
            : currentLocationData?.addressRus,
      });
    }
  }, [portfolioData, contactData]);

  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      {contextHolder}
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>
                  {" "}
                  {language === "en"
                    ? "CONTACT US"
                    : language === "ru"
                    ? "КОНТАКТЫ"
                    : "ƏLAQƏ "}
                </h5>
              </div>
              <Select
                showSearch
                // defaultValue="Azerbaijan"
                // placeholder="Choose country"
                style={{ width: 120 }}
                value={
                  country?.label !== ""
                    ? country
                    : {
                        value: "Azerbaijan",
                        label: "Azerbaijan",
                      }
                }
                optionFilterProp="children"
                className="footer_select"
                onChange={(value, option) => {
                  setCountry(option);
                  const selectedLocationData = contactData?.find(
                    (item) => item.country === option?.label
                  );
                  if (selectedLocationData) {
                    setContactInfo({
                      email: selectedLocationData?.email,
                      phoneNumber: selectedLocationData?.phoneNumber,
                      address:
                        language === "en"
                          ? selectedLocationData?.addressEng
                          : language === "az"
                          ? selectedLocationData?.addressAz
                          : selectedLocationData?.addressRus,
                    });
                  }
                }}
                options={contactData?.map((item) => ({
                  value: item?.country,
                  label: item?.country,
                }))}
              />
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>
                      {" "}
                      {language === "en"
                        ? "OFFICIAL ADDRESS"
                        : language === "ru"
                        ? "ОФФИЦАЛЬНЫЙ АДРЕСС"
                        : "RƏSMİ ÜNVAN"}
                    </h6>
                    <p>{contactInfo?.address}</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>
                      {language === "en"
                        ? "EMAIL US"
                        : language === "ru"
                        ? "ОТПРАВИТЬ Е-МАИЛ"
                        : "EMAIL GÖNDƏR"}
                    </h6>
                    <p>{contactInfo?.email}</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>
                      {language === "en"
                        ? "CALL US"
                        : language === "ru"
                        ? "ПОЗВОНИ НАМ"
                        : "ZƏNG EDİN"}
                    </h6>
                    <p>{contactInfo?.phoneNumber}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>
                  {" "}
                  {language === "en"
                    ? "PORTFOLIO"
                    : language === "ru"
                    ? "ПОРТФОЛИО"
                    : "PORTFOLİO"}
                </h5>
              </div>
              <ul>
                {dataToRender?.map((item) => {
                  const img_link =
                    "https://project141.s3.eu-north-1.amazonaws.com/" +
                    item?.logoLink;
                  return (
                    <li key={item?.id}>
                      <div
                        onClick={() =>
                          router?.push(
                            `/${pathname?.split("/")?.[1]}/portfolio`
                          )
                        }
                        className="img"
                      >
                        <a href={`/${pathname?.split("/")?.[1]}/portfolio`}>
                          <img src={img_link} alt="" />
                        </a>
                      </div>
                      <div className="sm-post">
                        <a href={`/${pathname?.split("/")?.[1]}/portfolio`}>
                          <p>{item?.title}</p>
                          {/* <span className="date">14 sep 2023</span> */}
                        </a>
                      </div>
                    </li>
                  );
                })}

                <li>
                  <div className="subscribe">
                    <form onSubmit={sendEmail} id="footer-email-form">
                      <input
                        type="email"
                        required
                        placeholder={
                          language === "en"
                            ? "TYPE YOUR EMAIL"
                            : language === "ru"
                            ? "НАПИШИТЕ ВАШ Е-МАИЛ"
                            : "EMAILINIZI YAZIN"
                        }
                        onChange={(e) => setEmail(e?.target?.value)}
                      />
                      <button
                        type="submit"
                        className="subs pe-7s-paper-plane"
                      ></button>
                    </form>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="title">
                <h5>
                  {" "}
                  {language === "en"
                    ? "SOCIALS"
                    : language === "ru"
                    ? "СОЦИАЛЬНЫЕ СЕТИ"
                    : "SOSIAL"}
                </h5>
              </div>
              <div className="social">
                <a
                  href="https://www.instagram.com/mvpeventsagency?igsh=MTZnMzQ4MnNqM2kzcg=="
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.facebook.com/MVPAzerbaijan?mibextid=LQQJ4d"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/mvp-sports-events/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a>
                {/* <a href="https://www.facebook.com/c141worldwide?mibextid=ZbWKwL">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
