$(document).ready(function() {
    let buttonTop = document.getElementById("btn-top");
    buttonTop.style.display = "none"
    scrollHandler()

    checkResolution()
    $(window).resize(function() {
        checkResolution()
    });

    window.onscroll = function() {
        scrollHandler()
    };

    function scrollHandler() {
        if (document.documentElement.scrollTop < 200) {
            buttonTop.style.display = "none"
        } else {
            buttonTop.style.display = "flex"
        }
    }

    $("#btn-top").click(function() {
        scrollTop()
    });

    $('#btn-top').on('mouseenter', function(e) {
        $('#icn-arrow-top').css({
            "filter": "invert(97%) sepia(100%) saturate(12%) hue-rotate(211deg) brightness(102%) contrast(104%)"
        })
    })

    $('#btn-top').on('mouseleave', function(e) {
        $('#icn-arrow-top').css({
            "filter": "invert(0%) sepia(5%) saturate(7482%) hue-rotate(261deg) brightness(98%) contrast(106%)"
        })
    })
    
});

function scrollTop() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

function checkResolution() {
    $("#profile-sm-detail", window.parent.document).css({
        "display": (window.innerWidth <= 1033) ? "block" : "none"
    })
    $("#profile-detail", window.parent.document).css({
        "display": (window.innerWidth > 1033) ? "block" : "none"
    })
}