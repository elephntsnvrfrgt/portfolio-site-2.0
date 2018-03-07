var lastPosition = -100;

$(document).ready(function() {
    $('.wrapper').height($('.smooth').height());

    $(window).resize(function() {
        $('.wrapper').height($('.smooth').height());
    });

});

var scroll = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    // IE Fallback, you can even fallback to onscroll
    function(callback) {
        window.setTimeout(callback, 1000 / 60)
    };

function loop() {

    // Avoid calculations if not needed
    if (lastPosition == window.pageYOffset) {
        scroll(loop);
        return false;
    } else lastPosition = window.pageYOffset;

    var transform = 'translate3d(0px, -' + lastPosition + 'px, 0px)';
    var smoothScroll = $(".smooth")[0];

    //smoothScroll.style.webkitTransform = transform;
    //smoothScroll.style.mozTransform = transform;
    smoothScroll.style.transform = transform;


    scroll(loop)
}

// Call the loop for the first time
loop();
