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


      $(".bar").addClass("animate");



    }else{
      $audio.pause();
      $(this).removeClass('pause').addClass('play');
      $(this).data({'play':false});

      $(".bar").removeClass("animate");
      console.log($(this).children());
      $(this).children().css({'height':1});


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
        } else if (event.detail)
            delta = -event.detail / 3;

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

    $('html,body').stop().animate({scrollTop:scrollPosition})

  });
    $('.program-list-text02>p>a').on('click',function(e){
        e.preventDefault();
        var href= $(this).attr('href'); //href값을 가져옴
        var scrollPosition=$(href).offset().top;

        console.log(href);

        $('html,body').stop().animate({scrollTop:scrollPosition})

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImduYl9sb2NhdGlvbi5qcyIsIm11c2ljX3BsYXllci5qcyIsInBsYXllcl9kZXRhaWwuanMiLCJwcm9ncmFtLmpzIiwicmVwbGF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJmdW5jdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vdG9nZ2xlIHRvcCBtZW51XHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgLy9nbmIg66mU64m067KE7Yq8LCDrgpjqsIDquLAg7YG066atIOuPmeyekVxyXG5cclxuICAgICQoJy5tZW51LWJ0bicpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgJCgnLmduYicpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKCcuZ25iLWV4aXQtYnRuJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAkKCcuZ25iJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgLy9sb2NhdGlvbiDsnZggZHJhd2VyIO2BtOumrSDrj5nsnpFcclxuXHJcblxyXG4gICAgJCgnLmRyYXdlci11cHNpZGUnKS5kYXRhKHsgJ29wZW4nOnRydWV9KS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmKCAkKHRoaXMpLmRhdGEoKS5vcGVuICl7XHJcbiAgICAgICAgICAgICQoJy5kcmF3ZXItdXBzaWRlJykucmVtb3ZlQ2xhc3MoJ3NodXQnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKHsnb3Blbic6ZmFsc2V9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgJCgnLmRyYXdlci11cHNpZGUnKS5hZGRDbGFzcygnc2h1dCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoeydvcGVuJzp0cnVlfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG4gICAgJCgnLmRyYXdlci1kb3duc2lkZScpLmRhdGEoeyAnb3Blbic6dHJ1ZX0pLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgaWYoICQodGhpcykuZGF0YSgpLm9wZW4gKXtcclxuICAgICAgICAgICAgJCgnLmRyYXdlci1kb3duc2lkZScpLnJlbW92ZUNsYXNzKCdzaHV0Jyk7XHJcbiAgICAgICAgICAgICQodGhpcykuZGF0YSh7J29wZW4nOmZhbHNlfSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICQoJy5kcmF3ZXItZG93bnNpZGUnKS5hZGRDbGFzcygnc2h1dCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoeydvcGVuJzp0cnVlfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvL1xyXG5cclxuXHJcblxyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTEwLlxyXG4gKi9cclxuJChmdW5jdGlvbigpe1xyXG5cclxuXHJcbiAgdmFyICRhdWRpbyA9JCgnLmF1ZGlvJylbMF07XHJcblxyXG5cclxuICAkKCcuYXVkaW8nKS5vbignbG9hZGVkbWV0YWRhdGEnLGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zb2xlLmxvZyhNYXRoLmZsb29yKCRhdWRpby5kdXJhdGlvbi82MCkrICc6JyArIE1hdGguZmxvb3IoJGF1ZGlvLmR1cmF0aW9uICUgNjApICk7IC8v67aEIDog64KY66i47KeAICAtLT55YXR0YSFcclxuICB9KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vICMjOiMjIO2Yle2DnOuhnCAgLy8vLy8vLy8vLy9cclxuICBmdW5jdGlvbiBkaWdpdCh0aW1lKXtcclxuICAgIHZhciBmaXhEaWdpdDtcclxuXHJcbiAgICBpZih0aW1lPDEwKXtmaXhEaWdpdD0nMCcrdGltZTsgIC8vMTDrs7Tri6Qg7J6R7J2A6rK97JqwIOuzgOyImOyXkCDsoIDsnqVcclxuICAgIH1lbHNle2ZpeERpZ2l0PXRpbWU7fSAgLy8xMOuztOuLpCDtgazrqbQg6rGNIOq3uOuMgOuhnFxyXG4gICAgcmV0dXJuIGZpeERpZ2l0O31cclxuXHJcbiAgLy8vLy8vLy8vLy8vL3J1bm51bmcgdGltZS8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAkKCdhdWRpbycpLm9uKCd0aW1ldXBkYXRlJyxmdW5jdGlvbigpe1xyXG4gICAgdmFyIHRpbWU9IGRpZ2l0KCBNYXRoLmZsb29yKCRhdWRpby5jdXJyZW50VGltZS82MCkgKSsgJzonICsgZGlnaXQoIE1hdGguZmxvb3IoJGF1ZGlvLmN1cnJlbnRUaW1lICUgNjApICk7XHJcbiAgICAvL+u2hDrrgpjrqLjsp4BcclxuXHJcbiAgICAkKCcuY3VycmVudC10aW1lJykuaHRtbCh0aW1lKTsgLy9kaWdpdCDtlajsiJjsl5AgdGltZSDrjIDsnoXtlZjsl6wg7Lac66ClLlxyXG5cclxuICAgIC8vcHJvZ3Jlc3MgYmFyIOqwgOuhnOq4uOydtCDtjbzshLzthYzsnbTsp4Ag7KCc7Ja0KCDtmITsnqzsi5zqsIQv7KCE7LK07Iuc6rCEICogMTAwKVxyXG4gICAgdmFyIHByb2dyZXNzQmFyID0gJGF1ZGlvLmN1cnJlbnRUaW1lLyRhdWRpby5kdXJhdGlvbioxMDA7XHJcbiAgICAkKCcucHJvZ3Jlc3MgLnByb2dyZXNzLWJhcicpLmNzcyh7J3dpZHRoJzogcHJvZ3Jlc3NCYXIrJyUnfSk7XHJcbiAgfSk7XHJcblxyXG5cclxuICAvLy8vLy8vLy8v67KE7Yq8IO2BtOumreyLnCDtlIzroIjsnbQr66mI7LakIO2GoOq4gC8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgJCgnLmJ0bicpLmRhdGEoeydwbGF5JzpmYWxzZX0pLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcblxyXG4gICAgaWYoICQodGhpcykuZGF0YSgncGxheScpID09IGZhbHNlICl7XHJcbiAgICAgICRhdWRpby5wbGF5KCk7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3BsYXknKS5hZGRDbGFzcygncGF1c2UnKTtcclxuICAgICAgJCh0aGlzKS5kYXRhKHsncGxheSc6dHJ1ZX0pO1xyXG5cclxuXHJcbiAgICAgICQoXCIuYmFyXCIpLmFkZENsYXNzKFwiYW5pbWF0ZVwiKTtcclxuXHJcblxyXG5cclxuICAgIH1lbHNle1xyXG4gICAgICAkYXVkaW8ucGF1c2UoKTtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygncGF1c2UnKS5hZGRDbGFzcygncGxheScpO1xyXG4gICAgICAkKHRoaXMpLmRhdGEoeydwbGF5JzpmYWxzZX0pO1xyXG5cclxuICAgICAgJChcIi5iYXJcIikucmVtb3ZlQ2xhc3MoXCJhbmltYXRlXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZygkKHRoaXMpLmNoaWxkcmVuKCkpO1xyXG4gICAgICAkKHRoaXMpLmNoaWxkcmVuKCkuY3NzKHsnaGVpZ2h0JzoxfSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pOy8v7KeE7J6F7KCQIOuBnSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wOS5cclxuICovXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbi8vJCgnLnNlY3Rpb24xJykub24oJ21vdXNld2hlZWwnLGZ1bmN0aW9uKCl7XHJcbi8vXHJcbi8vICAkKCcuaW50cm9kdWNlLXRleHQnKS5zdG9wKCkuYW5pbWF0ZSh7fSw1MDApO1xyXG4vL1xyXG4vL1xyXG4vLyAgfSlcclxuXHJcblxyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTA3LlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgLy8vLy8vLy8vLy8v7ZSE66Gc6re4656oIOuplOuJtOuwlCDrp4jsmrDsiqQg7Jik67KE7IucIOq4uOydtCDripjsnbTquLAvLy8vLy9cclxuXHJcbiAgJCgnLnByb2dyYW0tbWVudS1wcm9ncmFtMDInKS5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcclxuICAgICQoJy5wcm9ncmFtLW1lbnUtY29tcG9zZXIwMicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJy5wcm9ncmFtLW1lbnUtcHJvZ3JhbTAyJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLnByb2dyYW0tbWVudS1jb21wb3NlcjAxJykub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcucHJvZ3JhbS1tZW51LXByb2dyYW0wMScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJy5wcm9ncmFtLW1lbnUtY29tcG9zZXIwMScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vL+uniOyasOyKpCDrlqjslrTsp4DrqbQg6ri47J20IOykhOydtOq4sC8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgJCgnLnByb2dyYW0tbWVudS1jb21wb3NlcjAxJykub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJy5wcm9ncmFtLW1lbnUtcHJvZ3JhbTAxJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLnByb2dyYW0tbWVudS1wcm9ncmFtMDInKS5vbignbW91c2VsZWF2ZScsZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnLnByb2dyYW0tbWVudS1jb21wb3NlcjAyJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG4vLy8vc2VjdGlvbiDrs4Qg7Iqk7YGs66GkIOuPmeyekVxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICQoXCIubW92ZS1zZWN0aW9uXCIpLmVhY2goZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvLyDqsJzrs4TsoIHsnLzroZwgV2hlZWwg7J2067Kk7Yq4IOyggeyaqVxyXG4gICAgJCh0aGlzKS5vbihcIm1vdXNld2hlZWwgRE9NTW91c2VTY3JvbGxcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgIGlmKCAhJChlLnRhcmdldCkucGFyZW50KCkuaGFzQ2xhc3MoJ2lubmVyLXNjcm9sbCcpICl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBkZWx0YSA9IDA7XHJcbiAgICAgICAgaWYgKCFldmVudCkgZXZlbnQgPSB3aW5kb3cuZXZlbnQ7XHJcblxyXG4gICAgICAgIGlmIChldmVudC53aGVlbERlbHRhKSB7XHJcbiAgICAgICAgICBkZWx0YSA9IGV2ZW50LndoZWVsRGVsdGEgLyAxMjA7XHJcbiAgICAgICAgICBpZiAod2luZG93Lm9wZXJhKSBkZWx0YSA9IC1kZWx0YTtcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmRldGFpbClcclxuICAgICAgICAgICAgZGVsdGEgPSAtZXZlbnQuZGV0YWlsIC8gMztcclxuXHJcbiAgICAgICAgdmFyIG1vdmVUb3AgPSBudWxsO1xyXG4gICAgICAgIC8vIOuniOyasOyKpO2coOydhCDsnITsl5DshJwg7JWE656Y66GcXHJcbiAgICAgICAgaWYgKGRlbHRhIDwgMCkge1xyXG4gICAgICAgICAgaWYgKCQodGhpcykubmV4dCgpICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBtb3ZlVG9wID0gJCh0aGlzKS5uZXh0KCkub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIOuniOyasOyKpO2coOydhCDslYTrnpjsl5DshJwg7JyE66GcXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICgkKHRoaXMpLnByZXYoKSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbW92ZVRvcCA9ICQodGhpcykucHJldigpLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIO2ZlOuptCDsnbTrj5kgMC417LSIXHJcbiAgICAgICAgJChcImh0bWwsYm9keVwiKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICBzY3JvbGxUb3A6IG1vdmVUb3AgKyAncHgnXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgZHVyYXRpb246IDUwMCwgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy/tlITroZzqt7jrnqgg64K0IOyduOuNseyKpCAo66eB7YGsKe2BtOumreyLnCDsiqTtgazroaQg7JWg64uI66mU7J207IWYXHJcbiAgJCgnLnByb2dyYW0tbGlzdC10ZXh0MDE+cD5hJykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciBocmVmPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTsgLy9ocmVm6rCS7J2EIOqwgOyguOyYtFxyXG4gICAgdmFyIHNjcm9sbFBvc2l0aW9uPSQoaHJlZikub2Zmc2V0KCkudG9wO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGhyZWYpO1xyXG5cclxuICAgICQoJ2h0bWwsYm9keScpLnN0b3AoKS5hbmltYXRlKHtzY3JvbGxUb3A6c2Nyb2xsUG9zaXRpb259KVxyXG5cclxuICB9KTtcclxuICAgICQoJy5wcm9ncmFtLWxpc3QtdGV4dDAyPnA+YScpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBocmVmPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTsgLy9ocmVm6rCS7J2EIOqwgOyguOyYtFxyXG4gICAgICAgIHZhciBzY3JvbGxQb3NpdGlvbj0kKGhyZWYpLm9mZnNldCgpLnRvcDtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coaHJlZik7XHJcblxyXG4gICAgICAgICQoJ2h0bWwsYm9keScpLnN0b3AoKS5hbmltYXRlKHtzY3JvbGxUb3A6c2Nyb2xsUG9zaXRpb259KVxyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gIC8vSGFydG1hbiDsnZgg6re466a8IOumrOyKpO2KuCDtgbTrpq3si5wg7Jik66W47Kq97JeQIOuztOyXrOyjvOq4sFxyXG5cclxuXHJcbiAgICAkKCcuaG0tbGluay0wMScpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMScpLmNzcyh7J2Rpc3BsYXknOidibG9jayd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAyJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMycpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDQnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTA1JykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuaG0tbGluay0wMicpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAyJykuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDEnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAzJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNCcpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDUnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuaG0tbGluay0wMycpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAzJykuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDInKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAxJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNCcpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDUnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuaG0tbGluay0wNCcpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTA0JykuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDInKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAzJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDUnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuaG0tbGluay0wNScpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTA1JykuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDInKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAzJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNCcpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDEnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG59O1xyXG5cclxuXHJcblxyXG4kKHdpbmRvdykub24oJ2xvYWQnLGZ1bmN0aW9uKCl7XHJcbiAgJCgnI2NvbnRhaW5lcicpLmhpZGUoKTtcclxuXHJcbn0pO1xyXG5cclxuIiwiXHJcbiQoZnVuY3Rpb24oKXtcclxuICAgIC8v66eI7Jqw7IqkIOyYpOuyhCDtlZjrqbQg7Ken7J2AIOuPmeyYgeyDgSDsnqzsg51cclxuXHJcbiAgICQoJy5tb3ZpZScpLm9uKCdtb3VzZWVudGVyJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcylbMF0ucGxheSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLm1vdmllJykub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKVswXS5wYXVzZSgpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbn0pO1xyXG4iXX0=
