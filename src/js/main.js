$(function () {
    // Start burger button ==================================================================================
    $(".header__btn, .header__link").on("click", function () {
        $(".header__nav").toggleClass("header__nav--on");
        $(".header__btn").toggleClass("header__btn--on");
        $(".header__menu-wrapper").toggleClass("header__menu-wrapper--on");
    });

    // end burger button ====================================================================================

    // load popup swiper================================================================
    var modalOff = function () {
        $(".description").addClass("description--off");
    };
    setTimeout(modalOff, 1);
    //end load popup swiper=============================================================

    //Start anchor offset ===================================================================================
    $("body").on("click", ".product__link", function (e) {
        var fixed_offset = 50;
        $("html,body")
            .stop()
            .animate(
                {
                    scrollTop: $(this.hash).offset().top - fixed_offset,
                },
                0
            );
        e.preventDefault();
    });
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

    // start fancybox ===================================================================
    $(".btn").fancybox({
        baseClass: "popup__wrapper",
        closeExisting: true,
    });

    $(".card__img").fancybox({
        baseClass: "description__wrapper",
    });

    // end fancybox ===================================================================

    // START dropdown menu=============================================================
    // section product//
    $(".product__btn, .product__link").on("click", function () {
        $(".product__list").toggleClass("product__list--on");
        $(".product__link").toggleClass("product__link--on");
        $(".product__btn-text").toggleClass("product__btn-text--on");
    });

    function dropdownMenu() {
        var button = $(".product__btn");
        $(window).on("scroll", () => {
            if ($(this).scrollTop() >= 900) {
                button.fadeIn();
            } else {
                button.fadeOut(0);
                $(".product__list").removeClass("product__list--on");
                $(".product__link").removeClass("product__link--on");
                $(".product__btn-text").removeClass("product__btn-text--on");
            }
        });
    }
    dropdownMenu();
    // end dropdown section product//
    //  dropdown footer //
    $(".footer__btn").on("click", function () {
        $(".footer__btn").toggleClass("footer__btn--up"),
            $(".dropdown").slideToggle();
    });
    // end dropdown footer //
    // END dropdown menu=============================================================

    //Start Swiper images suit ================================================================================
    $("#suit1").on("click", function () {
        $(".one").css("background-image", "url(images/content/item-1.png)");
        $(".two").css("background-image", "url(images/content/model-1.jpg)");
        $(".three").css("background-image", "url(images/content/model-2.jpg)");
    });

    $("#suit2").on("click", function () {
        $(".one").css("background-image", "url(images/content/item-2.png)");
        $(".two").css("background-image", "url(images/content/model-3.jpg)");
        $(".three").css("background-image", "url(images/content/model-1.jpg)");
    });

    $("#suit3").on("click", function () {
        $(".one").css("background-image", "url(images/content/item-3.png)");
        $(".two").css("background-image", "url(images/content/model-6.jpg)");
        $(".three").css("background-image", "url(images/content/model-9.jpg)");
    });

    $("#suit4").on("click", function () {
        $(".one").css("background-image", "url(images/content/item-4.png)");
        $(".two").css("background-image", "url(images/content/model-1.jpg)");
        $(".three").css("background-image", "url(images/content/model-3.jpg)");
    });

    $("#suit5").on("click", function () {
        $(".one").css("background-image", "url(images/content/item-2.png)");
        $(".two").css("background-image", "url(images/content/model-3.jpg)");
        $(".three").css("background-image", "url(images/content/model-1.jpg)");
    });

    $("#suit6").on("click", function () {
        $(".one").css("background-image", "url(images/content/item-5.png)");
        $(".two").css("background-image", "url(images/content/model-1.jpg)");
        $(".three").css("background-image", "url(images/content/model-3.jpg)");
    });

    $("#suit7").on("click", function () {
        $(".one").css("background-image", "url(images/content/item-6.png)");
        $(".two").css("background-image", "url(images/content/model-4.jpg)");
        $(".three").css("background-image", "url(images/content/model-9.jpg)");
    });

    $("#suit8").on("click", function () {
        $(".one").css("background-image", "url(images/content/item-3.png)");
        $(".two").css("background-image", "url(images/content/model-6.jpg)");
        $(".three").css("background-image", "url(images/content/model-9.jpg)");
    });
    //end Swiper images suit ================================================================================
    //Start Swiper images tie ===============================================================================
    $("#tie1").on("click", function () {
        $(".one").css("background-image", "url(images/content/tie-1.jpg)");
        $(".two").css("background-image", "url(images/content/model-3.jpg)");
        $(".three").css("background-image", "url(images/content/model-7.jpg)");
    });

    $("#tie2").on("click", function () {
        $(".one").css("background-image", "url(images/content/tie-2.jpg)");
        $(".two").css("background-image", "url(images/content/model-4.jpg)");
        $(".three").css("background-image", "url(images/content/model-10.jpg)");
    });

    $("#tie3").on("click", function () {
        $(".one").css("background-image", "url(images/content/tie-3.jpg)");
        $(".two").css("background-image", "url(images/content/model-6.jpg)");
        $(".three").css("background-image", "url(images/content/model-5.jpg)");
    });

    $("#tie4").on("click", function () {
        $(".one").css("background-image", "url(images/content/tie-4.jpg)");
        $(".two").css("background-image", "url(images/content/model-7.jpg)");
        $(".three").css("background-image", "url(images/content/model-3.jpg)");
    });

    $("#tie5").on("click", function () {
        $(".one").css("background-image", "url(images/content/tie-5.jpg)");
        $(".two").css("background-image", "url(images/content/model-4.jpg)");
        $(".three").css("background-image", "url(images/content/model-10.jpg)");
    });

    $("#tie6").on("click", function () {
        $(".one").css("background-image", "url(images/content/tie-3.jpg)");
        $(".two").css("background-image", "url(images/content/model-6.jpg)");
        $(".three").css("background-image", "url(images/content/model-5.jpg)");
    });

    $("#tie7").on("click", function () {
        $(".one").css("background-image", "url(images/content/tie-4.jpg)");
        $(".two").css( "background-image", "url(images/content/model-10.jpg)");
        $(".three").css("background-image", "url(images/content/model-4.jpg)");
    });

    $("#tie8").on("click", function () {
        $(".one").css("background-image", "url(images/content/tie-2.jpg)");
        $(".two").css("background-image", "url(images/content/model-10.jpg)");
        $(".three").css("background-image", "url(images/content/model-3.jpg)");
    });
    //end Swiper images tie =================================================================================
    //Start Swiper images shirt =============================================================================
    $("#shirt1").on("click", function () {
        $(".one").css("background-image", "url(images/content/shirt-1.jpg)");
        $(".two").css("background-image", "url(images/content/model-3.jpg)");
        $(".three").css("background-image", "url(images/content/model-7.jpg)");
    });

    $("#shirt2").on("click", function () {
        $(".one").css("background-image", "url(images/content/shirt-2.jpg)");
        $(".two").css("background-image", "url(images/content/model-4.jpg)");
        $(".three").css("background-image", "url(images/content/model-10.jpg)");
    });

    $("#shirt3").on("click", function () {
        $(".one").css("background-image", "url(images/content/shirt-3.jpg)");
        $(".two").css("background-image", "url(images/content/model-6.jpg)");
        $(".three").css("background-image", "url(images/content/model-5.jpg)");
    });

    $("#shirt4").on("click", function () {
        $(".one").css("background-image", "url(images/content/shirt-4.jpg)");
        $(".two").css("background-image", "url(images/content/model-7.jpg)");
        $(".three").css("background-image", "url(images/content/model-3.jpg)");
    });
    //end Swiper images shirt ===============================================================================

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

    //E-mail Ajax Send=======================================================================================
    $(".form").submit(function () {
        //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize(),
        }).done(function () {
            $(".popup").addClass("popup--active");
            setTimeout(function () {
                $.fancybox.close();
                th.trigger("reset");
                $(".popup").removeClass("popup--active");
            }, 3000);
        });
        return false;
    });

    $(".feedback__form").submit(function () {
        //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize(),
        }).done(function () {
            $(".feedback__popup").addClass("feedback__popup--active");
            $(".feedback__popup-text").addClass("feedback__popup-text--active");
        });
        return false;
    });
    //end E-mail Ajax Send===================================================================================

    //START sort Isotope =================================================================================
    //==start category suit ==============================================================================
    var suit = $(".product__items--suit").isotope({
        itemSelector: ".card",
        layoutMode: "fitRows",
        percentPosition: true,
        transitionDuration: 0,
        getSortData: {
            number: ".number parseInt",
        },
    });

    $("#increase-suit").on("click", () => {
        suit.isotope({
            sortBy: "number",
            sortAscending: false,
        });
    });

    $("#decrease-suit").on("click", () => {
        suit.isotope({
            sortBy: "number",
            sortAscending: true,
        });
    });
    //==end category suit =================================================================================
    //==start category tie ================================================================================
    var tie = $(".product__items--tie").isotope({
        itemSelector: ".card",
        layoutMode: "fitRows",
        percentPosition: true,
        transitionDuration: 0,
        getSortData: {
            number: ".number parseInt",
        },
    });
    // bind sort button click
    $("#increase-tie").on("click", () => {
        tie.isotope({
            sortBy: "number",
            sortAscending: false,
        });
    });

    $("#decrease-tie").on("click", () => {
        tie.isotope({
            sortBy: "number",
            sortAscending: true,
        });
    });
    //==end category tie ==================================================================================
    //==start category shirt ==============================================================================
    var shirt = $(".product__items--shirt").isotope({
        itemSelector: ".card",
        layoutMode: "fitRows",
        percentPosition: true,
        transitionDuration: 0,
        getSortData: {
            number: ".number parseInt",
        },
    });
    // bind sort button click
    $("#increase-shirt").on("click", () => {
        shirt.isotope({
            sortBy: "number",
            sortAscending: false,
        });
    });

    $("#decrease-shirt").on("click", () => {
        shirt.isotope({
            sortBy: "number",
            sortAscending: true,
        });
    });
    //==end category shirt ====================================================================================
    //END sort Isotope ========================================================================================

    // resize  media=========================================================================================
    var windowWidth = $(window).width();
    if (windowWidth <= "769") {
        $(".offer .container,.features .container").addClass(
            "container--fluid"
        );
        $(".card__img").unbind();
    } else {
        $(".offer .container--fluid,.features .container--fluid").removeClass(
            "container--fluid"
        );
    }

    var keyOne = -1;
    var keyTwo = -1;
    var keyThree = -1;

    $(window).resize(function () {
        var windowWidth = $(window).width();

        if (keyOne < 0) {
            if (windowWidth < 993) {
                keyOne = 0;
            } else {
                keyOne = 1;
            }
        }
        if (windowWidth <= 993 && keyOne == 1) {
            location.reload();
            keyOne = 0;
        }

        if (windowWidth > 993 && keyOne == 0) {
            location.reload();
            keyOne = 1;
        }

        if (keyTwo < 0) {
            if (windowWidth < 769) {
                keyTwo = 0;
            } else {
                keyTwo = 1;
            }
        }
        if (windowWidth <= 769 && keyTwo == 1) {
            location.reload();
            keyTwo = 0;
        }

        if (windowWidth > 769 && keyTwo == 0) {
            location.reload();
            keyTwo = 1;
        }

        if (keyThree < 0) {
            if (windowWidth < 577) {
                keyThree = 0;
            } else {
                keyThree = 1;
            }
        }
        if (windowWidth <= 577 && keyThree == 1) {
            location.reload();
            keyThree = 0;
        }

        if (windowWidth > 577 && keyThree == 0) {
            location.reload();
            keyThree = 1;
        }
    });
    // end resize  media=====================================================================================
});
