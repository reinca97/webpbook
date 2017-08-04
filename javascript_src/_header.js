//toggle top menu

$(function(){


    $('.menu-btn').data({'clicked':true}).on('click',function(){

    if($(this).data().clicked){
        $('.gnb').addClass('active').data({'clicked':false});
    }else{
        $('.gnb').removeClass('active').data({'clicked':true});
    }



    });



    //location 의 drawer 클릭 동작


    $('.drawer-upside').data({ 'open':false}).on('click',function(){

        if( $(this).data().open ){
            $('.drawer-upside').removeClass('shut');
            $(this).data({'open':false});
        }else{
            $('.drawer-upside').addClass('shut');
            $(this).data({'open':true});
        }

    });
    $('.drawer-downside').data({ 'open':false}).on('click',function(){

        if( $(this).data().open ){
            $('.drawer-downside').removeClass('shut');
            $(this).data({'open':false});
        }else{
            $('.drawer-downside').addClass('shut');
            $(this).data({'open':true});
        }

    });


});
