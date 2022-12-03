$(document).ready(function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    $(window).scroll(function () {
        scroll = this.scrollY
        if (scroll > 5) {
            $('.l-header').addClass("sticky");
        } else {
            $('.l-header').removeClass("sticky");
        }
        if ($(window).scrollTop() + $(window).height() > $(document).height()) {
            $('.footer').addClass("sticky");
        } else {
            $('.footer').removeClass("sticky");
        }
    });

    new Typed(".typing", {
        strings: ["Web Dev", "Designer", "Game Dev", "Student"], typeSpeed: 80, backSpeed: 60, loop: true
    });

    $('.nav-list li a').click(function (e) {
        $('.nav-list li a').removeClass('active');
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
        }
    });
    $('.toggle').click(function (e) {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

});