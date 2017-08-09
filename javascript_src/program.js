/**
 * Created by Administrator on 2017-08-07.
 */

$(function(){

  ////////////프로그램 메뉴바 마우스 오버시 길이 늘이기//////

  $('.program-menu-program02').on('mouseenter',function(){
    $('.program-menu-composer02').removeClass('active');
    $('.program-menu-program02').addClass('active');

  });

  $('.program-menu-composer01').on('mouseenter',function(){
    $('.program-menu-program01').removeClass('active');
    $('.program-menu-composer01').addClass('active');

  });

  ////////////마우스 떨어지면 길이 줄이기////////////////

  $('.program-menu-composer01').on('mouseleave',function(){
    $(this).removeClass('active');
    $('.program-menu-program01').addClass('active');

  });

  $('.program-menu-program02').on('mouseleave',function(){
    $(this).removeClass('active');
    $('.program-menu-composer02').addClass('active');
  });





});

////section 별 스크롤 동작
window.onload = function () {
  $(".move-section").each(function () {
    // 개별적으로 Wheel 이벤트 적용
    $(this).on("mousewheel DOMMouseScroll", function (e) {
      e.preventDefault();
      var delta = 0;
      if (!event) event = window.event;

          if (event.wheelDelta) {
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta;
      }
          else if (event.detail) delta = -event.detail / 3;

      var moveTop = null;
      // 마우스휠을 위에서 아래로
      if (delta < 0) {
        if ($(this).next() != undefined) {
          moveTop = $(this).next().offset().top;
        }

        // 마우스휠을 아래에서 위로
      } else {
        if ($(this).prev() != undefined) {
          moveTop = $(this).prev().offset().top;
        }
      }

      // 화면 이동 0.5초
      $("html,body").stop().animate({
        scrollTop: moveTop + 'px'
      }, {
        duration: 500, complete: function () {
        }
      });

    });
  });


//프로그램 내 인덱스 (링크)클릭시 스크롤 애니메이션
  $('.program-list-text>p>a').on('click',function(e){
    e.preventDefault();
    var href= $(this).attr('href'); //href값을 가져옴
    var scrollPosition=$(href).offset().top;

    console.log(href);

    $('body').stop().animate({scrollTop:scrollPosition})

  });






};

