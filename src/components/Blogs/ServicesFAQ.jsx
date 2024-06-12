'use client';
import React from 'react';
import { useQuery } from 'react-query';
import { getServiceFAQ } from '../../app/(api)/api';
import HTMLReactParser from 'html-react-parser';
import { Collapse } from 'antd';

const ServicesFAQ = () => {
  const { data } = useQuery(
    ['servicesFAQ'],
    async () => await getServiceFAQ(),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  const items = data?.map((item) => ({
    key: item?.id.toString(), // Assuming ids are unique and can be used as keys
    label: <p>{item?.title && HTMLReactParser(item?.title)}</p>,
    children: <p>{item?.description && HTMLReactParser(item?.description)}</p>,
  }));

  return (
    <section className="blog-pg section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="posts">
              <Collapse
                items={items}
                // defaultActiveKey={["1"]}
                // onChange={onChange}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesFAQ;
