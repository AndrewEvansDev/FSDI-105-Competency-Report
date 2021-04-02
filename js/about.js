$('#ba1').show();
$('#s1').click(function(){
    $('#aboutSlide img:visible').hide();
    $('#ba1').show();
})
$('#s2').click(function(){
    $('#aboutSlide img:visible').hide();
    $('#ba2').show();
})
$('#s3').click(function(){
    $('#aboutSlide img:visible').hide();
    $('#ba3').show();
})
$('#s4').click(function(){
    $('#aboutSlide img:visible').hide();
    $('#ba4').show();
})
$('#s5').click(function(){
    $('#aboutSlide img:visible').hide();
    $('#ba5').show();
    
})
$('#s6').click(function(){
    $('#aboutSlide img:visible').hide();
    $('#ba6').show();
})
$(".pegBar img").hover(
    function() {
        $(this).addClass("spinner");
    }, function() {
        $(this).removeClass("spinner");
    }
);
$(".pegBar img").mousedown(function(){
    $(this).addClass("btnDown")
})
$(".pegBar img").mouseup(function(){
    $(this).removeClass("btnDown")
})


const questionArr = [];
const $sName = $('#sName');
const $sEmail = $('#sEmail');
const $sTextarea = $('#sTextarea');
const $submitBtn = $('#reqInfo');

class InfoRequest{
    constructor(name,email,msg){
        this.name = name;
        this.email = email;
        this.msg = msg;
    }
}

$submitBtn.click(reqInfo)
function reqInfo(){
    if($sName.val() !="" && $sEmail.val() !="" && $sTextarea.val()!=""){
        var question = new InfoRequest($sName.val(),$sEmail.val(),$sTextarea.val())
        console.log(question);
        questionArr.push(question);
        $(':input').val('');
        $('#sent').show();
        setTimeout(function(){
            $('#sent').hide();
        },3000)

    } else{
        $('#fail').show();
        setTimeout(function(){
            $('#fail').hide();
        },5000)
    }
}