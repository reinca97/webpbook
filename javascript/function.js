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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImduYl9sb2NhdGlvbi5qcyIsIm11c2ljX3BsYXllci5qcyIsInBsYXllcl9kZXRhaWwuanMiLCJwcm9ncmFtLmpzIiwicmVwbGF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImZ1bmN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy90b2dnbGUgdG9wIG1lbnVcclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvL2duYiDrqZTribTrsoTtirwsIOuCmOqwgOq4sCDtgbTrpq0g64+Z7J6RXHJcblxyXG4gICAgJCgnLm1lbnUtYnRuJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAkKCcuZ25iJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoJy5nbmItZXhpdC1idG4nKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICQoJy5nbmInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAvL2xvY2F0aW9uIOydmCBkcmF3ZXIg7YG066atIOuPmeyekVxyXG5cclxuXHJcbiAgICAkKCcuZHJhd2VyLXVwc2lkZScpLmRhdGEoeyAnb3Blbic6dHJ1ZX0pLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgaWYoICQodGhpcykuZGF0YSgpLm9wZW4gKXtcclxuICAgICAgICAgICAgJCgnLmRyYXdlci11cHNpZGUnKS5yZW1vdmVDbGFzcygnc2h1dCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoeydvcGVuJzpmYWxzZX0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAkKCcuZHJhd2VyLXVwc2lkZScpLmFkZENsYXNzKCdzaHV0Jyk7XHJcbiAgICAgICAgICAgICQodGhpcykuZGF0YSh7J29wZW4nOnRydWV9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcbiAgICAkKCcuZHJhd2VyLWRvd25zaWRlJykuZGF0YSh7ICdvcGVuJzp0cnVlfSkub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBpZiggJCh0aGlzKS5kYXRhKCkub3BlbiApe1xyXG4gICAgICAgICAgICAkKCcuZHJhd2VyLWRvd25zaWRlJykucmVtb3ZlQ2xhc3MoJ3NodXQnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKHsnb3Blbic6ZmFsc2V9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgJCgnLmRyYXdlci1kb3duc2lkZScpLmFkZENsYXNzKCdzaHV0Jyk7XHJcbiAgICAgICAgICAgICQodGhpcykuZGF0YSh7J29wZW4nOnRydWV9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8vXHJcblxyXG5cclxuXHJcblxyXG59KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTEwLlxuICovXG4kKGZ1bmN0aW9uKCl7XG5cblxuICB2YXIgJGF1ZGlvID0kKCcuYXVkaW8nKVswXTtcblxuXG4gICQoJy5hdWRpbycpLm9uKCdsb2FkZWRtZXRhZGF0YScsZnVuY3Rpb24oKXtcbiAgICBjb25zb2xlLmxvZyhNYXRoLmZsb29yKCRhdWRpby5kdXJhdGlvbi82MCkrICc6JyArIE1hdGguZmxvb3IoJGF1ZGlvLmR1cmF0aW9uICUgNjApICk7IC8v67aEIDog64KY66i47KeAICAtLT55YXR0YSFcbiAgfSk7XG5cbiAgLy8vLy8vLy8vLy8vICMjOiMjIO2Yle2DnOuhnCAgLy8vLy8vLy8vLy9cbiAgZnVuY3Rpb24gZGlnaXQodGltZSl7XG4gICAgdmFyIGZpeERpZ2l0O1xuXG4gICAgaWYodGltZTwxMCl7Zml4RGlnaXQ9JzAnK3RpbWU7ICAvLzEw67O064ukIOyekeydgOqyveyasCDrs4DsiJjsl5Ag7KCA7J6lXG4gICAgfWVsc2V7Zml4RGlnaXQ9dGltZTt9ICAvLzEw67O064ukIO2BrOuptCDqsY0g6re464yA66GcXG4gICAgcmV0dXJuIGZpeERpZ2l0O31cblxuICAvLy8vLy8vLy8vLy8vcnVubnVuZyB0aW1lLy8vLy8vLy8vLy8vLy8vXG5cbiAgJCgnYXVkaW8nKS5vbigndGltZXVwZGF0ZScsZnVuY3Rpb24oKXtcbiAgICB2YXIgdGltZT0gZGlnaXQoIE1hdGguZmxvb3IoJGF1ZGlvLmN1cnJlbnRUaW1lLzYwKSApKyAnOicgKyBkaWdpdCggTWF0aC5mbG9vcigkYXVkaW8uY3VycmVudFRpbWUgJSA2MCkgKTtcbiAgICAvL+u2hDrrgpjrqLjsp4BcblxuICAgICQoJy5jdXJyZW50LXRpbWUnKS5odG1sKHRpbWUpOyAvL2RpZ2l0IO2VqOyImOyXkCB0aW1lIOuMgOyehe2VmOyXrCDstpzroKUuXG5cbiAgICAvL3Byb2dyZXNzIGJhciDqsIDroZzquLjsnbQg7Y287IS87YWM7J207KeAIOygnOyWtCgg7ZiE7J6s7Iuc6rCEL+yghOyytOyLnOqwhCAqIDEwMClcbiAgICB2YXIgcHJvZ3Jlc3NCYXIgPSAkYXVkaW8uY3VycmVudFRpbWUvJGF1ZGlvLmR1cmF0aW9uKjEwMDtcbiAgICAkKCcucHJvZ3Jlc3MgLnByb2dyZXNzLWJhcicpLmNzcyh7J3dpZHRoJzogcHJvZ3Jlc3NCYXIrJyUnfSk7XG4gIH0pO1xuXG5cbiAgLy8vLy8vLy8vL+uyhO2KvCDtgbTrpq3si5wg7ZSM66CI7J20K+upiOy2pCDthqDquIAvLy8vLy8vLy8vLy8vLy8vL1xuICAkKCcuYnRuJykuZGF0YSh7J3BsYXknOmZhbHNlfSkub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG5cbiAgICBpZiggJCh0aGlzKS5kYXRhKCdwbGF5JykgPT0gZmFsc2UgKXtcbiAgICAgICRhdWRpby5wbGF5KCk7XG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdwbGF5JykuYWRkQ2xhc3MoJ3BhdXNlJyk7XG4gICAgICAkKHRoaXMpLmRhdGEoeydwbGF5Jzp0cnVlfSk7XG5cblxuICAgICAgJChcIi5iYXJcIikucmVtb3ZlQ2xhc3MoXCJub0FuaW1cIik7XG5cblxuXG4gICAgfWVsc2V7XG4gICAgICAkYXVkaW8ucGF1c2UoKTtcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3BhdXNlJykuYWRkQ2xhc3MoJ3BsYXknKTtcbiAgICAgICQodGhpcykuZGF0YSh7J3BsYXknOmZhbHNlfSk7XG5cbiAgICAgICQoXCIuYmFyXCIpLmFkZENsYXNzKFwibm9BbmltXCIpO1xuXG5cbiAgICB9XG5cblxuXG5cblxuXG4gIH0pO1xuXG5cblxuXG5cblxuXG59KTsvL+ynhOyeheygkCDrgZ0iLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMDkuXHJcbiAqL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4vLyQoJy5zZWN0aW9uMScpLm9uKCdtb3VzZXdoZWVsJyxmdW5jdGlvbigpe1xyXG4vL1xyXG4vLyAgJCgnLmludHJvZHVjZS10ZXh0Jykuc3RvcCgpLmFuaW1hdGUoe30sNTAwKTtcclxuLy9cclxuLy9cclxuLy8gIH0pXHJcblxyXG5cclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wNy5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIC8vLy8vLy8vLy8vL+2UhOuhnOq3uOueqCDrqZTribTrsJQg66eI7Jqw7IqkIOyYpOuyhOyLnCDquLjsnbQg64qY7J206riwLy8vLy8vXHJcblxyXG4gICQoJy5wcm9ncmFtLW1lbnUtcHJvZ3JhbTAyJykub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcucHJvZ3JhbS1tZW51LWNvbXBvc2VyMDInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCcucHJvZ3JhbS1tZW51LXByb2dyYW0wMicpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5wcm9ncmFtLW1lbnUtY29tcG9zZXIwMScpLm9uKCdtb3VzZWVudGVyJyxmdW5jdGlvbigpe1xyXG4gICAgJCgnLnByb2dyYW0tbWVudS1wcm9ncmFtMDEnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCcucHJvZ3JhbS1tZW51LWNvbXBvc2VyMDEnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy/rp4jsmrDsiqQg65ao7Ja07KeA66m0IOq4uOydtCDspITsnbTquLAvLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICQoJy5wcm9ncmFtLW1lbnUtY29tcG9zZXIwMScpLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCcucHJvZ3JhbS1tZW51LXByb2dyYW0wMScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5wcm9ncmFtLW1lbnUtcHJvZ3JhbTAyJykub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJy5wcm9ncmFtLW1lbnUtY29tcG9zZXIwMicpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuLy8vL3NlY3Rpb24g67OEIOyKpO2BrOuhpCDrj5nsnpFcclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAkKFwiLm1vdmUtc2VjdGlvblwiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgLy8g6rCc67OE7KCB7Jy866GcIFdoZWVsIOydtOuypO2KuCDsoIHsmqlcclxuICAgICQodGhpcykub24oXCJtb3VzZXdoZWVsIERPTU1vdXNlU2Nyb2xsXCIsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICBpZiggISQoZS50YXJnZXQpLnBhcmVudCgpLmhhc0NsYXNzKCdpbm5lci1zY3JvbGwnKSApe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgZGVsdGEgPSAwO1xyXG4gICAgICAgIGlmICghZXZlbnQpIGV2ZW50ID0gd2luZG93LmV2ZW50O1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQud2hlZWxEZWx0YSkge1xyXG4gICAgICAgICAgZGVsdGEgPSBldmVudC53aGVlbERlbHRhIC8gMTIwO1xyXG4gICAgICAgICAgaWYgKHdpbmRvdy5vcGVyYSkgZGVsdGEgPSAtZGVsdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmRldGFpbCkgZGVsdGEgPSAtZXZlbnQuZGV0YWlsIC8gMztcclxuXHJcbiAgICAgICAgdmFyIG1vdmVUb3AgPSBudWxsO1xyXG4gICAgICAgIC8vIOuniOyasOyKpO2coOydhCDsnITsl5DshJwg7JWE656Y66GcXHJcbiAgICAgICAgaWYgKGRlbHRhIDwgMCkge1xyXG4gICAgICAgICAgaWYgKCQodGhpcykubmV4dCgpICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBtb3ZlVG9wID0gJCh0aGlzKS5uZXh0KCkub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIOuniOyasOyKpO2coOydhCDslYTrnpjsl5DshJwg7JyE66GcXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICgkKHRoaXMpLnByZXYoKSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbW92ZVRvcCA9ICQodGhpcykucHJldigpLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIO2ZlOuptCDsnbTrj5kgMC417LSIXHJcbiAgICAgICAgJChcImh0bWwsYm9keVwiKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICBzY3JvbGxUb3A6IG1vdmVUb3AgKyAncHgnXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgZHVyYXRpb246IDUwMCwgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy/tlITroZzqt7jrnqgg64K0IOyduOuNseyKpCAo66eB7YGsKe2BtOumreyLnCDsiqTtgazroaQg7JWg64uI66mU7J207IWYXHJcbiAgJCgnLnByb2dyYW0tbGlzdC10ZXh0MDE+cD5hJykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciBocmVmPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTsgLy9ocmVm6rCS7J2EIOqwgOyguOyYtFxyXG4gICAgdmFyIHNjcm9sbFBvc2l0aW9uPSQoaHJlZikub2Zmc2V0KCkudG9wO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGhyZWYpO1xyXG5cclxuICAgICQoJ2JvZHknKS5zdG9wKCkuYW5pbWF0ZSh7c2Nyb2xsVG9wOnNjcm9sbFBvc2l0aW9ufSlcclxuXHJcbiAgfSk7XHJcbiAgICAkKCcucHJvZ3JhbS1saXN0LXRleHQwMj5wPmEnKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgaHJlZj0gJCh0aGlzKS5hdHRyKCdocmVmJyk7IC8vaHJlZuqwkuydhCDqsIDsoLjsmLRcclxuICAgICAgICB2YXIgc2Nyb2xsUG9zaXRpb249JChocmVmKS5vZmZzZXQoKS50b3A7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGhyZWYpO1xyXG5cclxuICAgICAgICAkKCdib2R5Jykuc3RvcCgpLmFuaW1hdGUoe3Njcm9sbFRvcDpzY3JvbGxQb3NpdGlvbn0pXHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgLy9IYXJ0bWFuIOydmCDqt7jrprwg66as7Iqk7Yq4IO2BtOumreyLnCDsmKTrpbjsqr3sl5Ag67O07Jes7KO86riwXHJcblxyXG5cclxuICAgICQoJy5obS1saW5rLTAxJykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAxJykuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDInKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAzJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNCcpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDUnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5obS1saW5rLTAyJykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDInKS5jc3MoeydkaXNwbGF5JzonYmxvY2snfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDMnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTA0JykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5obS1saW5rLTAzJykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDMnKS5jc3MoeydkaXNwbGF5JzonYmxvY2snfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMicpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDEnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTA0JykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5obS1saW5rLTA0Jykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDQnKS5jc3MoeydkaXNwbGF5JzonYmxvY2snfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMicpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDMnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAxJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5obS1saW5rLTA1Jykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDUnKS5jc3MoeydkaXNwbGF5JzonYmxvY2snfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMicpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDMnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTA0JykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbn07XHJcblxyXG5cclxuXHJcbiQod2luZG93KS5vbignbG9hZCcsZnVuY3Rpb24oKXtcclxuICAkKCcjY29udGFpbmVyJykuaGlkZSgpO1xyXG5cclxufSk7XHJcblxyXG4iLCJcclxuJChmdW5jdGlvbigpe1xyXG4gICAgLy/rp4jsmrDsiqQg7Jik67KEIO2VmOuptCDsp6fsnYAg64+Z7JiB7IOBIOyerOyDnVxyXG5cclxuICAgJCgnLm1vdmllJykub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKVswXS5wbGF5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcubW92aWUnKS5vbignbW91c2VsZWF2ZScsZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpWzBdLnBhdXNlKCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxufSk7XHJcbiJdfQ==
