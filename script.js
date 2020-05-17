$(document).ready(function(){
    $("#btnSubmit").click(function(){
        if($("#sometext").val() !=""){
            $("#tasks").prepend("<p>" + $("#sometext").val() + "</div>");
        }
        else{
            alert("fill out textbox");
        }
    });
}); 




 