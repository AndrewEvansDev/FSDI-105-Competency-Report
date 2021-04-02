$(document).ready(function() {
    $("div#img-slide div.slide:first").show();
    setInterval(function(){ Next($('div#img-slide div.slide:visible'))}, 10000);

});
function Next(slide) {
    slide.fadeOut(0);
    if(slide.next().length != '0') {
        slide.next().fadeIn();
    } else {
        $('div#img-slide div.slide:first').fadeIn();
    }
}

