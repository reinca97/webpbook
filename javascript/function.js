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



window.on('load',function(){
  $('.container').hide();
  $('.program-detail-01').show();

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImduYl9sb2NhdGlvbi5qcyIsIm11c2ljX3BsYXllci5qcyIsInBsYXllcl9kZXRhaWwuanMiLCJwcm9ncmFtLmpzIiwicmVwbGF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJmdW5jdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vdG9nZ2xlIHRvcCBtZW51XHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgLy9nbmIg66mU64m067KE7Yq8LCDrgpjqsIDquLAg7YG066atIOuPmeyekVxyXG5cclxuICAgICQoJy5tZW51LWJ0bicpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgJCgnLmduYicpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKCcuZ25iLWV4aXQtYnRuJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAkKCcuZ25iJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgLy9sb2NhdGlvbiDsnZggZHJhd2VyIO2BtOumrSDrj5nsnpFcclxuXHJcblxyXG4gICAgJCgnLmRyYXdlci11cHNpZGUnKS5kYXRhKHsgJ29wZW4nOnRydWV9KS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmKCAkKHRoaXMpLmRhdGEoKS5vcGVuICl7XHJcbiAgICAgICAgICAgICQoJy5kcmF3ZXItdXBzaWRlJykucmVtb3ZlQ2xhc3MoJ3NodXQnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKHsnb3Blbic6ZmFsc2V9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgJCgnLmRyYXdlci11cHNpZGUnKS5hZGRDbGFzcygnc2h1dCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoeydvcGVuJzp0cnVlfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG4gICAgJCgnLmRyYXdlci1kb3duc2lkZScpLmRhdGEoeyAnb3Blbic6dHJ1ZX0pLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgaWYoICQodGhpcykuZGF0YSgpLm9wZW4gKXtcclxuICAgICAgICAgICAgJCgnLmRyYXdlci1kb3duc2lkZScpLnJlbW92ZUNsYXNzKCdzaHV0Jyk7XHJcbiAgICAgICAgICAgICQodGhpcykuZGF0YSh7J29wZW4nOmZhbHNlfSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICQoJy5kcmF3ZXItZG93bnNpZGUnKS5hZGRDbGFzcygnc2h1dCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoeydvcGVuJzp0cnVlfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvL1xyXG5cclxuXHJcblxyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTEwLlxyXG4gKi9cclxuJChmdW5jdGlvbigpe1xyXG5cclxuXHJcbiAgdmFyICRhdWRpbyA9JCgnLmF1ZGlvJylbMF07XHJcblxyXG5cclxuICAkKCcuYXVkaW8nKS5vbignbG9hZGVkbWV0YWRhdGEnLGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zb2xlLmxvZyhNYXRoLmZsb29yKCRhdWRpby5kdXJhdGlvbi82MCkrICc6JyArIE1hdGguZmxvb3IoJGF1ZGlvLmR1cmF0aW9uICUgNjApICk7IC8v77+977+9IDog77+977+977+977+977+977+9ICAtLT55YXR0YSFcclxuICB9KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vICMjOiMjIO+/ve+/ve+/vcK377+9ICAvLy8vLy8vLy8vL1xyXG4gIGZ1bmN0aW9uIGRpZ2l0KHRpbWUpe1xyXG4gICAgdmFyIGZpeERpZ2l0O1xyXG5cclxuICAgIGlmKHRpbWU8MTApe2ZpeERpZ2l0PScwJyt0aW1lOyAgLy8xMO+/ve+/ve+/ve+/vSDvv73vv73vv73vv73vv73vv73vv73vv70g77+977+977+977+977+977+9IO+/ve+/ve+/ve+/vVxyXG4gICAgfWVsc2V7Zml4RGlnaXQ9dGltZTt9ICAvLzEw77+977+977+977+9IMWp77+977+9IO+/ve+/vSDvv73XtO+/ve+/ve+/vVxyXG4gICAgcmV0dXJuIGZpeERpZ2l0O31cclxuXHJcbiAgLy8vLy8vLy8vLy8vL3J1bm51bmcgdGltZS8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAkKCdhdWRpbycpLm9uKCd0aW1ldXBkYXRlJyxmdW5jdGlvbigpe1xyXG4gICAgdmFyIHRpbWU9IGRpZ2l0KCBNYXRoLmZsb29yKCRhdWRpby5jdXJyZW50VGltZS82MCkgKSsgJzonICsgZGlnaXQoIE1hdGguZmxvb3IoJGF1ZGlvLmN1cnJlbnRUaW1lICUgNjApICk7XHJcbiAgICAvL++/ve+/vTrvv73vv73vv73vv73vv73vv71cclxuXHJcbiAgICAkKCcuY3VycmVudC10aW1lJykuaHRtbCh0aW1lKTsgLy9kaWdpdCDvv73UvO+/ve+/ve+/vSB0aW1lIO+/ve+/ve+/ve+/ve+/vc+/77+9IO+/ve+/ve+/ve+/vS5cclxuXHJcbiAgICAvL3Byb2dyZXNzIGJhciDvv73vv73vv73Ose+/ve+/ve+/vSDvv73bvO+/ve+/ve+/ve+/ve+/ve+/ve+/vSDvv73vv73vv73vv70oIO+/ve+/ve+/ve+/ve+/vcOw77+9L++/ve+/vcO877+9w7Dvv70gKiAxMDApXHJcbiAgICB2YXIgcHJvZ3Jlc3NCYXIgPSAkYXVkaW8uY3VycmVudFRpbWUvJGF1ZGlvLmR1cmF0aW9uKjEwMDtcclxuICAgICQoJy5wcm9ncmVzcyAuYmFyJykuY3NzKHsnd2lkdGgnOiBwcm9ncmVzc0JhcisnJSd9KTtcclxuICB9KTtcclxuXHJcblxyXG4gIC8vLy8vLy8vLy/vv73vv73GsCDFrO+/ve+/ve+/ve+/vSDvv73Dt++/ve+/ve+/vSvvv73vv73vv73vv70g77+977+977+977+9Ly8vLy8vLy8vLy8vLy8vLy9cclxuICAkKCcuYnRuJykuZGF0YSh7J3BsYXknOmZhbHNlfSkub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgIGlmKCAkKHRoaXMpLmRhdGEoJ3BsYXknKSA9PSBmYWxzZSApe1xyXG4gICAgICAkYXVkaW8ucGxheSgpO1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdwbGF5JykuYWRkQ2xhc3MoJ3BhdXNlJyk7XHJcbiAgICAgICQodGhpcykuZGF0YSh7J3BsYXknOnRydWV9KTtcclxuICAgIH1lbHNle1xyXG4gICAgICAkYXVkaW8ucGF1c2UoKTtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygncGF1c2UnKS5hZGRDbGFzcygncGxheScpO1xyXG4gICAgICAkKHRoaXMpLmRhdGEoeydwbGF5JzpmYWxzZX0pO1xyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufSk7Ly/vv73vv73vv73vv73vv73vv70g77+977+9IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTA5LlxyXG4gKi9cclxuJChmdW5jdGlvbigpe1xyXG5cclxuLy8kKCcuc2VjdGlvbjEnKS5vbignbW91c2V3aGVlbCcsZnVuY3Rpb24oKXtcclxuLy9cclxuLy8gICQoJy5pbnRyb2R1Y2UtdGV4dCcpLnN0b3AoKS5hbmltYXRlKHt9LDUwMCk7XHJcbi8vXHJcbi8vXHJcbi8vICB9KVxyXG5cclxuXHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMDcuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAvLy8vLy8vLy8vLy/tlITroZzqt7jrnqgg66mU64m067CUIOuniOyasOyKpCDsmKTrsoTsi5wg6ri47J20IOuKmOydtOq4sC8vLy8vL1xyXG5cclxuICAkKCcucHJvZ3JhbS1tZW51LXByb2dyYW0wMicpLm9uKCdtb3VzZWVudGVyJyxmdW5jdGlvbigpe1xyXG4gICAgJCgnLnByb2dyYW0tbWVudS1jb21wb3NlcjAyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnLnByb2dyYW0tbWVudS1wcm9ncmFtMDInKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcucHJvZ3JhbS1tZW51LWNvbXBvc2VyMDEnKS5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcclxuICAgICQoJy5wcm9ncmFtLW1lbnUtcHJvZ3JhbTAxJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnLnByb2dyYW0tbWVudS1jb21wb3NlcjAxJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8v66eI7Jqw7IqkIOuWqOyWtOyngOuptCDquLjsnbQg7KSE7J206riwLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAkKCcucHJvZ3JhbS1tZW51LWNvbXBvc2VyMDEnKS5vbignbW91c2VsZWF2ZScsZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnLnByb2dyYW0tbWVudS1wcm9ncmFtMDEnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcucHJvZ3JhbS1tZW51LXByb2dyYW0wMicpLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCcucHJvZ3JhbS1tZW51LWNvbXBvc2VyMDInKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxufSk7XHJcblxyXG5cclxuXHJcbi8vLy9zZWN0aW9uIOuzhCDsiqTtgazroaQg64+Z7J6RXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgJChcIi5tb3ZlLXNlY3Rpb25cIikuZWFjaChmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vIOqwnOuzhOyggeycvOuhnCBXaGVlbCDsnbTrsqTtirgg7KCB7JqpXHJcbiAgICAkKHRoaXMpLm9uKFwibW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbFwiLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgaWYoICEkKGUudGFyZ2V0KS5wYXJlbnQoKS5oYXNDbGFzcygnaW5uZXItc2Nyb2xsJykgKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGRlbHRhID0gMDtcclxuICAgICAgICBpZiAoIWV2ZW50KSBldmVudCA9IHdpbmRvdy5ldmVudDtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50LndoZWVsRGVsdGEpIHtcclxuICAgICAgICAgIGRlbHRhID0gZXZlbnQud2hlZWxEZWx0YSAvIDEyMDtcclxuICAgICAgICAgIGlmICh3aW5kb3cub3BlcmEpIGRlbHRhID0gLWRlbHRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChldmVudC5kZXRhaWwpIGRlbHRhID0gLWV2ZW50LmRldGFpbCAvIDM7XHJcblxyXG4gICAgICAgIHZhciBtb3ZlVG9wID0gbnVsbDtcclxuICAgICAgICAvLyDrp4jsmrDsiqTtnKDsnYQg7JyE7JeQ7IScIOyVhOuemOuhnFxyXG4gICAgICAgIGlmIChkZWx0YSA8IDApIHtcclxuICAgICAgICAgIGlmICgkKHRoaXMpLm5leHQoKSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbW92ZVRvcCA9ICQodGhpcykubmV4dCgpLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyDrp4jsmrDsiqTtnKDsnYQg7JWE656Y7JeQ7IScIOychOuhnFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoJCh0aGlzKS5wcmV2KCkgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG1vdmVUb3AgPSAkKHRoaXMpLnByZXYoKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDtmZTrqbQg7J2064+ZIDAuNey0iFxyXG4gICAgICAgICQoXCJodG1sLGJvZHlcIikuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgc2Nyb2xsVG9wOiBtb3ZlVG9wICsgJ3B4J1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGR1cmF0aW9uOiA1MDAsIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8v7ZSE66Gc6re4656oIOuCtCDsnbjrjbHsiqQgKOunge2BrCntgbTrpq3si5wg7Iqk7YGs66GkIOyVoOuLiOuplOydtOyFmFxyXG4gICQoJy5wcm9ncmFtLWxpc3QtdGV4dD5wPmEnKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIGhyZWY9ICQodGhpcykuYXR0cignaHJlZicpOyAvL2hyZWbqsJLsnYQg6rCA7KC47Ji0XHJcbiAgICB2YXIgc2Nyb2xsUG9zaXRpb249JChocmVmKS5vZmZzZXQoKS50b3A7XHJcblxyXG4gICAgY29uc29sZS5sb2coaHJlZik7XHJcblxyXG4gICAgJCgnYm9keScpLnN0b3AoKS5hbmltYXRlKHtzY3JvbGxUb3A6c2Nyb2xsUG9zaXRpb259KVxyXG5cclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgLy9IYXJ0bWFuIOydmCDqt7jrprwg66as7Iqk7Yq4IO2BtOumreyLnCDsmKTrpbjsqr3sl5Ag67O07Jes7KO86riwXHJcblxyXG5cclxuICAgICQoJy5obS1saW5rLTAxJykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAxJykuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDInKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAzJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNCcpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDUnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5obS1saW5rLTAyJykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDInKS5jc3MoeydkaXNwbGF5JzonYmxvY2snfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDMnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTA0JykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5obS1saW5rLTAzJykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDMnKS5jc3MoeydkaXNwbGF5JzonYmxvY2snfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMicpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDEnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTA0JykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5obS1saW5rLTA0Jykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDQnKS5jc3MoeydkaXNwbGF5JzonYmxvY2snfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMicpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDMnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTAxJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wNScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5obS1saW5rLTA1Jykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDUnKS5jc3MoeydkaXNwbGF5JzonYmxvY2snfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMicpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICQoJy5oYXJ0bWFubi1waWMtMDMnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAkKCcuaGFydG1hbm4tcGljLTA0JykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgJCgnLmhhcnRtYW5uLXBpYy0wMScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbn07XHJcblxyXG5cclxuXHJcbndpbmRvdy5vbignbG9hZCcsZnVuY3Rpb24oKXtcclxuICAkKCcuY29udGFpbmVyJykuaGlkZSgpO1xyXG4gICQoJy5wcm9ncmFtLWRldGFpbC0wMScpLnNob3coKTtcclxuXHJcbn0pO1xyXG5cclxuIiwiXHJcbiQoZnVuY3Rpb24oKXtcclxuICAgIC8v66eI7Jqw7IqkIOyYpOuyhCDtlZjrqbQg7Ken7J2AIOuPmeyYgeyDgSDsnqzsg51cclxuXHJcbiAgICQoJy5tb3ZpZScpLm9uKCdtb3VzZWVudGVyJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcylbMF0ucGxheSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLm1vdmllJykub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKVswXS5wYXVzZSgpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbn0pO1xyXG4iXX0=
