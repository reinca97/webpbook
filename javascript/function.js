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
    $('.progress .progress-bar').css({'width': progressBar+'%'});
  });


  //////////πˆ∆∞ ≈¨∏ØΩ√ «√∑π¿Ã+∏ÿ√„ ≈‰±€/////////////////
  $('.btn').data({'play':false}).on('click',function(){
    var eqplay =true;

    if( $(this).data('play') == false ){
      $audio.play();
      $(this).removeClass('play').addClass('pause');
      $(this).data({'play':true});


      $(".bar").removeClass("noAnim");
      eqplay=false;


    }else{
      $audio.pause();
      $(this).removeClass('pause').addClass('play');
      $(this).data({'play':false});

      $(".bar").addClass("noAnim");
      eqplay=true;

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImduYl9sb2NhdGlvbi5qcyIsIm11c2ljX3BsYXllci5qcyIsInBsYXllcl9kZXRhaWwuanMiLCJwcm9ncmFtLmpzIiwicmVwbGF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZnVuY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL3RvZ2dsZSB0b3AgbWVudVxyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vZ25iIOuplOuJtOuyhO2KvCwg64KY6rCA6riwIO2BtOumrSDrj5nsnpFcclxuXHJcbiAgICAkKCcubWVudS1idG4nKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICQoJy5nbmInKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJCgnLmduYi1leGl0LWJ0bicpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgJCgnLmduYicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIC8vbG9jYXRpb24g7J2YIGRyYXdlciDtgbTrpq0g64+Z7J6RXHJcblxyXG5cclxuICAgICQoJy5kcmF3ZXItdXBzaWRlJykuZGF0YSh7ICdvcGVuJzp0cnVlfSkub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBpZiggJCh0aGlzKS5kYXRhKCkub3BlbiApe1xyXG4gICAgICAgICAgICAkKCcuZHJhd2VyLXVwc2lkZScpLnJlbW92ZUNsYXNzKCdzaHV0Jyk7XHJcbiAgICAgICAgICAgICQodGhpcykuZGF0YSh7J29wZW4nOmZhbHNlfSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICQoJy5kcmF3ZXItdXBzaWRlJykuYWRkQ2xhc3MoJ3NodXQnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKHsnb3Blbic6dHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuICAgICQoJy5kcmF3ZXItZG93bnNpZGUnKS5kYXRhKHsgJ29wZW4nOnRydWV9KS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmKCAkKHRoaXMpLmRhdGEoKS5vcGVuICl7XHJcbiAgICAgICAgICAgICQoJy5kcmF3ZXItZG93bnNpZGUnKS5yZW1vdmVDbGFzcygnc2h1dCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoeydvcGVuJzpmYWxzZX0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAkKCcuZHJhd2VyLWRvd25zaWRlJykuYWRkQ2xhc3MoJ3NodXQnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKHsnb3Blbic6dHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy9cclxuXHJcblxyXG5cclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0xMC5cclxuICovXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcblxyXG4gIHZhciAkYXVkaW8gPSQoJy5hdWRpbycpWzBdO1xyXG5cclxuXHJcbiAgJCgnLmF1ZGlvJykub24oJ2xvYWRlZG1ldGFkYXRhJyxmdW5jdGlvbigpe1xyXG4gICAgY29uc29sZS5sb2coTWF0aC5mbG9vcigkYXVkaW8uZHVyYXRpb24vNjApKyAnOicgKyBNYXRoLmZsb29yKCRhdWRpby5kdXJhdGlvbiAlIDYwKSApOyAvL++/ve+/vSA6IO+/ve+/ve+/ve+/ve+/ve+/vSAgLS0+eWF0dGEhXHJcbiAgfSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLyAjIzojIyDvv73vv73vv73Ct++/vSAgLy8vLy8vLy8vLy9cclxuICBmdW5jdGlvbiBkaWdpdCh0aW1lKXtcclxuICAgIHZhciBmaXhEaWdpdDtcclxuXHJcbiAgICBpZih0aW1lPDEwKXtmaXhEaWdpdD0nMCcrdGltZTsgIC8vMTDvv73vv73vv73vv70g77+977+977+977+977+977+977+977+9IO+/ve+/ve+/ve+/ve+/ve+/vSDvv73vv73vv73vv71cclxuICAgIH1lbHNle2ZpeERpZ2l0PXRpbWU7fSAgLy8xMO+/ve+/ve+/ve+/vSDFqe+/ve+/vSDvv73vv70g77+917Tvv73vv73vv71cclxuICAgIHJldHVybiBmaXhEaWdpdDt9XHJcblxyXG4gIC8vLy8vLy8vLy8vLy9ydW5udW5nIHRpbWUvLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgJCgnYXVkaW8nKS5vbigndGltZXVwZGF0ZScsZnVuY3Rpb24oKXtcclxuICAgIHZhciB0aW1lPSBkaWdpdCggTWF0aC5mbG9vcigkYXVkaW8uY3VycmVudFRpbWUvNjApICkrICc6JyArIGRpZ2l0KCBNYXRoLmZsb29yKCRhdWRpby5jdXJyZW50VGltZSAlIDYwKSApO1xyXG4gICAgLy/vv73vv70677+977+977+977+977+977+9XHJcblxyXG4gICAgJCgnLmN1cnJlbnQtdGltZScpLmh0bWwodGltZSk7IC8vZGlnaXQg77+91Lzvv73vv73vv70gdGltZSDvv73vv73vv73vv73vv73Pv++/vSDvv73vv73vv73vv70uXHJcblxyXG4gICAgLy9wcm9ncmVzcyBiYXIg77+977+977+9zrHvv73vv73vv70g77+927zvv73vv73vv73vv73vv73vv73vv70g77+977+977+977+9KCDvv73vv73vv73vv73vv73DsO+/vS/vv73vv73DvO+/vcOw77+9ICogMTAwKVxyXG4gICAgdmFyIHByb2dyZXNzQmFyID0gJGF1ZGlvLmN1cnJlbnRUaW1lLyRhdWRpby5kdXJhdGlvbioxMDA7XHJcbiAgICAkKCcucHJvZ3Jlc3MgLnByb2dyZXNzLWJhcicpLmNzcyh7J3dpZHRoJzogcHJvZ3Jlc3NCYXIrJyUnfSk7XHJcbiAgfSk7XHJcblxyXG5cclxuICAvLy8vLy8vLy8v77+977+9xrAgxazvv73vv73vv73vv70g77+9w7fvv73vv73vv70r77+977+977+977+9IO+/ve+/ve+/ve+/vS8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgJCgnLmJ0bicpLmRhdGEoeydwbGF5JzpmYWxzZX0pLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgIHZhciBlcXBsYXkgPXRydWU7XHJcblxyXG4gICAgaWYoICQodGhpcykuZGF0YSgncGxheScpID09IGZhbHNlICl7XHJcbiAgICAgICRhdWRpby5wbGF5KCk7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3BsYXknKS5hZGRDbGFzcygncGF1c2UnKTtcclxuICAgICAgJCh0aGlzKS5kYXRhKHsncGxheSc6dHJ1ZX0pO1xyXG5cclxuXHJcbiAgICAgICQoXCIuYmFyXCIpLnJlbW92ZUNsYXNzKFwibm9BbmltXCIpO1xyXG4gICAgICBlcXBsYXk9ZmFsc2U7XHJcblxyXG5cclxuICAgIH1lbHNle1xyXG4gICAgICAkYXVkaW8ucGF1c2UoKTtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygncGF1c2UnKS5hZGRDbGFzcygncGxheScpO1xyXG4gICAgICAkKHRoaXMpLmRhdGEoeydwbGF5JzpmYWxzZX0pO1xyXG5cclxuICAgICAgJChcIi5iYXJcIikuYWRkQ2xhc3MoXCJub0FuaW1cIik7XHJcbiAgICAgIGVxcGxheT10cnVlO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59KTsvL++/ve+/ve+/ve+/ve+/ve+/vSDvv73vv70iLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMDkuXHJcbiAqL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4vLyQoJy5zZWN0aW9uMScpLm9uKCdtb3VzZXdoZWVsJyxmdW5jdGlvbigpe1xyXG4vL1xyXG4vLyAgJCgnLmludHJvZHVjZS10ZXh0Jykuc3RvcCgpLmFuaW1hdGUoe30sNTAwKTtcclxuLy9cclxuLy9cclxuLy8gIH0pXHJcblxyXG5cclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wNy5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIC8vLy8vLy8vLy8vL+2UhOuhnOq3uOueqCDrqZTribTrsJQg66eI7Jqw7IqkIOyYpOuyhOyLnCDquLjsnbQg64qY7J206riwLy8vLy8vXHJcblxyXG4gICQoJy5wcm9ncmFtLW1lbnUtcHJvZ3JhbTAyJykub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcucHJvZ3JhbS1tZW51LWNvbXBvc2VyMDInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCcucHJvZ3JhbS1tZW51LXByb2dyYW0wMicpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5wcm9ncmFtLW1lbnUtY29tcG9zZXIwMScpLm9uKCdtb3VzZWVudGVyJyxmdW5jdGlvbigpe1xyXG4gICAgJCgnLnByb2dyYW0tbWVudS1wcm9ncmFtMDEnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCcucHJvZ3JhbS1tZW51LWNvbXBvc2VyMDEnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy/rp4jsmrDsiqQg65ao7Ja07KeA66m0IOq4uOydtCDspITsnbTquLAvLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICQoJy5wcm9ncmFtLW1lbnUtY29tcG9zZXIwMScpLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCcucHJvZ3JhbS1tZW51LXByb2dyYW0wMScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5wcm9ncmFtLW1lbnUtcHJvZ3JhbTAyJykub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJy5wcm9ncmFtLW1lbnUtY29tcG9zZXIwMicpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuLy8vL3NlY3Rpb24g67OEIOyKpO2BrOuhpCDrj5nsnpFcclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAkKFwiLm1vdmUtc2VjdGlvblwiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgLy8g6rCc67OE7KCB7Jy866GcIFdoZWVsIOydtOuypO2KuCDsoIHsmqlcclxuICAgICQodGhpcykub24oXCJtb3VzZXdoZWVsIERPTU1vdXNlU2Nyb2xsXCIsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICBpZiggISQoZS50YXJnZXQpLnBhcmVudCgpLmhhc0NsYXNzKCdpbm5lci1zY3JvbGwnKSApe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgZGVsdGEgPSAwO1xyXG4gICAgICAgIGlmICghZXZlbnQpIGV2ZW50ID0gd2luZG93LmV2ZW50O1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQud2hlZWxEZWx0YSkge1xyXG4gICAgICAgICAgZGVsdGEgPSBldmVudC53aGVlbERlbHRhIC8gMTIwO1xyXG4gICAgICAgICAgaWYgKHdpbmRvdy5vcGVyYSkgZGVsdGEgPSAtZGVsdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmRldGFpbCkgZGVsdGEgPSAtZXZlbnQuZGV0YWlsIC8gMztcclxuXHJcbiAgICAgICAgdmFyIG1vdmVUb3AgPSBudWxsO1xyXG4gICAgICAgIC8vIOuniOyasOyKpO2coOydhCDsnITsl5DshJwg7JWE656Y66GcXHJcbiAgICAgICAgaWYgKGRlbHRhIDwgMCkge1xyXG4gICAgICAgICAgaWYgKCQodGhpcykubmV4dCgpICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBtb3ZlVG9wID0gJCh0aGlzKS5uZXh0KCkub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIOuniOyasOyKpO2coOydhCDslYTrnpjsl5DshJwg7JyE66GcXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICgkKHRoaXMpLnByZXYoKSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbW92ZVRvcCA9ICQodGhpcykucHJldigpLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIO2ZlOuptCDsnbTrj5kgMC417LSIXHJcbiAgICAgICAgJChcImh0bWwsYm9keVwiKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICBzY3JvbGxUb3A6IG1vdmVUb3AgKyAncHgnXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgZHVyYXRpb246IDUwMCwgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy/tlITroZzqt7jrnqgg64K0IOyduOuNseyKpCAo66eB7YGsKe2BtOumreyLnCDsiqTtgazroaQg7JWg64uI66mU7J207IWYXHJcbiAgJCgnLnByb2dyYW0tbGlzdC10ZXh0PnA+YScpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgaHJlZj0gJCh0aGlzKS5hdHRyKCdocmVmJyk7IC8vaHJlZuqwkuydhCDqsIDsoLjsmLRcclxuICAgIHZhciBzY3JvbGxQb3NpdGlvbj0kKGhyZWYpLm9mZnNldCgpLnRvcDtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhocmVmKTtcclxuXHJcbiAgICAkKCdib2R5Jykuc3RvcCgpLmFuaW1hdGUoe3Njcm9sbFRvcDpzY3JvbGxQb3NpdGlvbn0pXHJcblxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAvL0hhcnRtYW4g7J2YIOq3uOumvCDrpqzsiqTtirgg7YG066at7IucIOyYpOuluOyqveyXkCDrs7Tsl6zso7zquLBcclxuXHJcblxyXG4gICAgJCgnLmhtLWxpbmstMDEnKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDEnKS5jc3MoeydkaXNwbGF5JzonYmxvY2snfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMicpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDMnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTA0JykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmhtLWxpbmstMDInKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMicpLmNzcyh7J2Rpc3BsYXknOidibG9jayd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAxJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMycpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDQnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTA1JykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmhtLWxpbmstMDMnKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMycpLmNzcyh7J2Rpc3BsYXknOidibG9jayd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAyJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDQnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTA1JykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmhtLWxpbmstMDQnKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNCcpLmNzcyh7J2Rpc3BsYXknOidibG9jayd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAyJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMycpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDEnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTA1JykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmhtLWxpbmstMDUnKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNScpLmNzcyh7J2Rpc3BsYXknOidibG9jayd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAyJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMycpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDQnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAxJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxufTtcclxuXHJcblxyXG5cclxuJCh3aW5kb3cpLm9uKCdsb2FkJyxmdW5jdGlvbigpe1xyXG4gICQoJyNjb250YWluZXInKS5oaWRlKCk7XHJcblxyXG59KTtcclxuXHJcbiIsIlxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgICAvL+uniOyasOyKpCDsmKTrsoQg7ZWY66m0IOynp+ydgCDrj5nsmIHsg4Eg7J6s7IOdXHJcblxyXG4gICAkKCcubW92aWUnKS5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpWzBdLnBsYXkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5tb3ZpZScpLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcylbMF0ucGF1c2UoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG59KTtcclxuIl19
