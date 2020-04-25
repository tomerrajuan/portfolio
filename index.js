(function() {

  const x1 = document.getElementById("modal-container-close1");
  const x2 = document.getElementById("modal-container-close2");
  const x3 = document.getElementById("modal-container-close3");
  const x4 = document.getElementById("modal-container-close4");
  const x5 = document.getElementById("modal-container-close5");
  const learn_more_button1 = document.getElementById("learn-more-button1");
  const learn_more_button2 = document.getElementById("learn-more-button2");
  const learn_more_button3 = document.getElementById("learn-more-button3");
  const learn_more_button4 = document.getElementById("learn-more-button4");
  const learn_more_button5 = document.getElementById("learn-more-button5");
  const welcome = document.getElementById("welcome");

  learn_more_button1.addEventListener("click", function() {
    console.log("we are here");
    $(".modal-container1").addClass("on");
  });
  learn_more_button2.addEventListener("click", function() {
    $(".modal-container2").addClass("on");
  });
  learn_more_button3.addEventListener("click", function() {
    $(".modal-container3").addClass("on");
  });
  learn_more_button4.addEventListener("click", function() {
    $(".modal-container4").addClass("on");
  });
  learn_more_button5.addEventListener("click", function() {
    $(".modal-container5").addClass("on");
  });

  x1.addEventListener("click", function() {
    console.log("we are here");
    $(".modal-container1").removeClass("on");
  });
  x2.addEventListener("click", function() {
    console.log("we are here");
    $(".modal-container2").removeClass("on");
  });
  x3.addEventListener("click", function() {
    console.log("we are here");
    $(".modal-container3").removeClass("on");
  });
  x4.addEventListener("click", function() {
    console.log("we are here");
    $(".modal-container4").removeClass("on");
  });
  x5.addEventListener("click", function() {
    console.log("we are here");

    $(".modal-container5").removeClass("on");
  });

  welcome.addEventListener("mouseover", function(event) {
    var target = $(event.target);
    var id = target.attr("id");

    console.log("we are at logo event", id);
    animateDiv("#" + id);
  });

  $(document).ready(function() {
      console.log("happening");
    $("#my-name").addClass("right");
    $("#full-stack").addClass("left");
    setTimeout(typeWriter,3500);
  });


  var i = 0;
  var txt = 'Full Stack Web Developer';
  var speed = 70;

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("full-stack").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  // function makeNewPosition() {
  //   // Get viewport dimensions (remove the dimension of the div)
  //   var h = $(".profile").height() - 50;
  //   var w = $(".profile").width() - 50;
  //
  //   var nh = Math.floor(Math.random() * (h - 500) + 310);
  //   var nw = Math.floor(Math.random() * (w - 500) - 100);
  //
  //   return [nh, nw];
  // }
  //
  // function animateDiv(myclass) {
  //   var newq = makeNewPosition();
  //   $(myclass).animate({ top: newq[0], left: newq[1] }, 500, function() {});
  // }
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
    if ($("header").offset().top > 3) {
      $("header").addClass("navbar-shrink");
    } else {
      $("header").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  $(window).scroll(function() {
    var position = window.pageYOffset;
    $("section").each(function() {
      var target = $(this).offset().top;
      console.log("position is", target);
      var id = $(this).attr("id");
      var navLinks = $("#navbar li a");
      if (position >= target - 300) {
        navLinks.removeClass("active");
        $('#navbar li a[href="#' + id + '"]').addClass("active");
      }
      if (!position) {
        navLinks.removeClass("active");
      }
    });
  });
})();
