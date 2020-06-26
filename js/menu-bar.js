function menuBar(){
    document.querySelector('body').classList.toggle('menuBar');
}

$(window).resize(function(){
    var w = $(window).width();
    var x = 1600;
    if (w >= x) {
        document.querySelector('body').classList.remove('menuBar')
    }
});