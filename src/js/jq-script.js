$(document).ready(function () {
    $('.slick-hero').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: false,
        responsive: [{
            breakpoint: 767,
            settings: {
                arrows: false,
            }
        }]
    })

    $('.slick-catalog').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: false,
        responsive: [{
                breakpoint: 1919,
                settings: {
                    slidesToShow: 5,

                }
            },
            {
                breakpoint: 1249,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                }
            },

        ]
    })

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                dots: true,
            }
        }]
    })

    // arrows slick-nav
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
        // centerMode: true,
        responsive: [{
                breakpoint: 1919,
                settings: {
                    vertical: false,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    vertical: false,
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    vertical: false,
                    slidesToShow: 4,
                    arrows: false,
                    verticalSwiping: false,
                }
            }
        ]
    });

    $('.slick-next.slick__card-pictures').on('click', function () {
        $('.slider-nav').slick('slickNext');
    });
    $('.slick-prev.slick__card-pictures').on('click', function () {
        $('.slider-nav').slick('slickPrev');
    });



    $('#user-lk').on('click', function () {
        $('#enter-modal').addClass('active');
    })

    $('.tabs__caption').on('click', 'p:not(.active)', function () {
        $('.lk__change-password ').css('display', 'none');
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    // $('.form__field').on('click', function () {
    //     $(this).children('.form__label').css('bottom', "-60px");
    // })

    $('.modal__closed').on('click', function () {
        console.log('11');
        $(this).parent().parent().removeClass('active');
    })

    //- burger click
    $('.burger').on('click', function () {
        const height = $('.header__wrapper').height();
        $('.header-menu').slideToggle();
        $('.header-menu').css('top', height);
        $('body').toggleClass('hidden');
        $(this).children('img').toggleClass('active');
        $('.logo').toggleClass('hidden');
        $('.header__closed').toggleClass('active');
    })

    //- search click
    $('#searchBtn').on('click', function () {
        if ($('.header__search').hasClass('active')) {
            $('.header__search').removeClass('active');
        } else {
            $('.header__search').addClass('active');
        };
        if ($('.header__logo').hasClass('active')) {
            $('.header__logo').removeClass('active');
        } else {
            $('.header__logo').addClass('active');
        }
    })

    $('.btn-toggle').click(function () {
        $(this).children('svg').toggleClass('current');
        $(this).next().slideToggle();
    })

    $('.btn-toggle-sort').click(function () {
        $(this).children('svg').toggleClass('current');
        $(this).children('.catalog-sorting').slideToggle();
    })


    $('#category-filter-open > * ').on('click', function (event) {
        event.stopPropagation();
        $('.category-filter-open').addClass('active')
        $('.filter').removeClass('active');
    })

    $('#type-filter-open * ').on('click', function (event) {
        event.stopPropagation();
        $('.type-filter-open').addClass('active');
        $('.filter').removeClass('active');
    })

    $('#color-filter-open * ').on('click', function (event) {
        event.stopPropagation();
        $('.color-filter-open').addClass('active');
        $('.filter').removeClass('active');
    })

    $('.btn-toggle-flex').on('click', function () {
        $(this).children('svg').toggleClass('current');
    })

    $('.filter__item--inner').on('click', function (event) {
        event.stopPropagation();
        // $('.filter__item--inner').removeClass('active');
        $(this).toggleClass('active');
    })

    $('.filter__radio-el').click(function () {
        $('.filter__radio-el').removeClass('active');
        $(this).toggleClass('active');
    });

    $('.filter__clear-all > *').on('click', function (event) {
        event.stopPropagation();
        $('.filter__show-item').removeClass('active');
    })

    $('#change-password').on('click', function () {
        $('.tabs__content.active').removeClass('active');
        $('.lk__change-password ').css('display', 'block');
    })

    $('.location__btn').on('click', function () {
        $(this).removeClass('active');
        $(this).siblings().addClass('active');
    })


    $('.lk-history__row').on('click', function () {
        $(this).toggleClass('active');
        $(this).next().toggleClass('active');
    })

    $('.lk-table-mobile__item').on('click', function () {
        $(this).toggleClass('active');
        $(this).next().toggleClass('active');

    })

    $('.catalog-sorting__item').on('click', function () {
        $('.catalog-sorting__item').removeClass('active');
        $(this).addClass('active');
    })


    // anchor
    $(".arrow-up").hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".arrow-up").fadeIn();
        } else {
            $(".arrow-up").fadeOut();
        }
    });

    $(".arrow-up").click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // validate form
    $("#commentForm").validate({
        rules: {
            email: {
                required: true,
                email: true,
            },
            password: {
                required: true,
                minlength: 6,
            }
        },

        messages: {
            email: {
                required: "Пожалуйста, проверьте, правильно ли указан адрес электронной почты.",
                email: "Пожалуйста, проверьте, правильно ли указан адрес электронной почты.",

            },
            password: {
                required: "Пожалуйста введите пароль",
                minlength: "Пароль должен содержать не менее 6 символов.",
            }
        }
    });

    $('#footer-menu').on('click', function () {
        $(this).next().slideToggle();
        $(this).children('current').removeClass('current');
    })


    // tooltip
    $(".tooltip-item").mousemove(function (e) {
        $('.tooltip').css('left', e.clientX + 10).css('top', e.clientY + 10).css('display', 'block');
    });

    $(".tooltip-item").mouseout(function () {
        $('.tooltip').css('display', 'none');
    });


    $('.footer__button').click(function () {
        $(this).toggleClass('active');
    })

    $('.catalog__item').click(function () {
        $(this).toggleClass('active');
    })

    $('.btn-toggle-filter').click(function () {
        $('.filter').addClass('active');
    })

    $('.filter__back').click(function (event) {
        event.stopPropagation();
        $('.filter__open').removeClass('active');
        $('.filter').addClass('active');
    })


    $('.filter__back-btn').click(function (event) {
        event.stopPropagation();
        $('.filter').removeClass('active');
        $('.filter__open').removeClass('active');
    })

    $('.filter__open').click(function (event) {
        event.stopPropagation();
    })


    $('body').click(function (event) {
        console.log(event.target);
    })
})