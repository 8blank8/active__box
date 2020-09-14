"use strict";

//burger

const menuBurger = document.querySelector('.menu'),
   menu = document.querySelector('.header__menu');

menuBurger.addEventListener('click', () => {
   menu.classList.toggle('menu__active');
   menuBurger.classList.toggle('menu__active');
});

//burger
