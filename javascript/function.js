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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImduYl9sb2NhdGlvbi5qcyIsInByb2dyYW0uanMiLCJyZXBsYXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZnVuY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL3RvZ2dsZSB0b3AgbWVudVxyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vZ25iIOuplOuJtOuyhO2KvCwg64KY6rCA6riwIO2BtOumrSDrj5nsnpFcclxuXHJcbiAgICAkKCcubWVudS1idG4nKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICQoJy5nbmInKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJCgnLmduYi1leGl0LWJ0bicpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgJCgnLmduYicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIC8vbG9jYXRpb24g7J2YIGRyYXdlciDtgbTrpq0g64+Z7J6RXHJcblxyXG5cclxuICAgICQoJy5kcmF3ZXItdXBzaWRlJykuZGF0YSh7ICdvcGVuJzp0cnVlfSkub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBpZiggJCh0aGlzKS5kYXRhKCkub3BlbiApe1xyXG4gICAgICAgICAgICAkKCcuZHJhd2VyLXVwc2lkZScpLnJlbW92ZUNsYXNzKCdzaHV0Jyk7XHJcbiAgICAgICAgICAgICQodGhpcykuZGF0YSh7J29wZW4nOmZhbHNlfSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICQoJy5kcmF3ZXItdXBzaWRlJykuYWRkQ2xhc3MoJ3NodXQnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKHsnb3Blbic6dHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuICAgICQoJy5kcmF3ZXItZG93bnNpZGUnKS5kYXRhKHsgJ29wZW4nOnRydWV9KS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmKCAkKHRoaXMpLmRhdGEoKS5vcGVuICl7XHJcbiAgICAgICAgICAgICQoJy5kcmF3ZXItZG93bnNpZGUnKS5yZW1vdmVDbGFzcygnc2h1dCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoeydvcGVuJzpmYWxzZX0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAkKCcuZHJhd2VyLWRvd25zaWRlJykuYWRkQ2xhc3MoJ3NodXQnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKHsnb3Blbic6dHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy9cclxuXHJcblxyXG5cclxuXHJcbn0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMDcuXG4gKi9cblxuJChmdW5jdGlvbigpe1xuXG4gIC8vLy8vLy8vLy8vL+2UhOuhnOq3uOueqCDrqZTribTrsJQg66eI7Jqw7IqkIOyYpOuyhOyLnCDquLjsnbQg64qY7J206riwLy8vLy8vXG5cbiAgJCgnLnByb2dyYW0tbWVudS1wcm9ncmFtMDInKS5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcbiAgICAkKCcucHJvZ3JhbS1tZW51LWNvbXBvc2VyMDInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnLnByb2dyYW0tbWVudS1wcm9ncmFtMDInKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgfSk7XG5cbiAgJCgnLnByb2dyYW0tbWVudS1jb21wb3NlcjAxJykub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XG4gICAgJCgnLnByb2dyYW0tbWVudS1wcm9ncmFtMDEnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnLnByb2dyYW0tbWVudS1jb21wb3NlcjAxJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gIH0pO1xuXG4gIC8vLy8vLy8vLy8vL+uniOyasOyKpCDrlqjslrTsp4DrqbQg6ri47J20IOykhOydtOq4sC8vLy8vLy8vLy8vLy8vLy9cblxuICAkKCcucHJvZ3JhbS1tZW51LWNvbXBvc2VyMDEnKS5vbignbW91c2VsZWF2ZScsZnVuY3Rpb24oKXtcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCcucHJvZ3JhbS1tZW51LXByb2dyYW0wMScpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICB9KTtcblxuICAkKCcucHJvZ3JhbS1tZW51LXByb2dyYW0wMicpLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbigpe1xuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQoJy5wcm9ncmFtLW1lbnUtY29tcG9zZXIwMicpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgfSk7XG5cblxuXG5cblxufSk7XG5cbi8vLy9zZWN0aW9uIOuzhCDsiqTtgazroaQg64+Z7J6RXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAkKFwiLm1vdmUtc2VjdGlvblwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAvLyDqsJzrs4TsoIHsnLzroZwgV2hlZWwg7J2067Kk7Yq4IOyggeyaqVxuICAgICQodGhpcykub24oXCJtb3VzZXdoZWVsIERPTU1vdXNlU2Nyb2xsXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB2YXIgZGVsdGEgPSAwO1xuICAgICAgaWYgKCFldmVudCkgZXZlbnQgPSB3aW5kb3cuZXZlbnQ7XG5cblxuXG4gICAgICAgICAgaWYgKGV2ZW50LndoZWVsRGVsdGEpIHtcbiAgICAgICAgZGVsdGEgPSBldmVudC53aGVlbERlbHRhIC8gMTIwO1xuICAgICAgICBpZiAod2luZG93Lm9wZXJhKSBkZWx0YSA9IC1kZWx0YTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQuZGV0YWlsKSBkZWx0YSA9IC1ldmVudC5kZXRhaWwgLyAzO1xuICAgICAgdmFyIG1vdmVUb3AgPSBudWxsO1xuXG4gICAgICAvLyDrp4jsmrDsiqTtnKDsnYQg7JyE7JeQ7IScIOyVhOuemOuhnFxuICAgICAgaWYgKGRlbHRhIDwgMCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5uZXh0KCkgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgbW92ZVRvcCA9ICQodGhpcykubmV4dCgpLm9mZnNldCgpLnRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOuniOyasOyKpO2coOydhCDslYTrnpjsl5DshJwg7JyE66GcXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoJCh0aGlzKS5wcmV2KCkgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgbW92ZVRvcCA9ICQodGhpcykucHJldigpLm9mZnNldCgpLnRvcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8g7ZmU66m0IOydtOuPmSAwLjXstIhcbiAgICAgICQoXCJodG1sLGJvZHlcIikuc3RvcCgpLmFuaW1hdGUoe1xuICAgICAgICBzY3JvbGxUb3A6IG1vdmVUb3AgKyAncHgnXG4gICAgICB9LCB7XG4gICAgICAgIGR1cmF0aW9uOiA1MDAsIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxufTtcblxuIiwiXHJcbiQoZnVuY3Rpb24oKXtcclxuICAgIC8v66eI7Jqw7IqkIOyYpOuyhCDtlZjrqbQg7Ken7J2AIOuPmeyYgeyDgSDsnqzsg51cclxuXHJcbiAgICQoJy5tb3ZpZScpLm9uKCdtb3VzZWVudGVyJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcylbMF0ucGxheSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLm1vdmllJykub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKVswXS5wYXVzZSgpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbn0pO1xyXG4iXX0=
