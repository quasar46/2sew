const objToStick = $("#objToStick");
const topOfObjToStick = $(objToStick).offset().top;

$(window).scroll(function () {
    const windowScroll = $(window).scrollTop();
    if (windowScroll > topOfObjToStick) {
        $(objToStick).addClass("topWindow");
    } else {
        $(objToStick).removeClass("topWindow");
    };
});