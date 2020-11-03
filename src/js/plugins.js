$(function () {
    let windowWidthPopup = $(window).width();
    // start fancybox ===================================================================
    
    $(".btn").fancybox({
        baseClass: "popup__wrapper",
        closeExisting: true,
    });

    if (windowWidthPopup <= "769") {
        $(".card__img").umbind();
    }

    $(".card__img").fancybox({
        baseClass: "description__wrapper",
    });

    // end fancybox ===================================================================
});
