

jQuery(".allquestions").children().first().addClass('show');
jQuery(".nxtbtn").click(function(){
   jQuery(".show").removeClass("show").next().addClass("show");
   if (jQuery('.show').next().length == 0) {
                   jQuery(".nxtbtn").hide();
                   jQuery(".sbmit").show();
               }
});

jQuery(".allquestions").children().first().addClass('show');
jQuery(".prebtn").click(function(){
   jQuery(".show").removeClass("show").prev().addClass("show");
   if (jQuery('.show').prev().length == 0) {
                   jQuery(".nxtbtn").show();
                   jQuery(".sbmit").show();
               }
});

var total=0;
jQuery(".quizbtns").click(function(){
value = jQuery(this).attr('data-val');
if(value == 'true'){
   jQuery('.quizbtns').css('background','none');
   jQuery(this).css('background','green' );
   total ++;
   jQuery(".totalmarks").text(total);
}
else if (value == 'false'){
   jQuery('.quizbtns').css('background','none')
   jQuery(this).css('background','red');

   jQuery(this).closest('.question').addClass('answered');
}
});
jQuery(".sbmit").click(function(){
 jQuery(".result").show()
 jQuery(".quizbtns").off('click');
});



