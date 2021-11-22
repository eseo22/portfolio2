$("body").on("mousemove", ".item div.on", function(e){
    var cx = $(this).offset().left;
    var cy = $(this).offset().top;

    var x = (e.pageX - cx - 20);
    var y = (e.pageY - cy - 20);

    $(this).find(".circle").css({top: y, left : x });

})

$(".item div.on").on("mouseenter", function(){
    $(this).find(".circle").css({opacity:1});
    
})
$(".item div.on").on("mouseleave", function(){
    $(this).find(".circle").css({opacity:0})
})