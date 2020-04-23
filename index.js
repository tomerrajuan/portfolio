(function() {
  const x = document.getElementById("modal-container-close");
  const learn_more_button = document.getElementById("learn-more-button");
  const welcome = document.getElementById("welcome");

  x.addEventListener("click", function(event) {
    console.log("we are here");
    $(".modal-container").removeClass("on");
  });

  learn_more_button.addEventListener("click", function() {
    $(".modal-container").addClass("on");
  });

  welcome.addEventListener("mouseover", function(event) {
      var target =$(event.target);
      var id = target.attr('id');

    console.log("we are at logo event", id);
    animateDiv("#" + id);

  });




  function makeNewPosition() {
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(".profile").height() - 50;
    var w = $(".profile").width() - 50;

    var nh = Math.floor(Math.random() * (h - 500) + 310);
    var nw = Math.floor(Math.random() * (w - 500) - 100);

    return [nh, nw];
  }

  function animateDiv(myclass) {
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 1000, function() {

    });
  }
  // $(window).scroll(function() {
  //   console.log(
  //     $(window).height(),
  //     $(document).scrollTop(),
  //     $(document).height()
  //   );
  //   if ($(document).scrollTop() >= 30) {
  //     $("header").addClass("on");
  //   } else {
  //     $("header").removeClass("on");
  //   }
  // });
  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("header").offset().top > 100) {
      $("header").addClass("navbar-shrink");
    } else {
      $("header").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);



  $(window).scroll(function () {
     var position = window.pageYOffset;
     $('section').each(function () {
       var target = $(this).offset().top;
       console.log("position is",target);
       var id = $(this).attr('id');
       var navLinks = $('#navbar li a');
       if (position >= target-300) {
         navLinks.removeClass('active');
         $('#navbar li a[href="#' + id + '"]').addClass('active');
     } if(!position){
  navLinks.removeClass("active");
}
     });
  });


})();
