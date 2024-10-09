(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();
    

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top shadow-sm').css('top', '0px');
        } else {
            $('.nav-bar').removeClass('sticky-top shadow-sm').css('top', '-100px');
        }
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        stagePadding: 0,
        autoplay: true,
        smartSpeed: 500,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });



    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-arrow-right"></i>',
            '<i class="fa fa-arrow-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

// Get references to the button and extra content
    const readMoreBtn1 = document.getElementById('readMoreBtn1');
    const extraContent1 = document.querySelector('.extra-content1');

    // Add event listener to the button
    readMoreBtn1.addEventListener('click', () => {
        if (extraContent1.style.display === 'none' || extraContent1.style.display === '') {
            // Show extra content
            extraContent1.style.display = 'block';
            readMoreBtn1.textContent = 'Read Less';
        } else {
            // Hide extra content
            extraContent1.style.display = 'none';
            readMoreBtn1.textContent = 'Read More';
        }
    });
    // Get references to the button and extra content
    const readMoreBtn2 = document.getElementById('readMoreBtn2');
    const extraContent2 = document.querySelector('.extra-content2');

    // Add event listener to the button
    readMoreBtn2.addEventListener('click', () => {
        if (extraContent2.style.display === 'none' || extraContent2.style.display === '') {
            // Show extra content
            extraContent2.style.display = 'block';
            readMoreBtn2.textContent = 'Read Less';
        } else {
            // Hide extra content
            extraContent2.style.display = 'none';
            readMoreBtn2.textContent = 'Read More';
        }
    });

    // Get references to the button and extra content
    const readMoreBtn3 = document.getElementById('readMoreBtn3');
    const extraContent3 = document.querySelector('.extra-content3');

    // Add event listener to the button
    readMoreBtn3.addEventListener('click', () => {
        if (extraContent3.style.display === 'none' || extraContent3.style.display === '') {
            // Show extra content
            extraContent3.style.display = 'block';
            readMoreBtn3.textContent = 'Read Less';
        } else {
            // Hide extra content
            extraContent3.style.display = 'none';
            readMoreBtn3.textContent = 'Read More';
        }
    });

    // Get references to the button and extra content
    const readMoreBtn4 = document.getElementById('readMoreBtn4');
    const extraContent4 = document.querySelector('.extra-content4');

    // Add event listener to the button
    readMoreBtn4.addEventListener('click', () => {
        if (extraContent4.style.display === 'none' || extraContent4.style.display === '') {
            // Show extra content
            extraContent4.style.display = 'block';
            readMoreBtn4.textContent = 'Read Less';
        } else {
            // Hide extra content
            extraContent4.style.display = 'none';
            readMoreBtn4.textContent = 'Read More';
        }
    });
 
document.getElementById('logout').addEventListener('click', function () {
                    // Show a confirmation dialog
                    const confirmation = confirm('Are you sure you want to log out?');

                    // If the user confirmed the logout
                    if (confirmation) {
                        localStorage.removeItem('token'); // Clear token
                        localStorage.removeItem('userInfo'); // Clear user info
                        alert('Logged out successfully.'); // Notify the user
                        window.location.href = 'login.html'; // Redirect to login page
                    }
                });    

