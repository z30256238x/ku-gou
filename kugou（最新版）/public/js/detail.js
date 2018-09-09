$(function(){
    $("#section").css("height",`${innerHeight-139}px`);
    $("#playnav>div:first>div:first>div:first>span:eq(1)").on("click",function(){
        var $btn=$(this);
        if($("#audio")[0].paused===false){
            $btn.removeClass("toggle-play").addClass("toggle-stop");
            $("#audio")[0].pause();
        }else{
            $btn.removeClass("toggle-stop").addClass("toggle-play");
            $("#audio")[0].play();
        };

    })
    //获得音乐总时长:
    var timers=parseInt($("#audio")[0].duration);
    console.log(timers);
    $("#audio").next().children().last().html(timeTransfor(timers));
    function timeTransfor(t){
        var m=parseInt(t/60);
        var s=t%60;
        if(m<10){
            m="0"+m;
        };
        if(s<10){
            s="0"+s;
        }
        return `${m}:${s}`;
    }
    //获得当前音乐播放时长//时间进度条
    var t=setInterval(function(){
        var currentime=parseInt($("#audio")[0].currentTime);
        $("#audio").next().children().first().html(timeTransfor(currentime));
        var width=`${(currentime/timers)*385}px`;
        $("#progress>div>div>:first").css("width",width);
        if($("#audio")[0].ended)
            clearInterval(t)
    },1000);
    //实现进度条拖拽；
    var canmove=false;
    $("#progress>div>div>span:nth-child(3)").mousedown(function(){canmove=true});
    $("#progress>div>div>span:nth-child(3)").mouseup(function(){canmove=false});
    window.onmousemove=function(e){
        if(canmove){
            var a=e.clientX;
            var width=a-$("#progress>div>div>span:last").offset().left;
            $("#progress>div>div>span:first").css("width",width-6+"px");
            $("#audio")[0].currentTime=width/385*timers;
        }
    }
    //控制音量大小；
    var movecan=false;
    $("#audio")[0].volume=0;
    $("#volume").hover(function(){
        $(this).prev().removeClass("d-none").addClass("d-flex")
    }).prev().mouseleave(function(){
        $(this).removeClass("d-flex").addClass("d-none")
    }).children().children().last().on("mousedown",function () {
        movecan=true;
    }).on("mouseup",function(){
        movecan=false;
    }).on("mousemove",function(e){
        if(movecan){
            let height=e.clientY-$(this).offset().top;
            height=height<=0?0:height>88?90:height;
            let h=$(this).innerHeight()-height;
            $(this).prev().css("height",h-4.5+"px");
            var v=h/$(this).innerHeight();
            $("#audio")[0].volume=v;
            if(v>0){
                $("#volume").removeClass("volume-close").addClass("volume-open")
            }else{
                $("#volume").removeClass("volume-open").addClass("volume-close")
            }
        }})
    //模式切换
    $("#mode>ul>:nth-child(3)").on("mouseenter",function(){
        $(this).prev().prev().removeClass("d-flex").addClass("d-none");
    }).on("click",function(){
        console.log(1)
        if($(this).children().is("[class*=d-none]")){
            $(this).children().addClass("d-flex").removeClass("d-none")
        }else{
            $(this).children().addClass("d-none").removeClass("d-flex")
        }
    }).find("div>ul>li").on("click",function(){
        $(this).parent().parent().parent().removeClass("model singer-cycle random-cycle");
        if($(this).children().first().is("[class*=model]")){
            $(this).parent().parent().parent().addClass("model")
        }else if($(this).children().first().is("[class*=singer-cycle]")){
            $(this).parent().parent().parent().addClass("singer-cycle")
        }else if($(this).children().first().is("[class*=random-cycle]")){
            $(this).parent().parent().parent().addClass("random-cycle")
        }
    })
    //播放列表
    var playlists=$("#playlist>[class*=row]").length;
    $("#playlist>[class*=row]").hover(function(){
        $(this).addClass("playlisthover").children(":eq(1)").children().last().removeClass("d-none")
    },function(){
        $(this).removeClass("playlisthover").children(":eq(1)").children().last().addClass("d-none")
    });
    $("#mode>ul>:eq(5)").click(function(){
         $(this).next().toggleClass("d-none")
    }).html(playlists);
    //删除列表歌单；关闭播放列表清单；
    $("#mode>ul>:last>div:first>h5>span").html(playlists).parent().next().click(function(){
        $("#playlist").remove();
        $("#mode>ul>:eq(5)").html(`${$("#playlist>[class*=row]").length}`);
        $("#mode>ul>:last>div:first>h5>span").html(`${$("#playlist>[class*=row]").length}`);
    }).next().next().click(function(){
        $(this).parent().parent().addClass("d-none")
    });
    //每首歌删除按钮事件
        $("#playlist>div").each(function(){
            $(this).children(":eq(1)").children(":last").children(":last").click(function(){
                $(this).parent().parent().parent().remove();

                $("#playlist>div").each(function(i){
                    $(this).children().first().html(i+1);
                })
                $("#mode>ul>:eq(5)").html(`${$("#playlist>[class*=row]").length}`);
                $("#mode>ul>:last>div:first>h5>span").html(`${$("#playlist>[class*=row]").length}`);
            });
        })
    //播放列表排序
    $("#playlist>div").each(function(i){
        $(this).children().first().html(i+1);
    })
    //激活播放功能
    $("#playlist>div").click(function(){
        $(this).addClass("play-active").siblings().removeClass("play-active");
    });
    //歌词滚动播放
    var i=0;
    var timer=setInterval(function(){
        var currentTime=parseInt($("#audio")[0].currentTime);
        if(currentTime>25){
            var stime=parseInt((currentTime-25)/(timers-25)*($("#lyric-scroll>p").length-10));
            $("#lyric-scroll").css("top",`-${40*stime}px`);
            $("#lyric-scroll>p[class*=lyric-active]").removeClass("lyric-active");
            $("#lyric-scroll").children(`:eq(${stime+3})`).addClass("lyric-active")
        }else{
            if($("#audio")[0].paused===false){
                i++;
                if(i<=3){
                    $("#lyric-scroll>p[class*=lyric-active]").removeClass("lyric-active").next().addClass("lyric-active")
                }
            }
        }
        if(currentTime==timers){
            clearInterval(timer)
        }
    },1000);
})