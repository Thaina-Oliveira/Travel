"use strict";

// panels
const panels = document.querySelectorAll(".panel");

// adding the class active
panels.forEach((panel) => {
  panel.addEventListener("click", function () {
    panels.forEach((p) => {
      if (p !== panel) {
        p.classList.remove("active");
      }
    });
    panel.classList.toggle("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

// contact form
const form = document.querySelector(".wrapper");
const btnCloseForm = document.querySelector(".close-modal");
const openForm = document.querySelector(".contact-us");

const btnOpenForm = function () {
  form.classList.remove("hidden-form");
};

const closeForm = function () {
  form.classList.add("hidden-form");
};

btnCloseForm.addEventListener("click", closeForm);
openForm.addEventListener("click", btnOpenForm);

// pressing esc to close the modal;
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !form.classList.contains("hidden-form")) {
    closeForm();
  }
});

// sandwich button nav bar

function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  console.log();

  if (menuMobile.classList.contains("open-menu")) {
    menuMobile.classList.remove("open-menu");
  } else {
    menuMobile.classList.add("open-menu");
  }
}
