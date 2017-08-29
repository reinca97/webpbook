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
 * Created by Administrator on 2017-08-10.
 */
$(function(){


  var $audio =$('.audio')[0];


  $('.audio').on('loadedmetadata',function(){
    console.log(Math.floor($audio.duration/60)+ ':' + Math.floor($audio.duration % 60) ); //분 : 나머지  -->yatta!
  });

  //////////// ##:## 형태로  ///////////
  function digit(time){
    var fixDigit;

    if(time<10){fixDigit='0'+time;  //10보다 작은경우 변수에 저장
    }else{fixDigit=time;}  //10보다 크면 걍 그대로
    return fixDigit;}

  /////////////runnung time///////////////

  $('audio').on('timeupdate',function(){
    var time= digit( Math.floor($audio.currentTime/60) )+ ':' + digit( Math.floor($audio.currentTime % 60) );
    //분:나머지

    $('.current-time').html(time); //digit 함수에 time 대입하여 출력.

    //progress bar 가로길이 퍼센테이지 제어( 현재시간/전체시간 * 100)
    var progressBar = $audio.currentTime/$audio.duration*100;
    $('.progress .progress-bar').css({'width': progressBar+'%'});
  });


  //////////버튼 클릭시 플레이+멈춤 토글/////////////////
  $('.btn').data({'play':false}).on('click',function(){


    if( $(this).data('play') == false ){
      $audio.play();
      $(this).removeClass('play').addClass('pause');
      $(this).data({'play':true});


      $(".bar").removeClass("noAnim");



    }else{
      $audio.pause();
      $(this).removeClass('pause').addClass('play');
      $(this).data({'play':false});

      $(".bar").addClass("noAnim");


    }






  });







});//진입점 끝
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
  $('.program-list-text01>p>a').on('click',function(e){
    e.preventDefault();
    var href= $(this).attr('href'); //href값을 가져옴
    var scrollPosition=$(href).offset().top;

    console.log(href);

    $('body').stop().animate({scrollTop:scrollPosition})

  });
    $('.program-list-text02>p>a').on('click',function(e){
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

    });


};



$(window).on('load',function(){
  $('#container').hide();

});



