"use strict";
window.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header"),
        headerBtn = header.querySelector(".header__btn"),
        headerLink = header.querySelectorAll(".header__link"),
        headerMenuWrapper = header.querySelector(".header__menu-wrapper"),
        headerNav = header.querySelector(".header__nav"),
        footerBtn = document.querySelector(".footer__btn"),
        dropdown = document.querySelector(".dropdown");

    let heightDropdownFooter;

    // Start burger button =================================================================================

    openCloseMenuNav(headerBtn);
    headerLink.forEach((item) => {
        openCloseMenuNav(item);
    });

    function openCloseMenuNav(className) {
        className.addEventListener(
            "click",
            function () {
                headerNav.classList.toggle("header__nav--on");
                headerBtn.classList.toggle("header__btn--on");
                headerMenuWrapper.classList.toggle("header__menu-wrapper--on");
            },
            true
        );
    }
    // end burger button ====================================================================================

    //  dropdown footer //
    heightDropdownFooter = dropdown.scrollHeight;
    dropdown.style.height = "0px";
    footerBtn.addEventListener("click", function () {
        this.classList.toggle("footer__btn--up");
        this.classList.toggle("active");
        dropdown.classList.toggle("dropdown--active");
        if (this.classList.contains("active")) {
            dropdown.style.height = heightDropdownFooter + "px";
        } else {
            dropdown.style.height = "0px";
        }
    });
    // end dropdown footer //
});
