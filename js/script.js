// new lodder function
function reveal() {
    var reveals = document.querySelectorAll(".appear");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } 
    }
  }
  
  window.addEventListener("scroll", reveal);


  jQuery(function($) {

    $('.hamburger-menu').click(function() {
            $('.hamburger-menu').toggleClass('active');
            $('.menu-overlay').toggleClass('open');
            $('body').toggleClass('nav-active');
        });
        $('.menu-overlay').click(function() {
            $('.hamburger-menu').removeClass('active');
            $('.menu-overlay').removeClass('open');
            $('body').removeClass('nav-active');
        });
    
    } );