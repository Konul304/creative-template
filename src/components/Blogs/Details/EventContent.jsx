import HTMLReactParser from "html-react-parser";
import { usePathname } from "next/navigation";
import React from "react";

const EventContent = (data) => {
  const pathname = usePathname();
  const language = pathname?.split("/")[1];
  const azContent = {
    description: data?.data?.descriptionAz,
  };
  const engContent = {
    description: data?.data?.descriptionEng,
  };
  const rusContent = {
    description: data?.data?.descriptionRus,
  };
  const dataToRender =
    language === "en" ? engContent : language === "az" ? azContent : rusContent;

  return (
    <div
      className="content pt-60"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="cont cases_content">
            <div>
              {dataToRender?.description &&
                HTMLReactParser(dataToRender?.description)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventContent;
