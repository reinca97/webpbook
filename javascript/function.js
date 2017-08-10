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

      if( !$(e.target).parent().hasClass('inner-scroll') ){
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




  //Hartman 의 그림 리스트 클릭시 오른쪽에 보여주기


    $('.hm-link-01').on('click',function(e){

      e.preventDefault();
        $('.hartmann-pic-01').css({'display':'block'});
        $('.hartmann-pic-02').css({'display':'none'});
        $('.hartmann-pic-03').css({'display':'none'});
        $('.hartmann-pic-04').css({'display':'none'});
        $('.hartmann-pic-05').css({'display':'none'});
    });

    $('.hm-link-02').on('click',function(e){

        e.preventDefault();
        $('.hartmann-pic-02').css({'display':'block'});
        $('.hartmann-pic-01').css({'display':'none'});
        $('.hartmann-pic-03').css({'display':'none'});
        $('.hartmann-pic-04').css({'display':'none'});
        $('.hartmann-pic-05').css({'display':'none'});

    });

    $('.hm-link-03').on('click',function(e){

        e.preventDefault();
        $('.hartmann-pic-03').css({'display':'block'});
        $('.hartmann-pic-02').css({'display':'none'});
        $('.hartmann-pic-01').css({'display':'none'});
        $('.hartmann-pic-04').css({'display':'none'});
        $('.hartmann-pic-05').css({'display':'none'});

    });

    $('.hm-link-04').on('click',function(e){

        e.preventDefault();
        $('.hartmann-pic-04').css({'display':'block'});
        $('.hartmann-pic-02').css({'display':'none'});
        $('.hartmann-pic-03').css({'display':'none'});
        $('.hartmann-pic-01').css({'display':'none'});
        $('.hartmann-pic-05').css({'display':'none'});

    });

    $('.hm-link-05').on('click',function(e){

        e.preventDefault();
        $('.hartmann-pic-05').css({'display':'block'});
        $('.hartmann-pic-02').css({'display':'none'});
        $('.hartmann-pic-03').css({'display':'none'});
        $('.hartmann-pic-04').css({'display':'none'});
        $('.hartmann-pic-01').css({'display':'none'});

    })




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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImduYl9sb2NhdGlvbi5qcyIsInBsYXllcl9kZXRhaWwuanMiLCJwcm9ncmFtLmpzIiwicmVwbGF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJmdW5jdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vdG9nZ2xlIHRvcCBtZW51XHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgLy9nbmIg66mU64m067KE7Yq8LCDrgpjqsIDquLAg7YG066atIOuPmeyekVxyXG5cclxuICAgICQoJy5tZW51LWJ0bicpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgJCgnLmduYicpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKCcuZ25iLWV4aXQtYnRuJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAkKCcuZ25iJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgLy9sb2NhdGlvbiDsnZggZHJhd2VyIO2BtOumrSDrj5nsnpFcclxuXHJcblxyXG4gICAgJCgnLmRyYXdlci11cHNpZGUnKS5kYXRhKHsgJ29wZW4nOnRydWV9KS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmKCAkKHRoaXMpLmRhdGEoKS5vcGVuICl7XHJcbiAgICAgICAgICAgICQoJy5kcmF3ZXItdXBzaWRlJykucmVtb3ZlQ2xhc3MoJ3NodXQnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKHsnb3Blbic6ZmFsc2V9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgJCgnLmRyYXdlci11cHNpZGUnKS5hZGRDbGFzcygnc2h1dCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoeydvcGVuJzp0cnVlfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG4gICAgJCgnLmRyYXdlci1kb3duc2lkZScpLmRhdGEoeyAnb3Blbic6dHJ1ZX0pLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgaWYoICQodGhpcykuZGF0YSgpLm9wZW4gKXtcclxuICAgICAgICAgICAgJCgnLmRyYXdlci1kb3duc2lkZScpLnJlbW92ZUNsYXNzKCdzaHV0Jyk7XHJcbiAgICAgICAgICAgICQodGhpcykuZGF0YSh7J29wZW4nOmZhbHNlfSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICQoJy5kcmF3ZXItZG93bnNpZGUnKS5hZGRDbGFzcygnc2h1dCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoeydvcGVuJzp0cnVlfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvL1xyXG5cclxuXHJcblxyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTA5LlxyXG4gKi9cclxuJChmdW5jdGlvbigpe1xyXG5cclxuLy8kKCcuc2VjdGlvbjEnKS5vbignbW91c2V3aGVlbCcsZnVuY3Rpb24oKXtcclxuLy9cclxuLy8gICQoJy5pbnRyb2R1Y2UtdGV4dCcpLnN0b3AoKS5hbmltYXRlKHt9LDUwMCk7XHJcbi8vXHJcbi8vXHJcbi8vICB9KVxyXG5cclxuXHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMDcuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAvLy8vLy8vLy8vLy/tlITroZzqt7jrnqgg66mU64m067CUIOuniOyasOyKpCDsmKTrsoTsi5wg6ri47J20IOuKmOydtOq4sC8vLy8vL1xyXG5cclxuICAkKCcucHJvZ3JhbS1tZW51LXByb2dyYW0wMicpLm9uKCdtb3VzZWVudGVyJyxmdW5jdGlvbigpe1xyXG4gICAgJCgnLnByb2dyYW0tbWVudS1jb21wb3NlcjAyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnLnByb2dyYW0tbWVudS1wcm9ncmFtMDInKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcucHJvZ3JhbS1tZW51LWNvbXBvc2VyMDEnKS5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcclxuICAgICQoJy5wcm9ncmFtLW1lbnUtcHJvZ3JhbTAxJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnLnByb2dyYW0tbWVudS1jb21wb3NlcjAxJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8v66eI7Jqw7IqkIOuWqOyWtOyngOuptCDquLjsnbQg7KSE7J206riwLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAkKCcucHJvZ3JhbS1tZW51LWNvbXBvc2VyMDEnKS5vbignbW91c2VsZWF2ZScsZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnLnByb2dyYW0tbWVudS1wcm9ncmFtMDEnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcucHJvZ3JhbS1tZW51LXByb2dyYW0wMicpLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCcucHJvZ3JhbS1tZW51LWNvbXBvc2VyMDInKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxufSk7XHJcblxyXG4vLy8vc2VjdGlvbiDrs4Qg7Iqk7YGs66GkIOuPmeyekVxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICQoXCIubW92ZS1zZWN0aW9uXCIpLmVhY2goZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvLyDqsJzrs4TsoIHsnLzroZwgV2hlZWwg7J2067Kk7Yq4IOyggeyaqVxyXG4gICAgJCh0aGlzKS5vbihcIm1vdXNld2hlZWwgRE9NTW91c2VTY3JvbGxcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgIGlmKCAhJChlLnRhcmdldCkucGFyZW50KCkuaGFzQ2xhc3MoJ2lubmVyLXNjcm9sbCcpICl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBkZWx0YSA9IDA7XHJcbiAgICAgICAgaWYgKCFldmVudCkgZXZlbnQgPSB3aW5kb3cuZXZlbnQ7XHJcblxyXG4gICAgICAgIGlmIChldmVudC53aGVlbERlbHRhKSB7XHJcbiAgICAgICAgICBkZWx0YSA9IGV2ZW50LndoZWVsRGVsdGEgLyAxMjA7XHJcbiAgICAgICAgICBpZiAod2luZG93Lm9wZXJhKSBkZWx0YSA9IC1kZWx0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZXZlbnQuZGV0YWlsKSBkZWx0YSA9IC1ldmVudC5kZXRhaWwgLyAzO1xyXG5cclxuICAgICAgICB2YXIgbW92ZVRvcCA9IG51bGw7XHJcbiAgICAgICAgLy8g66eI7Jqw7Iqk7Zyg7J2EIOychOyXkOyEnCDslYTrnpjroZxcclxuICAgICAgICBpZiAoZGVsdGEgPCAwKSB7XHJcbiAgICAgICAgICBpZiAoJCh0aGlzKS5uZXh0KCkgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG1vdmVUb3AgPSAkKHRoaXMpLm5leHQoKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8g66eI7Jqw7Iqk7Zyg7J2EIOyVhOuemOyXkOyEnCDsnITroZxcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKCQodGhpcykucHJldigpICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBtb3ZlVG9wID0gJCh0aGlzKS5wcmV2KCkub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g7ZmU66m0IOydtOuPmSAwLjXstIhcclxuICAgICAgICAkKFwiaHRtbCxib2R5XCIpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgIHNjcm9sbFRvcDogbW92ZVRvcCArICdweCdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBkdXJhdGlvbjogNTAwLCBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vL+2UhOuhnOq3uOueqCDrgrQg7J24642x7IqkICjrp4Htgawp7YG066at7IucIOyKpO2BrOuhpCDslaDri4jrqZTsnbTshZhcclxuICAkKCcucHJvZ3JhbS1saXN0LXRleHQ+cD5hJykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciBocmVmPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTsgLy9ocmVm6rCS7J2EIOqwgOyguOyYtFxyXG4gICAgdmFyIHNjcm9sbFBvc2l0aW9uPSQoaHJlZikub2Zmc2V0KCkudG9wO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGhyZWYpO1xyXG5cclxuICAgICQoJ2JvZHknKS5zdG9wKCkuYW5pbWF0ZSh7c2Nyb2xsVG9wOnNjcm9sbFBvc2l0aW9ufSlcclxuXHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gIC8vSGFydG1hbiDsnZgg6re466a8IOumrOyKpO2KuCDtgbTrpq3si5wg7Jik66W47Kq97JeQIOuztOyXrOyjvOq4sFxyXG5cclxuXHJcbiAgICAkKCcuaG0tbGluay0wMScpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMScpLmNzcyh7J2Rpc3BsYXknOidibG9jayd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAyJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMycpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDQnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTA1JykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuaG0tbGluay0wMicpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAyJykuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDEnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAzJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNCcpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDUnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuaG0tbGluay0wMycpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAzJykuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDInKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAxJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNCcpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDUnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuaG0tbGluay0wNCcpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTA0JykuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDInKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAzJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDUnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuaG0tbGluay0wNScpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTA1JykuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDInKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAzJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNCcpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDEnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuXHJcbiAgICB9KVxyXG5cclxuXHJcblxyXG5cclxufTtcclxuXHJcbiIsIlxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgICAvL+uniOyasOyKpCDsmKTrsoQg7ZWY66m0IOynp+ydgCDrj5nsmIHsg4Eg7J6s7IOdXHJcblxyXG4gICAkKCcubW92aWUnKS5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpWzBdLnBsYXkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5tb3ZpZScpLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcylbMF0ucGF1c2UoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG59KTtcclxuIl19
