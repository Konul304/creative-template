"use client";
import React from "react";
import Link from "next/link";
import { useQuery } from "react-query";
import { getServiceFAQ } from "../../app/(api)/api";
import { usePathname } from "next/navigation";

const HomepageServicesSection = ({ style, lines }) => {
  const pathname = usePathname();
  const language = pathname?.split("/")[1];

  const { data: services } = useQuery(
    ["servicesFAQ"],
    async () => await getServiceFAQ(),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  const azFAQData = services?.map((item) => ({
    title: item.titleAz,
  }));
  const engFAQData = services?.map((item) => ({
    title: item.titleEng,
  }));
  const rusFAQData = services?.map((item) => ({
    title: item.titleRus,
  }));

  const dataToRender =
    language === "en" ? engFAQData : language === "az" ? azFAQData : rusFAQData;

  return (
    <section
      className={`services bords section-padding ${
        style === "4item" ? "lficon" : lines ? "" : "pt-0"
      }`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h3 className="wow color-font">
                {language === "en"
                  ? "OUR SERVICES"
                  : language === "az"
                  ? "XİDMƏTLƏRİMİZ"
                  : "НАШИ УСЛУГИ"}
              </h3>
            </div>
          </div>
        </div>
        <div className="row_services">
          {dataToRender?.map((item, index) => {
            return (
              <div
                key={index}
                className="col-md-4 wow fadeInLeft"
                data-wow-delay={`0s`}
              >
                <Link
                  href={`/${language}/services`}
                  className="item-box"
                  target="_blank"
                >
                  <div className="cont">
                    <h6 className="text-center">{item?.title}</h6>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomepageServicesSection;
