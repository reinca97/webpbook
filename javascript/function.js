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
 * Created by Administrator on 2017-08-07.
 */

$(function(){

  //∏ﬁ¥∫πŸ ∏∂øÏΩ∫ ø¿πˆΩ√ ±Ê¿Ã ∫Ø∞Ê

  $('.program-menu-program').on('mouseenter',function(){

    $('.program-menu-composer').removeClass('active');
    $('.program-menu-program').addClass('active');

  });


  $('.program-menu-composer').on('mouseenter',function(){

    $('.program-menu-program').removeClass('active');
    $('.program-menu-composer').addClass('active');

  });

  $('.program-menu-composer').on('mouseleave',function(){
    $(this).removeClass('active');
    $('.program-menu-program').addClass('active');

  });



});

////section ∫∞ Ω∫≈©∑— µø¿€

window.onload = function () {
  $(".move-section").each(function () {
    // ∞≥∫∞¿˚¿∏∑Œ Wheel ¿Ã∫•∆Æ ¿˚øÎ
    $(this).on("mousewheel DOMMouseScroll", function (e) {
      e.preventDefault();
      var delta = 0;
      if (!event) event = window.event;



          if (event.wheelDelta) {
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta;
      } else if (event.detail) delta = -event.detail / 3;
      var moveTop = null;

      // ∏∂øÏΩ∫»Ÿ¿ª ¿ßø°º≠ æ∆∑°∑Œ
      if (delta < 0) {
        if ($(this).next() != undefined) {
          moveTop = $(this).next().offset().top;
        }

        // ∏∂øÏΩ∫»Ÿ¿ª æ∆∑°ø°º≠ ¿ß∑Œ
      } else {
        if ($(this).prev() != undefined) {
          moveTop = $(this).prev().offset().top;
        }
      }
      // »≠∏È ¿Ãµø 0.5√ 
      $("html,body").stop().animate({
        scrollTop: moveTop + 'px'
      }, {
        duration: 500, complete: function () {
        }
      });
    });
  });

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImduYl9sb2NhdGlvbi5qcyIsInByb2dyYW0uanMiLCJyZXBsYXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJmdW5jdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vdG9nZ2xlIHRvcCBtZW51XHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgLy9nbmIg66mU64m067KE7Yq8LCDrgpjqsIDquLAg7YG066atIOuPmeyekVxyXG5cclxuICAgICQoJy5tZW51LWJ0bicpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgJCgnLmduYicpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKCcuZ25iLWV4aXQtYnRuJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAkKCcuZ25iJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgLy9sb2NhdGlvbiDsnZggZHJhd2VyIO2BtOumrSDrj5nsnpFcclxuXHJcblxyXG4gICAgJCgnLmRyYXdlci11cHNpZGUnKS5kYXRhKHsgJ29wZW4nOnRydWV9KS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmKCAkKHRoaXMpLmRhdGEoKS5vcGVuICl7XHJcbiAgICAgICAgICAgICQoJy5kcmF3ZXItdXBzaWRlJykucmVtb3ZlQ2xhc3MoJ3NodXQnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKHsnb3Blbic6ZmFsc2V9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgJCgnLmRyYXdlci11cHNpZGUnKS5hZGRDbGFzcygnc2h1dCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoeydvcGVuJzp0cnVlfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG4gICAgJCgnLmRyYXdlci1kb3duc2lkZScpLmRhdGEoeyAnb3Blbic6dHJ1ZX0pLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgaWYoICQodGhpcykuZGF0YSgpLm9wZW4gKXtcclxuICAgICAgICAgICAgJCgnLmRyYXdlci1kb3duc2lkZScpLnJlbW92ZUNsYXNzKCdzaHV0Jyk7XHJcbiAgICAgICAgICAgICQodGhpcykuZGF0YSh7J29wZW4nOmZhbHNlfSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICQoJy5kcmF3ZXItZG93bnNpZGUnKS5hZGRDbGFzcygnc2h1dCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoeydvcGVuJzp0cnVlfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvL1xyXG5cclxuXHJcblxyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTA3LlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgLy/vv73etO+/ve+/ve+/vSDvv73vv73vv73svbog77+977+977+977+977+977+9IO+/ve+/ve+/ve+/vSDvv73vv73vv73vv71cclxuXHJcbiAgJCgnLnByb2dyYW0tbWVudS1wcm9ncmFtJykub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCgnLnByb2dyYW0tbWVudS1jb21wb3NlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJy5wcm9ncmFtLW1lbnUtcHJvZ3JhbScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgfSk7XHJcblxyXG5cclxuICAkKCcucHJvZ3JhbS1tZW51LWNvbXBvc2VyJykub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCgnLnByb2dyYW0tbWVudS1wcm9ncmFtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnLnByb2dyYW0tbWVudS1jb21wb3NlcicpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5wcm9ncmFtLW1lbnUtY29tcG9zZXInKS5vbignbW91c2VsZWF2ZScsZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnLnByb2dyYW0tbWVudS1wcm9ncmFtJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICB9KTtcclxuXHJcblxyXG5cclxufSk7XHJcblxyXG4vLy8vc2VjdGlvbiDvv73vv70g77+977+9xanvv73vv70g77+977+977+977+9XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICQoXCIubW92ZS1zZWN0aW9uXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgLy8g77+977+977+977+977+977+977+977+977+977+9IFdoZWVsIO+/vcy677+9xq4g77+977+977+977+9XHJcbiAgICAkKHRoaXMpLm9uKFwibW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHZhciBkZWx0YSA9IDA7XHJcbiAgICAgIGlmICghZXZlbnQpIGV2ZW50ID0gd2luZG93LmV2ZW50O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgaWYgKGV2ZW50LndoZWVsRGVsdGEpIHtcclxuICAgICAgICBkZWx0YSA9IGV2ZW50LndoZWVsRGVsdGEgLyAxMjA7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5vcGVyYSkgZGVsdGEgPSAtZGVsdGE7XHJcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQuZGV0YWlsKSBkZWx0YSA9IC1ldmVudC5kZXRhaWwgLyAzO1xyXG4gICAgICB2YXIgbW92ZVRvcCA9IG51bGw7XHJcblxyXG4gICAgICAvLyDvv73vv73vv73svbrvv73vv73vv73vv70g77+977+977+977+977+977+9IO+/vca377+977+977+9XHJcbiAgICAgIGlmIChkZWx0YSA8IDApIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS5uZXh0KCkgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBtb3ZlVG9wID0gJCh0aGlzKS5uZXh0KCkub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g77+977+977+97L2677+977+977+977+9IO+/vca377+977+977+977+977+9IO+/ve+/ve+/ve+/vVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLnByZXYoKSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIG1vdmVUb3AgPSAkKHRoaXMpLnByZXYoKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIMit77+977+9IO+/vcy177+9IDAuNe+/ve+/vVxyXG4gICAgICAkKFwiaHRtbCxib2R5XCIpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICBzY3JvbGxUb3A6IG1vdmVUb3AgKyAncHgnXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkdXJhdGlvbjogNTAwLCBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbn07XHJcblxyXG4iLCJcclxuJChmdW5jdGlvbigpe1xyXG4gICAgLy/rp4jsmrDsiqQg7Jik67KEIO2VmOuptCDsp6fsnYAg64+Z7JiB7IOBIOyerOyDnVxyXG5cclxuICAgJCgnLm1vdmllJykub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKVswXS5wbGF5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcubW92aWUnKS5vbignbW91c2VsZWF2ZScsZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpWzBdLnBhdXNlKCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxufSk7XHJcbiJdfQ==
