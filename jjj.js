var h_hght = 0;
var h_mrg = 0;
$(function () {
$(window).scroll(function () {
    var top = $(this).scrollTop();
    var elem = $('#top');
    if(top+h_mrg < h_hght) {
        elem.css('top', (h_hght - top))
    } else{
        elem.css('top',h_mrg);
    }
});
});
