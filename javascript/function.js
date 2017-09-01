
//mobile-pc 분기

$(function(){
    var checker = navigator.userAgent;
    var checkerNum = checker.indexOf("Mobile");

    console.log(checkerNum);

    if(checkerNum > 0){
        location.href="http://programbook.co.kr/m/gaudium"
    }
    if(location.href="http://programbook.co.kr/index.html"){
        location.href= "http://programbook.co.kr"
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImduYl9sb2NhdGlvbi5qcyIsIm11c2ljX3BsYXllci5qcyIsInBsYXllcl9kZXRhaWwuanMiLCJwcm9ncmFtLmpzIiwicmVwbGF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZnVuY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vbW9iaWxlLXBjIOu2hOq4sFxuXG4kKGZ1bmN0aW9uKCl7XG4gICAgdmFyIGNoZWNrZXIgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgIHZhciBjaGVja2VyTnVtID0gY2hlY2tlci5pbmRleE9mKFwiTW9iaWxlXCIpO1xuXG4gICAgY29uc29sZS5sb2coY2hlY2tlck51bSk7XG5cbiAgICBpZihjaGVja2VyTnVtID4gMCl7XG4gICAgICAgIGxvY2F0aW9uLmhyZWY9XCJodHRwOi8vcHJvZ3JhbWJvb2suY28ua3IvbS9nYXVkaXVtXCJcbiAgICB9XG4gICAgaWYobG9jYXRpb24uaHJlZj1cImh0dHA6Ly9wcm9ncmFtYm9vay5jby5rci9pbmRleC5odG1sXCIpe1xuICAgICAgICBsb2NhdGlvbi5ocmVmPSBcImh0dHA6Ly9wcm9ncmFtYm9vay5jby5rclwiXG4gICAgfVxuXG59KTtcblxuXG5cbi8vdG9nZ2xlIHRvcCBtZW51XG5cbiQoZnVuY3Rpb24oKXtcblxuICAgIC8vZ25iIOuplOuJtOuyhO2KvCwg64KY6rCA6riwIO2BtOumrSDrj5nsnpFcblxuICAgICQoJy5tZW51LWJ0bicpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICAkKCcuZ25iJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG5cbiAgICAkKCcuZ25iLWV4aXQtYnRuJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG4gICAgICAgICQoJy5nbmInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICB9KTtcblxuXG5cbiAgICAvL2xvY2F0aW9uIOydmCBkcmF3ZXIg7YG066atIOuPmeyekVxuXG5cbiAgICAkKCcuZHJhd2VyLXVwc2lkZScpLmRhdGEoeyAnb3Blbic6dHJ1ZX0pLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICBpZiggJCh0aGlzKS5kYXRhKCkub3BlbiApe1xuICAgICAgICAgICAgJCgnLmRyYXdlci11cHNpZGUnKS5yZW1vdmVDbGFzcygnc2h1dCcpO1xuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKHsnb3Blbic6ZmFsc2V9KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAkKCcuZHJhd2VyLXVwc2lkZScpLmFkZENsYXNzKCdzaHV0Jyk7XG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoeydvcGVuJzp0cnVlfSk7XG4gICAgICAgIH1cblxuICAgIH0pO1xuICAgICQoJy5kcmF3ZXItZG93bnNpZGUnKS5kYXRhKHsgJ29wZW4nOnRydWV9KS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgaWYoICQodGhpcykuZGF0YSgpLm9wZW4gKXtcbiAgICAgICAgICAgICQoJy5kcmF3ZXItZG93bnNpZGUnKS5yZW1vdmVDbGFzcygnc2h1dCcpO1xuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKHsnb3Blbic6ZmFsc2V9KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAkKCcuZHJhd2VyLWRvd25zaWRlJykuYWRkQ2xhc3MoJ3NodXQnKTtcbiAgICAgICAgICAgICQodGhpcykuZGF0YSh7J29wZW4nOnRydWV9KTtcbiAgICAgICAgfVxuXG4gICAgfSk7XG5cblxuICAgIC8vXG5cblxuXG5cbn0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMTAuXG4gKi9cbiQoZnVuY3Rpb24oKXtcblxuXG4gIHZhciAkYXVkaW8gPSQoJy5hdWRpbycpWzBdO1xuXG5cbiAgJCgnLmF1ZGlvJykub24oJ2xvYWRlZG1ldGFkYXRhJyxmdW5jdGlvbigpe1xuICAgIGNvbnNvbGUubG9nKE1hdGguZmxvb3IoJGF1ZGlvLmR1cmF0aW9uLzYwKSsgJzonICsgTWF0aC5mbG9vcigkYXVkaW8uZHVyYXRpb24gJSA2MCkgKTsgLy/rtoQgOiDrgpjrqLjsp4AgIC0tPnlhdHRhIVxuICB9KTtcblxuICAvLy8vLy8vLy8vLy8gIyM6IyMg7ZiV7YOc66GcICAvLy8vLy8vLy8vL1xuICBmdW5jdGlvbiBkaWdpdCh0aW1lKXtcbiAgICB2YXIgZml4RGlnaXQ7XG5cbiAgICBpZih0aW1lPDEwKXtmaXhEaWdpdD0nMCcrdGltZTsgIC8vMTDrs7Tri6Qg7J6R7J2A6rK97JqwIOuzgOyImOyXkCDsoIDsnqVcbiAgICB9ZWxzZXtmaXhEaWdpdD10aW1lO30gIC8vMTDrs7Tri6Qg7YGs66m0IOqxjSDqt7jrjIDroZxcbiAgICByZXR1cm4gZml4RGlnaXQ7fVxuXG4gIC8vLy8vLy8vLy8vLy9ydW5udW5nIHRpbWUvLy8vLy8vLy8vLy8vLy9cblxuICAkKCdhdWRpbycpLm9uKCd0aW1ldXBkYXRlJyxmdW5jdGlvbigpe1xuICAgIHZhciB0aW1lPSBkaWdpdCggTWF0aC5mbG9vcigkYXVkaW8uY3VycmVudFRpbWUvNjApICkrICc6JyArIGRpZ2l0KCBNYXRoLmZsb29yKCRhdWRpby5jdXJyZW50VGltZSAlIDYwKSApO1xuICAgIC8v67aEOuuCmOuouOyngFxuXG4gICAgJCgnLmN1cnJlbnQtdGltZScpLmh0bWwodGltZSk7IC8vZGlnaXQg7ZWo7IiY7JeQIHRpbWUg64yA7J6F7ZWY7JesIOy2nOugpS5cblxuICAgIC8vcHJvZ3Jlc3MgYmFyIOqwgOuhnOq4uOydtCDtjbzshLzthYzsnbTsp4Ag7KCc7Ja0KCDtmITsnqzsi5zqsIQv7KCE7LK07Iuc6rCEICogMTAwKVxuICAgIHZhciBwcm9ncmVzc0JhciA9ICRhdWRpby5jdXJyZW50VGltZS8kYXVkaW8uZHVyYXRpb24qMTAwO1xuICAgICQoJy5wcm9ncmVzcyAucHJvZ3Jlc3MtYmFyJykuY3NzKHsnd2lkdGgnOiBwcm9ncmVzc0JhcisnJSd9KTtcbiAgfSk7XG5cblxuICAvLy8vLy8vLy8v67KE7Yq8IO2BtOumreyLnCDtlIzroIjsnbQr66mI7LakIO2GoOq4gC8vLy8vLy8vLy8vLy8vLy8vXG4gICQoJy5idG4nKS5kYXRhKHsncGxheSc6ZmFsc2V9KS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XG5cblxuICAgIGlmKCAkKHRoaXMpLmRhdGEoJ3BsYXknKSA9PSBmYWxzZSApe1xuICAgICAgJGF1ZGlvLnBsYXkoKTtcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3BsYXknKS5hZGRDbGFzcygncGF1c2UnKTtcbiAgICAgICQodGhpcykuZGF0YSh7J3BsYXknOnRydWV9KTtcblxuXG4gICAgICAkKFwiLmJhclwiKS5hZGRDbGFzcyhcImFuaW1hdGVcIik7XG5cblxuXG4gICAgfWVsc2V7XG4gICAgICAkYXVkaW8ucGF1c2UoKTtcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3BhdXNlJykuYWRkQ2xhc3MoJ3BsYXknKTtcbiAgICAgICQodGhpcykuZGF0YSh7J3BsYXknOmZhbHNlfSk7XG5cbiAgICAgICQoXCIuYmFyXCIpLnJlbW92ZUNsYXNzKFwiYW5pbWF0ZVwiKTtcblxuICAgIH1cblxuXG5cblxuXG5cbiAgfSk7XG5cblxuXG5cblxuXG5cbn0pOy8v7KeE7J6F7KCQIOuBnSIsIi8qKlxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMDkuXG4gKi9cbiQoZnVuY3Rpb24oKXtcblxuLy8kKCcuc2VjdGlvbjEnKS5vbignbW91c2V3aGVlbCcsZnVuY3Rpb24oKXtcbi8vXG4vLyAgJCgnLmludHJvZHVjZS10ZXh0Jykuc3RvcCgpLmFuaW1hdGUoe30sNTAwKTtcbi8vXG4vL1xuLy8gIH0pXG5cblxuXG59KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTA3LlxuICovXG5cbiQoZnVuY3Rpb24oKXtcblxuICAvLy8vLy8vLy8vLy/tlITroZzqt7jrnqgg66mU64m067CUIOuniOyasOyKpCDsmKTrsoTsi5wg6ri47J20IOuKmOydtOq4sC8vLy8vL1xuXG4gICQoJy5wcm9ncmFtLW1lbnUtcHJvZ3JhbTAyJykub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XG4gICAgJCgnLnByb2dyYW0tbWVudS1jb21wb3NlcjAyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQoJy5wcm9ncmFtLW1lbnUtcHJvZ3JhbTAyJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gIH0pO1xuXG4gICQoJy5wcm9ncmFtLW1lbnUtY29tcG9zZXIwMScpLm9uKCdtb3VzZWVudGVyJyxmdW5jdGlvbigpe1xuICAgICQoJy5wcm9ncmFtLW1lbnUtcHJvZ3JhbTAxJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQoJy5wcm9ncmFtLW1lbnUtY29tcG9zZXIwMScpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICB9KTtcblxuICAvLy8vLy8vLy8vLy/rp4jsmrDsiqQg65ao7Ja07KeA66m0IOq4uOydtCDspITsnbTquLAvLy8vLy8vLy8vLy8vLy8vXG5cbiAgJCgnLnByb2dyYW0tbWVudS1jb21wb3NlcjAxJykub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnLnByb2dyYW0tbWVudS1wcm9ncmFtMDEnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgfSk7XG5cbiAgJCgnLnByb2dyYW0tbWVudS1wcm9ncmFtMDInKS5vbignbW91c2VsZWF2ZScsZnVuY3Rpb24oKXtcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCcucHJvZ3JhbS1tZW51LWNvbXBvc2VyMDInKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gIH0pO1xuXG5cblxuXG5cbn0pO1xuXG5cblxuLy8vL3NlY3Rpb24g67OEIOyKpO2BrOuhpCDrj5nsnpFcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICQoXCIubW92ZS1zZWN0aW9uXCIpLmVhY2goZnVuY3Rpb24oKXtcblxuICAgIC8vIOqwnOuzhOyggeycvOuhnCBXaGVlbCDsnbTrsqTtirgg7KCB7JqpXG4gICAgJCh0aGlzKS5vbihcIm1vdXNld2hlZWwgRE9NTW91c2VTY3JvbGxcIiwgZnVuY3Rpb24gKGUpIHtcblxuICAgICAgaWYoICEkKGUudGFyZ2V0KS5wYXJlbnQoKS5oYXNDbGFzcygnaW5uZXItc2Nyb2xsJykgKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgZGVsdGEgPSAwO1xuICAgICAgICBpZiAoIWV2ZW50KSBldmVudCA9IHdpbmRvdy5ldmVudDtcblxuICAgICAgICBpZiAoZXZlbnQud2hlZWxEZWx0YSkge1xuICAgICAgICAgIGRlbHRhID0gZXZlbnQud2hlZWxEZWx0YSAvIDEyMDtcbiAgICAgICAgICBpZiAod2luZG93Lm9wZXJhKSBkZWx0YSA9IC1kZWx0YTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5kZXRhaWwpXG4gICAgICAgICAgICBkZWx0YSA9IC1ldmVudC5kZXRhaWwgLyAzO1xuXG4gICAgICAgIHZhciBtb3ZlVG9wID0gbnVsbDtcbiAgICAgICAgLy8g66eI7Jqw7Iqk7Zyg7J2EIOychOyXkOyEnCDslYTrnpjroZxcbiAgICAgICAgaWYgKGRlbHRhIDwgMCkge1xuICAgICAgICAgIGlmICgkKHRoaXMpLm5leHQoKSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG1vdmVUb3AgPSAkKHRoaXMpLm5leHQoKS5vZmZzZXQoKS50b3A7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8g66eI7Jqw7Iqk7Zyg7J2EIOyVhOuemOyXkOyEnCDsnITroZxcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoJCh0aGlzKS5wcmV2KCkgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBtb3ZlVG9wID0gJCh0aGlzKS5wcmV2KCkub2Zmc2V0KCkudG9wO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIO2ZlOuptCDsnbTrj5kgMC417LSIXG4gICAgICAgICQoXCJodG1sLGJvZHlcIikuc3RvcCgpLmFuaW1hdGUoe1xuICAgICAgICAgIHNjcm9sbFRvcDogbW92ZVRvcCArICdweCdcbiAgICAgICAgfSwge1xuICAgICAgICAgIGR1cmF0aW9uOiA1MDAsIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgfVxuXG4gICAgfSk7XG5cbiAgfSk7XG5cblxuXG5cblxuLy/tlITroZzqt7jrnqgg64K0IOyduOuNseyKpCAo66eB7YGsKe2BtOumreyLnCDsiqTtgazroaQg7JWg64uI66mU7J207IWYXG4gICQoJy5wcm9ncmFtLWxpc3QtdGV4dDAxPnA+YScpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBocmVmPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTsgLy9ocmVm6rCS7J2EIOqwgOyguOyYtFxuICAgIHZhciBzY3JvbGxQb3NpdGlvbj0kKGhyZWYpLm9mZnNldCgpLnRvcDtcblxuICAgIGNvbnNvbGUubG9nKGhyZWYpO1xuXG4gICAgJCgnaHRtbCxib2R5Jykuc3RvcCgpLmFuaW1hdGUoe3Njcm9sbFRvcDpzY3JvbGxQb3NpdGlvbn0pXG5cbiAgfSk7XG4gICAgJCgnLnByb2dyYW0tbGlzdC10ZXh0MDI+cD5hJykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgaHJlZj0gJCh0aGlzKS5hdHRyKCdocmVmJyk7IC8vaHJlZuqwkuydhCDqsIDsoLjsmLRcbiAgICAgICAgdmFyIHNjcm9sbFBvc2l0aW9uPSQoaHJlZikub2Zmc2V0KCkudG9wO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGhyZWYpO1xuXG4gICAgICAgICQoJ2h0bWwsYm9keScpLnN0b3AoKS5hbmltYXRlKHtzY3JvbGxUb3A6c2Nyb2xsUG9zaXRpb259KVxuXG4gICAgfSk7XG5cblxuXG4gIC8vSGFydG1hbiDsnZgg6re466a8IOumrOyKpO2KuCDtgbTrpq3si5wg7Jik66W47Kq97JeQIOuztOyXrOyjvOq4sFxuXG5cbiAgICAkKCcuaG0tbGluay0wMScpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMScpLmNzcyh7J2Rpc3BsYXknOidibG9jayd9KTtcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMicpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAzJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDQnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xuICAgIH0pO1xuXG4gICAgJCgnLmhtLWxpbmstMDInKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMicpLmNzcyh7J2Rpc3BsYXknOidibG9jayd9KTtcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAzJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDQnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xuXG4gICAgfSk7XG5cbiAgICAkKCcuaG0tbGluay0wMycpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAzJykuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJ30pO1xuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAyJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDEnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNCcpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTA1JykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XG5cbiAgICB9KTtcblxuICAgICQoJy5obS1saW5rLTA0Jykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDQnKS5jc3MoeydkaXNwbGF5JzonYmxvY2snfSk7XG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDInKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMycpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAxJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDUnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcblxuICAgIH0pO1xuXG4gICAgJCgnLmhtLWxpbmstMDUnKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNScpLmNzcyh7J2Rpc3BsYXknOidibG9jayd9KTtcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMicpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAzJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDQnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xuXG4gICAgfSk7XG5cblxufTtcblxuXG5cbiQod2luZG93KS5vbignbG9hZCcsZnVuY3Rpb24oKXtcbiAgJCgnI2NvbnRhaW5lcicpLmhpZGUoKTtcblxufSk7XG5cbiIsIlxuJChmdW5jdGlvbigpe1xuICAgIC8v66eI7Jqw7IqkIOyYpOuyhCDtlZjrqbQg7Ken7J2AIOuPmeyYgeyDgSDsnqzsg51cblxuICAgJCgnLm1vdmllJykub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcylbMF0ucGxheSgpO1xuICAgIH0pO1xuXG4gICAgJCgnLm1vdmllJykub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcylbMF0ucGF1c2UoKTtcbiAgICB9KTtcblxuXG5cbn0pO1xuIl19
