//toggle top menu

$(function(){

    //gnb Î©îÎâ¥Î≤ÑÌäº, ÎÇòÍ∞ÄÍ∏∞ ÌÅ¥Î¶≠ ÎèôÏûë

    $('.menu-btn').on('click',function(){

        $('.gnb').addClass('active');
    });


    $('.gnb-exit-btn').on('click',function(){

        $('.gnb').removeClass('active');

    });



    //location Ïùò drawer ÌÅ¥Î¶≠ ÎèôÏûë


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
    console.log(Math.floor($audio.duration/60)+ ':' + Math.floor($audio.duration % 60) ); //∫– : ≥™∏”¡ˆ  -->yatta!
  });

  //////////// ##:## «¸≈¬∑Œ  ///////////
  function digit(time){
    var fixDigit;

    if(time<10){fixDigit='0'+time;  //10∫∏¥Ÿ ¿€¿∫∞ÊøÏ ∫Øºˆø° ¿˙¿Â
    }else{fixDigit=time;}  //10∫∏¥Ÿ ≈©∏È ∞¡ ±◊¥Î∑Œ
    return fixDigit;}

  /////////////runnung time///////////////

  $('audio').on('timeupdate',function(){
    var time= digit( Math.floor($audio.currentTime/60) )+ ':' + digit( Math.floor($audio.currentTime % 60) );
    //∫–:≥™∏”¡ˆ

    $('.current-time').html(time); //digit «‘ºˆø° time ¥Î¿‘«œø© √‚∑¬.

    //progress bar ∞°∑Œ±Ê¿Ã ∆€ºæ≈◊¿Ã¡ˆ ¡¶æÓ( «ˆ¿ÁΩ√∞£/¿¸√ºΩ√∞£ * 100)
    var progressBar = $audio.currentTime/$audio.duration*100;
    $('.progress .bar').css({'width': progressBar+'%'});
  });


  //////////πˆ∆∞ ≈¨∏ØΩ√ «√∑π¿Ã+∏ÿ√„ ≈‰±€/////////////////
  $('.btn').data({'play':false}).on('click',function(){

    if( $(this).data('play') == false ){
      $audio.play();
      $(this).removeClass('play').addClass('pause');
      $(this).data({'play':true});
    }else{
      $audio.pause();
      $(this).removeClass('pause').addClass('play');
      $(this).data({'play':false});
    }

  });






});//¡¯¿‘¡° ≥°
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

  ////////////ÌîÑÎ°úÍ∑∏Îû® Î©îÎâ¥Î∞î ÎßàÏö∞Ïä§ Ïò§Î≤ÑÏãú Í∏∏Ïù¥ ÎäòÏù¥Í∏∞//////

  $('.program-menu-program02').on('mouseenter',function(){
    $('.program-menu-composer02').removeClass('active');
    $('.program-menu-program02').addClass('active');

  });

  $('.program-menu-composer01').on('mouseenter',function(){
    $('.program-menu-program01').removeClass('active');
    $('.program-menu-composer01').addClass('active');

  });

  ////////////ÎßàÏö∞Ïä§ Îñ®Ïñ¥ÏßÄÎ©¥ Í∏∏Ïù¥ Ï§ÑÏù¥Í∏∞////////////////

  $('.program-menu-composer01').on('mouseleave',function(){
    $(this).removeClass('active');
    $('.program-menu-program01').addClass('active');

  });

  $('.program-menu-program02').on('mouseleave',function(){
    $(this).removeClass('active');
    $('.program-menu-composer02').addClass('active');
  });





});



