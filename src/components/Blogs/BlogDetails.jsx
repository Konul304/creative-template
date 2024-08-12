import React from 'react';
import Image from './Details/Image';
import Content from './Details/Content';
import SimilarCases from '../Blogs/SimilarCases';
import WorksStyle2 from '../Works/WorksStyle2';

const BlogDetails = ({ data, id }) => {
  const caseData = data?.find((item) => item.id?.toString() === id);
  const hasImages = caseData?.caseImages && caseData?.caseImages.length > 0;
  const hasVideos = caseData?.caseVideos && caseData.caseVideos.length > 0;
  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="">
            <Image data={caseData} />
            <Content data={caseData} />
            {(hasImages || hasVideos) && (
              <WorksStyle2
                id={caseData?.id}
                grid={3}
                // presentations={item?.servicePresentations}
                videos={caseData?.caseVideos}
                images={caseData?.caseImages}
                hideHeader={true}
                filterPosition="center"
              />
            )}
          </div>
        </div>
      </div>
      <SimilarCases data={data} />
    </section>
  );
};

export default BlogDetails;
