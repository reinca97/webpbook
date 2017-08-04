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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImZ1bmN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy90b2dnbGUgdG9wIG1lbnVcclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcblxyXG4gICAgJCgnLm1lbnUtYnRuJykuZGF0YSh7J2NsaWNrZWQnOnRydWV9KS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgaWYoJCh0aGlzKS5kYXRhKCkuY2xpY2tlZCl7XHJcbiAgICAgICAgJCgnLmduYicpLmFkZENsYXNzKCdhY3RpdmUnKS5kYXRhKHsnY2xpY2tlZCc6ZmFsc2V9KTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgICQoJy5nbmInKS5yZW1vdmVDbGFzcygnYWN0aXZlJykuZGF0YSh7J2NsaWNrZWQnOnRydWV9KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgLy9sb2NhdGlvbiDsnZggZHJhd2VyIO2BtOumrSDrj5nsnpFcclxuXHJcblxyXG4gICAgJCgnLmRyYXdlci11cHNpZGUnKS5kYXRhKHsgJ29wZW4nOmZhbHNlfSkub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBpZiggJCh0aGlzKS5kYXRhKCkub3BlbiApe1xyXG4gICAgICAgICAgICAkKCcuZHJhd2VyLXVwc2lkZScpLnJlbW92ZUNsYXNzKCdzaHV0Jyk7XHJcbiAgICAgICAgICAgICQodGhpcykuZGF0YSh7J29wZW4nOmZhbHNlfSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICQoJy5kcmF3ZXItdXBzaWRlJykuYWRkQ2xhc3MoJ3NodXQnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKHsnb3Blbic6dHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuICAgICQoJy5kcmF3ZXItZG93bnNpZGUnKS5kYXRhKHsgJ29wZW4nOmZhbHNlfSkub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBpZiggJCh0aGlzKS5kYXRhKCkub3BlbiApe1xyXG4gICAgICAgICAgICAkKCcuZHJhd2VyLWRvd25zaWRlJykucmVtb3ZlQ2xhc3MoJ3NodXQnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKHsnb3Blbic6ZmFsc2V9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgJCgnLmRyYXdlci1kb3duc2lkZScpLmFkZENsYXNzKCdzaHV0Jyk7XHJcbiAgICAgICAgICAgICQodGhpcykuZGF0YSh7J29wZW4nOnRydWV9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxufSk7XHJcbiJdfQ==