////section Î≥Ñ Ïä§ÌÅ¨Î°§ ÎèôÏûë
window.onload = function () {
  $(".move-section").each(function(){

    // Í∞úÎ≥ÑÏ†ÅÏúºÎ°ú Wheel Ïù¥Î≤§Ìä∏ Ï†ÅÏö©
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
        // ÎßàÏö∞Ïä§Ìú†ÏùÑ ÏúÑÏóêÏÑú ÏïÑÎûòÎ°ú
        if (delta < 0) {
          if ($(this).next() != undefined) {
            moveTop = $(this).next().offset().top;
          }

          // ÎßàÏö∞Ïä§Ìú†ÏùÑ ÏïÑÎûòÏóêÏÑú ÏúÑÎ°ú
        } else {
          if ($(this).prev() != undefined) {
            moveTop = $(this).prev().offset().top;
          }
        }

        // ÌôîÎ©¥ Ïù¥Îèô 0.5Ï¥à
        $("html,body").stop().animate({
          scrollTop: moveTop + 'px'
        }, {
          duration: 500, complete: function () {
          }
        });

      }

    });

  });





//ÌîÑÎ°úÍ∑∏Îû® ÎÇ¥ Ïù∏Îç±Ïä§ (ÎßÅÌÅ¨)ÌÅ¥Î¶≠Ïãú Ïä§ÌÅ¨Î°§ Ïï†ÎãàÎ©îÏù¥ÏÖò
  $('.program-list-text>p>a').on('click',function(e){
    e.preventDefault();
    var href= $(this).attr('href'); //hrefÍ∞íÏùÑ Í∞ÄÏ†∏Ïò¥
    var scrollPosition=$(href).offset().top;

    console.log(href);

    $('body').stop().animate({scrollTop:scrollPosition})

  });




  //Hartman Ïùò Í∑∏Î¶º Î¶¨Ïä§Ìä∏ ÌÅ¥Î¶≠Ïãú Ïò§Î•∏Ï™ΩÏóê Î≥¥Ïó¨Ï£ºÍ∏∞


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
    //ÎßàÏö∞Ïä§ Ïò§Î≤Ñ ÌïòÎ©¥ ÏßßÏùÄ ÎèôÏòÅÏÉÅ Ïû¨ÏÉù

   $('.movie').on('mouseenter',function(){
        $(this)[0].play();
    });

    $('.movie').on('mouseleave',function(){
        $(this)[0].pause();
    });



});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImduYl9sb2NhdGlvbi5qcyIsIm11c2ljX3BsYXllci5qcyIsInBsYXllcl9kZXRhaWwuanMiLCJwcm9ncmFtLmpzIiwicmVwbGF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZnVuY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL3RvZ2dsZSB0b3AgbWVudVxyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vZ25iIOuplOuJtOuyhO2KvCwg64KY6rCA6riwIO2BtOumrSDrj5nsnpFcclxuXHJcbiAgICAkKCcubWVudS1idG4nKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICQoJy5nbmInKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJCgnLmduYi1leGl0LWJ0bicpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgJCgnLmduYicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIC8vbG9jYXRpb24g7J2YIGRyYXdlciDtgbTrpq0g64+Z7J6RXHJcblxyXG5cclxuICAgICQoJy5kcmF3ZXItdXBzaWRlJykuZGF0YSh7ICdvcGVuJzp0cnVlfSkub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBpZiggJCh0aGlzKS5kYXRhKCkub3BlbiApe1xyXG4gICAgICAgICAgICAkKCcuZHJhd2VyLXVwc2lkZScpLnJlbW92ZUNsYXNzKCdzaHV0Jyk7XHJcbiAgICAgICAgICAgICQodGhpcykuZGF0YSh7J29wZW4nOmZhbHNlfSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICQoJy5kcmF3ZXItdXBzaWRlJykuYWRkQ2xhc3MoJ3NodXQnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKHsnb3Blbic6dHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuICAgICQoJy5kcmF3ZXItZG93bnNpZGUnKS5kYXRhKHsgJ29wZW4nOnRydWV9KS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmKCAkKHRoaXMpLmRhdGEoKS5vcGVuICl7XHJcbiAgICAgICAgICAgICQoJy5kcmF3ZXItZG93bnNpZGUnKS5yZW1vdmVDbGFzcygnc2h1dCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoeydvcGVuJzpmYWxzZX0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAkKCcuZHJhd2VyLWRvd25zaWRlJykuYWRkQ2xhc3MoJ3NodXQnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKHsnb3Blbic6dHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy9cclxuXHJcblxyXG5cclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0xMC5cclxuICovXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcblxyXG4gIHZhciAkYXVkaW8gPSQoJy5hdWRpbycpWzBdO1xyXG5cclxuXHJcbiAgJCgnLmF1ZGlvJykub24oJ2xvYWRlZG1ldGFkYXRhJyxmdW5jdGlvbigpe1xyXG4gICAgY29uc29sZS5sb2coTWF0aC5mbG9vcigkYXVkaW8uZHVyYXRpb24vNjApKyAnOicgKyBNYXRoLmZsb29yKCRhdWRpby5kdXJhdGlvbiAlIDYwKSApOyAvL++/ve+/vSA6IO+/ve+/ve+/ve+/ve+/ve+/vSAgLS0+eWF0dGEhXHJcbiAgfSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLyAjIzojIyDvv73vv73vv73Ct++/vSAgLy8vLy8vLy8vLy9cclxuICBmdW5jdGlvbiBkaWdpdCh0aW1lKXtcclxuICAgIHZhciBmaXhEaWdpdDtcclxuXHJcbiAgICBpZih0aW1lPDEwKXtmaXhEaWdpdD0nMCcrdGltZTsgIC8vMTDvv73vv73vv73vv70g77+977+977+977+977+977+977+977+9IO+/ve+/ve+/ve+/ve+/ve+/vSDvv73vv73vv73vv71cclxuICAgIH1lbHNle2ZpeERpZ2l0PXRpbWU7fSAgLy8xMO+/ve+/ve+/ve+/vSDFqe+/ve+/vSDvv73vv70g77+917Tvv73vv73vv71cclxuICAgIHJldHVybiBmaXhEaWdpdDt9XHJcblxyXG4gIC8vLy8vLy8vLy8vLy9ydW5udW5nIHRpbWUvLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgJCgnYXVkaW8nKS5vbigndGltZXVwZGF0ZScsZnVuY3Rpb24oKXtcclxuICAgIHZhciB0aW1lPSBkaWdpdCggTWF0aC5mbG9vcigkYXVkaW8uY3VycmVudFRpbWUvNjApICkrICc6JyArIGRpZ2l0KCBNYXRoLmZsb29yKCRhdWRpby5jdXJyZW50VGltZSAlIDYwKSApO1xyXG4gICAgLy/vv73vv70677+977+977+977+977+977+9XHJcblxyXG4gICAgJCgnLmN1cnJlbnQtdGltZScpLmh0bWwodGltZSk7IC8vZGlnaXQg77+91Lzvv73vv73vv70gdGltZSDvv73vv73vv73vv73vv73Pv++/vSDvv73vv73vv73vv70uXHJcblxyXG4gICAgLy9wcm9ncmVzcyBiYXIg77+977+977+9zrHvv73vv73vv70g77+927zvv73vv73vv73vv73vv73vv73vv70g77+977+977+977+9KCDvv73vv73vv73vv73vv73DsO+/vS/vv73vv73DvO+/vcOw77+9ICogMTAwKVxyXG4gICAgdmFyIHByb2dyZXNzQmFyID0gJGF1ZGlvLmN1cnJlbnRUaW1lLyRhdWRpby5kdXJhdGlvbioxMDA7XHJcbiAgICAkKCcucHJvZ3Jlc3MgLmJhcicpLmNzcyh7J3dpZHRoJzogcHJvZ3Jlc3NCYXIrJyUnfSk7XHJcbiAgfSk7XHJcblxyXG5cclxuICAvLy8vLy8vLy8v77+977+9xrAgxazvv73vv73vv73vv70g77+9w7fvv73vv73vv70r77+977+977+977+9IO+/ve+/ve+/ve+/vS8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgJCgnLmJ0bicpLmRhdGEoeydwbGF5JzpmYWxzZX0pLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICBpZiggJCh0aGlzKS5kYXRhKCdwbGF5JykgPT0gZmFsc2UgKXtcclxuICAgICAgJGF1ZGlvLnBsYXkoKTtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygncGxheScpLmFkZENsYXNzKCdwYXVzZScpO1xyXG4gICAgICAkKHRoaXMpLmRhdGEoeydwbGF5Jzp0cnVlfSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgJGF1ZGlvLnBhdXNlKCk7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3BhdXNlJykuYWRkQ2xhc3MoJ3BsYXknKTtcclxuICAgICAgJCh0aGlzKS5kYXRhKHsncGxheSc6ZmFsc2V9KTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pOy8v77+977+977+977+977+977+9IO+/ve+/vSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wOS5cclxuICovXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbi8vJCgnLnNlY3Rpb24xJykub24oJ21vdXNld2hlZWwnLGZ1bmN0aW9uKCl7XHJcbi8vXHJcbi8vICAkKCcuaW50cm9kdWNlLXRleHQnKS5zdG9wKCkuYW5pbWF0ZSh7fSw1MDApO1xyXG4vL1xyXG4vL1xyXG4vLyAgfSlcclxuXHJcblxyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTA3LlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgLy8vLy8vLy8vLy8v7ZSE66Gc6re4656oIOuplOuJtOuwlCDrp4jsmrDsiqQg7Jik67KE7IucIOq4uOydtCDripjsnbTquLAvLy8vLy9cclxuXHJcbiAgJCgnLnByb2dyYW0tbWVudS1wcm9ncmFtMDInKS5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcclxuICAgICQoJy5wcm9ncmFtLW1lbnUtY29tcG9zZXIwMicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJy5wcm9ncmFtLW1lbnUtcHJvZ3JhbTAyJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLnByb2dyYW0tbWVudS1jb21wb3NlcjAxJykub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcucHJvZ3JhbS1tZW51LXByb2dyYW0wMScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJy5wcm9ncmFtLW1lbnUtY29tcG9zZXIwMScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vL+uniOyasOyKpCDrlqjslrTsp4DrqbQg6ri47J20IOykhOydtOq4sC8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgJCgnLnByb2dyYW0tbWVudS1jb21wb3NlcjAxJykub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJy5wcm9ncmFtLW1lbnUtcHJvZ3JhbTAxJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLnByb2dyYW0tbWVudS1wcm9ncmFtMDInKS5vbignbW91c2VsZWF2ZScsZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnLnByb2dyYW0tbWVudS1jb21wb3NlcjAyJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG4vLy8vc2VjdGlvbiDrs4Qg7Iqk7YGs66GkIOuPmeyekVxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICQoXCIubW92ZS1zZWN0aW9uXCIpLmVhY2goZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvLyDqsJzrs4TsoIHsnLzroZwgV2hlZWwg7J2067Kk7Yq4IOyggeyaqVxyXG4gICAgJCh0aGlzKS5vbihcIm1vdXNld2hlZWwgRE9NTW91c2VTY3JvbGxcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgIGlmKCAhJChlLnRhcmdldCkucGFyZW50KCkuaGFzQ2xhc3MoJ2lubmVyLXNjcm9sbCcpICl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBkZWx0YSA9IDA7XHJcbiAgICAgICAgaWYgKCFldmVudCkgZXZlbnQgPSB3aW5kb3cuZXZlbnQ7XHJcblxyXG4gICAgICAgIGlmIChldmVudC53aGVlbERlbHRhKSB7XHJcbiAgICAgICAgICBkZWx0YSA9IGV2ZW50LndoZWVsRGVsdGEgLyAxMjA7XHJcbiAgICAgICAgICBpZiAod2luZG93Lm9wZXJhKSBkZWx0YSA9IC1kZWx0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZXZlbnQuZGV0YWlsKSBkZWx0YSA9IC1ldmVudC5kZXRhaWwgLyAzO1xyXG5cclxuICAgICAgICB2YXIgbW92ZVRvcCA9IG51bGw7XHJcbiAgICAgICAgLy8g66eI7Jqw7Iqk7Zyg7J2EIOychOyXkOyEnCDslYTrnpjroZxcclxuICAgICAgICBpZiAoZGVsdGEgPCAwKSB7XHJcbiAgICAgICAgICBpZiAoJCh0aGlzKS5uZXh0KCkgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG1vdmVUb3AgPSAkKHRoaXMpLm5leHQoKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8g66eI7Jqw7Iqk7Zyg7J2EIOyVhOuemOyXkOyEnCDsnITroZxcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKCQodGhpcykucHJldigpICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBtb3ZlVG9wID0gJCh0aGlzKS5wcmV2KCkub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g7ZmU66m0IOydtOuPmSAwLjXstIhcclxuICAgICAgICAkKFwiaHRtbCxib2R5XCIpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgIHNjcm9sbFRvcDogbW92ZVRvcCArICdweCdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBkdXJhdGlvbjogNTAwLCBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vL+2UhOuhnOq3uOueqCDrgrQg7J24642x7IqkICjrp4Htgawp7YG066at7IucIOyKpO2BrOuhpCDslaDri4jrqZTsnbTshZhcclxuICAkKCcucHJvZ3JhbS1saXN0LXRleHQ+cD5hJykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciBocmVmPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTsgLy9ocmVm6rCS7J2EIOqwgOyguOyYtFxyXG4gICAgdmFyIHNjcm9sbFBvc2l0aW9uPSQoaHJlZikub2Zmc2V0KCkudG9wO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGhyZWYpO1xyXG5cclxuICAgICQoJ2JvZHknKS5zdG9wKCkuYW5pbWF0ZSh7c2Nyb2xsVG9wOnNjcm9sbFBvc2l0aW9ufSlcclxuXHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gIC8vSGFydG1hbiDsnZgg6re466a8IOumrOyKpO2KuCDtgbTrpq3si5wg7Jik66W47Kq97JeQIOuztOyXrOyjvOq4sFxyXG5cclxuXHJcbiAgICAkKCcuaG0tbGluay0wMScpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMScpLmNzcyh7J2Rpc3BsYXknOidibG9jayd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAyJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMycpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDQnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTA1JykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuaG0tbGluay0wMicpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAyJykuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDEnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAzJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNCcpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDUnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuaG0tbGluay0wMycpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAzJykuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDInKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAxJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNCcpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDUnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuaG0tbGluay0wNCcpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTA0JykuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDInKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAzJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDUnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuaG0tbGluay0wNScpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTA1JykuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDInKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAzJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNCcpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDEnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG59O1xyXG5cclxuXHJcblxyXG4kKHdpbmRvdykub24oJ2xvYWQnLGZ1bmN0aW9uKCl7XHJcbiAgJCgnI2NvbnRhaW5lcicpLmhpZGUoKTtcclxuXHJcbn0pO1xyXG5cclxuIiwiXHJcbiQoZnVuY3Rpb24oKXtcclxuICAgIC8v66eI7Jqw7IqkIOyYpOuyhCDtlZjrqbQg7Ken7J2AIOuPmeyYgeyDgSDsnqzsg51cclxuXHJcbiAgICQoJy5tb3ZpZScpLm9uKCdtb3VzZWVudGVyJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcylbMF0ucGxheSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLm1vdmllJykub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKVswXS5wYXVzZSgpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbn0pO1xyXG4iXX0=
