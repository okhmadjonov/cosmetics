import React from "react";
import "./News.scss";
import { NavLink } from "react-router-dom";
const News = () => {
  return (
    <div className="news">
      <div className="container">
        <div className="news__container">
          <div className="news__container__left">
            <div className="news__btn__wrapper">
              <NavLink to="/" className="news__btn">
                Новости
              </NavLink>
            </div>
            <div className="news__content__one">
              <p>
                Почему рекомендуется посещать профессионального косметолога.
                Мнение специалистов центра
              </p>
            </div>
            <div className="news__content__two">
              <p>
                Стандартизация деятельности клиник в соответствии с ISO
                9001:2015.
              </p>
            </div>
            <div className="news__content__three">
              <p>
                Индивидуальный подход к каждому пациенту и подбор оптимальных
                косметологических методик.
              </p>
            </div>
          </div>
          <div className="news__container__right">
            <div className="news__container__right__inner">
              <div className="ncr__title">
                <h3>
                  Почему рекомендуется посещать профессионального косметолога.
                  Мнение специалистов центра
                </h3>
              </div>
              <div className="ncr__items">
                <ul>
                  <li>
                    <span className="dot"></span>
                    <p>
                      Процедуры аппаратной косметологии на оборудовании
                      экспертного класса от ведущих мировых производителей могут
                    </p>
                  </li>
                  <li>
                    <span className="dot"></span>
                    <p>
                      С помощью инъекционных методик мы можем разгладить
                      морщины, провести объёмное моделирование, увлажнить кожу,
                    </p>
                  </li>
                  <li>
                    <span className="dot"></span>
                    <p>
                      Лазерное и фотоомоложение помогут запустить процесс
                      синтеза собственного коллагена, улучшить светооптические
                    </p>
                  </li>
                  <li>
                    <span className="dot"></span>
                    <p>
                      Курс процедур лазерной эпиляции поможет навсегда
                      избавиться от проблемы нежелательных волос.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
