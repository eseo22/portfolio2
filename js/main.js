var vid = document.querySelector("video");

$("video").on("mouseenter", function(){
    vid.play();
});

$("video").on("mouseleave", function(){
    vid.pause();
});

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


//팝업
$(".frame").on("click", function (e) {
    e.preventDefault();
    let target = $(this).find("img").attr("src");
    console.log(target);
    $(".pop").remove();
    
    $("body").append(
        $("<aside class = 'pop'>").append(
            $("<div class = 'inner'>").append(
                $("<img>").attr({src: target}),
                $("<p>").text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, cumque eum voluptatem temporibus explicabo quibusdam deleniti quidem fuga quae provident harum aperiam consectetur magnam blanditiis totam dolore? Quo, nobis impedit."),
                $("<span class='btnClose'>").text("close")
            )
        )
    )
});
$(".vid").on("click", function(e){
    e.preventDefault();
    let target2 = $(this).find("video").attr("src");
    $(".pop2").remove();
    $("body").append(
        $("<aside class = 'pop2'>").append(
            $("<div class = 'inner'>").append(
                $("<video muted autoplay loop>").attr({src: target2}),
                $("<p>").text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, cumque eum voluptatem temporibus explicabo quibusdam deleniti quidem fuga quae provident harum aperiam consectetur magnam blanditiis totam dolore? Quo, nobis impedit."),
                $("<span class='btnClose'>").text("close")
            )
        )
    )
})


//레이어 닫기버튼 클릭시 제거
$("body").on("click", ".btnClose", function () {
    $(".pop").remove();
    $(".pop2").remove();

});