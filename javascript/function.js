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

    })




};



$(function(){
    //ÎßàÏö∞Ïä§ Ïò§Î≤Ñ ÌïòÎ©¥ ÏßßÏùÄ ÎèôÏòÅÏÉÅ Ïû¨ÏÉù

   $('.movie').on('mouseenter',function(){
        $(this)[0].play();
    });

    $('.movie').on('mouseleave',function(){
        $(this)[0].pause();
    });



});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImduYl9sb2NhdGlvbi5qcyIsIm11c2ljX3BsYXllci5qcyIsInBsYXllcl9kZXRhaWwuanMiLCJwcm9ncmFtLmpzIiwicmVwbGF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImZ1bmN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy90b2dnbGUgdG9wIG1lbnVcclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvL2duYiDrqZTribTrsoTtirwsIOuCmOqwgOq4sCDtgbTrpq0g64+Z7J6RXHJcblxyXG4gICAgJCgnLm1lbnUtYnRuJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAkKCcuZ25iJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoJy5nbmItZXhpdC1idG4nKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICQoJy5nbmInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAvL2xvY2F0aW9uIOydmCBkcmF3ZXIg7YG066atIOuPmeyekVxyXG5cclxuXHJcbiAgICAkKCcuZHJhd2VyLXVwc2lkZScpLmRhdGEoeyAnb3Blbic6dHJ1ZX0pLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgaWYoICQodGhpcykuZGF0YSgpLm9wZW4gKXtcclxuICAgICAgICAgICAgJCgnLmRyYXdlci11cHNpZGUnKS5yZW1vdmVDbGFzcygnc2h1dCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoeydvcGVuJzpmYWxzZX0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAkKCcuZHJhd2VyLXVwc2lkZScpLmFkZENsYXNzKCdzaHV0Jyk7XHJcbiAgICAgICAgICAgICQodGhpcykuZGF0YSh7J29wZW4nOnRydWV9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcbiAgICAkKCcuZHJhd2VyLWRvd25zaWRlJykuZGF0YSh7ICdvcGVuJzp0cnVlfSkub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBpZiggJCh0aGlzKS5kYXRhKCkub3BlbiApe1xyXG4gICAgICAgICAgICAkKCcuZHJhd2VyLWRvd25zaWRlJykucmVtb3ZlQ2xhc3MoJ3NodXQnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKHsnb3Blbic6ZmFsc2V9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgJCgnLmRyYXdlci1kb3duc2lkZScpLmFkZENsYXNzKCdzaHV0Jyk7XHJcbiAgICAgICAgICAgICQodGhpcykuZGF0YSh7J29wZW4nOnRydWV9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8vXHJcblxyXG5cclxuXHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMTAuXHJcbiAqL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG5cclxuICB2YXIgJGF1ZGlvID0kKCcuYXVkaW8nKVswXTtcclxuXHJcblxyXG4gICQoJy5hdWRpbycpLm9uKCdsb2FkZWRtZXRhZGF0YScsZnVuY3Rpb24oKXtcclxuICAgIGNvbnNvbGUubG9nKE1hdGguZmxvb3IoJGF1ZGlvLmR1cmF0aW9uLzYwKSsgJzonICsgTWF0aC5mbG9vcigkYXVkaW8uZHVyYXRpb24gJSA2MCkgKTsgLy/vv73vv70gOiDvv73vv73vv73vv73vv73vv70gIC0tPnlhdHRhIVxyXG4gIH0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8gIyM6IyMg77+977+977+9wrfvv70gIC8vLy8vLy8vLy8vXHJcbiAgZnVuY3Rpb24gZGlnaXQodGltZSl7XHJcbiAgICB2YXIgZml4RGlnaXQ7XHJcblxyXG4gICAgaWYodGltZTwxMCl7Zml4RGlnaXQ9JzAnK3RpbWU7ICAvLzEw77+977+977+977+9IO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vSDvv73vv73vv73vv73vv73vv70g77+977+977+977+9XHJcbiAgICB9ZWxzZXtmaXhEaWdpdD10aW1lO30gIC8vMTDvv73vv73vv73vv70gxanvv73vv70g77+977+9IO+/vde077+977+977+9XHJcbiAgICByZXR1cm4gZml4RGlnaXQ7fVxyXG5cclxuICAvLy8vLy8vLy8vLy8vcnVubnVuZyB0aW1lLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICQoJ2F1ZGlvJykub24oJ3RpbWV1cGRhdGUnLGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgdGltZT0gZGlnaXQoIE1hdGguZmxvb3IoJGF1ZGlvLmN1cnJlbnRUaW1lLzYwKSApKyAnOicgKyBkaWdpdCggTWF0aC5mbG9vcigkYXVkaW8uY3VycmVudFRpbWUgJSA2MCkgKTtcclxuICAgIC8v77+977+9Ou+/ve+/ve+/ve+/ve+/ve+/vVxyXG5cclxuICAgICQoJy5jdXJyZW50LXRpbWUnKS5odG1sKHRpbWUpOyAvL2RpZ2l0IO+/vdS877+977+977+9IHRpbWUg77+977+977+977+977+9z7/vv70g77+977+977+977+9LlxyXG5cclxuICAgIC8vcHJvZ3Jlc3MgYmFyIO+/ve+/ve+/vc6x77+977+977+9IO+/vdu877+977+977+977+977+977+977+9IO+/ve+/ve+/ve+/vSgg77+977+977+977+977+9w7Dvv70v77+977+9w7zvv73DsO+/vSAqIDEwMClcclxuICAgIHZhciBwcm9ncmVzc0JhciA9ICRhdWRpby5jdXJyZW50VGltZS8kYXVkaW8uZHVyYXRpb24qMTAwO1xyXG4gICAgJCgnLnByb2dyZXNzIC5iYXInKS5jc3Moeyd3aWR0aCc6IHByb2dyZXNzQmFyKyclJ30pO1xyXG4gIH0pO1xyXG5cclxuXHJcbiAgLy8vLy8vLy8vL++/ve+/vcawIMWs77+977+977+977+9IO+/vcO377+977+977+9K++/ve+/ve+/ve+/vSDvv73vv73vv73vv70vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICQoJy5idG4nKS5kYXRhKHsncGxheSc6ZmFsc2V9KS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgaWYoICQodGhpcykuZGF0YSgncGxheScpID09IGZhbHNlICl7XHJcbiAgICAgICRhdWRpby5wbGF5KCk7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3BsYXknKS5hZGRDbGFzcygncGF1c2UnKTtcclxuICAgICAgJCh0aGlzKS5kYXRhKHsncGxheSc6dHJ1ZX0pO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICRhdWRpby5wYXVzZSgpO1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdwYXVzZScpLmFkZENsYXNzKCdwbGF5Jyk7XHJcbiAgICAgICQodGhpcykuZGF0YSh7J3BsYXknOmZhbHNlfSk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59KTsvL++/ve+/ve+/ve+/ve+/ve+/vSDvv73vv70iLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMDkuXHJcbiAqL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4vLyQoJy5zZWN0aW9uMScpLm9uKCdtb3VzZXdoZWVsJyxmdW5jdGlvbigpe1xyXG4vL1xyXG4vLyAgJCgnLmludHJvZHVjZS10ZXh0Jykuc3RvcCgpLmFuaW1hdGUoe30sNTAwKTtcclxuLy9cclxuLy9cclxuLy8gIH0pXHJcblxyXG5cclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wNy5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIC8vLy8vLy8vLy8vL+2UhOuhnOq3uOueqCDrqZTribTrsJQg66eI7Jqw7IqkIOyYpOuyhOyLnCDquLjsnbQg64qY7J206riwLy8vLy8vXHJcblxyXG4gICQoJy5wcm9ncmFtLW1lbnUtcHJvZ3JhbTAyJykub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcucHJvZ3JhbS1tZW51LWNvbXBvc2VyMDInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCcucHJvZ3JhbS1tZW51LXByb2dyYW0wMicpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5wcm9ncmFtLW1lbnUtY29tcG9zZXIwMScpLm9uKCdtb3VzZWVudGVyJyxmdW5jdGlvbigpe1xyXG4gICAgJCgnLnByb2dyYW0tbWVudS1wcm9ncmFtMDEnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCcucHJvZ3JhbS1tZW51LWNvbXBvc2VyMDEnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy/rp4jsmrDsiqQg65ao7Ja07KeA66m0IOq4uOydtCDspITsnbTquLAvLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICQoJy5wcm9ncmFtLW1lbnUtY29tcG9zZXIwMScpLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCcucHJvZ3JhbS1tZW51LXByb2dyYW0wMScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5wcm9ncmFtLW1lbnUtcHJvZ3JhbTAyJykub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJy5wcm9ncmFtLW1lbnUtY29tcG9zZXIwMicpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG59KTtcclxuXHJcbi8vLy9zZWN0aW9uIOuzhCDsiqTtgazroaQg64+Z7J6RXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgJChcIi5tb3ZlLXNlY3Rpb25cIikuZWFjaChmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vIOqwnOuzhOyggeycvOuhnCBXaGVlbCDsnbTrsqTtirgg7KCB7JqpXHJcbiAgICAkKHRoaXMpLm9uKFwibW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbFwiLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgaWYoICEkKGUudGFyZ2V0KS5wYXJlbnQoKS5oYXNDbGFzcygnaW5uZXItc2Nyb2xsJykgKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGRlbHRhID0gMDtcclxuICAgICAgICBpZiAoIWV2ZW50KSBldmVudCA9IHdpbmRvdy5ldmVudDtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50LndoZWVsRGVsdGEpIHtcclxuICAgICAgICAgIGRlbHRhID0gZXZlbnQud2hlZWxEZWx0YSAvIDEyMDtcclxuICAgICAgICAgIGlmICh3aW5kb3cub3BlcmEpIGRlbHRhID0gLWRlbHRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChldmVudC5kZXRhaWwpIGRlbHRhID0gLWV2ZW50LmRldGFpbCAvIDM7XHJcblxyXG4gICAgICAgIHZhciBtb3ZlVG9wID0gbnVsbDtcclxuICAgICAgICAvLyDrp4jsmrDsiqTtnKDsnYQg7JyE7JeQ7IScIOyVhOuemOuhnFxyXG4gICAgICAgIGlmIChkZWx0YSA8IDApIHtcclxuICAgICAgICAgIGlmICgkKHRoaXMpLm5leHQoKSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbW92ZVRvcCA9ICQodGhpcykubmV4dCgpLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyDrp4jsmrDsiqTtnKDsnYQg7JWE656Y7JeQ7IScIOychOuhnFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoJCh0aGlzKS5wcmV2KCkgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG1vdmVUb3AgPSAkKHRoaXMpLnByZXYoKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDtmZTrqbQg7J2064+ZIDAuNey0iFxyXG4gICAgICAgICQoXCJodG1sLGJvZHlcIikuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgc2Nyb2xsVG9wOiBtb3ZlVG9wICsgJ3B4J1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGR1cmF0aW9uOiA1MDAsIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8v7ZSE66Gc6re4656oIOuCtCDsnbjrjbHsiqQgKOunge2BrCntgbTrpq3si5wg7Iqk7YGs66GkIOyVoOuLiOuplOydtOyFmFxyXG4gICQoJy5wcm9ncmFtLWxpc3QtdGV4dD5wPmEnKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIGhyZWY9ICQodGhpcykuYXR0cignaHJlZicpOyAvL2hyZWbqsJLsnYQg6rCA7KC47Ji0XHJcbiAgICB2YXIgc2Nyb2xsUG9zaXRpb249JChocmVmKS5vZmZzZXQoKS50b3A7XHJcblxyXG4gICAgY29uc29sZS5sb2coaHJlZik7XHJcblxyXG4gICAgJCgnYm9keScpLnN0b3AoKS5hbmltYXRlKHtzY3JvbGxUb3A6c2Nyb2xsUG9zaXRpb259KVxyXG5cclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgLy9IYXJ0bWFuIOydmCDqt7jrprwg66as7Iqk7Yq4IO2BtOumreyLnCDsmKTrpbjsqr3sl5Ag67O07Jes7KO86riwXHJcblxyXG5cclxuICAgICQoJy5obS1saW5rLTAxJykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAxJykuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDInKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAzJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNCcpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDUnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5obS1saW5rLTAyJykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDInKS5jc3MoeydkaXNwbGF5JzonYmxvY2snfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDMnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTA0JykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5obS1saW5rLTAzJykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDMnKS5jc3MoeydkaXNwbGF5JzonYmxvY2snfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMicpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDEnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTA0JykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5obS1saW5rLTA0Jykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDQnKS5jc3MoeydkaXNwbGF5JzonYmxvY2snfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMicpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDMnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAxJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5obS1saW5rLTA1Jykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDUnKS5jc3MoeydkaXNwbGF5JzonYmxvY2snfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMicpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDMnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTA0JykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG5cclxuICAgIH0pXHJcblxyXG5cclxuXHJcblxyXG59O1xyXG5cclxuIiwiXHJcbiQoZnVuY3Rpb24oKXtcclxuICAgIC8v66eI7Jqw7IqkIOyYpOuyhCDtlZjrqbQg7Ken7J2AIOuPmeyYgeyDgSDsnqzsg51cclxuXHJcbiAgICQoJy5tb3ZpZScpLm9uKCdtb3VzZWVudGVyJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcylbMF0ucGxheSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLm1vdmllJykub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKVswXS5wYXVzZSgpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbn0pO1xyXG4iXX0=
