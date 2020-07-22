(function () {
  const x1 = document.getElementById("modal-container-close1");
  const x2 = document.getElementById("modal-container-close2");
  const x3 = document.getElementById("modal-container-close3");
  const x4 = document.getElementById("modal-container-close4");
  const x5 = document.getElementById("modal-container-close5");
  const x6 = document.getElementById("modal-container-close6");

  const learn_more_button1 = document.getElementById("learn-more-button1");
  const learn_more_button2 = document.getElementById("learn-more-button2");
  const learn_more_button3 = document.getElementById("learn-more-button3");
  const learn_more_button4 = document.getElementById("learn-more-button4");
  const learn_more_button5 = document.getElementById("learn-more-button5");
  const learn_more_button6 = document.getElementById("learn-more-button6");

  const project_img1 = document.getElementById("project_img1");
  const project_img2 = document.getElementById("project_img2");
  const project_img3 = document.getElementById("project_img3");
  const project_img4 = document.getElementById("project_img4");
  const project_img5 = document.getElementById("project_img5");
  const project_img6 = document.getElementById("project_img6");

  const hero = document.querySelector(".hero");
  // const slider = document.querySelector(".slider");

  const tl = new TimelineMax();

  tl.fromTo(
    hero,
    1,
    { height: "0%" },
    { height: "100%", ease: Power2.easeInOut }
  )
    .fromTo(
      hero,
      1.2,
      { width: "100%" },
      { width: "100%", ease: Power2.easeInOut }
    )
    .fromTo(
      slider,
      1.2,
      { x: "-100%" },
      { x: "0", ease: Power2.easeInOut },
      "-=1.2"
    );

  learn_more_button1.addEventListener("click", function () {
    console.log("we are here");
    $(".modal-container1").addClass("on");
  });
  learn_more_button2.addEventListener("click", function () {
    $(".modal-container2").addClass("on");
  });
  learn_more_button3.addEventListener("click", function () {
    $(".modal-container3").addClass("on");
  });
  learn_more_button4.addEventListener("click", function () {
    $(".modal-container4").addClass("on");
  });
  learn_more_button5.addEventListener("click", function () {
    $(".modal-container5").addClass("on");
  });
  learn_more_button6.addEventListener("click", function () {
    $(".modal-container6").addClass("on");
  });

  x1.addEventListener("click", function () {
    console.log("we are here");
    $(".modal-container1").removeClass("on");
  });
  x2.addEventListener("click", function () {
    console.log("we are here");
    $(".modal-container2").removeClass("on");
  });
  x3.addEventListener("click", function () {
    console.log("we are here");
    $(".modal-container3").removeClass("on");
  });
  x4.addEventListener("click", function () {
    console.log("we are here");
    $(".modal-container4").removeClass("on");
  });
  x5.addEventListener("click", function () {
    console.log("we are here");
    $(".modal-container5").removeClass("on");
  });
  x6.addEventListener("click", function () {
    console.log("we are here");
    $(".modal-container6").removeClass("on");
  });

  $(document).ready(function () {
    console.log("happening");
    $("#my-name").addClass("right");
    $("#full-stack").addClass("left");
  });

  var i = 0;
  var txt = "Full Stack Web Developer";
  var speed = 70;

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("full-stack").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  setTimeout(typeWriter, 3900);

  var navbarCollapse = function () {
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

  $(window).scroll(function () {
    var position = window.pageYOffset;
    $("section").each(function () {
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
  if (screen.width <= 900) {
    project_img1.addEventListener("click", function () {
      console.log("we are here");
      $(".modal-container1").addClass("on");
    });
    project_img2.addEventListener("click", function () {
      $(".modal-container2").addClass("on");
    });
    project_img3.addEventListener("click", function () {
      $(".modal-container3").addClass("on");
    });
    project_img4.addEventListener("click", function () {
      $(".modal-container4").addClass("on");
    });
    project_img5.addEventListener("click", function () {
      $(".modal-container5").addClass("on");
    });
    project_img6.addEventListener("click", function () {
      $(".modal-container6").addClass("on");
    });
  }

  //   end of page
})();
