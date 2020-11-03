"use strict";
window.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header"),
        headerBtn = header.querySelector(".header__btn"),
        headerLink = header.querySelectorAll(".header__link"),
        headerMenuWrapper = header.querySelector(".header__menu-wrapper"),
        headerNav = header.querySelector(".header__nav"),
        description = document.querySelector(".description"),
        product = document.querySelector(".product"),
        productItemsSuit = product.querySelector(".product__items--suit"),
        increaseSuitId = product.querySelector("#increase-suit"),
        decreaseSuitId = product.querySelector("#decrease-suit"),
        productItemsTie = product.querySelector(".product__items--tie"),
        increaseTieId = product.querySelector("#increase-tie"),
        decreaseTieId = product.querySelector("#decrease-tie"),
        productItemsShirt = product.querySelector(".product__items--shirt"),
        increaseShirtId = product.querySelector("#increase-shirt"),
        decreaseShirtId = product.querySelector("#decrease-shirt"),
        productList = product.querySelector(".product__list"),
        productLink = product.querySelectorAll(".product__link"),
        productBtn = product.querySelector(".product__btn"),
        productNav = product.querySelector(".product__nav"),
        productBtnTExt = product.querySelector(".product__btn-text"),
        fixedOffset = 50,
        footerBtn = document.querySelector(".footer__btn"),
        dropdown = document.querySelector(".dropdown"),
        firstSlide = document.querySelectorAll(".first-slide"),
        secondSlide = document.querySelectorAll(".second-slide"),
        thirdSlide = document.querySelectorAll(".third-slide"),
        suit = document.querySelectorAll(".suit"),
        tie = document.querySelectorAll(".tie"),
        shirt = document.querySelectorAll(".shirt"),
        form = document.querySelector(".form"),
        popup = document.querySelector(".popup"),
        feedbackForm = document.querySelector(".feedback__form"),
        feedbackPopup = feedbackForm.querySelector(".feedback__popup"),
        feedbackPopupText = feedbackForm.querySelector(".feedback__popup-text"),
        features = document.querySelector(".features"),
        featuresContainer = features.querySelector(".features .container"),
        featuresContainerFluid = features.querySelector(
            ".features .container--fluid"
        ),
        offerContainer = document.querySelector(".offer .container"),
        offerContainerFluid = document.querySelector(
            ".offer .container--fluid"
        ),
        infoMap = document.querySelector(".info__map");

    let heightDropdownFooter,
        windowWidth = window.screen.width,
        auxiliaryVariableScroll = 0,
        featuresTop = features.getBoundingClientRect().top,
        windowTop,
        suitsSort = new Isotope(productItemsSuit, {
            itemSelector: ".card",
        }),
        tieSort = new Isotope(productItemsTie, {
            itemSelector: ".card",
        }),
        shirtSort = new Isotope(productItemsShirt, {
            itemSelector: ".card",
        });

    // Start burger button =================================================================================

    function openCloseMenuNav(className) {
        className.addEventListener("click", function () {
            headerNav.classList.toggle("header__nav--on");
            headerBtn.classList.toggle("header__btn--on");
            headerMenuWrapper.classList.toggle("header__menu-wrapper--on");
        });
    }

    openCloseMenuNav(headerBtn);

    headerLink.forEach((item) => {
        openCloseMenuNav(item);
    });

    // end burger button ====================================================================================

    //START sort Isotope !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //==start category suit ==============================================================================
    increaseSuitId.addEventListener("click", () => {
        suitsSort = new Isotope(productItemsSuit, {
            itemSelector: ".card",
            layoutMode: "fitRows",
            percentPosition: true,
            transitionDuration: 0,
            getSortData: {
                number: ".number parseInt",
            },
            masonry: {
                columnWidth: ".grid-sizer",
            },
            sortBy: "number",
            sortAscending: false,
        });
    });

    decreaseSuitId.addEventListener("click", () => {
        suitsSort = new Isotope(productItemsSuit, {
            itemSelector: ".card",
            layoutMode: "fitRows",
            percentPosition: true,
            transitionDuration: 0,
            getSortData: {
                number: ".number parseInt",
            },
            masonry: {
                columnWidth: ".grid-sizer",
            },
            sortBy: "number",
            sortAscending: true,
        });
    });
    //==end category suit =================================================================================
    //==start category tie ================================================================================
    increaseTieId.addEventListener("click", () => {
        tieSort = new Isotope(productItemsTie, {
            itemSelector: ".card",
            layoutMode: "fitRows",
            percentPosition: true,
            transitionDuration: 0,
            getSortData: {
                number: ".number parseInt",
            },
            masonry: {
                columnWidth: ".grid-sizer",
            },
            sortBy: "number",
            sortAscending: false,
        });
    });

    decreaseTieId.addEventListener("click", () => {
        tieSort = new Isotope(productItemsTie, {
            itemSelector: ".card",
            layoutMode: "fitRows",
            percentPosition: true,
            transitionDuration: 0,
            getSortData: {
                number: ".number parseInt",
            },
            masonry: {
                columnWidth: ".grid-sizer",
            },
            sortBy: "number",
            sortAscending: true,
        });
    });
    // //==end category tie ==================================================================================
    // //==start category shirt ==============================================================================
    increaseShirtId.addEventListener("click", () => {
        shirtSort = new Isotope(productItemsShirt, {
            itemSelector: ".card",
            layoutMode: "fitRows",
            percentPosition: true,
            transitionDuration: 0,
            getSortData: {
                number: ".number parseInt",
            },
            masonry: {
                columnWidth: ".grid-sizer",
            },
            sortBy: "number",
            sortAscending: true,
        });
    });

    decreaseShirtId.addEventListener("click", () => {
        shirtSort = new Isotope(productItemsShirt, {
            itemSelector: ".card",
            layoutMode: "fitRows",
            percentPosition: true,
            transitionDuration: 0,
            getSortData: {
                number: ".number parseInt",
            },
            masonry: {
                columnWidth: ".grid-sizer",
            },
            sortBy: "number",
            sortAscending: false,
        });
    });
    //==end category shirt ====================================================================================
    //END sort Isotope !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    // load popup swiper================================================================
    function modalOff() {
        description.classList.add("description--off");
    }
    setTimeout(modalOff, 1);
    //end load popup swiper=============================================================

    //Start anchor offset =====================================================================================
    $("body").on("click", ".product__link", function (e) {
        $("html,body")
            .stop()
            .animate(
                {
                    scrollTop: $(this.hash).offset().top - fixedOffset,
                },
                0
            );
        e.preventDefault();
    });

    // productLink.forEach((item) => {
    //     item.addEventListener("click", function (event) {
    //         $("html,body")
    //             .stop()
    //             .animate(
    //                 {
    //                     scrollTop: $(this.hash).offset().top - fixedOffset,
    //                 },
    //                 0
    //             );
    //         event.preventDefault();
    //     });
    // });

    //end anchor offset =====================================================================================

    //start Swiper modal window =========================================================
    var galleryThumbs = new Swiper(".description__thumbs", {
        direction: "vertical",
        spaceBetween: 10,
        slidesPerView: 3,
        allowTouchMove: false,
    });

    var galleryTop = new Swiper(".description__top", {
        effect: "fade",
        thumbs: {
            swiper: galleryThumbs,
        },
    });
    //end Swiper modal window ===========================================================

    // START scroll =============================================================

    window.addEventListener("scroll", function () {
        windowTop = this.pageYOffset;
        if (windowTop >= 900) {
            productNav.classList.add("product__nav--active");
        } else {
            productNav.classList.remove("product__nav--active");
            productList.classList.remove("product__list--on");
            productLink.forEach((item) => {
                item.classList.remove("product__link--on");
            });
            productBtnTExt.classList.remove("product__btn-text--on");
        }

        if (windowTop > featuresTop && auxiliaryVariableScroll === 0) {
            //start reviewsSlider ==============================================================
            var reviewsSlider = new Swiper(".reviews__slider", {
                // Optional parameters
                loop: true,
                slidesPerView: 3,
                spaceBetween: 30,
                autoplay: {
                    delay: 2500,
                    // disableOnInteraction: false,
                },

                // Pagination
                pagination: {
                    el: ".swiper-pagination",
                    dynamicBullets: true,
                },

                // Navigation arrows
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                },
            });
            //end reviewsSlider =================================================================

            infoMap.setAttribute(
                "src",
                "https://yandex.ru/map-widget/v1/?um=constructor%3A9af11766daec9ca63d06430e85c364b458a42042619810ba188bf9703abe48c6&source=constructor"
            );
            auxiliaryVariableScroll = 1;
        }
    });

    // reload page after resize ===================================================================================
    window.addEventListener("resize", function () {
        if (window.screen.width != windowWidth) {
            if (windowWidth <= 993) {
                this.location.reload();
            }
        }
    });
    // reload page after resize=====================================================================================

    function openDropdownProductMenu(classNamer) {
        classNamer.addEventListener("click", function () {
            productList.classList.toggle("product__list--on");
            productLink.forEach((item) => {
                item.classList.toggle("product__link--on");
            });
            productBtnTExt.classList.toggle("product__btn-text--on");
        });
    }

    openDropdownProductMenu(productBtn);
    productLink.forEach((item) => {
        openDropdownProductMenu(item);
    });

    // end dropdown section product//
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
    // END dropdown menu=============================================================

    //Start Swiper images suit ================================================================================
    function changeImagesGallery(idProduct, urlFirst, urlSecond, urlThird) {
        idProduct.addEventListener("click", () => {
            firstSlide.forEach((item) => {
                item.style.backgroundImage = urlFirst;
            });
            secondSlide.forEach((item) => {
                item.style.backgroundImage = urlSecond;
            });
            thirdSlide.forEach((item) => {
                item.style.backgroundImage = urlThird;
            });
        });
    }

    changeImagesGallery(
        suit[0],
        "url(images/content/item-1.png)",
        "url(images/content/model-1.jpg)",
        "url(images/content/model-2.jpg)"
    );
    changeImagesGallery(
        suit[1],
        "url(images/content/item-2.png)",
        "url(images/content/model-3.jpg)",
        "url(images/content/model-1.jpg)"
    );
    changeImagesGallery(
        suit[2],
        "url(images/content/item-3.png)",
        "url(images/content/model-6.jpg)",
        "url(images/content/model-9.jpg)"
    );
    changeImagesGallery(
        suit[3],
        "url(images/content/item-4.png)",
        "url(images/content/model-1.jpg)",
        "url(images/content/model-3.jpg)"
    );
    changeImagesGallery(
        suit[4],
        "url(images/content/item-2.png)",
        "url(images/content/model-3.jpg)",
        "url(images/content/model-1.jpg)"
    );
    changeImagesGallery(
        suit[5],
        "url(images/content/item-5.png)",
        "url(images/content/model-1.jpg)",
        "url(images/content/model-3.jpg)"
    );
    changeImagesGallery(
        suit[6],
        "url(images/content/item-6.png)",
        "url(images/content/model-4.jpg)",
        "url(images/content/model-9.jpg)"
    );
    changeImagesGallery(
        suit[7],
        "url(images/content/item-3.png)",
        "url(images/content/model-6.jpg)",
        "url(images/content/model-9.jpg)"
    );

    //end Swiper images suit ================================================================================

    //Start Swiper images tie ===============================================================================
    changeImagesGallery(
        tie[0],
        "url(images/content/tie-1.jpg)",
        "url(images/content/model-3.jpg)",
        "url(images/content/model-7.jpg)"
    );
    changeImagesGallery(
        tie[1],
        "url(images/content/tie-2.jpg)",
        "url(images/content/model-4.jpg)",
        "url(images/content/model-10.jpg)"
    );
    changeImagesGallery(
        tie[2],
        "url(images/content/tie-3.jpg)",
        "url(images/content/model-6.jpg)",
        "url(images/content/model-5.jpg)"
    );
    changeImagesGallery(
        tie[3],
        "url(images/content/tie-4.jpg)",
        "url(images/content/model-7.jpg)",
        "url(images/content/model-3.jpg)"
    );
    changeImagesGallery(
        tie[4],
        "url(images/content/tie-5.jpg)",
        "url(images/content/model-4.jpg)",
        "url(images/content/model-10.jpg)"
    );
    changeImagesGallery(
        tie[5],
        "url(images/content/tie-3.jpg)",
        "url(images/content/model-6.jpg)",
        "url(images/content/model-5.jpg)"
    );
    changeImagesGallery(
        tie[6],
        "url(images/content/tie-4.jpg)",
        "url(images/content/model-10.jpg)",
        "url(images/content/model-4.jpg)"
    );
    changeImagesGallery(
        tie[7],
        "url(images/content/tie-2.jpg)",
        "url(images/content/model-10.jpg)",
        "url(images/content/model-3.jpg)"
    );

    //end Swiper images tie =================================================================================

    //Start Swiper images shirt =============================================================================
    changeImagesGallery(
        shirt[0],
        "url(images/content/shirt-1.jpg)",
        "url(images/content/model-3.jpg)",
        "url(images/content/model-7.jpg)"
    );
    changeImagesGallery(
        shirt[1],
        "url(images/content/shirt-2.jpg)",
        "url(images/content/model-4.jpg)",
        "url(images/content/model-10.jpg)"
    );
    changeImagesGallery(
        shirt[2],
        "url(images/content/shirt-3.jpg)",
        "url(images/content/model-6.jpg)",
        "url(images/content/model-5.jpg)"
    );
    changeImagesGallery(
        shirt[3],
        "url(images/content/shirt-4.jpg)",
        "url(images/content/model-7.jpg)",
        "url(images/content/model-3.jpg)"
    );

    //end Swiper images shirt ===============================================================================

    //E-mail Ajax Send=======================================================================================
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize(),
        }).done(function () {
            popup.classList.add("popup--active");
            setTimeout(function () {
                $.fancybox.close();
                th.trigger("reset");
                popup.classList.remove("popup--active");
            }, 2000);
        });
        return false;
    });

    feedbackForm.addEventListener("submit", function (event) {
        //Change
        event.preventDefault();
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize(),
        }).done(function () {
            feedbackPopup.classList.add("feedback__popup--active");
            feedbackPopupText.classList.add("feedback__popup-text--active");
        });
        return false;
    });
    //end E-mail Ajax Send===================================================================================
    //container-fluid after resize =========================================================================================

    function addContanerFluid(className) {
        className.classList.add("container--fluid");
    }
    function removeContanerFluid(className) {
        className.classList.remove("container--fluid");
    }

    if (windowWidth <= "769") {
        addContanerFluid(offerContainer);
        addContanerFluid(featuresContainer);
    } else {
        removeContanerFluid(offerContainerFluid);
        removeContanerFluid(featuresContainerFluid);
    }
     //end container-fluid after resize =========================================================================================
});
