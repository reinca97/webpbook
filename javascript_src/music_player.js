/**
 * Created by Administrator on 2017-08-10.
 */
$(function(){


  var $audio =$('.audio')[0];


  $('.audio').on('loadedmetadata',function(){
    console.log(Math.floor($audio.duration/60)+ ':' + Math.floor($audio.duration % 60) ); //�� : ������  -->yatta!
  });

  //////////// ##:## ���·�  ///////////
  function digit(time){
    var fixDigit;

    if(time<10){fixDigit='0'+time;  //10���� ������� ������ ����
    }else{fixDigit=time;}  //10���� ũ�� �� �״��
    return fixDigit;}

  /////////////runnung time///////////////

  $('audio').on('timeupdate',function(){
    var time= digit( Math.floor($audio.currentTime/60) )+ ':' + digit( Math.floor($audio.currentTime % 60) );
    //��:������

    $('.current-time').html(time); //digit �Լ��� time �����Ͽ� ���.

    //progress bar ���α��� �ۼ������� ����( ����ð�/��ü�ð� * 100)
    var progressBar = $audio.currentTime/$audio.duration*100;
    $('.progress .bar').css({'width': progressBar+'%'});
  });


  //////////��ư Ŭ���� �÷���+���� ���/////////////////
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






});//������ ��