import HTMLReactParser from 'html-react-parser';
import { usePathname } from 'next/navigation';
import React from 'react';

const Content = (data) => {
  console.log(data?.data?.heading1Az);
  const pathname = usePathname();
  const language = pathname?.split('/')[1];
  const azContent = {
    heading1: data?.data?.heading1Az,
    paragraph: data?.data?.paragraphAz,
  };
  const engContent = {
    heading1: data?.data?.heading1Eng,
    paragraph: data?.data?.paragraphEng,
  };
  const rusContent = {
    heading1: data?.data?.heading1Rus,
    paragraph: data?.data?.paragraphRus,
  };

  const dataToRender =
    language === 'en' ? engContent : language === 'az' ? azContent : rusContent;
  return (
    <div
      className="content pt-60"
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="cont cases_content">
            <div className="extra-title">{dataToRender?.heading1}</div>
            <div>
              {dataToRender?.paragraph &&
                HTMLReactParser(dataToRender?.paragraph)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
