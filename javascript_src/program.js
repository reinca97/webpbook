/**
 * Created by Administrator on 2017-08-07.
 */

$(function(){

  //�޴��� ���콺 ������ ���� ����

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

////section �� ��ũ�� ����

window.onload = function () {
  $(".move-section").each(function () {
    // ���������� Wheel �̺�Ʈ ����
    $(this).on("mousewheel DOMMouseScroll", function (e) {
      e.preventDefault();
      var delta = 0;
      if (!event) event = window.event;



          if (event.wheelDelta) {
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta;
      } else if (event.detail) delta = -event.detail / 3;
      var moveTop = null;

      // ���콺���� ������ �Ʒ���
      if (delta < 0) {
        if ($(this).next() != undefined) {
          moveTop = $(this).next().offset().top;
        }

        // ���콺���� �Ʒ����� ����
      } else {
        if ($(this).prev() != undefined) {
          moveTop = $(this).prev().offset().top;
        }
      }
      // ȭ�� �̵� 0.5��
      $("html,body").stop().animate({
        scrollTop: moveTop + 'px'
      }, {
        duration: 500, complete: function () {
        }
      });
    });
  });

};

