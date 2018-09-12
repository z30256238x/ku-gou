Vue.filter("numFilter",function(e){
    if(e<10){
        return "0"+e;
    }
    return e;
})
new Vue({
    el:"#section",
    data(){
        return{
            playlist:null
        }
    },
    created(){
        axios.get("http://localhost:3000/playlist").then((res)=>{
            this.playlist=res.data;
        })
    }
});
$(function(){
    var $allSelect=$("#section>div.container>:last>:last>:eq(1)").find(":checkbox");
    var $allplay=$("#section>div.container>:last>:last>:gt(1)");
    $allplay.hover(function(){
        $(this).css("background","#DAF1FB").find("span:empty").first().css("background-position","-59px -20px").next().css("background-position","0 -20px")
    },function(){
        $(this).css("background","white").find("span:empty").first().css("background-position","-19px 0px").next().css("background-position","0 0px")
    }).each(function(){
        $(this).find(":checkbox").click(function(){
            var nchecked=$allplay.find(":checkbox:not(:checked)");
            if(nchecked.html()==undefined){
                $allSelect[0].checked=true;
            }else{
                $allSelect[0].checked=false;
            }
        })
    });
    $allSelect.click(function(){
        var all=$(this)[0].checked;
        $("#section>div.container>:last>:last>:gt(1)").each(function(){
            $(this).find(":checkbox")[0].checked=all;
        });
    })
})