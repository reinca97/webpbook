
//mobile-pc 분기

$(function(){
    var checker = navigator.userAgent;
    var checkerNum = checker.indexOf("Mobile");

    console.log(checkerNum);

    if(checkerNum > 0){
        location.href="http://programbook.co.kr/m/gaudium";
    }


});



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

  /////////////running time///////////////

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImduYl9sb2NhdGlvbi5qcyIsIm11c2ljX3BsYXllci5qcyIsInBsYXllcl9kZXRhaWwuanMiLCJwcm9ncmFtLmpzIiwicmVwbGF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJmdW5jdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy9tb2JpbGUtcGMg67aE6riwXG5cbiQoZnVuY3Rpb24oKXtcbiAgICB2YXIgY2hlY2tlciA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgdmFyIGNoZWNrZXJOdW0gPSBjaGVja2VyLmluZGV4T2YoXCJNb2JpbGVcIik7XG5cbiAgICBjb25zb2xlLmxvZyhjaGVja2VyTnVtKTtcblxuICAgIGlmKGNoZWNrZXJOdW0gPiAwKXtcbiAgICAgICAgbG9jYXRpb24uaHJlZj1cImh0dHA6Ly9wcm9ncmFtYm9vay5jby5rci9tL2dhdWRpdW1cIjtcbiAgICB9XG5cblxufSk7XG5cblxuXG4vL3RvZ2dsZSB0b3AgbWVudVxuXG4kKGZ1bmN0aW9uKCl7XG5cbiAgICAvL2duYiDrqZTribTrsoTtirwsIOuCmOqwgOq4sCDtgbTrpq0g64+Z7J6RXG5cbiAgICAkKCcubWVudS1idG4nKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgJCgnLmduYicpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuXG4gICAgJCgnLmduYi1leGl0LWJ0bicpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICAkKCcuZ25iJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgfSk7XG5cblxuXG4gICAgLy9sb2NhdGlvbiDsnZggZHJhd2VyIO2BtOumrSDrj5nsnpFcblxuXG4gICAgJCgnLmRyYXdlci11cHNpZGUnKS5kYXRhKHsgJ29wZW4nOnRydWV9KS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgaWYoICQodGhpcykuZGF0YSgpLm9wZW4gKXtcbiAgICAgICAgICAgICQoJy5kcmF3ZXItdXBzaWRlJykucmVtb3ZlQ2xhc3MoJ3NodXQnKTtcbiAgICAgICAgICAgICQodGhpcykuZGF0YSh7J29wZW4nOmZhbHNlfSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgJCgnLmRyYXdlci11cHNpZGUnKS5hZGRDbGFzcygnc2h1dCcpO1xuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKHsnb3Blbic6dHJ1ZX0pO1xuICAgICAgICB9XG5cbiAgICB9KTtcbiAgICAkKCcuZHJhd2VyLWRvd25zaWRlJykuZGF0YSh7ICdvcGVuJzp0cnVlfSkub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG4gICAgICAgIGlmKCAkKHRoaXMpLmRhdGEoKS5vcGVuICl7XG4gICAgICAgICAgICAkKCcuZHJhd2VyLWRvd25zaWRlJykucmVtb3ZlQ2xhc3MoJ3NodXQnKTtcbiAgICAgICAgICAgICQodGhpcykuZGF0YSh7J29wZW4nOmZhbHNlfSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgJCgnLmRyYXdlci1kb3duc2lkZScpLmFkZENsYXNzKCdzaHV0Jyk7XG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoeydvcGVuJzp0cnVlfSk7XG4gICAgICAgIH1cblxuICAgIH0pO1xuXG5cbiAgICAvL1xuXG5cblxuXG59KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTEwLlxuICovXG4kKGZ1bmN0aW9uKCl7XG5cblxuICB2YXIgJGF1ZGlvID0kKCcuYXVkaW8nKVswXTtcblxuXG4gICQoJy5hdWRpbycpLm9uKCdsb2FkZWRtZXRhZGF0YScsZnVuY3Rpb24oKXtcbiAgICBjb25zb2xlLmxvZyhNYXRoLmZsb29yKCRhdWRpby5kdXJhdGlvbi82MCkrICc6JyArIE1hdGguZmxvb3IoJGF1ZGlvLmR1cmF0aW9uICUgNjApICk7IC8v67aEIDog64KY66i47KeAICAtLT55YXR0YSFcbiAgfSk7XG5cbiAgLy8vLy8vLy8vLy8vICMjOiMjIO2Yle2DnOuhnCAgLy8vLy8vLy8vLy9cbiAgZnVuY3Rpb24gZGlnaXQodGltZSl7XG4gICAgdmFyIGZpeERpZ2l0O1xuXG4gICAgaWYodGltZTwxMCl7Zml4RGlnaXQ9JzAnK3RpbWU7ICAvLzEw67O064ukIOyekeydgOqyveyasCDrs4DsiJjsl5Ag7KCA7J6lXG4gICAgfWVsc2V7Zml4RGlnaXQ9dGltZTt9ICAvLzEw67O064ukIO2BrOuptCDqsY0g6re464yA66GcXG4gICAgcmV0dXJuIGZpeERpZ2l0O31cblxuICAvLy8vLy8vLy8vLy8vcnVubmluZyB0aW1lLy8vLy8vLy8vLy8vLy8vXG5cbiAgJCgnYXVkaW8nKS5vbigndGltZXVwZGF0ZScsZnVuY3Rpb24oKXtcbiAgICB2YXIgdGltZT0gZGlnaXQoIE1hdGguZmxvb3IoJGF1ZGlvLmN1cnJlbnRUaW1lLzYwKSApKyAnOicgKyBkaWdpdCggTWF0aC5mbG9vcigkYXVkaW8uY3VycmVudFRpbWUgJSA2MCkgKTtcbiAgICAvL+u2hDrrgpjrqLjsp4BcblxuICAgICQoJy5jdXJyZW50LXRpbWUnKS5odG1sKHRpbWUpOyAvL2RpZ2l0IO2VqOyImOyXkCB0aW1lIOuMgOyehe2VmOyXrCDstpzroKUuXG5cbiAgICAvL3Byb2dyZXNzIGJhciDqsIDroZzquLjsnbQg7Y287IS87YWM7J207KeAIOygnOyWtCgg7ZiE7J6s7Iuc6rCEL+yghOyytOyLnOqwhCAqIDEwMClcbiAgICB2YXIgcHJvZ3Jlc3NCYXIgPSAkYXVkaW8uY3VycmVudFRpbWUvJGF1ZGlvLmR1cmF0aW9uKjEwMDtcbiAgICAkKCcucHJvZ3Jlc3MgLnByb2dyZXNzLWJhcicpLmNzcyh7J3dpZHRoJzogcHJvZ3Jlc3NCYXIrJyUnfSk7XG4gIH0pO1xuXG5cbiAgLy8vLy8vLy8vL+uyhO2KvCDtgbTrpq3si5wg7ZSM66CI7J20K+upiOy2pCDthqDquIAvLy8vLy8vLy8vLy8vLy8vL1xuICAkKCcuYnRuJykuZGF0YSh7J3BsYXknOmZhbHNlfSkub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG5cbiAgICBpZiggJCh0aGlzKS5kYXRhKCdwbGF5JykgPT0gZmFsc2UgKXtcbiAgICAgICRhdWRpby5wbGF5KCk7XG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdwbGF5JykuYWRkQ2xhc3MoJ3BhdXNlJyk7XG4gICAgICAkKHRoaXMpLmRhdGEoeydwbGF5Jzp0cnVlfSk7XG5cblxuICAgICAgJChcIi5iYXJcIikuYWRkQ2xhc3MoXCJhbmltYXRlXCIpO1xuXG5cblxuICAgIH1lbHNle1xuICAgICAgJGF1ZGlvLnBhdXNlKCk7XG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdwYXVzZScpLmFkZENsYXNzKCdwbGF5Jyk7XG4gICAgICAkKHRoaXMpLmRhdGEoeydwbGF5JzpmYWxzZX0pO1xuXG4gICAgICAkKFwiLmJhclwiKS5yZW1vdmVDbGFzcyhcImFuaW1hdGVcIik7XG5cbiAgICB9XG5cblxuXG5cblxuXG4gIH0pO1xuXG5cblxuXG5cblxuXG59KTsvL+ynhOyeheygkCDrgZ0iLCIvKipcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTA5LlxuICovXG4kKGZ1bmN0aW9uKCl7XG5cbi8vJCgnLnNlY3Rpb24xJykub24oJ21vdXNld2hlZWwnLGZ1bmN0aW9uKCl7XG4vL1xuLy8gICQoJy5pbnRyb2R1Y2UtdGV4dCcpLnN0b3AoKS5hbmltYXRlKHt9LDUwMCk7XG4vL1xuLy9cbi8vICB9KVxuXG5cblxufSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wNy5cbiAqL1xuXG4kKGZ1bmN0aW9uKCl7XG5cbiAgLy8vLy8vLy8vLy8v7ZSE66Gc6re4656oIOuplOuJtOuwlCDrp4jsmrDsiqQg7Jik67KE7IucIOq4uOydtCDripjsnbTquLAvLy8vLy9cblxuICAkKCcucHJvZ3JhbS1tZW51LXByb2dyYW0wMicpLm9uKCdtb3VzZWVudGVyJyxmdW5jdGlvbigpe1xuICAgICQoJy5wcm9ncmFtLW1lbnUtY29tcG9zZXIwMicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCcucHJvZ3JhbS1tZW51LXByb2dyYW0wMicpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICB9KTtcblxuICAkKCcucHJvZ3JhbS1tZW51LWNvbXBvc2VyMDEnKS5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcbiAgICAkKCcucHJvZ3JhbS1tZW51LXByb2dyYW0wMScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCcucHJvZ3JhbS1tZW51LWNvbXBvc2VyMDEnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgfSk7XG5cbiAgLy8vLy8vLy8vLy8v66eI7Jqw7IqkIOuWqOyWtOyngOuptCDquLjsnbQg7KSE7J206riwLy8vLy8vLy8vLy8vLy8vL1xuXG4gICQoJy5wcm9ncmFtLW1lbnUtY29tcG9zZXIwMScpLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbigpe1xuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQoJy5wcm9ncmFtLW1lbnUtcHJvZ3JhbTAxJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gIH0pO1xuXG4gICQoJy5wcm9ncmFtLW1lbnUtcHJvZ3JhbTAyJykub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnLnByb2dyYW0tbWVudS1jb21wb3NlcjAyJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICB9KTtcblxuXG5cblxuXG59KTtcblxuXG5cbi8vLy9zZWN0aW9uIOuzhCDsiqTtgazroaQg64+Z7J6RXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAkKFwiLm1vdmUtc2VjdGlvblwiKS5lYWNoKGZ1bmN0aW9uKCl7XG5cbiAgICAvLyDqsJzrs4TsoIHsnLzroZwgV2hlZWwg7J2067Kk7Yq4IOyggeyaqVxuICAgICQodGhpcykub24oXCJtb3VzZXdoZWVsIERPTU1vdXNlU2Nyb2xsXCIsIGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgIGlmKCAhJChlLnRhcmdldCkucGFyZW50KCkuaGFzQ2xhc3MoJ2lubmVyLXNjcm9sbCcpICl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIGRlbHRhID0gMDtcbiAgICAgICAgaWYgKCFldmVudCkgZXZlbnQgPSB3aW5kb3cuZXZlbnQ7XG5cbiAgICAgICAgaWYgKGV2ZW50LndoZWVsRGVsdGEpIHtcbiAgICAgICAgICBkZWx0YSA9IGV2ZW50LndoZWVsRGVsdGEgLyAxMjA7XG4gICAgICAgICAgaWYgKHdpbmRvdy5vcGVyYSkgZGVsdGEgPSAtZGVsdGE7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuZGV0YWlsKVxuICAgICAgICAgICAgZGVsdGEgPSAtZXZlbnQuZGV0YWlsIC8gMztcblxuICAgICAgICB2YXIgbW92ZVRvcCA9IG51bGw7XG4gICAgICAgIC8vIOuniOyasOyKpO2coOydhCDsnITsl5DshJwg7JWE656Y66GcXG4gICAgICAgIGlmIChkZWx0YSA8IDApIHtcbiAgICAgICAgICBpZiAoJCh0aGlzKS5uZXh0KCkgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBtb3ZlVG9wID0gJCh0aGlzKS5uZXh0KCkub2Zmc2V0KCkudG9wO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIOuniOyasOyKpO2coOydhCDslYTrnpjsl5DshJwg7JyE66GcXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCQodGhpcykucHJldigpICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbW92ZVRvcCA9ICQodGhpcykucHJldigpLm9mZnNldCgpLnRvcDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDtmZTrqbQg7J2064+ZIDAuNey0iFxuICAgICAgICAkKFwiaHRtbCxib2R5XCIpLnN0b3AoKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6IG1vdmVUb3AgKyAncHgnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkdXJhdGlvbjogNTAwLCBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgIH1cblxuICAgIH0pO1xuXG4gIH0pO1xuXG5cblxuXG5cbi8v7ZSE66Gc6re4656oIOuCtCDsnbjrjbHsiqQgKOunge2BrCntgbTrpq3si5wg7Iqk7YGs66GkIOyVoOuLiOuplOydtOyFmFxuICAkKCcucHJvZ3JhbS1saXN0LXRleHQwMT5wPmEnKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgaHJlZj0gJCh0aGlzKS5hdHRyKCdocmVmJyk7IC8vaHJlZuqwkuydhCDqsIDsoLjsmLRcbiAgICB2YXIgc2Nyb2xsUG9zaXRpb249JChocmVmKS5vZmZzZXQoKS50b3A7XG5cbiAgICBjb25zb2xlLmxvZyhocmVmKTtcblxuICAgICQoJ2h0bWwsYm9keScpLnN0b3AoKS5hbmltYXRlKHtzY3JvbGxUb3A6c2Nyb2xsUG9zaXRpb259KVxuXG4gIH0pO1xuICAgICQoJy5wcm9ncmFtLWxpc3QtdGV4dDAyPnA+YScpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIGhyZWY9ICQodGhpcykuYXR0cignaHJlZicpOyAvL2hyZWbqsJLsnYQg6rCA7KC47Ji0XG4gICAgICAgIHZhciBzY3JvbGxQb3NpdGlvbj0kKGhyZWYpLm9mZnNldCgpLnRvcDtcblxuICAgICAgICBjb25zb2xlLmxvZyhocmVmKTtcblxuICAgICAgICAkKCdodG1sLGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7c2Nyb2xsVG9wOnNjcm9sbFBvc2l0aW9ufSlcblxuICAgIH0pO1xuXG5cblxuICAvL0hhcnRtYW4g7J2YIOq3uOumvCDrpqzsiqTtirgg7YG066at7IucIOyYpOuluOyqveyXkCDrs7Tsl6zso7zquLBcblxuXG4gICAgJCgnLmhtLWxpbmstMDEnKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDEnKS5jc3MoeydkaXNwbGF5JzonYmxvY2snfSk7XG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDInKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMycpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTA0JykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDUnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcbiAgICB9KTtcblxuICAgICQoJy5obS1saW5rLTAyJykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDInKS5jc3MoeydkaXNwbGF5JzonYmxvY2snfSk7XG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDEnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMycpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTA0JykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDUnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcblxuICAgIH0pO1xuXG4gICAgJCgnLmhtLWxpbmstMDMnKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMycpLmNzcyh7J2Rpc3BsYXknOidibG9jayd9KTtcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMicpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAxJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDQnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xuXG4gICAgfSk7XG5cbiAgICAkKCcuaG0tbGluay0wNCcpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTA0JykuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJ30pO1xuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAyJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDMnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTA1JykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XG5cbiAgICB9KTtcblxuICAgICQoJy5obS1saW5rLTA1Jykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDUnKS5jc3MoeydkaXNwbGF5JzonYmxvY2snfSk7XG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDInKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMycpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTA0JykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDEnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcblxuICAgIH0pO1xuXG5cbn07XG5cblxuXG4kKHdpbmRvdykub24oJ2xvYWQnLGZ1bmN0aW9uKCl7XG4gICQoJyNjb250YWluZXInKS5oaWRlKCk7XG5cbn0pO1xuXG4iLCJcbiQoZnVuY3Rpb24oKXtcbiAgICAvL+uniOyasOyKpCDsmKTrsoQg7ZWY66m0IOynp+ydgCDrj5nsmIHsg4Eg7J6s7IOdXG5cbiAgICQoJy5tb3ZpZScpLm9uKCdtb3VzZWVudGVyJyxmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpWzBdLnBsYXkoKTtcbiAgICB9KTtcblxuICAgICQoJy5tb3ZpZScpLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpWzBdLnBhdXNlKCk7XG4gICAgfSk7XG5cblxuXG59KTtcbiJdfQ==
