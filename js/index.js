$(function () {
  // jquery.lazyload.js 初始化
  $('img').lazyload()
  // wow.js 初始化
  new WOW().init();
  // advantage tab栏切换
  $(".advantage_tab li").on("click mouseenter", function () {
    $(this).addClass('advantage_cur').siblings().removeClass('advantage_cur');
    $('.advantage_item').eq($(this).index()).css({
      "display" : "block"
    }).siblings().css("display", "none")
  })
  // header滚动监听
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
  // nav
  $('.nav-trigger').on('click', function () {
    $('nav').toggleClass('fade-in')
  })
  $('.nav_item').on('click', function () {
    $('.nav_sub').eq($('.nav_item').index($(this))).slideToggle().siblings('.nav_sub').slideUp()
    $(this).addClass('nav_active').siblings().removeClass('nav_active')
  })
  // search
  function searchToggleClass($element, classTxt) {
    $element.toggleClass(classTxt)
  }
  $('.search-icon').on('click', function () {
    searchToggleClass($('.search_warp'), 'search_in')
  })
  $('.search_closed').on('click', function () {
    searchToggleClass($('.search_warp'), 'search_in')
  })
})