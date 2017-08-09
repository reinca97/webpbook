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
///**
// * Created by Administrator on 2017-08-09.
// */
//$(function(){
//
//$('.introduce-text').on('mousewheel'.function(e){})
//
//
//
//});
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



$(function(){
    //마우스 오버 하면 짧은 동영상 재생

   $('.movie').on('mouseenter',function(){
        $(this)[0].play();
    });

    $('.movie').on('mouseleave',function(){
        $(this)[0].pause();
    });



});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImduYl9sb2NhdGlvbi5qcyIsInBsYXllcl9kZXRhaWwuanMiLCJwcm9ncmFtLmpzIiwicmVwbGF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJmdW5jdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vdG9nZ2xlIHRvcCBtZW51XHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgLy9nbmIg66mU64m067KE7Yq8LCDrgpjqsIDquLAg7YG066atIOuPmeyekVxyXG5cclxuICAgICQoJy5tZW51LWJ0bicpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgJCgnLmduYicpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKCcuZ25iLWV4aXQtYnRuJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAkKCcuZ25iJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgLy9sb2NhdGlvbiDsnZggZHJhd2VyIO2BtOumrSDrj5nsnpFcclxuXHJcblxyXG4gICAgJCgnLmRyYXdlci11cHNpZGUnKS5kYXRhKHsgJ29wZW4nOnRydWV9KS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmKCAkKHRoaXMpLmRhdGEoKS5vcGVuICl7XHJcbiAgICAgICAgICAgICQoJy5kcmF3ZXItdXBzaWRlJykucmVtb3ZlQ2xhc3MoJ3NodXQnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKHsnb3Blbic6ZmFsc2V9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgJCgnLmRyYXdlci11cHNpZGUnKS5hZGRDbGFzcygnc2h1dCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoeydvcGVuJzp0cnVlfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG4gICAgJCgnLmRyYXdlci1kb3duc2lkZScpLmRhdGEoeyAnb3Blbic6dHJ1ZX0pLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgaWYoICQodGhpcykuZGF0YSgpLm9wZW4gKXtcclxuICAgICAgICAgICAgJCgnLmRyYXdlci1kb3duc2lkZScpLnJlbW92ZUNsYXNzKCdzaHV0Jyk7XHJcbiAgICAgICAgICAgICQodGhpcykuZGF0YSh7J29wZW4nOmZhbHNlfSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICQoJy5kcmF3ZXItZG93bnNpZGUnKS5hZGRDbGFzcygnc2h1dCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoeydvcGVuJzp0cnVlfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvL1xyXG5cclxuXHJcblxyXG5cclxufSk7IiwiLy8vKipcclxuLy8gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wOS5cclxuLy8gKi9cclxuLy8kKGZ1bmN0aW9uKCl7XHJcbi8vXHJcbi8vJCgnLmludHJvZHVjZS10ZXh0Jykub24oJ21vdXNld2hlZWwnLmZ1bmN0aW9uKGUpe30pXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vfSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wNy5cbiAqL1xuXG4kKGZ1bmN0aW9uKCl7XG5cbiAgLy8vLy8vLy8vLy8v7ZSE66Gc6re4656oIOuplOuJtOuwlCDrp4jsmrDsiqQg7Jik67KE7IucIOq4uOydtCDripjsnbTquLAvLy8vLy9cblxuICAkKCcucHJvZ3JhbS1tZW51LXByb2dyYW0wMicpLm9uKCdtb3VzZWVudGVyJyxmdW5jdGlvbigpe1xuICAgICQoJy5wcm9ncmFtLW1lbnUtY29tcG9zZXIwMicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCcucHJvZ3JhbS1tZW51LXByb2dyYW0wMicpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICB9KTtcblxuICAkKCcucHJvZ3JhbS1tZW51LWNvbXBvc2VyMDEnKS5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcbiAgICAkKCcucHJvZ3JhbS1tZW51LXByb2dyYW0wMScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCcucHJvZ3JhbS1tZW51LWNvbXBvc2VyMDEnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgfSk7XG5cbiAgLy8vLy8vLy8vLy8v66eI7Jqw7IqkIOuWqOyWtOyngOuptCDquLjsnbQg7KSE7J206riwLy8vLy8vLy8vLy8vLy8vL1xuXG4gICQoJy5wcm9ncmFtLW1lbnUtY29tcG9zZXIwMScpLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbigpe1xuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQoJy5wcm9ncmFtLW1lbnUtcHJvZ3JhbTAxJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gIH0pO1xuXG4gICQoJy5wcm9ncmFtLW1lbnUtcHJvZ3JhbTAyJykub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnLnByb2dyYW0tbWVudS1jb21wb3NlcjAyJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICB9KTtcblxuXG5cblxuXG59KTtcblxuLy8vL3NlY3Rpb24g67OEIOyKpO2BrOuhpCDrj5nsnpFcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICQoXCIubW92ZS1zZWN0aW9uXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIC8vIOqwnOuzhOyggeycvOuhnCBXaGVlbCDsnbTrsqTtirgg7KCB7JqpXG4gICAgJCh0aGlzKS5vbihcIm1vdXNld2hlZWwgRE9NTW91c2VTY3JvbGxcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciBkZWx0YSA9IDA7XG4gICAgICBpZiAoIWV2ZW50KSBldmVudCA9IHdpbmRvdy5ldmVudDtcblxuICAgICAgICAgIGlmIChldmVudC53aGVlbERlbHRhKSB7XG4gICAgICAgIGRlbHRhID0gZXZlbnQud2hlZWxEZWx0YSAvIDEyMDtcbiAgICAgICAgaWYgKHdpbmRvdy5vcGVyYSkgZGVsdGEgPSAtZGVsdGE7XG4gICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoZXZlbnQuZGV0YWlsKSBkZWx0YSA9IC1ldmVudC5kZXRhaWwgLyAzO1xuXG4gICAgICB2YXIgbW92ZVRvcCA9IG51bGw7XG4gICAgICAvLyDrp4jsmrDsiqTtnKDsnYQg7JyE7JeQ7IScIOyVhOuemOuhnFxuICAgICAgaWYgKGRlbHRhIDwgMCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5uZXh0KCkgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgbW92ZVRvcCA9ICQodGhpcykubmV4dCgpLm9mZnNldCgpLnRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOuniOyasOyKpO2coOydhCDslYTrnpjsl5DshJwg7JyE66GcXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoJCh0aGlzKS5wcmV2KCkgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgbW92ZVRvcCA9ICQodGhpcykucHJldigpLm9mZnNldCgpLnRvcDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyDtmZTrqbQg7J2064+ZIDAuNey0iFxuICAgICAgJChcImh0bWwsYm9keVwiKS5zdG9wKCkuYW5pbWF0ZSh7XG4gICAgICAgIHNjcm9sbFRvcDogbW92ZVRvcCArICdweCdcbiAgICAgIH0sIHtcbiAgICAgICAgZHVyYXRpb246IDUwMCwgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB9KTtcbiAgfSk7XG5cblxuLy/tlITroZzqt7jrnqgg64K0IOyduOuNseyKpCAo66eB7YGsKe2BtOumreyLnCDsiqTtgazroaQg7JWg64uI66mU7J207IWYXG4gICQoJy5wcm9ncmFtLWxpc3QtdGV4dD5wPmEnKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgaHJlZj0gJCh0aGlzKS5hdHRyKCdocmVmJyk7IC8vaHJlZuqwkuydhCDqsIDsoLjsmLRcbiAgICB2YXIgc2Nyb2xsUG9zaXRpb249JChocmVmKS5vZmZzZXQoKS50b3A7XG5cbiAgICBjb25zb2xlLmxvZyhocmVmKTtcblxuICAgICQoJ2JvZHknKS5zdG9wKCkuYW5pbWF0ZSh7c2Nyb2xsVG9wOnNjcm9sbFBvc2l0aW9ufSlcblxuICB9KTtcblxuXG5cblxuXG5cbn07XG5cbiIsIlxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgICAvL+uniOyasOyKpCDsmKTrsoQg7ZWY66m0IOynp+ydgCDrj5nsmIHsg4Eg7J6s7IOdXHJcblxyXG4gICAkKCcubW92aWUnKS5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpWzBdLnBsYXkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5tb3ZpZScpLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcylbMF0ucGF1c2UoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG59KTtcclxuIl19
