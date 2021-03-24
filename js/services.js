const $b1= $('#serviceBtn1');
const $b2= $('#serviceBtn2');
const $b3= $('#serviceBtn3');
const $b4= $('#serviceBtn4');
const $serv1 = $('#serv1');
const $serv2 = $('#serv2');
const $serv3 = $('#serv3');
const $serv4 = $('#serv4');

$b1.on('click',function(){
    $serv1.show();
    $serv2.hide();
    $serv3.hide();
    $serv4.hide();
})
$b2.on('click',function(){
    $serv1.hide();
    $serv2.show();
    $serv3.hide();
    $serv4.hide();
})
$b3.on('click',function(){
    $serv1.hide();
    $serv2.hide();
    $serv3.show();
    $serv4.hide();
})
$b4.on('click',function(){
    $serv1.hide();
    $serv2.hide();
    $serv3.hide();
    $serv4.show();
})