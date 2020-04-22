(function() {

    const x = document.getElementById("modal-container-close");
    const learn_more_button = document.getElementById("learn-more-button");

    x.addEventListener("click", function(event) {
        console.log("we are here");
    $(".modal-container").removeClass("on");
    });

    learn_more_button.addEventListener("click", function() {
        console.log("we are here");
    $(".modal-container").addClass("on");
    });



    // $(document).ready(function(){
    //     animateDiv('.image1');
    //     animateDiv('.image2');
    //     animateDiv('.image3');
    //     animateDiv('.image4');
    //     animateDiv('.image5');
    //     animateDiv('.image6');
    //     animateDiv('.image7');
    //     animateDiv('.image8');
    //     animateDiv('.image9');
    //
    // });
    //
    // function makeNewPosition(){
    //
    //     // Get viewport dimensions (remove the dimension of the div)
    //     var h = $(".profile").height()-50;
    //     var w = $(".profile").width()-50;
    //
    //     var nh = Math.floor(Math.random() *  (h-500)+300);
    //     var nw = Math.floor(Math.random() * (w-500)-100);
    //
    //     return [nh,nw];
    //
    // }
    //
    // function animateDiv(myclass){
    //     var newq = makeNewPosition();
    //     $(myclass).animate({ top: newq[0], left: newq[1] }, 9000, function(){
    //       animateDiv(myclass);
    //     });
    //
    // };
    $(window).scroll(function(){
            console.log(
                $(window).height(),
                $(document).scrollTop(),
                $(document).height()
            );
            if (
                $(document).scrollTop() >= 30
            ) {
                $("header").addClass("on");

            }else  {
                $("header").removeClass("on");

            }

    });


})();
