document.addEventListener(
  "scroll",
  function() {
    var scrollTop =
      document.documentElement["scrollTop"] || document.body["scrollTop"];
    var scrollBottom =
      (document.documentElement["scrollHeight"] ||
        document.body["scrollHeight"]) - document.documentElement.clientHeight;
    scrollPercent = scrollTop / scrollBottom * 100 + "%";
    document
      .getElementById("ProgressBar")
      .style.setProperty("--scroll", scrollPercent);
  },
  { passive: true }
);

$(window).on("load",function(){
  setTimeout(
      function() {
        $("#content").fadeIn("slow");
        $(".LoadingAnimation").slideUp("slow");
      },8000);
  setTimeout(
    function() {
      $(".welcomeMessage1").fadeIn("slow");
      setTimeout(
        function() {
          $(".welcomeMessage1").fadeOut("slow");
          setTimeout(
            function() {
              $(".welcomeMessage2").fadeIn("slow");
              setTimeout(
                function() {
                  $(".welcomeMessage2").fadeOut("slow");
                  setTimeout(
                    function() {
                      $(".welcomeMessage3").fadeIn("slow");
                      setTimeout(
                        function() {
                          $(".welcomeMessage3").fadeOut("slow");
                          setTimeout(
                            function() {
                              $(".welcomeMessage4").fadeIn("slow");
                              setTimeout(
                                function() {
                                  $(".welcomeMessage4").fadeOut("slow");
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                },1000);
            },1000);
        },1000);
    },1000);
});
$(document).ready(function(){
  $("#NavbarButton").click(function(){
    document.getElementById('FirstLine').classList.toggle('line1');
    document.getElementById('SecondLine').classList.toggle('line2');
    document.getElementById('ThirdLine').classList.toggle('line3');
    var content = document.getElementById('content');
    var Navigationbar = document.getElementById('Navbar');
    if(content.style.marginLeft==="300px"){
      Navigationbar.style.width = "0";
      content.style.marginLeft="0px";
      $('.Logo').css({'opacity':'0','transition-duration':'0.1s','margin-top':'20px'});
      $('.MenuItems').css({'opacity':'0','transition-duration':'0.1s','margin-top':'20px'});
    }else{
      Navigationbar.style.width = "300px";
      content.style.marginLeft="300px"; 
      setTimeout(function(){
        $('.Logo').css({'opacity':'1','transition-duration':'0.1s','margin-top':'0px'});
        $('.MenuItems').css({'opacity':'1','transition-duration':'0.5s','margin-top':'0px'});
      },400);
    }
  });
});
