/**
 * Created by web on 2018/8/18.
 */
$(function(){
    $.ajax({
        url:"http://localhost:3000/header.html"
    }).then(res=>{
        $("#header").html(res);
        $("#header_container>div>div:first>div>div>div").find(":text").css("width","294px");

        $("#last_row>div>div>div:first-child>div.d_down").hover(function(){
                var $nav=$(this);
                $nav.children().first().addClass("active");
                $nav.children().first().children().attr("src","img/index/arrowMoreu.png");
                $nav.children().last().removeClass("d-none");
            },
            function(){
                var $nav=$(this);
                $nav.children().first().removeClass("active");
                $nav.children().first().children().attr("src","img/index/arrowMored.png");
                $nav.children().last().addClass("d-none");
            }
        );
        $("#last_row>div>div>div:last-child>a").hover(function(){
            $(this).removeClass("text-muted");
        },function(){
            $(this).addClass("text-muted");
        });
        $("#last_row>div>div>div:first-child").children(":not(:last-child)").hover(function(){
            var $nav=$(this);
            $nav.css({"background":"#0c8ed9"})
        },function(){
            var $nav=$(this);
            $nav.css("background","#2c323b")
        }).click(function(){
            sessionStorage["id"]=$(this).data("id")
            }).each(function(){
            if($(this).data("id")==sessionStorage["id"])
            {
                $(this).addClass("active").siblings().removeClass("active");
                sessionStorage["id"]="";
            }else{
                $(this).removeClass("active");
            }
        })
    })
})
