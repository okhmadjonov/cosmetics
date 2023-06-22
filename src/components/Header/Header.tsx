import React from 'react';
import './Header.scss'
import { NavLink } from 'react-router-dom'
import {BiCaretDown} from 'react-icons/bi'
import { AiOutlineEye } from 'react-icons/ai'
import instagram from '../../assets/img/instagram.png'
import facebook from '../../assets/img/facebook.png'
import vk from '../../assets/img/vk.png'
import youtube from '../../assets/img/youtube.png'
import logo from '../../assets/img/logo.png';
const Header = () => {
  return (
    <div className='header'>
          <div className="header__container">
              <div className="header__top">
                  <div className="container">
                      <div className="header__top__wrapper">
                          <div className="header__top__item">
                             <NavLink to="/"> <img src={logo} alt="Logo" /></NavLink>
                          </div>
                          <div className="header__top__item">
                              +7(123 456 78 90)
                          </div>
                          <div className="header__top__item">
                              Наши салоны  
                              <span><BiCaretDown/></span>
                          </div>
                          <div className="header__top__item">
                              <div className="eye__item">
                                    <span><AiOutlineEye/></span>
                              Версия для слабовидящих 
                                 </div>
                          </div>
                          <div className="header__top__item">
                              <NavLink to={"/"} className="wikontakt">
                                  <img src={vk} alt="VK" />
                              </NavLink>
                          </div>
                           <div className="header__top__item">
                            <NavLink to={"/"} className="youtube"><img src={youtube} alt="Youtube" /></NavLink>
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
              <div className="header__bottom">
                  <div className="container">
                      <div className="header__bottom__wrapper">
                      <div className="header__bottom__item">Косметология</div>
                      <div className="header__bottom__item">Пластическая хирургия</div>
                      <div className="header__bottom__item">Стоматология</div>
                      <div className="header__bottom__item">Лазерная медицина</div>
                      <div className="header__bottom__item">Контакты</div>
                          <div className="header__bottom__item">
                              <div className="record__for">
                                  Запись на прием
                              </div>
                      </div>
                      </div>                  
                  </div>
              </div>
        </div>
    </div>
  );
}

export default Header;
