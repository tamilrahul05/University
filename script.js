
var header = document.getElementById('header');


window.addEventListener('scroll', function () {


    if (window.scrollY > 60) {

        header.classList.add('scrolled');
    } else {

        header.classList.remove('scrolled');
    }

});


//-- 2. MOBILE HAMBURGER MENU TOGGLE ----

var hamburger = document.getElementById('hamburger');
var navLinks = document.getElementById('navLinks');

// When the hamburger button is clicked
hamburger.addEventListener('click', function () {

    navLinks.classList.toggle('open');

});


// ---- 3. CLOSE MOBILE MENU  ----

var allNavLinks = document.querySelectorAll('.nav-links li a');

allNavLinks.forEach(function (link) {

    // When the link is clicked
    link.addEventListener('click', function () {
        navLinks.classList.remove('open');

    });

});


// ---- 4. SCROLL REVEAL ANIMATION ----

var fadeElements = document.querySelectorAll('.fade-in');


var observer = new IntersectionObserver(

    function (entries) {

        // For each element the observer is watching
        entries.forEach(function (entry) {

            if (entry.isIntersecting) {


                entry.target.classList.add('visible');


                observer.unobserve(entry.target);
            }
        });
    },


    { threshold: 0.1 }

);


fadeElements.forEach(function (el) {
    observer.observe(el);
});


// Get all anchor links that start with '#' (internal page links)
var anchorLinks = document.querySelectorAll('a[href^="#"]');


anchorLinks.forEach(function (anchor) {

    anchor.addEventListener('click', function (event) {


        event.preventDefault();

        var targetId = this.getAttribute('href');
        var targetSection = document.querySelector(targetId);


        if (targetSection) {


            var scrollToPosition = targetSection.offsetTop - 80;

            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth'
            });
        }
    });

});


//-- CONTACT FORM SUBMISSION ----
var contactForm = document.getElementById('contactForm');

if (contactForm) {

    contactForm.addEventListener('submit', function (event) {

        // Stop the page from refreshing
        event.preventDefault();

        // Get values from the form fields
        var name = document.getElementById('fname').value;
        var email = document.getElementById('femail').value;
        var message = document.getElementById('fmessage').value;

        // Simple check: make sure name, email, and message are filled
        if (name && email && message) {

            // Show a success message
            alert('Thank you, ' + name + '! Your message has been sent. We will get back to you at ' + email + ' soon.');

            // Clear the form fields
            contactForm.reset();

        } else {

            // Show a warning if fields are empty
            alert('Please fill in all required fields before submitting.');

        }

    });


}



