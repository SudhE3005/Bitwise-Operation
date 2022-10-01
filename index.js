$(document).ready(function(){
    var operation="";

    function binaryToDecimal(){
        var val="";
        for(var i=1; i<=8; i++){
            if($("#i1"+i).hasClass("selected")){
                val+="1";
            }
            else{
                val+="0";
            }
        }
        val=parseInt(val, 2);
        $("#val1").text(val);
        val="";
        for(var i=1; i<=8; i++){
            if($("#i2"+i).hasClass("selected")){
                val+="1";
            }
            else{
                val+="0";
            }
        }
        val=parseInt(val, 2);
        $("#val2").text(val);
        val="";
        for(var i=1; i<=8; i++){
            if($("#i3"+i).hasClass("selected")){
                val+="1";
            }
            else{
                val+="0";
            }
        }
        val=parseInt(val, 2);
        $("#val3").text(val);
    }


    function bitCalc(){
        if(operation==="AND"){
            $(".two h3").removeClass("inactive");
            $(".two div").removeClass("inactive");
            $(".two p").removeClass("inactive");
            for(var i=1; i<=8; i++){
                if($("#i1"+i).hasClass("selected")&&$("#i2"+i).hasClass("selected")){
                    $("#i3"+i).addClass("selected");
                }
                else{
                    $("#i3"+i).removeClass("selected");
                }
            }
        }
        if(operation==="OR"){
            $(".two h3").removeClass("inactive");
            $(".two div").removeClass("inactive");
            $(".two p").removeClass("inactive");
            for(var i=1; i<=8; i++){
                if($("#i1"+i).hasClass("selected")||$("#i2"+i).hasClass("selected")){
                    $("#i3"+i).addClass("selected");
                }
                else{
                    $("#i3"+i).removeClass("selected");
                }
            }
        }
        if(operation==="NAND"){
            $(".two h3").removeClass("inactive");
            $(".two div").removeClass("inactive");
            $(".two p").removeClass("inactive");
            for(var i=1; i<=8; i++){
                if(!($("#i1"+i).hasClass("selected")&&$("#i2"+i).hasClass("selected"))){
                    $("#i3"+i).addClass("selected");
                }
                else{
                    $("#i3"+i).removeClass("selected");
                }
            }
        }
        if(operation==="NOR"){
            $(".two h3").removeClass("inactive");
            $(".two div").removeClass("inactive");
            $(".two p").removeClass("inactive");
            for(var i=1; i<=8; i++){
                if(!($("#i1"+i).hasClass("selected")||$("#i2"+i).hasClass("selected"))){
                    $("#i3"+i).addClass("selected");
                }
                else{
                    $("#i3"+i).removeClass("selected");
                }
            }
        }
        if(operation==="XOR"){
            $(".two h3").removeClass("inactive");
            $(".two div").removeClass("inactive");
            $(".two p").removeClass("inactive");
            for(var i=1; i<=8; i++){
                if($("#i1"+i).hasClass("selected")^$("#i2"+i).hasClass("selected")){
                    $("#i3"+i).addClass("selected");
                }
                else{
                    $("#i3"+i).removeClass("selected");
                }
            }
        }
        if(operation==="NOT"){
            $(".two h3").addClass("inactive");
            $(".two div").addClass("inactive");
            $(".two p").addClass("inactive");
            for(var i=1; i<=8; i++){
                if(!$("#i1"+i).hasClass("selected")){
                    $("#i3"+i).addClass("selected");
                }
                else{
                    $("#i3"+i).removeClass("selected");
                }
            }
        }
        if(operation==="Reverse Bits"){
            $(".two h3").addClass("inactive");
            $(".two div").addClass("inactive");
            $(".two p").addClass("inactive");
            for(var i=1; i<=8; i++){

                if($("#i1"+i).hasClass("selected")){
                    $("#i3"+(8-i+1)).addClass("selected");
                }
                else{
                    $("#i3"+(8-i+1)).removeClass("selected");
                }
            }
        }
        if(operation==="2's Compliment"){
            $(".two h3").addClass("inactive");
            $(".two div").addClass("inactive");
            $(".two p").addClass("inactive");
            var carry=1;
            for(var i=8; i>=1; i--){
                if(!$("#i1"+i).hasClass("selected")+carry==2){
                    carry=1;
                    $("#i3"+i).removeClass("selected");
                }
                else if(!$("#i1"+i).hasClass("selected")+carry==1){
                    carry=0;
                    $("#i3"+i).addClass("selected");
                }
                else{
                    carry=0;
                    $("#i3"+i).removeClass("selected");
                }
            }
        }
        binaryToDecimal();
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