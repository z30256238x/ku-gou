Vue.filter("numFilter",function(e){
    return `${(e/10000).toFixed(1)}万`
});
new Vue({
    el:"#section",
    data(){
        return {
            carousel:null,
            jxgd:null,
            rmbd:null,
            xgsf_hy:null,
            xgsf_om:null,
            xgsf_hg:null,
            xgsf_rb:null,
        }
    },
    created(){
        axios.get("http://localhost:3000/index/carousel").then((res)=>{
            this.carousel=res.data;
        });
        axios.get("http://localhost:3000/index/jxgd").then((res)=>{
            this.jxgd=res.data;
        });
        axios.get("http://localhost:3000/index/rmbd").then((res)=>{
            this.rmbd=res.data;
        });
        axios.get("http://localhost:3000/index/xgsf",{params:{id:"hy"}}).then((res)=>{
            this.xgsf_hy=res.data;
        });
        axios.get("http://localhost:3000/index/xgsf",{params:{id:"om"}}).then((res)=>{
            this.xgsf_om=res.data;
        });
        axios.get("http://localhost:3000/index/xgsf",{params:{id:"hg"}}).then((res)=>{
            this.xgsf_hg=res.data;
        });
        axios.get("http://localhost:3000/index/xgsf",{params:{id:"rb"}}).then((res)=>{
            this.xgsf_rb=res.data;
        });
    },
    beforeUpdate(){
        $(function(){
            $("[data-play=play]").parent().hover(
                function(){
                    var $a=$(this);
                    $a.children("[data-play=play]").removeClass("invisible")
                },
                function(){
                    var $a=$(this);
                    $a.children("[data-play=play]").addClass("invisible")
                }
            );
            $("#xgsf>div:nth-child(2)>div:first-child>ul:first").show().siblings().hide().children();
            $("#xgsf>div:nth-child(2)>div:first-child>ul>li>span:first-child").addClass("pl-2");
            $("#xgsf>div:first-child>div:nth-child(2)>nav>div>a").hover(function(){
                var $btn=$(this);
                var id=$btn.attr("href");
                $(id).show().siblings().hide();
            })
            $("#xgsf>div:nth-child(2)>div:first-child>ul>li").hover(
                function(){
                    var $h=$(this);
                    $h.children().removeClass("d-none");
                },function(){
                    var $h=$(this);
                    $h.children("[class*=play]").addClass("d-none").siblings("[class*=load]").addClass("d-none");
                }
            );
            $("#rmdt").find("[data-play=play]").parent().parent().hover(
                function(){
                    $(this).children(":last").css("color","#009af3")
                },
                function(){
                    $(this).children(":last").css("color","black")
                }
            );
            $("#hy1").show().siblings().hide();
            $("#rmdt>div>div:nth-child(2)>div>a").hover(
                function(){
                    var $t=$(this);
                    var id=$t.attr("href");
                    $(id).show().siblings().hide();
                }
            );
            $("#hy>li").click(function(){
                open("http://localhost:3000/detailAudio.html");
            });
            $("#carousel>:last>ul>li").click(function(){
                open("httP://localhost:3000/download.html")
            });
            $("#bangdan>div").click(function(){
                open("http://localhost:3000/list.html?lid=2")
            })
        });
    }
});

