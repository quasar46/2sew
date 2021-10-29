document.addEventListener("DOMContentLoaded", function (event) {

    const btn = document.querySelector('body')
    btn.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('btn-round')) {
            const width = getComputedStyle(e.target).width
            const i = e.target.querySelector('i')
            if (i) i.style.height = width
        }
    })

    btn.addEventListener('mouseout', (e) => {
        if (e.target.classList.contains('btn-round')) {
            const i = e.target.querySelector('i')
            if (i) i.removeAttribute('style')
        }
    })


    const $blockMove = document.querySelectorAll(".blbtn-rock-move");

    for (let i = 0; i < $blockMove.length; i++) {

        $blockMove[i].addEventListener("mousemove", function (event) {
            onMouseMove(event);
        })

        $blockMove[i].addEventListener("mouseenter", function (event) {
            onMouseHover(event)
        })

        $blockMove[i].addEventListener("mouseleave", function (event) {
            onMouseHoverOut(event)
        })
    }


    function onMouseMove(e) {
        gsap.to(".cursor-move", {
            left: e.clientX,
            top: e.clientY,
            duration: 0.4
        });
    }

    function onMouseHover(e) {
        gsap.set(".cursor-move", {
            left: e.clientX,
            top: e.clientY,
        });

        gsap.to(".cursor-move", {
            scale: 4,
            duration: 0.3
        });
    }

    function onMouseHoverOut() {
        gsap.to(".cursor-move", {
            scale: 0,
            duration: 0.3
        });
    }

    const likes = document.querySelectorAll('.catalog__like');
    const infoMsg = document.querySelector('#infMsg');
    likes.forEach(item => {
        item.addEventListener('click', function () {
            infoMsg.classList.add('active');
            setTimeout(function () {
                infoMsg.classList.remove('active');
            }, 1000);
        });
    });
});