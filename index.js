$(document).ready(function(){
    var operation="";

    function bitCalc(){
        if(operation==="AND"){
            for(var i=1; i<=8; i++){
                if($("#i1"+i).hasClass("selected")&&$("#i2"+i).hasClass("selected")){
                    $("#i3"+i).addClass("selected");
                }
                else{
                    $("#i3"+i).removeClass("selected");
                }
            }
        }
    }
    $(".bit").on("click",function(){
            if($(this).hasClass("selected")){
            $(this).removeClass("selected");
            }else{
            $(this).addClass("selected");
            }
            bitCalc();
        });

        
    $(".ops").on("click",function(){
        $(".ops").each(function(){
        $(this).removeClass("opcho");
        });
        $(this).addClass("opcho");
        operation=$(this).text();
        bitCalc();
    });

    
    bitCalc();
})