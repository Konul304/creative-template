'use client';
import React, { useEffect, useState } from 'react';
import Split from '../Common/Split';
import styles from '../../styles/Contact.module.scss';
import countryData from '../../data/regions-to-countries';
import { Select, message } from 'antd';
import { postMessage } from '../../app/(api)/api';
import { usePathname } from 'next/navigation';

const ContactForm = (data) => {
  const pathname = usePathname();
  const language = pathname?.split('/')[1];
  const { countries, zones } = require('moment-timezone/data/meta/latest.json');
  const timeZoneToCountry = {};
  const timeZoneCityToCountry = {};
  const [country, setCountry] = useState({ value: '', label: '' });
  const [messageApi, contextHolder] = message.useMessage();
  const [contactInfo, setContactInfo] = useState({
    email: '',
    phoneNumber: '',
    address: '',
  });
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    message: '',
  });
  let myCountry;

  const getData = async () => {
    Object.keys(zones).forEach((z) => {
      timeZoneToCountry[z] = countries[zones[z].countries[0]].name;
      const cityArr = z.split('/');
      const city = cityArr[cityArr.length - 1];
      timeZoneCityToCountry[city] = countries[zones[z].countries[0]].name;
    });
    if (Intl) {
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      myCountry = Object.entries(countryData).find(
        ([key, value]) => key === userTimeZone
      );
      const currentLocationData = data?.data?.find(
        (item) => item.country === myCountry[1]
      );
      setContactInfo({
        email: currentLocationData?.email,
        phoneNumber: currentLocationData?.phoneNumber,
        address:
          language === 'az'
            ? currentLocationData.addressAz
            : language === 'en'
            ? currentLocationData.addressEng
            : currentLocationData.addressRus,
      });
    }
  };

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Email sent successfully',
    });
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Something went wrong',
    });
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    const query = {
      name: inputValues?.name,
      message: inputValues?.message,
      additionalEmail: inputValues?.email,
    };
    const response = await postMessage(query);
    if (response == 'Email sent successfully') {
      success();
    } else {
      error();
    }
  };
  useEffect(() => {
    getData();
  }, []);
  //finds the country in data which is the same with the country found based on timezone

  return (
    <section className="contact ">
      <div className={styles.contact_button}>
        {contextHolder}
        <Select
          showSearch
          // defaultValue="Azerbaijan"
          // placeholder="Choose country"
          style={{ width: 120 }}
          value={
            country?.label !== ''
              ? country
              : {
                  value: 'Azerbaijan',
                  label: 'Azerbaijan',
                }
          }
          optionFilterProp="children"
          onChange={(value, option) => {
            setCountry(option);
            const selectedLocationData = data?.data?.find(
              (item) => item.country === option?.label
            );
            if (selectedLocationData) {
              setContactInfo({
                email: selectedLocationData?.email,
                phoneNumber: selectedLocationData?.phoneNumber,
                address: selectedLocationData?.address,
              });
            }
          }}
          options={data?.data?.map((item) => ({
            value: item?.country,
            label: item?.country,
          }))}
        />
      </div>
      <div className={`${styles.contact_container} container`}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h4 className="fw-700 color-font mb-50">
                {language === 'en'
                  ? 'GET IN TOUCH.'
                  : language === 'ru'
                  ? 'СВЯЖИСЬ С НАМИ.'
                  : 'ƏLAQƏ SAXLAYIN'}
              </h4>

              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="messages"></div>

                <div className="controls">
                  <div className="form-group">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      placeholder={
                        language === 'en'
                          ? 'NAME'
                          : language === 'ru'
                          ? 'ИМЯ'
                          : 'AD'
                      }
                      required="required"
                      onChange={(e) =>
                        setInputValues((prevState) => ({
                          ...prevState,
                          name: e?.target?.value,
                        }))
                      }
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      placeholder={
                        language === 'en'
                          ? 'EMAIL'
                          : language === 'ru'
                          ? 'E-MAIL'
                          : 'EMAIL'
                      }
                      required="required"
                      onChange={(e) =>
                        setInputValues((prevState) => ({
                          ...prevState,
                          email: e?.target?.value,
                        }))
                      }
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder={
                        language === 'en'
                          ? 'MESSAGE'
                          : language === 'ru'
                          ? 'ВВЕДИТЕ СООБЩЕНИЕ...'
                          : 'MESAJ'
                      }
                      rows="4"
                      required="required"
                      onChange={(e) =>
                        setInputValues((prevState) => ({
                          ...prevState,
                          message: e?.target?.value,
                        }))
                      }
                    ></textarea>
                  </div>

                  <button type="submit" className={`butn ${'bord'}`}>
                    <span>
                      {language === 'en'
                        ? 'SEND MESSAGE'
                        : language === 'ru'
                        ? 'ОТПРАВИТЬ'
                        : 'GÖNDƏR'}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cont-info">
              <h4 className="fw-700 color-font mb-50">
                {' '}
                {language === 'en'
                  ? 'CONTACT INFO.'
                  : language === 'ru'
                  ? 'КОНТАКТЫ'
                  : 'ƏLAQƏ'}
              </h4>
              <Split>
                <h3 className="wow" data-splitting>
                  {language === 'en'
                    ? "LET'S TALK."
                    : language === 'ru'
                    ? 'ДАВАЙ ПОГОВОРИМ.'
                    : 'DANIŞAQ'}
                </h3>
              </Split>
              <div className="item mb-40">
                <h5>
                  <a href="#0">{contactInfo?.email}</a>
                </h5>
                <h5>{contactInfo?.phoneNumber}</h5>
              </div>
              <Split>
                <h3 className="wow" data-splitting>
                  {language === 'en'
                    ? 'VISIT US.'
                    : language === 'ru'
                    ? 'ПРИХОДИ К НАМ.'
                    : 'ÜNVANIMIZ'}
                </h3>
              </Split>
              <div className="item">
                <h6>{contactInfo?.address}</h6>
              </div>
              <div className="social mt-50">
                <a
                  href="https://www.instagram.com/mvpeventsagency?igsh=MTZnMzQ4MnNqM2kzcg=="
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.facebook.com/MVPAzerbaijan?mibextid=LQQJ4d"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/mvp-sports-events/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
