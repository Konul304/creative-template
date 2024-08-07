'use client';
import React, { useEffect } from 'react';
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
                    ? "LET'S TALK ABOUT YOUR PROJECT."
                    : language === 'ru'
                    ? 'ДАВАЙ ПОГОВОРИМ О ТВОЕМ ПРОЕКТЕ.'
                    : 'LAYIHƏNİZ HAQQINDA DANIŞAQ.'}
                </h1>
                <p>
                  {' '}
                  {language === 'en'
                    ? "FEEL FREE TO ASK ME ANY QUESTION OR LET'S TALK ABOUT OUR FUTURE COLLABORATION"
                    : language === 'ru'
                    ? 'СПРАШИВАЙ ЧТО УГОДНО ИЛИ ДАВАЙ ОБСУДИМ НАШЕ БУДУЩЕЕ СОТРУДНИЧЕСТВО.'
                    : 'BİZƏ HƏR HANSI BİR SUAL VERMƏKDƏN ÇƏKİNMƏYİN , GƏLİN GƏLƏCƏK ƏMƏKDAŞLIĞIMIZ HAQQINDA DANIŞAQ'}
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
