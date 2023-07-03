import React from "react";
import "./FooterLinks.scss";
import { NavLink } from "react-router-dom";
const FooterLinks = () => {
  return (
    <div className="footerlinks">
      <div className="container">
        <div className="footerlinks__container">
          <div className="footerlinks__item">
            <NavLink to="/" className="links__title">
              Услуги
            </NavLink>
            <div className="link__items">
              <NavLink className="link__item" to="/">
                Косметология
              </NavLink>
              <NavLink className="link__item" to="/">
                Пластическая хирургия
              </NavLink>
              <NavLink className="link__item" to="/">
                Стоматология
              </NavLink>
              <NavLink className="link__item" to="/">
                Лазерная медицина
              </NavLink>
            </div>
          </div>
          <div className="footerlinks__item">
            <NavLink to="/" className="links__title">
              Услуги
            </NavLink>
            <div className="link__items">
              <NavLink className="link__item" to="/">
                Косметология
              </NavLink>
              <NavLink className="link__item" to="/">
                Пластическая хирургия
              </NavLink>
              <NavLink className="link__item" to="/">
                Стоматология
              </NavLink>
              <NavLink className="link__item" to="/">
                Лазерная медицина
              </NavLink>
            </div>
          </div>
          <div className="footerlinks__item">
            <NavLink to="/" className="links__title">
              Услуги
            </NavLink>
            <div className="link__items">
              <NavLink className="link__item" to="/">
                Косметология
              </NavLink>
              <NavLink className="link__item" to="/">
                Пластическая хирургия
              </NavLink>
              <NavLink className="link__item" to="/">
                Стоматология
              </NavLink>
              <NavLink className="link__item" to="/">
                Лазерная медицина
              </NavLink>
            </div>
          </div>
          <div className="footerlinks__item">
            <NavLink to="/" className="links__title telephone">
              телефон
            </NavLink>
            <div className="link__items">
              <NavLink className="link__item tel" to="/">
                +7 (812) 123-45-67
              </NavLink>
              <NavLink className="link__item address" to="/">
                адрес
              </NavLink>
              <NavLink className="link__item addre" to="/">
                Невский пр. 140, пом. 10
              </NavLink>
              <NavLink className="link__item how__go" to="/">
                как проехать?
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
