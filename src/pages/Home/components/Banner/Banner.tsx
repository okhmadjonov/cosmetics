import React from "react";
import "./Banner.scss";
// import { BsArrowRight } from "react-icons/bs";
// import { BsArrowLeft } from "react-icons/bs";
import next from "../../../../assets/img/next.png";
import prev from "../../../../assets/img/prev.png";
import banner__img from "../../../../assets/img/banner_img.png";
import { NavLink } from "react-router-dom";
const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner__container">
          <div className="banner__container__top">
            <div className="bc__top__left">
              <div className="bc__top__left__inner">
                <h3 className="bc__title">Косметология</h3>
                <p className="bc__subtitle">
                  Современный мир диктует новые каноны жизни: ухоженное лицо и
                  тело, стройная, подтянутая фигура — сегодня это неотъемлемые
                  черты привлекательной внешности, характеризующие человека
                  благополучного и успешного.
                </p>
                <NavLink className="details" to="/">
                  подробнее
                </NavLink>
                <div className="arrows">
                  <div className="arrow__prev">
                    <img src={prev} alt="Prev Arrow" />
                  </div>
                  <div className="arrow__next">
                    <img src={next} alt="Next Arrow" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bc__top__right">
              <img src={banner__img} alt="Banner" />
            </div>
          </div>
          <div className="banner__container__bottom">
            <div className="complex__procedure">Комплексные процедуры</div>
            <div className="centre__learning">Центр обучения</div>
            <div className="vip__clients">VIP клиентам</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
