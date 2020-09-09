let mainNav = document.querySelector(".main-nav");
let navToggle = mainNav.querySelector(".main-nav__toggle");
let form = document.querySelector(".form");
let successPopUp = form.querySelector(".pop-up--success");
let closePopUp = form.querySelector(".pop-up__button");

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

form.addEventListener("submit",function(){
  form.preventDefault();
  successPopUp.classList.remove("pop-up--closed");
  successPopUp.classList.add("pop-up--opened");
});

closePopUp.addEventListener("click", function() {
  successPopUp.classList.remove("pop-up--opened");
  successPopUp.classList.add("pop-up--closed");
});
