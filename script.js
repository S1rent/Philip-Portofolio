$(document).ready(function() {
    let buttonTop = document.getElementById("btn-top")
    buttonTop.style.display = "none"

    setupWindowListener()
    setupNavigation()
    scrollHandler(buttonTop)
    setupStylingFromResolution()
    setupButtonScrollToTop(buttonTop)
})

function setupWindowListener() {
    $("#btn-sidebar", window.parent.document).css({
        "display": (window.innerWidth <= 1250) ? "block" : "none"
    })
    $("#web-nav", window.parent.document).css({
        "display": (window.innerWidth <= 1250) ? "none" : "flex"
    })
    window.onresize = function() {
        $("#btn-sidebar", window.parent.document).css({
            "display": (window.innerWidth <= 1250) ? "block" : "none"
        })
        $("#web-nav", window.parent.document).css({
            "display": (window.innerWidth <= 1250) ? "none" : "flex"
        })
    }
}

function setupNavigation() {
    $("#nav-prof-mobile").click(function() {
        navigateToProfile()
    })
    
    $("#nav-edu-mobile").click(function() {
        navigateToEducations()
    })

    $("#nav-exp-mobile").click(function() {
        navigateToExperiences()
    })

    $("#nav-skill-mobile").click(function() {
        navigateToSkills()
    })

    $("#nav-proj-mobile").click(function() {
        navigateToProjects()
    })

    $("#nav-cna-mobile").click(function() {
        navigateToCertificatesAndAchievements()
    })
}

function setupStylingFromResolution() {
    checkResolution()
    $(window).resize(function() {
        checkResolution()
    })
}

function setupButtonScrollToTop(buttonTop) {
    window.onscroll = function() {
        scrollHandler(buttonTop)
    }

    $("#btn-top").click(function() {
        scrollTop()
    })

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
}

function scrollHandler(buttonTop) {
    if (document.documentElement.scrollTop < 200) {
        buttonTop.style.display = "none"
    } else {
        buttonTop.style.display = "flex"
    }
}

function scrollTop() {
    resetActiveLinks()
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

function resetActiveLinks() {
    document.getElementById('nav-prof-mobile').classList.remove("active")
    document.getElementById('nav-edu-mobile').classList.remove("active")
    document.getElementById('nav-exp-mobile').classList.remove("active")
    document.getElementById('nav-skill-mobile').classList.remove("active")
    document.getElementById('nav-proj-mobile').classList.remove("active")
    document.getElementById('nav-cna-mobile').classList.remove("active")
    
    document.getElementById('nav-prof').classList.remove("active")
    document.getElementById('nav-edu').classList.remove("active")
    document.getElementById('nav-exp').classList.remove("active")
    document.getElementById('nav-skill').classList.remove("active")
    document.getElementById('nav-proj').classList.remove("active")
    document.getElementById('nav-cna').classList.remove("active")
}

function navigateToProfile() {
    resetActiveLinks()
    document.getElementById('nav-prof-mobile').classList.add("active")
    document.getElementById('nav-prof').classList.add("active")
    document.getElementById('profnav').scrollIntoView()
}

function navigateToEducations() {
    resetActiveLinks()
    document.getElementById('nav-edu-mobile').classList.add("active")
    document.getElementById('nav-edu').classList.add("active")
    if (window.innerWidth <= 1033) {
        document.getElementById('edunav-mobile').scrollIntoView()
    } else {
        document.getElementById('edunav').scrollIntoView()
    }
}

function navigateToExperiences() {
    resetActiveLinks()
    document.getElementById('nav-exp-mobile').classList.add("active")
    document.getElementById('nav-exp').classList.add("active")
    if (window.innerWidth <= 1033) {
        document.getElementById('expnav-mobile').scrollIntoView()
    } else {
        document.getElementById('expnav').scrollIntoView()
    }
}

function navigateToSkills() {
    resetActiveLinks()
    document.getElementById('nav-skill-mobile').classList.add("active")
    document.getElementById('nav-skill').classList.add("active")
    if (window.innerWidth <= 1033) {
        document.getElementById('skillnav-mobile').scrollIntoView()
    } else {
        document.getElementById('skillnav').scrollIntoView()
    }
}

function navigateToProjects() {
    resetActiveLinks()
    document.getElementById('nav-proj-mobile').classList.add("active")
    document.getElementById('nav-proj').classList.add("active")
    if (window.innerWidth <= 1033) {
        document.getElementById('projnav-mobile').scrollIntoView()
    } else {
        document.getElementById('projnav').scrollIntoView()
    }
}

function navigateToCertificatesAndAchievements() {
    resetActiveLinks()
    document.getElementById('nav-cna-mobile').classList.add("active")
    document.getElementById('nav-cna').classList.add("active")
    if (window.innerWidth <= 1033) {
        document.getElementById('cnanav-mobile').scrollIntoView()
    } else {
        document.getElementById('cnanav').scrollIntoView()
    }
}