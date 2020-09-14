"use strict";
const mainNav = document.querySelector(".main-nav");
const navToggle = mainNav.querySelector(".main-nav__toggle");

mainNav.classList.remove("main-nav--nojs");
navToggle.classList.add("main-nav__toggle--opened");

navToggle.addEventListener("click", function(){
  if (mainNav.classList.contains("main-nav--closed")){
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened");
    navToggle.classList.remove("main-nav__toggle--closed");
    navToggle.classList.add("main-nav__toggle--opened");
  } else {
    mainNav.classList.add("main-nav--closed");
    mainNav.classList.remove("main-nav--opened");
    navToggle.classList.remove("main-nav__toggle--opened");
    navToggle.classList.add("main-nav__toggle--closed");
  }
});
