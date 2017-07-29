//toggle top menu

$(function(){


    $('.menu-btn').data({'clicked':true}).on('click',function(){

    if($(this).data().clicked){
        $(this).addClass('active').data({'clicked':false});
    }else{
        $(this).removeClass('active').data({'clicked':true});
    }
    })



});