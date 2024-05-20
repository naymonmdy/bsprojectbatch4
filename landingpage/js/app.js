$(document).ready(function () {
  // start Back to top
  $(".btn-backtotops").hide();

  $(window).scroll(function(){
    let getscrolltop = $(this).scrollTop();
    // console.log(getscrolltop);
    if(getscrolltop >=370){
      $(".btn-backtotops").fadeIn(1000);
    }
    else{
      $(".btn-backtotops").fadeOut(1000);

    }


  });

  // End Bakk to top
  // start navbar
  $(window).scroll(function () {
    let getscrolltop = $(this).scrollTop();
    // console.log(getscrolltop);

    if (getscrolltop >= 200) {
      $(".navbar").addClass("navmenus");
    } else {
      $(".navbar").removeClass("navmenus");
    }
  });

  $(".navbuttons").click(function () {
    $(this).toggleClass("crossxs");
  });
  //end navbar

  //Start Property Session
  $(".propertylists").click(function () {
    // $(this).addClass("activeitems");
    $(this).addClass("activeitems").siblings().removeClass("activeitems");

    // const filtervalue=$(this).attr("data-filter");
    const filtervalue = $(this).data("filter");
    // console.log(filtervalue);

    if (filtervalue === "all") {
      $(".filters").show();
    } else {
      // $(".filters").hide();
      $(".filters")
        .not("." + filtervalue)
        .hide();
      $(".filters")
        .filter("." + filtervalue)
        .show();
    }
  });

  //End Property Session

  //Start Adv Section
  $(window).scroll(function () {
    let getscrolltop = $(this).scrollTop();
    // console.log(getscrolltop);

    if (getscrolltop >= 1200) {
      $(".advimages").addClass("fromlefts");
      $(".advimages").addClass("fromrights");
    } else {
        $(".advimages").removeClass("fromlefts");
      $(".advtexts").removeClass("fromrights");
    }
  });
  //End Adv Section

});
