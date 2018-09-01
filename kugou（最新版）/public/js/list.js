$(function(){
    var $target=$("#child_1>div:first>div:first>div");
    $target.on("click","div:eq(0)",function () {
        if($(this).next().attr("class").indexOf("d-flex")==-1){
            $(this).siblings().addClass("d-flex");
            $(this).children(":last").removeClass("list_iconUp").addClass("list_iconDown")
        }else{
            $(this).siblings().removeClass("d-flex");
            $(this).children(":last").removeClass("list_iconDown").addClass("list_iconUp")
        }
    });
    $target.on("click","div:gt(0)",function(){
        $("#child_1>div:first>div:first>div>div:gt(0)").each(function(){
            $(this).removeClass("nav_active");
        });
        $(this).addClass("nav_active");
    });
    $("#child_1>div:first>div:last>div:gt(1)").hover(function () {
        $(this).css("background","#f5f8fb").children(":gt(2)").css("color","#009af3");
        $(this).children("[class*=d-none]").removeClass("d-none");
    },
        function(){
        $(this).css("background","transparent").children(":gt(2)").css("color","black");
        $(this).children(":gt(3):not(:last)").addClass("d-none");
        }
        );
});