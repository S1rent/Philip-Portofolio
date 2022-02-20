$(document).ready(function() {
    checkResolution()
    $(window).resize(function() {
        checkResolution()
    });
});

function checkResolution() {
    $("#profile-sm-detail", window.parent.document).css({
        "display": (window.innerWidth <= 1033) ? "block" : "none"
    })
    $("#profile-detail", window.parent.document).css({
        "display": (window.innerWidth > 1033) ? "block" : "none"
    })
}