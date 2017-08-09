/**
 * Created by Administrator on 2017-08-07.
 */

$(function(){

  //메뉴바 마우스 오버시 길이 변경

  $('.program-menu-program').on('mouseenter',function(){

    $('.program-menu-composer').removeClass('active');
    $('.program-menu-program').addClass('active');

  });


  $('.program-menu-composer').on('mouseenter',function(){

    $('.program-menu-program').removeClass('active');
    $('.program-menu-composer').addClass('active');

  });


  ////////////원본////////////////

  $('.program-menu-composer').on('mouseleave',function(){
    $(this).removeClass('active');
    $('.program-menu-program').addClass('active');

  });

  $('.program-menu-program').on('mouseleave',function(){
    $(this).removeClass('active');
    $('.program-menu-composer').addClass('active');
  });
    ////////////수정중////////////////

    //$('program-menu-composer').on('mouseleave',function(){
    //
    //  var checker= $(this).parent();
    //
    //  if (checker=='#program')
    //  { $(this).removeClass('active');
    //    $('.program-menu-program').addClass('active');}
    //
    //
   // });
    //
    //






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
      } else if (event.detail) delta = -event.detail / 3;
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

};

