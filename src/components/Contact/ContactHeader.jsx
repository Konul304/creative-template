'use client';
import React, { useEffect } from 'react';
//= Static Data
import contentHeaderData from '../../data/contact-header.json';
import { usePathname } from 'next/navigation';

function ContactHeader() {
  const pathname = usePathname();
  const language = pathname?.split('/')[1];
  useEffect(() => {
    setTimeout(() => {
      if (document.querySelector('#particles-js canvas')) {
        document.querySelector('#particles-js canvas').style.position = 'unset';
      }
    }, 500);
  }, []);

  return (
    <header className="pages-header circle-bg valign position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-11">
            <div className="capt">
              <div className="text-center">
                <h1 className="color-font  fw-700">
                  {language === 'en'
                    ? "Let's talk about your project."
                    : language === 'ru'
                    ? 'Давай поговорим о твоем проекте.'
                    : 'Layihəniz haqqında danışaq.'}
                </h1>
                <p>
                  {' '}
                  {language === 'en'
                    ? "Feel free to ask me any question or let's talk about our future collaboration"
                    : language === 'ru'
                    ? 'Спрашивай что угодно или давай обсудим наше будущее сотрудничество.'
                    : 'Bizə hər hansı bir sual verməkdən çəkinməyin , gəlin gələcək əməkdaşlığımız haqqında danışaq'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="circle-color">
        <div className="gradient-circle"></div>
        <div className="gradient-circle two"></div>
      </div>
    </header>
  );
}

export default ContactHeader;
