$(document).ready(function() {

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

    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.l-header').addClass("sticky");
        } else {
            $('.l-header').removeClass("sticky");
        }
    });

    new Typed(".typing", {
        strings: ["Web Dev", "Game Maker", "Designer", "Student"], typeSpeed: 80, backSpeed: 60, loop: true
    });

    $('.nav-list li a').click(function(e) {
        $('.nav-list li a').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
    });
    $('.nav-toggle').click(function(e) {
        var $this = $(this);
        if ($this.hasClass('active')) {
            $this.removeClass('active');
        } else {
            $this.addClass('active'); 
        }
    });

});