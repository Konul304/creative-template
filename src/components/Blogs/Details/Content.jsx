import HTMLReactParser from 'html-react-parser';
import React from 'react';

const Content = (data) => {
  return (
    <div
      className="content pt-60"
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="cont cases_content">
            <div className="extra-title">
              {data?.data?.content?.heading1 &&
                HTMLReactParser(data?.data?.content?.heading1)}
            </div>
            {/* <div className="spacial">
              <p>{data?.data?.heading2}</p>
            </div> */}
            <div>
              {data?.data?.content?.paragraph &&
                HTMLReactParser(data?.data?.content?.paragraph)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
