$(document).ready(function() {
    $('.js--section-features').waypoint(function (direction) {
        if (direction === "down") {
            $('nav').addClass('sticky-down');
        } else {
            $('nav').removeClass('sticky-down');
        }
    }, {
        offset: '60px;'
    });
});
