import React from 'react';
import Image from './Details/Image';
import Content from './Details/Content';
import WorksStyle2 from '../Works/WorksStyle2';
import SimilarNews from './SimilarNews';

const NewsDetails = ({ data }) => {
  const newsData = data?.data?.find(
    (item) => item.id?.toString() === data?.id?.newsID
  );
  const hasImages = newsData?.newsImages && newsData?.newsImages.length > 0;
  const hasVideos = newsData?.newsVideos && newsData.newsVideos.length > 0;
  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="">
            <Image data={newsData} />
            <Content data={newsData} />
            {(hasImages || hasVideos) && (
              <WorksStyle2
                id={newsData?.id}
                grid={3}
                // presentations={item?.servicePresentations}
                videos={newsData?.newsVideos}
                images={newsData?.newsImages}
                hideHeader={true}
                filterPosition="center"
              />
            )}
          </div>
        </div>
      </div>
      <SimilarNews data={data} />
    </section>
  );
};

export default NewsDetails;
