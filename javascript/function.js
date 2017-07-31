//toggle top menu

$(function(){


    $('.menu-btn').on('click',function(){

        $('.gnb').addClass('active');
    });




    $('.gnb-exit-btn').on('click',function(){

            $('.gnb').removeClass('active');


    })




});