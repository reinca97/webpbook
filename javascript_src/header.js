//toggle top menu

$(function(){


    $('.menu-btn').data({'clicked':true}).on('click',function(){

    if($(this).data().clicked){
        $('.gnb').addClass('active').data({'clicked':false});
    }else{
        $('.gnb').removeClass('active').data({'clicked':true});
    }



    })



});