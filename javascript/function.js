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



$(function(){
    //마우스 오버 하면 짧은 동영상 재생

   $('.movie').on('mouseenter',function(){
        $(this)[0].play();
    });

    $('.movie').on('mouseleave',function(){
        $(this)[0].pause();
    });



});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImduYl9sb2NhdGlvbi5qcyIsInByb2dyYW0uanMiLCJyZXBsYXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImZ1bmN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy90b2dnbGUgdG9wIG1lbnVcclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvL2duYiDrqZTribTrsoTtirwsIOuCmOqwgOq4sCDtgbTrpq0g64+Z7J6RXHJcblxyXG4gICAgJCgnLm1lbnUtYnRuJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAkKCcuZ25iJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoJy5nbmItZXhpdC1idG4nKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICQoJy5nbmInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAvL2xvY2F0aW9uIOydmCBkcmF3ZXIg7YG066atIOuPmeyekVxyXG5cclxuXHJcbiAgICAkKCcuZHJhd2VyLXVwc2lkZScpLmRhdGEoeyAnb3Blbic6dHJ1ZX0pLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgaWYoICQodGhpcykuZGF0YSgpLm9wZW4gKXtcclxuICAgICAgICAgICAgJCgnLmRyYXdlci11cHNpZGUnKS5yZW1vdmVDbGFzcygnc2h1dCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoeydvcGVuJzpmYWxzZX0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAkKCcuZHJhd2VyLXVwc2lkZScpLmFkZENsYXNzKCdzaHV0Jyk7XHJcbiAgICAgICAgICAgICQodGhpcykuZGF0YSh7J29wZW4nOnRydWV9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcbiAgICAkKCcuZHJhd2VyLWRvd25zaWRlJykuZGF0YSh7ICdvcGVuJzp0cnVlfSkub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBpZiggJCh0aGlzKS5kYXRhKCkub3BlbiApe1xyXG4gICAgICAgICAgICAkKCcuZHJhd2VyLWRvd25zaWRlJykucmVtb3ZlQ2xhc3MoJ3NodXQnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKHsnb3Blbic6ZmFsc2V9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgJCgnLmRyYXdlci1kb3duc2lkZScpLmFkZENsYXNzKCdzaHV0Jyk7XHJcbiAgICAgICAgICAgICQodGhpcykuZGF0YSh7J29wZW4nOnRydWV9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8vXHJcblxyXG5cclxuXHJcblxyXG59KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTA3LlxuICovXG5cbiQoZnVuY3Rpb24oKXtcblxuICAvL+uplOuJtOuwlCDrp4jsmrDsiqQg7Jik67KE7IucIOq4uOydtCDrs4Dqsr1cblxuICAkKCcucHJvZ3JhbS1tZW51LXByb2dyYW0nKS5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcblxuICAgICQoJy5wcm9ncmFtLW1lbnUtY29tcG9zZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnLnByb2dyYW0tbWVudS1wcm9ncmFtJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gIH0pO1xuXG5cbiAgJCgnLnByb2dyYW0tbWVudS1jb21wb3NlcicpLm9uKCdtb3VzZWVudGVyJyxmdW5jdGlvbigpe1xuXG4gICAgJCgnLnByb2dyYW0tbWVudS1wcm9ncmFtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQoJy5wcm9ncmFtLW1lbnUtY29tcG9zZXInKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgfSk7XG5cblxuICAvLy8vLy8vLy8vLy/sm5Drs7gvLy8vLy8vLy8vLy8vLy8vXG5cbiAgJCgnLnByb2dyYW0tbWVudS1jb21wb3NlcicpLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbigpe1xuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQoJy5wcm9ncmFtLW1lbnUtcHJvZ3JhbScpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICB9KTtcblxuICAkKCcucHJvZ3JhbS1tZW51LXByb2dyYW0nKS5vbignbW91c2VsZWF2ZScsZnVuY3Rpb24oKXtcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCcucHJvZ3JhbS1tZW51LWNvbXBvc2VyJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICB9KTtcbiAgICAvLy8vLy8vLy8vLy/siJjsoJXspJEvLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAvLyQoJ3Byb2dyYW0tbWVudS1jb21wb3NlcicpLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbigpe1xuICAgIC8vXG4gICAgLy8gIHZhciBjaGVja2VyPSAkKHRoaXMpLnBhcmVudCgpO1xuICAgIC8vXG4gICAgLy8gIGlmIChjaGVja2VyPT0nI3Byb2dyYW0nKVxuICAgIC8vICB7ICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIC8vICAgICQoJy5wcm9ncmFtLW1lbnUtcHJvZ3JhbScpLmFkZENsYXNzKCdhY3RpdmUnKTt9XG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG4gICAvLyB9KTtcbiAgICAvL1xuICAgIC8vXG5cblxuXG5cblxuXG59KTtcblxuLy8vL3NlY3Rpb24g67OEIOyKpO2BrOuhpCDrj5nsnpFcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICQoXCIubW92ZS1zZWN0aW9uXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIC8vIOqwnOuzhOyggeycvOuhnCBXaGVlbCDsnbTrsqTtirgg7KCB7JqpXG4gICAgJCh0aGlzKS5vbihcIm1vdXNld2hlZWwgRE9NTW91c2VTY3JvbGxcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciBkZWx0YSA9IDA7XG4gICAgICBpZiAoIWV2ZW50KSBldmVudCA9IHdpbmRvdy5ldmVudDtcblxuXG5cbiAgICAgICAgICBpZiAoZXZlbnQud2hlZWxEZWx0YSkge1xuICAgICAgICBkZWx0YSA9IGV2ZW50LndoZWVsRGVsdGEgLyAxMjA7XG4gICAgICAgIGlmICh3aW5kb3cub3BlcmEpIGRlbHRhID0gLWRlbHRhO1xuICAgICAgfSBlbHNlIGlmIChldmVudC5kZXRhaWwpIGRlbHRhID0gLWV2ZW50LmRldGFpbCAvIDM7XG4gICAgICB2YXIgbW92ZVRvcCA9IG51bGw7XG5cbiAgICAgIC8vIOuniOyasOyKpO2coOydhCDsnITsl5DshJwg7JWE656Y66GcXG4gICAgICBpZiAoZGVsdGEgPCAwKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLm5leHQoKSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBtb3ZlVG9wID0gJCh0aGlzKS5uZXh0KCkub2Zmc2V0KCkudG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g66eI7Jqw7Iqk7Zyg7J2EIOyVhOuemOyXkOyEnCDsnITroZxcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICgkKHRoaXMpLnByZXYoKSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBtb3ZlVG9wID0gJCh0aGlzKS5wcmV2KCkub2Zmc2V0KCkudG9wO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyDtmZTrqbQg7J2064+ZIDAuNey0iFxuICAgICAgJChcImh0bWwsYm9keVwiKS5zdG9wKCkuYW5pbWF0ZSh7XG4gICAgICAgIHNjcm9sbFRvcDogbW92ZVRvcCArICdweCdcbiAgICAgIH0sIHtcbiAgICAgICAgZHVyYXRpb246IDUwMCwgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG59O1xuXG4iLCJcclxuJChmdW5jdGlvbigpe1xyXG4gICAgLy/rp4jsmrDsiqQg7Jik67KEIO2VmOuptCDsp6fsnYAg64+Z7JiB7IOBIOyerOyDnVxyXG5cclxuICAgJCgnLm1vdmllJykub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKVswXS5wbGF5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcubW92aWUnKS5vbignbW91c2VsZWF2ZScsZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpWzBdLnBhdXNlKCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxufSk7XHJcbiJdfQ==
