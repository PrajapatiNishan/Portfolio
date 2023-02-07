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


  $('.skills-wrapper').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

  // $(function() {
  //   $('.scroll-down').click (function() {
  //     $('html, section.about-me').animate({scrollTop: $('section.about-me').offset().top }, 'slow');
  //     return false;
  //   });
  // });

  // $(document).ready(function() {
  //   //   Create a function
  //   $(".scroll-down").click(function(event) {
  //     //       Select the body of the page and scroll down by 650 pixels worth
  //     $("html, body").animate({ scrollDown: "+=650px" }, 800);
  //   });
  // });

  // $('.scroll-down').on("click",function(e){
  //   e.preventDefault();
  //   var target = $( $(this).attr("href") );
    
  //   if(target.length){
  //     $("html, body").animate({ scrollTop: target.offset().top },400,"easeInOutQuad");
  //   }
  // });