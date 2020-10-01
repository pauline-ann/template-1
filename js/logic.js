(function($) {
    "use strict"; // Start of use strict

    ///// Add fade-in transition to landing image /////
    $("#masthead").addClass("load");

    ///// Enable scrollspy /////
    $('body').scrollspy({ target: ".navbar", offset: 75 })

    ///// Number counting animations
    setTimeout(function() {
        odometerPlaygrounds.innerHTML = 387;
    }, 1000);

    setTimeout(function() {
        odometerTennis.innerHTML = 321;
    }, 1000);

    setTimeout(function() {
        odometerBallfields.innerHTML = 256;
    }, 1000);

    ///// Manage navbar active link state /////
    $(".navbar-nav .nav-link").on("click", function() {
        $(".navbar-nav").find(".active").removeClass("active");
        $(this).addClass("active");
    });

    ///// Closes responsive menu when a scroll trigger link is clicked /////
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    ///// Collapse Navbar /////
    if ($("nav").length > 0) {
        var navbarCollapse = () => {
            if ($("nav").offset().top > 100) {
                $("nav").addClass("navbar-scrolled");
            } else {
                $("nav").removeClass("navbar-scrolled")
            }
        };
        ///// Collapse now if page is not at top /////
        navbarCollapse();
        ///// Collapse the navbar when page is scrolled /////
        $(window).scroll(navbarCollapse);
    }

    // Keyboard accessibility; adds tab class and removes when mouse is used
    function handleFirstTab(e) {
        if (e.keyCode === 9) { // the "Tab" key
            document.body.classList.add('user-is-tabbing');
            window.removeEventListener('keydown', handleFirstTab);
            window.addEventListener('mousedown', handleMouseDownOnce);
        }
    }

    function handleMouseDownOnce() {
        document.body.classList.remove('user-is-tabbing');

        window.removeEventListener('mousedown', handleMouseDownOnce);
        window.addEventListener('keydown', handleFirstTab);
    }

    window.addEventListener('keydown', handleFirstTab);

})(jQuery); ///// End of use strict /////