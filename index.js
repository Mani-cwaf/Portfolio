$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.l-header').addClass("sticky");
        } else {
            $('.l-header').removeClass("sticky");
        }
    });
    var typed = new Typed(".typing", {
        strings: ["Web Dev", "Game Dev", "Designer", "Student"],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true
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