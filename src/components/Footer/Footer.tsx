import React from "react";
import "./Footer.scss";
import { NavLink } from "react-router-dom";
import { BiCaretDown } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import instagram from "../../assets/img/instagram.png";
import facebook from "../../assets/img/facebook.png";
import vk from "../../assets/img/vk.png";
import youtube from "../../assets/img/youtube.png";
import logo from "../../assets/img/logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__container">
          <div className="header__top">
            <div className="container">
              <div className="header__top__wrapper">
                <div className="header__top__item">
                  <NavLink to="/">
                    <p>
                      (c) 2021. Центр космелогии. Все права защищены. Наши
                      сертификаты на осуществление деятельности. Патенты на
                      использование технологий.
                    </p>
                  </NavLink>
                </div>
                <div className="header__top__item">
                  <NavLink className="confidence" to="/">
                    Политика конфиденциальности
                  </NavLink>
                </div>

                <div className="header__top__item">
                  <div className="eye__item">
                    <span>
                      <AiOutlineEye />
                    </span>
                    Версия для слабовидящих
                  </div>
                </div>
                <div className="header__top__item">
                  <NavLink to={"/"} className="wikontakt">
                    <img src={vk} alt="VK" />
                  </NavLink>
                </div>
                <div className="header__top__item">
                  <NavLink to={"/"} className="youtube">
                    <img src={youtube} alt="Youtube" />
                  </NavLink>
                </div>
                <div className="header__top__item">
                  <NavLink to={"/"} className="facebook">
                    <img src={facebook} alt="Facebook" />
                  </NavLink>
                </div>
                <div className="header__top__item icon">
                  <NavLink to={"/"} className="insta">
                    <img src={instagram} alt="Instagram" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
