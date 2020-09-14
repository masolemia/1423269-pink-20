"use strict";
const mainNav = document.querySelector(".main-nav");
const navToggle = mainNav.querySelector(".main-nav__toggle");

mainNav.classList.remove("main-nav--nojs");
mainNav.classList.add ("main-nav--closed");
navToggle.classList.add("main-nav__toggle--closed");

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


const form = document.querySelector(".form");
const successPopUp = form.querySelector(".pop-up--success");
const closePopUp = form.querySelector(".pop-up__button");

const onFormSubmit = function(evt) {
  evt.preventDefault();
  if (successPopUp.classList.contains("pop-up--closed")){
    successPopUp.classList.remove("pop-up--closed");
  }

  closePopUp.addEventListener("click", onClosePopUpClick);
  form.removeEventListener("submit", onFormSubmit);
};

const onClosePopUpClick = function() {
  successPopUp.classList.add("pop-up--closed");

  closePopUp.removeEventListener("click", onClosePopUpClick);
  form.addEventListener("submit", onFormSubmit);
};

form.removeEventListener("submit", onFormSubmit);
