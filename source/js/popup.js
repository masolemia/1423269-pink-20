"use strict";
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