$(function(){
    //마우스 오버 하면 짧은 동영상 재생

   $('.movie').on('mouseenter',function(){
        $(this)[0].play();
    });

    $('.movie').on('mouseleave',function(){
        $(this)[0].pause();
    });



});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImduYl9sb2NhdGlvbi5qcyIsIm11c2ljX3BsYXllci5qcyIsInBsYXllcl9kZXRhaWwuanMiLCJwcm9ncmFtLmpzIiwicmVwbGF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImZ1bmN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy90b2dnbGUgdG9wIG1lbnVcblxuJChmdW5jdGlvbigpe1xuXG4gICAgLy9nbmIg66mU64m067KE7Yq8LCDrgpjqsIDquLAg7YG066atIOuPmeyekVxuXG4gICAgJCgnLm1lbnUtYnRuJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG4gICAgICAgICQoJy5nbmInKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cblxuICAgICQoJy5nbmItZXhpdC1idG4nKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgJCgnLmduYicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgIH0pO1xuXG5cblxuICAgIC8vbG9jYXRpb24g7J2YIGRyYXdlciDtgbTrpq0g64+Z7J6RXG5cblxuICAgICQoJy5kcmF3ZXItdXBzaWRlJykuZGF0YSh7ICdvcGVuJzp0cnVlfSkub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG4gICAgICAgIGlmKCAkKHRoaXMpLmRhdGEoKS5vcGVuICl7XG4gICAgICAgICAgICAkKCcuZHJhd2VyLXVwc2lkZScpLnJlbW92ZUNsYXNzKCdzaHV0Jyk7XG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoeydvcGVuJzpmYWxzZX0pO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICQoJy5kcmF3ZXItdXBzaWRlJykuYWRkQ2xhc3MoJ3NodXQnKTtcbiAgICAgICAgICAgICQodGhpcykuZGF0YSh7J29wZW4nOnRydWV9KTtcbiAgICAgICAgfVxuXG4gICAgfSk7XG4gICAgJCgnLmRyYXdlci1kb3duc2lkZScpLmRhdGEoeyAnb3Blbic6dHJ1ZX0pLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICBpZiggJCh0aGlzKS5kYXRhKCkub3BlbiApe1xuICAgICAgICAgICAgJCgnLmRyYXdlci1kb3duc2lkZScpLnJlbW92ZUNsYXNzKCdzaHV0Jyk7XG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoeydvcGVuJzpmYWxzZX0pO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICQoJy5kcmF3ZXItZG93bnNpZGUnKS5hZGRDbGFzcygnc2h1dCcpO1xuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKHsnb3Blbic6dHJ1ZX0pO1xuICAgICAgICB9XG5cbiAgICB9KTtcblxuXG4gICAgLy9cblxuXG5cblxufSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0xMC5cbiAqL1xuJChmdW5jdGlvbigpe1xuXG5cbiAgdmFyICRhdWRpbyA9JCgnLmF1ZGlvJylbMF07XG5cblxuICAkKCcuYXVkaW8nKS5vbignbG9hZGVkbWV0YWRhdGEnLGZ1bmN0aW9uKCl7XG4gICAgY29uc29sZS5sb2coTWF0aC5mbG9vcigkYXVkaW8uZHVyYXRpb24vNjApKyAnOicgKyBNYXRoLmZsb29yKCRhdWRpby5kdXJhdGlvbiAlIDYwKSApOyAvL+u2hCA6IOuCmOuouOyngCAgLS0+eWF0dGEhXG4gIH0pO1xuXG4gIC8vLy8vLy8vLy8vLyAjIzojIyDtmJXtg5zroZwgIC8vLy8vLy8vLy8vXG4gIGZ1bmN0aW9uIGRpZ2l0KHRpbWUpe1xuICAgIHZhciBmaXhEaWdpdDtcblxuICAgIGlmKHRpbWU8MTApe2ZpeERpZ2l0PScwJyt0aW1lOyAgLy8xMOuztOuLpCDsnpHsnYDqsr3smrAg67OA7IiY7JeQIOyggOyepVxuICAgIH1lbHNle2ZpeERpZ2l0PXRpbWU7fSAgLy8xMOuztOuLpCDtgazrqbQg6rGNIOq3uOuMgOuhnFxuICAgIHJldHVybiBmaXhEaWdpdDt9XG5cbiAgLy8vLy8vLy8vLy8vL3J1bm51bmcgdGltZS8vLy8vLy8vLy8vLy8vL1xuXG4gICQoJ2F1ZGlvJykub24oJ3RpbWV1cGRhdGUnLGZ1bmN0aW9uKCl7XG4gICAgdmFyIHRpbWU9IGRpZ2l0KCBNYXRoLmZsb29yKCRhdWRpby5jdXJyZW50VGltZS82MCkgKSsgJzonICsgZGlnaXQoIE1hdGguZmxvb3IoJGF1ZGlvLmN1cnJlbnRUaW1lICUgNjApICk7XG4gICAgLy/rtoQ664KY66i47KeAXG5cbiAgICAkKCcuY3VycmVudC10aW1lJykuaHRtbCh0aW1lKTsgLy9kaWdpdCDtlajsiJjsl5AgdGltZSDrjIDsnoXtlZjsl6wg7Lac66ClLlxuXG4gICAgLy9wcm9ncmVzcyBiYXIg6rCA66Gc6ri47J20IO2NvOyEvO2FjOydtOyngCDsoJzslrQoIO2YhOyerOyLnOqwhC/soITssrTsi5zqsIQgKiAxMDApXG4gICAgdmFyIHByb2dyZXNzQmFyID0gJGF1ZGlvLmN1cnJlbnRUaW1lLyRhdWRpby5kdXJhdGlvbioxMDA7XG4gICAgJCgnLnByb2dyZXNzIC5wcm9ncmVzcy1iYXInKS5jc3Moeyd3aWR0aCc6IHByb2dyZXNzQmFyKyclJ30pO1xuICB9KTtcblxuXG4gIC8vLy8vLy8vLy/rsoTtirwg7YG066at7IucIO2UjOugiOydtCvrqYjstqQg7Yag6riALy8vLy8vLy8vLy8vLy8vLy9cbiAgJCgnLmJ0bicpLmRhdGEoeydwbGF5JzpmYWxzZX0pLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcblxuXG4gICAgaWYoICQodGhpcykuZGF0YSgncGxheScpID09IGZhbHNlICl7XG4gICAgICAkYXVkaW8ucGxheSgpO1xuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygncGxheScpLmFkZENsYXNzKCdwYXVzZScpO1xuICAgICAgJCh0aGlzKS5kYXRhKHsncGxheSc6dHJ1ZX0pO1xuXG5cbiAgICAgICQoXCIuYmFyXCIpLnJlbW92ZUNsYXNzKFwibm9BbmltXCIpO1xuXG5cblxuICAgIH1lbHNle1xuICAgICAgJGF1ZGlvLnBhdXNlKCk7XG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdwYXVzZScpLmFkZENsYXNzKCdwbGF5Jyk7XG4gICAgICAkKHRoaXMpLmRhdGEoeydwbGF5JzpmYWxzZX0pO1xuXG4gICAgICAkKFwiLmJhclwiKS5hZGRDbGFzcyhcIm5vQW5pbVwiKTtcblxuXG4gICAgfVxuXG5cblxuXG5cblxuICB9KTtcblxuXG5cblxuXG5cblxufSk7Ly/sp4TsnoXsoJAg64GdIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wOS5cbiAqL1xuJChmdW5jdGlvbigpe1xuXG4vLyQoJy5zZWN0aW9uMScpLm9uKCdtb3VzZXdoZWVsJyxmdW5jdGlvbigpe1xuLy9cbi8vICAkKCcuaW50cm9kdWNlLXRleHQnKS5zdG9wKCkuYW5pbWF0ZSh7fSw1MDApO1xuLy9cbi8vXG4vLyAgfSlcblxuXG5cbn0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMDcuXG4gKi9cblxuJChmdW5jdGlvbigpe1xuXG4gIC8vLy8vLy8vLy8vL+2UhOuhnOq3uOueqCDrqZTribTrsJQg66eI7Jqw7IqkIOyYpOuyhOyLnCDquLjsnbQg64qY7J206riwLy8vLy8vXG5cbiAgJCgnLnByb2dyYW0tbWVudS1wcm9ncmFtMDInKS5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcbiAgICAkKCcucHJvZ3JhbS1tZW51LWNvbXBvc2VyMDInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnLnByb2dyYW0tbWVudS1wcm9ncmFtMDInKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgfSk7XG5cbiAgJCgnLnByb2dyYW0tbWVudS1jb21wb3NlcjAxJykub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XG4gICAgJCgnLnByb2dyYW0tbWVudS1wcm9ncmFtMDEnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnLnByb2dyYW0tbWVudS1jb21wb3NlcjAxJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gIH0pO1xuXG4gIC8vLy8vLy8vLy8vL+uniOyasOyKpCDrlqjslrTsp4DrqbQg6ri47J20IOykhOydtOq4sC8vLy8vLy8vLy8vLy8vLy9cblxuICAkKCcucHJvZ3JhbS1tZW51LWNvbXBvc2VyMDEnKS5vbignbW91c2VsZWF2ZScsZnVuY3Rpb24oKXtcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCcucHJvZ3JhbS1tZW51LXByb2dyYW0wMScpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICB9KTtcblxuICAkKCcucHJvZ3JhbS1tZW51LXByb2dyYW0wMicpLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbigpe1xuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQoJy5wcm9ncmFtLW1lbnUtY29tcG9zZXIwMicpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgfSk7XG5cblxuXG5cblxufSk7XG5cblxuXG4vLy8vc2VjdGlvbiDrs4Qg7Iqk7YGs66GkIOuPmeyekVxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgJChcIi5tb3ZlLXNlY3Rpb25cIikuZWFjaChmdW5jdGlvbigpe1xuXG4gICAgLy8g6rCc67OE7KCB7Jy866GcIFdoZWVsIOydtOuypO2KuCDsoIHsmqlcbiAgICAkKHRoaXMpLm9uKFwibW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbFwiLCBmdW5jdGlvbiAoZSkge1xuXG4gICAgICBpZiggISQoZS50YXJnZXQpLnBhcmVudCgpLmhhc0NsYXNzKCdpbm5lci1zY3JvbGwnKSApe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBkZWx0YSA9IDA7XG4gICAgICAgIGlmICghZXZlbnQpIGV2ZW50ID0gd2luZG93LmV2ZW50O1xuXG4gICAgICAgIGlmIChldmVudC53aGVlbERlbHRhKSB7XG4gICAgICAgICAgZGVsdGEgPSBldmVudC53aGVlbERlbHRhIC8gMTIwO1xuICAgICAgICAgIGlmICh3aW5kb3cub3BlcmEpIGRlbHRhID0gLWRlbHRhO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmRldGFpbCkgZGVsdGEgPSAtZXZlbnQuZGV0YWlsIC8gMztcblxuICAgICAgICB2YXIgbW92ZVRvcCA9IG51bGw7XG4gICAgICAgIC8vIOuniOyasOyKpO2coOydhCDsnITsl5DshJwg7JWE656Y66GcXG4gICAgICAgIGlmIChkZWx0YSA8IDApIHtcbiAgICAgICAgICBpZiAoJCh0aGlzKS5uZXh0KCkgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBtb3ZlVG9wID0gJCh0aGlzKS5uZXh0KCkub2Zmc2V0KCkudG9wO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIOuniOyasOyKpO2coOydhCDslYTrnpjsl5DshJwg7JyE66GcXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCQodGhpcykucHJldigpICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbW92ZVRvcCA9ICQodGhpcykucHJldigpLm9mZnNldCgpLnRvcDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDtmZTrqbQg7J2064+ZIDAuNey0iFxuICAgICAgICAkKFwiaHRtbCxib2R5XCIpLnN0b3AoKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6IG1vdmVUb3AgKyAncHgnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkdXJhdGlvbjogNTAwLCBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgIH1cblxuICAgIH0pO1xuXG4gIH0pO1xuXG5cblxuXG5cbi8v7ZSE66Gc6re4656oIOuCtCDsnbjrjbHsiqQgKOunge2BrCntgbTrpq3si5wg7Iqk7YGs66GkIOyVoOuLiOuplOydtOyFmFxuICAkKCcucHJvZ3JhbS1saXN0LXRleHQwMT5wPmEnKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgaHJlZj0gJCh0aGlzKS5hdHRyKCdocmVmJyk7IC8vaHJlZuqwkuydhCDqsIDsoLjsmLRcbiAgICB2YXIgc2Nyb2xsUG9zaXRpb249JChocmVmKS5vZmZzZXQoKS50b3A7XG5cbiAgICBjb25zb2xlLmxvZyhocmVmKTtcblxuICAgICQoJ2JvZHknKS5zdG9wKCkuYW5pbWF0ZSh7c2Nyb2xsVG9wOnNjcm9sbFBvc2l0aW9ufSlcblxuICB9KTtcbiAgICAkKCcucHJvZ3JhbS1saXN0LXRleHQwMj5wPmEnKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBocmVmPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTsgLy9ocmVm6rCS7J2EIOqwgOyguOyYtFxuICAgICAgICB2YXIgc2Nyb2xsUG9zaXRpb249JChocmVmKS5vZmZzZXQoKS50b3A7XG5cbiAgICAgICAgY29uc29sZS5sb2coaHJlZik7XG5cbiAgICAgICAgJCgnYm9keScpLnN0b3AoKS5hbmltYXRlKHtzY3JvbGxUb3A6c2Nyb2xsUG9zaXRpb259KVxuXG4gICAgfSk7XG5cblxuXG4gIC8vSGFydG1hbiDsnZgg6re466a8IOumrOyKpO2KuCDtgbTrpq3si5wg7Jik66W47Kq97JeQIOuztOyXrOyjvOq4sFxuXG5cbiAgICAkKCcuaG0tbGluay0wMScpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMScpLmNzcyh7J2Rpc3BsYXknOidibG9jayd9KTtcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMicpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAzJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDQnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xuICAgIH0pO1xuXG4gICAgJCgnLmhtLWxpbmstMDInKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMicpLmNzcyh7J2Rpc3BsYXknOidibG9jayd9KTtcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAzJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDQnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xuXG4gICAgfSk7XG5cbiAgICAkKCcuaG0tbGluay0wMycpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAzJykuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJ30pO1xuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAyJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDEnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNCcpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTA1JykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XG5cbiAgICB9KTtcblxuICAgICQoJy5obS1saW5rLTA0Jykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDQnKS5jc3MoeydkaXNwbGF5JzonYmxvY2snfSk7XG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDInKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMycpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAxJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDUnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcblxuICAgIH0pO1xuXG4gICAgJCgnLmhtLWxpbmstMDUnKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNScpLmNzcyh7J2Rpc3BsYXknOidibG9jayd9KTtcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMicpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAzJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDQnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xuXG4gICAgfSk7XG5cblxufTtcblxuXG5cbiQod2luZG93KS5vbignbG9hZCcsZnVuY3Rpb24oKXtcbiAgJCgnI2NvbnRhaW5lcicpLmhpZGUoKTtcblxufSk7XG5cbiIsIlxuJChmdW5jdGlvbigpe1xuICAgIC8v66eI7Jqw7IqkIOyYpOuyhCDtlZjrqbQg7Ken7J2AIOuPmeyYgeyDgSDsnqzsg51cblxuICAgJCgnLm1vdmllJykub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcylbMF0ucGxheSgpO1xuICAgIH0pO1xuXG4gICAgJCgnLm1vdmllJykub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcylbMF0ucGF1c2UoKTtcbiAgICB9KTtcblxuXG5cbn0pO1xuIl19
