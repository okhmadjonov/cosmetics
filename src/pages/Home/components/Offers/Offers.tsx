import React from "react";
import "./Offers.scss";
import actual1 from "../../../../assets/img/actual_spes_1.png";
import actual2 from "../../../../assets/img/actual_spes_2.png";
import actual3 from "../../../../assets/img/actual_spes_3.png";
import actual4 from "../../../../assets/img/actual_spes_4.png";
import next from "../../../../assets/img/next.png";
const Offers = () => {
  return (
    <div className="offers">
      <div className="offers__container">
        <div className="offers__back__banner">
          <div className="container">
            <h3>Актуальные спецпредложения </h3>
          </div>
        </div>
        <div className="offers__front__banner">
          <div className="container">
            <div className="offer__items">
              <div className="offer__card">
                <div
                  className="card__img"
                  style={{ backgroundImage: `url(${actual1})` }}>
                  <div className="img__title">Косметология</div>
                </div>
                <div className="card__body">
                  <div className="card__body__inner">
                    <p>Лазерное и фотоомоложение</p>
                    <div className="card__body__btn">
                      <img src={next} alt="Next" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="offer__card">
                <div
                  className="card__img"
                  style={{ backgroundImage: `url(${actual2})` }}>
                  <div className="img__title">Косметология</div>
                </div>
                <div className="card__body">
                  <div className="card__body__inner">
                    <p>Лазерное и фотоомоложение</p>
                    <div className="card__body__btn">
                      <img src={next} alt="Next" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="offer__card">
                <div
                  className="card__img"
                  style={{ backgroundImage: `url(${actual3})` }}>
                  <div className="img__title">Косметология</div>
                </div>
                <div className="card__body">
                  <div className="card__body__inner">
                    <p>Лазерное и фотоомоложение</p>
                    <div className="card__body__btn">
                      <img src={next} alt="Next" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="offer__card">
                <div
                  className="card__img"
                  style={{ backgroundImage: `url(${actual4})` }}>
                  <div className="img__title">Косметология</div>
                </div>
                <div className="card__body">
                  <div className="card__body__inner">
                    <p>Лазерное и фотоомоложение</p>
                    <div className="card__body__btn">
                      <img src={next} alt="Next" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
