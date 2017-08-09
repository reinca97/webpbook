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
 * Created by Administrator on 2017-08-09.
 */
$(function(){

//$('.section1').on('mousewheel',function(){
//
//  $('.introduce-text').stop().animate({},500);
//
//
//  })



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
  $(".move-section").each(function(){

    // 개별적으로 Wheel 이벤트 적용
    $(this).on("mousewheel DOMMouseScroll", function (e) {


      console.log( $(e.target).parent().hasClass('introduce-text') );

      if( !$(e.target).parent().hasClass('introduce-text') ){
        console.log(36456);
        //e.preventDefault();
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

      }

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImduYl9sb2NhdGlvbi5qcyIsInBsYXllcl9kZXRhaWwuanMiLCJwcm9ncmFtLmpzIiwicmVwbGF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJmdW5jdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vdG9nZ2xlIHRvcCBtZW51XHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgLy9nbmIg66mU64m067KE7Yq8LCDrgpjqsIDquLAg7YG066atIOuPmeyekVxyXG5cclxuICAgICQoJy5tZW51LWJ0bicpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgJCgnLmduYicpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKCcuZ25iLWV4aXQtYnRuJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAkKCcuZ25iJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgLy9sb2NhdGlvbiDsnZggZHJhd2VyIO2BtOumrSDrj5nsnpFcclxuXHJcblxyXG4gICAgJCgnLmRyYXdlci11cHNpZGUnKS5kYXRhKHsgJ29wZW4nOnRydWV9KS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmKCAkKHRoaXMpLmRhdGEoKS5vcGVuICl7XHJcbiAgICAgICAgICAgICQoJy5kcmF3ZXItdXBzaWRlJykucmVtb3ZlQ2xhc3MoJ3NodXQnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKHsnb3Blbic6ZmFsc2V9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgJCgnLmRyYXdlci11cHNpZGUnKS5hZGRDbGFzcygnc2h1dCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoeydvcGVuJzp0cnVlfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG4gICAgJCgnLmRyYXdlci1kb3duc2lkZScpLmRhdGEoeyAnb3Blbic6dHJ1ZX0pLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgaWYoICQodGhpcykuZGF0YSgpLm9wZW4gKXtcclxuICAgICAgICAgICAgJCgnLmRyYXdlci1kb3duc2lkZScpLnJlbW92ZUNsYXNzKCdzaHV0Jyk7XHJcbiAgICAgICAgICAgICQodGhpcykuZGF0YSh7J29wZW4nOmZhbHNlfSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICQoJy5kcmF3ZXItZG93bnNpZGUnKS5hZGRDbGFzcygnc2h1dCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoeydvcGVuJzp0cnVlfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvL1xyXG5cclxuXHJcblxyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTA5LlxyXG4gKi9cclxuJChmdW5jdGlvbigpe1xyXG5cclxuLy8kKCcuc2VjdGlvbjEnKS5vbignbW91c2V3aGVlbCcsZnVuY3Rpb24oKXtcclxuLy9cclxuLy8gICQoJy5pbnRyb2R1Y2UtdGV4dCcpLnN0b3AoKS5hbmltYXRlKHt9LDUwMCk7XHJcbi8vXHJcbi8vXHJcbi8vICB9KVxyXG5cclxuXHJcblxyXG59KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTA3LlxuICovXG5cbiQoZnVuY3Rpb24oKXtcblxuICAvLy8vLy8vLy8vLy/tlITroZzqt7jrnqgg66mU64m067CUIOuniOyasOyKpCDsmKTrsoTsi5wg6ri47J20IOuKmOydtOq4sC8vLy8vL1xuXG4gICQoJy5wcm9ncmFtLW1lbnUtcHJvZ3JhbTAyJykub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XG4gICAgJCgnLnByb2dyYW0tbWVudS1jb21wb3NlcjAyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQoJy5wcm9ncmFtLW1lbnUtcHJvZ3JhbTAyJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gIH0pO1xuXG4gICQoJy5wcm9ncmFtLW1lbnUtY29tcG9zZXIwMScpLm9uKCdtb3VzZWVudGVyJyxmdW5jdGlvbigpe1xuICAgICQoJy5wcm9ncmFtLW1lbnUtcHJvZ3JhbTAxJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQoJy5wcm9ncmFtLW1lbnUtY29tcG9zZXIwMScpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICB9KTtcblxuICAvLy8vLy8vLy8vLy/rp4jsmrDsiqQg65ao7Ja07KeA66m0IOq4uOydtCDspITsnbTquLAvLy8vLy8vLy8vLy8vLy8vXG5cbiAgJCgnLnByb2dyYW0tbWVudS1jb21wb3NlcjAxJykub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnLnByb2dyYW0tbWVudS1wcm9ncmFtMDEnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgfSk7XG5cbiAgJCgnLnByb2dyYW0tbWVudS1wcm9ncmFtMDInKS5vbignbW91c2VsZWF2ZScsZnVuY3Rpb24oKXtcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCcucHJvZ3JhbS1tZW51LWNvbXBvc2VyMDInKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gIH0pO1xuXG5cblxuXG5cbn0pO1xuXG4vLy8vc2VjdGlvbiDrs4Qg7Iqk7YGs66GkIOuPmeyekVxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgJChcIi5tb3ZlLXNlY3Rpb25cIikuZWFjaChmdW5jdGlvbigpe1xuXG4gICAgLy8g6rCc67OE7KCB7Jy866GcIFdoZWVsIOydtOuypO2KuCDsoIHsmqlcbiAgICAkKHRoaXMpLm9uKFwibW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbFwiLCBmdW5jdGlvbiAoZSkge1xuXG5cbiAgICAgIGNvbnNvbGUubG9nKCAkKGUudGFyZ2V0KS5wYXJlbnQoKS5oYXNDbGFzcygnaW50cm9kdWNlLXRleHQnKSApO1xuXG4gICAgICBpZiggISQoZS50YXJnZXQpLnBhcmVudCgpLmhhc0NsYXNzKCdpbnRyb2R1Y2UtdGV4dCcpICl7XG4gICAgICAgIGNvbnNvbGUubG9nKDM2NDU2KTtcbiAgICAgICAgLy9lLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBkZWx0YSA9IDA7XG4gICAgICAgIGlmICghZXZlbnQpIGV2ZW50ID0gd2luZG93LmV2ZW50O1xuXG4gICAgICAgIGlmIChldmVudC53aGVlbERlbHRhKSB7XG4gICAgICAgICAgZGVsdGEgPSBldmVudC53aGVlbERlbHRhIC8gMTIwO1xuICAgICAgICAgIGlmICh3aW5kb3cub3BlcmEpIGRlbHRhID0gLWRlbHRhO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmRldGFpbCkgZGVsdGEgPSAtZXZlbnQuZGV0YWlsIC8gMztcblxuICAgICAgICB2YXIgbW92ZVRvcCA9IG51bGw7XG4gICAgICAgIC8vIOuniOyasOyKpO2coOydhCDsnITsl5DshJwg7JWE656Y66GcXG4gICAgICAgIGlmIChkZWx0YSA8IDApIHtcbiAgICAgICAgICBpZiAoJCh0aGlzKS5uZXh0KCkgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBtb3ZlVG9wID0gJCh0aGlzKS5uZXh0KCkub2Zmc2V0KCkudG9wO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIOuniOyasOyKpO2coOydhCDslYTrnpjsl5DshJwg7JyE66GcXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCQodGhpcykucHJldigpICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbW92ZVRvcCA9ICQodGhpcykucHJldigpLm9mZnNldCgpLnRvcDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDtmZTrqbQg7J2064+ZIDAuNey0iFxuICAgICAgICAkKFwiaHRtbCxib2R5XCIpLnN0b3AoKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6IG1vdmVUb3AgKyAncHgnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkdXJhdGlvbjogNTAwLCBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgIH1cblxuICAgIH0pO1xuXG4gIH0pO1xuXG5cblxuXG5cbi8v7ZSE66Gc6re4656oIOuCtCDsnbjrjbHsiqQgKOunge2BrCntgbTrpq3si5wg7Iqk7YGs66GkIOyVoOuLiOuplOydtOyFmFxuICAkKCcucHJvZ3JhbS1saXN0LXRleHQ+cD5hJykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGhyZWY9ICQodGhpcykuYXR0cignaHJlZicpOyAvL2hyZWbqsJLsnYQg6rCA7KC47Ji0XG4gICAgdmFyIHNjcm9sbFBvc2l0aW9uPSQoaHJlZikub2Zmc2V0KCkudG9wO1xuXG4gICAgY29uc29sZS5sb2coaHJlZik7XG5cbiAgICAkKCdib2R5Jykuc3RvcCgpLmFuaW1hdGUoe3Njcm9sbFRvcDpzY3JvbGxQb3NpdGlvbn0pXG5cbiAgfSk7XG5cblxuXG5cblxuXG59O1xuXG4iLCJcclxuJChmdW5jdGlvbigpe1xyXG4gICAgLy/rp4jsmrDsiqQg7Jik67KEIO2VmOuptCDsp6fsnYAg64+Z7JiB7IOBIOyerOyDnVxyXG5cclxuICAgJCgnLm1vdmllJykub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKVswXS5wbGF5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcubW92aWUnKS5vbignbW91c2VsZWF2ZScsZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpWzBdLnBhdXNlKCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxufSk7XHJcbiJdfQ==
