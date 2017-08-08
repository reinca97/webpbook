//toggle top menu

$(function(){

    //gnb 메뉴버튼, 나가기 클릭 동작

    $('.menu-btn').on('click',function(){

        $('.gnb').addClass('active');
    });


    $('.gnb-exit-btn').on('click',function(){

        $('.gnb').removeClass('active');

    });



    //location 의 drawer 클릭 동작


    $('.drawer-upside').data({ 'open':true}).on('click',function(){

        if( $(this).data().open ){
            $('.drawer-upside').removeClass('shut');
            $(this).data({'open':false});
        }else{
            $('.drawer-upside').addClass('shut');
            $(this).data({'open':true});
        }

    });
    $('.drawer-downside').data({ 'open':true}).on('click',function(){

        if( $(this).data().open ){
            $('.drawer-downside').removeClass('shut');
            $(this).data({'open':false});
        }else{
            $('.drawer-downside').addClass('shut');
            $(this).data({'open':true});
        }

    });


    //




});
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

  $('.program-menu-composer').on('mouseleave',function(){
    $(this).removeClass('active');
    $('.program-menu-program').addClass('active');

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



$(function(){
    //마우스 오버 하면 짧은 동영상 재생

   $('.movie').on('mouseenter',function(){
        $(this)[0].play();
    });

    $('.movie').on('mouseleave',function(){
        $(this)[0].pause();
    });



});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImduYl9sb2NhdGlvbi5qcyIsInByb2dyYW0uanMiLCJyZXBsYXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJmdW5jdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vdG9nZ2xlIHRvcCBtZW51XHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgLy9nbmIg66mU64m067KE7Yq8LCDrgpjqsIDquLAg7YG066atIOuPmeyekVxyXG5cclxuICAgICQoJy5tZW51LWJ0bicpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgJCgnLmduYicpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKCcuZ25iLWV4aXQtYnRuJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAkKCcuZ25iJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgLy9sb2NhdGlvbiDsnZggZHJhd2VyIO2BtOumrSDrj5nsnpFcclxuXHJcblxyXG4gICAgJCgnLmRyYXdlci11cHNpZGUnKS5kYXRhKHsgJ29wZW4nOnRydWV9KS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmKCAkKHRoaXMpLmRhdGEoKS5vcGVuICl7XHJcbiAgICAgICAgICAgICQoJy5kcmF3ZXItdXBzaWRlJykucmVtb3ZlQ2xhc3MoJ3NodXQnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKHsnb3Blbic6ZmFsc2V9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgJCgnLmRyYXdlci11cHNpZGUnKS5hZGRDbGFzcygnc2h1dCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoeydvcGVuJzp0cnVlfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG4gICAgJCgnLmRyYXdlci1kb3duc2lkZScpLmRhdGEoeyAnb3Blbic6dHJ1ZX0pLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgaWYoICQodGhpcykuZGF0YSgpLm9wZW4gKXtcclxuICAgICAgICAgICAgJCgnLmRyYXdlci1kb3duc2lkZScpLnJlbW92ZUNsYXNzKCdzaHV0Jyk7XHJcbiAgICAgICAgICAgICQodGhpcykuZGF0YSh7J29wZW4nOmZhbHNlfSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICQoJy5kcmF3ZXItZG93bnNpZGUnKS5hZGRDbGFzcygnc2h1dCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoeydvcGVuJzp0cnVlfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvL1xyXG5cclxuXHJcblxyXG5cclxufSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wNy5cbiAqL1xuXG4kKGZ1bmN0aW9uKCl7XG5cbiAgLy/rqZTribTrsJQg66eI7Jqw7IqkIOyYpOuyhOyLnCDquLjsnbQg67OA6rK9XG5cbiAgJCgnLnByb2dyYW0tbWVudS1wcm9ncmFtJykub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XG5cbiAgICAkKCcucHJvZ3JhbS1tZW51LWNvbXBvc2VyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQoJy5wcm9ncmFtLW1lbnUtcHJvZ3JhbScpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICB9KTtcblxuXG4gICQoJy5wcm9ncmFtLW1lbnUtY29tcG9zZXInKS5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcblxuICAgICQoJy5wcm9ncmFtLW1lbnUtcHJvZ3JhbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCcucHJvZ3JhbS1tZW51LWNvbXBvc2VyJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gIH0pO1xuXG4gICQoJy5wcm9ncmFtLW1lbnUtY29tcG9zZXInKS5vbignbW91c2VsZWF2ZScsZnVuY3Rpb24oKXtcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCcucHJvZ3JhbS1tZW51LXByb2dyYW0nKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgfSk7XG5cblxuXG59KTtcblxuLy8vL3NlY3Rpb24g67OEIOyKpO2BrOuhpCDrj5nsnpFcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgJChcIi5tb3ZlLXNlY3Rpb25cIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgLy8g6rCc67OE7KCB7Jy866GcIFdoZWVsIOydtOuypO2KuCDsoIHsmqlcbiAgICAkKHRoaXMpLm9uKFwibW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyIGRlbHRhID0gMDtcbiAgICAgIGlmICghZXZlbnQpIGV2ZW50ID0gd2luZG93LmV2ZW50O1xuXG5cblxuICAgICAgICAgIGlmIChldmVudC53aGVlbERlbHRhKSB7XG4gICAgICAgIGRlbHRhID0gZXZlbnQud2hlZWxEZWx0YSAvIDEyMDtcbiAgICAgICAgaWYgKHdpbmRvdy5vcGVyYSkgZGVsdGEgPSAtZGVsdGE7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmRldGFpbCkgZGVsdGEgPSAtZXZlbnQuZGV0YWlsIC8gMztcbiAgICAgIHZhciBtb3ZlVG9wID0gbnVsbDtcblxuICAgICAgLy8g66eI7Jqw7Iqk7Zyg7J2EIOychOyXkOyEnCDslYTrnpjroZxcbiAgICAgIGlmIChkZWx0YSA8IDApIHtcbiAgICAgICAgaWYgKCQodGhpcykubmV4dCgpICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG1vdmVUb3AgPSAkKHRoaXMpLm5leHQoKS5vZmZzZXQoKS50b3A7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDrp4jsmrDsiqTtnKDsnYQg7JWE656Y7JeQ7IScIOychOuhnFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCQodGhpcykucHJldigpICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG1vdmVUb3AgPSAkKHRoaXMpLnByZXYoKS5vZmZzZXQoKS50b3A7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIO2ZlOuptCDsnbTrj5kgMC417LSIXG4gICAgICAkKFwiaHRtbCxib2R5XCIpLnN0b3AoKS5hbmltYXRlKHtcbiAgICAgICAgc2Nyb2xsVG9wOiBtb3ZlVG9wICsgJ3B4J1xuICAgICAgfSwge1xuICAgICAgICBkdXJhdGlvbjogNTAwLCBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbn07XG5cbiIsIlxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgICAvL+uniOyasOyKpCDsmKTrsoQg7ZWY66m0IOynp+ydgCDrj5nsmIHsg4Eg7J6s7IOdXHJcblxyXG4gICAkKCcubW92aWUnKS5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpWzBdLnBsYXkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5tb3ZpZScpLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcylbMF0ucGF1c2UoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG59KTtcclxuIl19
