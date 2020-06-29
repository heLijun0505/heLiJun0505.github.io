$(function () {
  new WOW().init();
  // advantage tab栏切换
  $(".advantage_tab li").on("click mouseenter", function () {
    $(this).addClass('advantage_cur').siblings().removeClass('advantage_cur');
    $('.advantage_item').eq($(this).index()).css({
      "display" : "block"
    }).siblings().css("display", "none")
  })
  // 滚动监听
  var carouselHeight,scrollTop
  function scroll() {
    carouselHeight = $('.carousel-body').height()
    // console.log("carouselHeight"+carouselHeight);
    scrollTop = document.documentElement.scrollTop || document.body.scroll;
    // console.log("scrollTop"+scrollTop);
    if (carouselHeight && scrollTop && scrollTop >= carouselHeight) {
      $("header").addClass('header_scr')
    }else {
      $("header").removeClass('header_scr')
    }
  }
  scroll()
  $(window).scroll(function () {
    scroll()
  });
})