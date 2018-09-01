/**
 * Created by web on 2018/8/18.
 */
$(function(){
    $.ajax({
        url:"http://localhost:3000/footer.html",
        success:function(res){
            $("#footer").html(res);
        }
    })
})
