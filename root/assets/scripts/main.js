"use strict";

const mainMenuOpenButton = document.querySelector('[data-js-main-menu-open-button]');
console.log(mainMenuOpenButton);
mainMenuOpenButton.addEventListener(
    "click",
    toggleMainMenu
);

function toggleMainMenu() {
    console.log("CLICK");
    document.querySelector("[data-js-page-main-navigation]").classList.toggle("is-open");
    document.querySelector("[data-js-main-menu-open-button]").classList.toggle("is-open");
}