import React from 'react';

function PageHeader({ title, classText }) {
  return (
    <section className={`page-header ${classText && classText}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div>
            <div className="cont text-center">
              <h1 className="mb-10 color-font">{title}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageHeader;
