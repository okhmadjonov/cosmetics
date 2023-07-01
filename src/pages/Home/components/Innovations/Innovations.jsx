import React from "react";
import "./Innovations.scss";
import inno from "../../../../assets/img/innovations__img.png";
import cert from "../../../../assets/img/sertificate.png";
import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const Innovations = () => {
  return (
    <div className="innovations">
      <div className="container">
        <div className="innovations__wrapper">
          <div className="innovations__left">
            <div className="il__top">
              <div className="il__top__inner">
                <div className="inno">Инновации</div>
                <p>
                  Мы практикуем новый курс процедур аппаратной косметологии{" "}
                </p>
                <div className="arrow__detail">
                  <NavLink to="/" className="ad__arrow">
                    <BsArrowRight />
                  </NavLink>
                  <p className="detailll">Подробнее</p>
                </div>
              </div>
            </div>
            <div className="il__bottom">
              <img src={inno} alt="Inno" />
            </div>
          </div>
          <div className="innovations__right">
            <div className="estetic__beauty">Эстетика красоты</div>
            <div className="ir__inner">
              <div className="estetic__beauty__side">
                <div className="es__beauty__side__item">
                  <span className="ebs__number">78</span>
                  <p className="ebs__desc">Современных центра в странах СНГ</p>
                </div>
                <div className="es__beauty__side__item">
                  <span className="ebs__number">78</span>
                  <p className="ebs__desc">Современных центра в странах СНГ</p>
                </div>
                <div className="es__beauty__side__item">
                  <span className="ebs__number">20</span>
                  <p className="ebs__desc">
                    Уникальных патентов в области косметологии
                  </p>
                </div>
                <div className="es__beauty__side__item">
                  <span className="ebs__number">78</span>
                  <p className="ebs__desc">Современных центра в странах СНГ</p>
                </div>
              </div>
              <div className="estetic__sertificate__side">
                <img src={cert} alt="Cert" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovations;
